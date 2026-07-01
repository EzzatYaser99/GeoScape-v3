import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  inject,
} from "@angular/core";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { SwitchLangButtonComponent } from "../switch-lang-button/switch-lang-button.component";
import { TranslatePipe } from "@ngx-translate/core";
import { filter, Subject, takeUntil } from "rxjs";
import { SCROLL_CONFIG } from "../../core/config/constants";
import { NavigationConfigService } from "../../core/service/navigation-config.service";
import { NavigationItem } from "../../core/config/navigation.config";

export interface HeaderNavItem extends NavigationItem {
  isActive: boolean;
}

@Component({
  selector: "app-header",
  imports: [RouterLink, SwitchLangButtonComponent, TranslatePipe],
  templateUrl: "./header.component.html",
  standalone: true,
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly navigationConfigService = inject(NavigationConfigService);
  private readonly destroy$ = new Subject<void>();

  headerItems: HeaderNavItem[] = [];
  isScrolled = false;
  isMobileMenuOpen = false;
  private readonly scrollThreshold = SCROLL_CONFIG.SCROLL_THRESHOLD;

  ngOnInit(): void {
    this.headerItems = this.navigationConfigService.getNavItems().map(item => ({
      ...item,
      isActive: false,
    }));

    this.updateActivePage();
    this.onWindowScroll();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.updateActivePage();
        this.closeMobileMenu();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    document.body.classList.remove("mobile-nav-open");
  }

  @HostListener("window:scroll")
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > this.scrollThreshold;
  }

  get langTheme(): "light" | "dark" {
    return this.isScrolled || this.isMobileMenuOpen ? "dark" : "light";
  }

  handleItemClick(item: HeaderNavItem): void {
    this.headerItems.forEach((navItem) => (navItem.isActive = false));
    item.isActive = true;
    this.closeMobileMenu();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.classList.toggle("mobile-nav-open", this.isMobileMenuOpen);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.classList.remove("mobile-nav-open");
  }

  private updateActivePage(): void {
    const url = this.router.url;
    const segment = url.split("/").filter(Boolean).pop() ?? "home";
    const activeRoute = /^\d+$/.test(segment)
      ? (url.split("/").filter(Boolean).slice(-2, -1)[0] ?? "home")
      : segment;

    this.headerItems.forEach((item) => {
      item.isActive = item.routerLink === activeRoute;
    });
  }
}
