import sharp from "sharp";
import { randomBytes } from "node:crypto";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

const ASSETS_ROOT = path.resolve("src/assets");
const BACKUP_ROOT = path.join(ASSETS_ROOT, ".image-backups");
const PENDING_ROOT = path.join(ASSETS_ROOT, ".image-pending");
const IMAGE_PATTERN = /\.(webp|png|jpe?g)$/i;
const SKIP_DIRS = new Set([".image-backups", ".image-pending", "i18n"]);

const RULES = [
  { test: /logo/i, maxWidth: 200, webpQuality: 80 },
  { test: /document-approvals/i, maxWidth: 420, webpQuality: 75 },
  { test: /icons/i, maxWidth: 128, webpQuality: 80 },
  { test: /home-page/i, maxWidth: 1600, webpQuality: 72 },
  { test: /projects-details/i, maxWidth: 1200, webpQuality: 74 },
  { test: /products-page/i, maxWidth: 1200, webpQuality: 74 },
  { test: /service-details/i, maxWidth: 1200, webpQuality: 74 },
  { test: /partners/i, maxWidth: 900, webpQuality: 75 },
  { test: /about/i, maxWidth: 1400, webpQuality: 74 },
];

const DEFAULT_RULE = { maxWidth: 1200, webpQuality: 75 };
const MIN_SAVINGS_BYTES = 8 * 1024;
const REPLACE_RETRIES = 10;
const REPLACE_DELAY_MS = 300;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const folderArg = args.find((arg) => arg.startsWith("--folder="));
const scopeFolder = folderArg ? folderArg.replace("--folder=", "") : null;

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRule(relativePath) {
  return (
    RULES.find((rule) => rule.test.test(relativePath)) ?? {
      ...DEFAULT_RULE,
      test: null,
    }
  );
}

function createTempPath(extension) {
  return path.join(
    os.tmpdir(),
    `geoscape-${randomBytes(8).toString("hex")}${extension}`,
  );
}

async function walk(dir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath, files);
      continue;
    }

    if (!IMAGE_PATTERN.test(entry.name)) {
      continue;
    }

    if (entry.name.includes("-optimized.")) {
      continue;
    }

    const relative = path.relative(ASSETS_ROOT, fullPath).replace(/\\/g, "/");

    if (scopeFolder && !relative.startsWith(scopeFolder.replace(/\\/g, "/"))) {
      continue;
    }

    files.push({ fullPath, relative });
  }

  return files;
}

async function backupOriginal(relativePath, sourcePath) {
  const backupPath = path.join(BACKUP_ROOT, relativePath);
  await fs.mkdir(path.dirname(backupPath), { recursive: true });

  try {
    await fs.access(backupPath);
  } catch {
    await fs.copyFile(sourcePath, backupPath);
  }
}

async function replaceFileWithRetry(targetPath, sourcePath) {
  let lastError;

  for (let attempt = 1; attempt <= REPLACE_RETRIES; attempt += 1) {
    try {
      await fs.copyFile(sourcePath, targetPath);
      return null;
    } catch (error) {
      lastError = error;

      if (
        (error.code === "EBUSY" || error.code === "EPERM") &&
        attempt < REPLACE_RETRIES
      ) {
        await sleep(REPLACE_DELAY_MS * attempt);
        continue;
      }

      return error;
    }
  }

  return lastError;
}

async function safeUnlink(filePath) {
  try {
    await fs.unlink(filePath);
  } catch {
    // Ignore temp cleanup errors on Windows.
  }
}

async function savePending(relativePath, tempPath) {
  const pendingPath = path.join(PENDING_ROOT, relativePath);
  await fs.mkdir(path.dirname(pendingPath), { recursive: true });
  await fs.copyFile(tempPath, pendingPath);
  return pendingPath;
}

