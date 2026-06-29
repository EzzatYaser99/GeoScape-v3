import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { filter } from "rxjs";
import { FooterComponent } from "./Shared-Component/footer/footer.component";
import { HeaderComponent } from "./Shared-Component/header/header.component";
import { ScrollComponent } from "./Shared-Component/scrollTop/scroll.component";
import { LanguageService } from "./core/service/language.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ScrollComponent],
  templateUrl: "./app.component.html",
  standalone: true,
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly languageService: LanguageService,
  ) {
    const lang = localStorage.getItem("lang") ?? "en";
    this.languageService.switchLanguage(lang);
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }
}
