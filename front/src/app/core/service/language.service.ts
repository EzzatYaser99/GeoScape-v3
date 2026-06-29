import { Inject, Injectable, DOCUMENT } from "@angular/core";
import { Language, TranslateService } from "@ngx-translate/core";

import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private readonly supportedLanguages = ["en", "ar"];
  language = new BehaviorSubject<"en" | "ar">("en");
  currentLang: Language = this.supportedLanguages[0];

  constructor(
    private readonly translate: TranslateService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    const lang = localStorage.getItem("lang") ?? this.currentLang;
    this.language.next(<"en" | "ar">lang);
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setDefaultLang("en");
    this.updateDirection(lang);
  }
  switchLanguage(lang: string): void {
    this.language.next(<"en" | "ar">lang);
    if (!this.supportedLanguages.includes(lang)) return;

    this.translate.use(lang);
    localStorage.setItem("lang", lang);
    this.updateDirection(lang);
  }

  private updateDirection(lang: string): void {
    const isRTL = lang === "ar";
    this.document.documentElement.dir = isRTL ? "rtl" : "ltr";
    this.document.documentElement.lang = lang;
  }
}
