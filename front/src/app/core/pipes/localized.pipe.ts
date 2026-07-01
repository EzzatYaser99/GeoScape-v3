import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "localized",
  standalone: true,
})
export class LocalizedPipe implements PipeTransform {
  /**
   * Transforms localized values based on language
   * @param value - The object containing the localized data
   * @param lang - Current language ('en' or 'ar')
   * @param languageKey - The language key to use for non-English ('AR' for Arabic)
   * @param valueForLanguage - Value to use if lang doesn't match 'en'
   * @returns The localized string based on the current language
   *
   * Usage examples:
   * {{ item.nameEN | localized:lang:'AR':item.nameAR }}
   * {{ item | localized:lang:'AR':{en: item.nameEN, ar: item.nameAR} }}
   * {{ 'Home' | localized:lang:'AR':'الرئيسية' }}
   */
  transform(
    value: string | any,
    lang: "en" | "ar" = "en",
    languageKey: string = "AR",
    valueForLanguage?: string | any,
  ): string {
    // If value is a string and valueForLanguage is provided
    if (typeof value === "string") {
      return lang === "en" ? value : valueForLanguage ?? value;
    }

    // If value is an object with language keys
    if (typeof value === "object" && value !== null) {
      const languageKeyLower = languageKey.toLowerCase();
      const langKey = lang === "en" ? "en" : languageKeyLower;

      // Try to find property with language suffix (e.g., 'nameEN', 'nameAR')
      if (value[`name${languageKey}`] !== undefined) {
        const enKey = `nameEN`;
        const arKey = `name${languageKey}`;
        return lang === "en" ? value[enKey] : value[arKey];
      }

      // Try direct language keys (e.g., 'en', 'ar', 'AR')
      if (value[langKey] !== undefined) {
        return value[langKey];
      }

      if (value[languageKey.toLowerCase()] !== undefined) {
        return value[languageKey.toLowerCase()];
      }

      if (value[languageKey] !== undefined) {
        return value[languageKey];
      }

      // Fallback: return empty string
      return "";
    }

    return String(value);
  }
}
