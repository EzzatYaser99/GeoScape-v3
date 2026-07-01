import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { filter, Subject, takeUntil } from "rxjs";
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
export class AppComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly languageService: LanguageService,
  ) {
    const lang = localStorage.getItem("lang") ?? "en";
    this.languageService.switchLanguage(lang);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