async function optimizeImage({ fullPath, relative }) {
  const before = (await fs.stat(fullPath)).size;
  const rule = getRule(relative);
  const metadata = await sharp(fullPath).metadata();
  const needsResize = metadata.width && metadata.width > rule.maxWidth;

  if (!needsResize && before < 120 * 1024 && relative.endsWith(".webp")) {
    return { relative, skipped: true, reason: "already small" };
  }

  const extension = path.extname(fullPath).toLowerCase();
  const tempPath = createTempPath(extension);
  let pipeline = sharp(fullPath).rotate();

  if (needsResize) {
    pipeline = pipeline.resize(rule.maxWidth, null, {
      withoutEnlargement: true,
      fit: "inside",
    });
  }

  if (extension === ".png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
      palette: true,
      quality: 80,
    });
  } else if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: rule.webpQuality, mozjpeg: true });
  } else {
    pipeline = pipeline.webp({ quality: rule.webpQuality });
  }

  if (dryRun) {
    return {
      relative,
      skipped: false,
      dryRun: true,
      before,
      after: before,
      rule: rule.maxWidth,
    };
  }

  try {
    await pipeline.toFile(tempPath);
    const after = (await fs.stat(tempPath)).size;
    const savings = before - after;

    if (savings < MIN_SAVINGS_BYTES) {
      await safeUnlink(tempPath);
      return { relative, skipped: true, reason: "low savings" };
    }

    await backupOriginal(relative, fullPath);

    const replaceError = await replaceFileWithRetry(fullPath, tempPath);

    if (replaceError) {
      const pendingPath = await savePending(relative, tempPath);
      await safeUnlink(tempPath);

      return {
        relative,
        skipped: false,
        failed: true,
        before,
        after,
        rule: rule.maxWidth,
        pendingPath,
        error: replaceError.code ?? replaceError.message,
      };
    }

    await safeUnlink(tempPath);

    return {
      relative,
      skipped: false,
      before,
      after,
      rule: rule.maxWidth,
    };
  } catch (error) {
    await safeUnlink(tempPath);
    throw error;
  }
}

async function main() {
  if (!dryRun) {
    console.log(
      "Tip: close `ng serve` and any image preview tabs before optimizing on Windows.",
    );
  }

  const files = await walk(ASSETS_ROOT);

  if (!files.length) {
    console.log("No images found.");
    return;
  }

  console.log(
    dryRun
      ? `Dry run: ${files.length} image(s) would be checked`
      : `Optimizing ${files.length} image(s)...`,
  );

  let optimized = 0;
  let skipped = 0;
  let failed = 0;
  let savedBytes = 0;
  const failedFiles = [];

  for (const file of files) {
    try {
      const result = await optimizeImage(file);

      if (result.skipped) {
        skipped += 1;
        continue;
      }

      if (result.failed) {
        failed += 1;
        failedFiles.push(result);
        console.log(
          `[locked] ${result.relative}: saved to pending (${result.error})`,
        );
        continue;
      }

      optimized += 1;
      savedBytes += result.before - result.after;

      const tag = result.dryRun ? "[dry-run]" : "[saved]";
      console.log(
        `${tag} ${result.relative}: ${formatKb(result.before)} -> ${formatKb(result.after)} (max ${result.rule}px)`,
      );
    } catch (error) {
      failed += 1;
      failedFiles.push({
        relative: file.relative,
        error: error.code ?? error.message,
      });
      console.log(`[error] ${file.relative}: ${error.code ?? error.message}`);
    }
  }

  console.log("");
  console.log(`Optimized: ${optimized}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed/Locked: ${failed}`);
  console.log(`Total saved: ${formatKb(savedBytes)}`);

  if (!dryRun && optimized > 0) {
    console.log(`Backups: ${path.relative(process.cwd(), BACKUP_ROOT)}`);
    console.log("Next: npm run build:prod");
  }

  if (failedFiles.length > 0) {
    console.log("");
    console.log("Some files were locked. To apply pending optimized files:");
    console.log("1. Stop `ng serve` / close previews");
    console.log("2. Run: npm run optimize:images:apply-pending");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
