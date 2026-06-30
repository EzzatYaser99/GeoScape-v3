import { inject } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { Subscription } from 'rxjs';

export class LanguageHelper {
  static subscribeToLanguage(
    onLanguageChange: (lang: 'en' | 'ar') => void,
  ): Subscription {
    const languageService = inject(LanguageService);
    return languageService.language.subscribe((language) => {
      onLanguageChange(language);
    });
  }

  static getLocalizedText(
    lang: 'en' | 'ar',
    enText: string,
    arText: string,
  ): string {
    return lang === 'en' ? enText : arText;
  }

  static getCurrentLanguage(): 'en' | 'ar' {
    const languageService = inject(LanguageService);
    const stored = localStorage.getItem('lang') as 'en' | 'ar' | null;
    return stored ?? 'en';
  }
}
