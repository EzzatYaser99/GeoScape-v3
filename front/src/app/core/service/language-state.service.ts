import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, shareReplay } from "rxjs";
import { LanguageService } from "./language.service";

@Injectable({
  providedIn: "root",
})
export class LanguageStateService {
  private readonly languageSubject = new BehaviorSubject<"en" | "ar">("en");
  readonly language$: Observable<"en" | "ar">;

  constructor(private readonly languageService: LanguageService) {
    this.language$ = this.languageSubject.asObservable().pipe(
      shareReplay(1),
    );

    const savedLang = localStorage.getItem("lang") as "en" | "ar" | null;
    const initialLang = savedLang ?? "en";
    this.languageSubject.next(initialLang);

    this.languageService.language.subscribe((lang) => {
      this.languageSubject.next(lang);
    });
  }

  getCurrentLanguage(): "en" | "ar" {
    return this.languageSubject.value;
  }

  setLanguage(lang: "en" | "ar"): void {
    this.languageService.switchLanguage(lang);
  }

  getLanguage$(): Observable<"en" | "ar"> {
    return this.language$;
  }
}
