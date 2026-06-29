import { UpperCasePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from "../../core/service/language.service";
import { Tooltip } from "primeng/tooltip";

@Component({
  selector: "app-switch-lang-button",
  imports: [TranslateModule, UpperCasePipe, Tooltip],
  templateUrl: "./switch-lang-button.component.html",
  standalone: true,
  styleUrl: "./switch-lang-button.component.scss",
})
export class SwitchLangButtonComponent {
  constructor(private readonly _languageService: LanguageService) {
    this.currentLang = localStorage.getItem("lang") ?? "en";
  }

  currentLang: string = "en";

  /** light = white text (overlay header), dark = dark text (solid header) */
  @Input() theme: "dark" | "light" = "light";

  get toggleText() {
    return this.currentLang === "en" ? "ar" : "en";
  }
  isLoading: boolean = false;

  toggleLang() {
    this.isLoading = true;
    this.currentLang = this.currentLang === "en" ? "ar" : "en";
    this._languageService.switchLanguage(this.currentLang);
    this.isLoading = false;
  }
}
