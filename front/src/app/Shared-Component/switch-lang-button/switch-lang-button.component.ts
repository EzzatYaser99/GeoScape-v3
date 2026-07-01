import { UpperCasePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";
import { Tooltip } from "primeng/tooltip";

@Component({
  selector: "app-switch-lang-button",
  imports: [TranslateModule, UpperCasePipe, Tooltip],
  templateUrl: "./switch-lang-button.component.html",
  standalone: true,
  styleUrl: "./switch-lang-button.component.scss",
})
export class SwitchLangButtonComponent {
  constructor(private readonly _languageStateService: LanguageStateService) {
    this.currentLang = this._languageStateService.getCurrentLanguage();
  }

  currentLang: string = "en";

  @Input() theme: "dark" | "light" = "light";

  get toggleText() {
    return this.currentLang === "en" ? "ar" : "en";
  }
  isLoading: boolean = false;

  toggleLang() {
    this.isLoading = true;
    this.currentLang = this.currentLang === "en" ? "ar" : "en";
    this._languageStateService.setLanguage(this.currentLang as "en" | "ar");
    this.isLoading = false;
  }
}
