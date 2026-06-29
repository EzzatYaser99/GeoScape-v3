import { promises as fs } from "node:fs";
import path from "node:path";

const ASSETS_ROOT = path.resolve("src/assets");
const PENDING_ROOT = path.join(ASSETS_ROOT, ".image-pending");
const REPLACE_RETRIES = 10;
const REPLACE_DELAY_MS = 300;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

async function walkPending(dir, baseDir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkPending(fullPath, baseDir, files);
      continue;
    }

    files.push({
      pendingPath: fullPath,
      targetPath: path.join(ASSETS_ROOT, path.relative(baseDir, fullPath)),
      relative: path.relative(baseDir, fullPath).replace(/\\/g, "/"),
    });
  }

  return files;
}

async function main() {
  try {
    await fs.access(PENDING_ROOT);
  } catch {
    console.log("No pending optimized images found.");
    return;
  }

  const pendingFiles = await walkPending(PENDING_ROOT, PENDING_ROOT);

  if (!pendingFiles.length) {
    console.log("No pending optimized images found.");
    return;
  }

  console.log(`Applying ${pendingFiles.length} pending optimized image(s)...`);

  let applied = 0;
  let failed = 0;

  for (const file of pendingFiles) {
    const error = await replaceFileWithRetry(file.targetPath, file.pendingPath);

    if (error) {
      failed += 1;
      console.log(`[locked] ${file.relative}: ${error.code ?? error.message}`);
      continue;
    }

    await fs.unlink(file.pendingPath);
    applied += 1;
    console.log(`[applied] ${file.relative}`);
  }

  console.log("");
  console.log(`Applied: ${applied}`);
  console.log(`Failed: ${failed}`);

  if (failed > 0) {
    console.log("Close ng serve, then run this command again.");
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
