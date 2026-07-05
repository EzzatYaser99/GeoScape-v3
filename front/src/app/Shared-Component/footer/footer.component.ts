import { Component, OnDestroy, OnInit } from "@angular/core";
import { inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SocialMediaInfoComponent } from "../social-media-info/social-media-info.component";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";
import { NavigationConfigService } from "../../core/service/navigation-config.service";
import { Subject, takeUntil } from "rxjs";
import { CONTACT_INFO } from "../../core/config/constants";
import { NavigationItem } from "../../core/config/navigation.config";

export type FooterNavLink = NavigationItem;

export interface WorkDays {
  id: number;
  openDaysEN: string;
  openDaysAR: string;
}

export interface ContactDetailsInfo {
  id: number;
  icon: string;
  titleEN: string;
  titleAR: string;
  href: string;
}

@Component({
  selector: "app-footer",
  imports: [SocialMediaInfoComponent, RouterLink, TranslatePipe],
  templateUrl: "./footer.component.html",
  standalone: true,
  styleUrl: "./footer.component.scss",
})
export class FooterComponent implements OnInit, OnDestroy {
  private readonly languageStateService = inject(LanguageStateService);
  private readonly navigationConfigService = inject(NavigationConfigService);
  private readonly destroy$ = new Subject<void>();

  lang: "en" | "ar" = "en";
  openDays: WorkDays[] = [];
  contactDetailsInfo: ContactDetailsInfo[] = [];
  footerNavLinks: FooterNavLink[] = [];

  ngOnInit(): void {
    this.footerNavLinks = this.navigationConfigService.getNavItems();

    this.languageStateService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.lang = language;
      });

    this.openDays = [
      {
        id: 1,
        openDaysEN: CONTACT_INFO.OPENING_HOURS.DAYS_EN,
        openDaysAR: CONTACT_INFO.OPENING_HOURS.DAYS_AR,
      },
      {
        id: 2,
        openDaysEN: CONTACT_INFO.OPENING_HOURS.HOURS_EN,
        openDaysAR: CONTACT_INFO.OPENING_HOURS.HOURS_AR,
      },
    ];

    this.contactDetailsInfo = [
      {
        id: 1,
        icon: "pi pi-map-marker",
        titleEN: CONTACT_INFO.ADDRESS.EN,
        titleAR: CONTACT_INFO.ADDRESS.AR,
        href: CONTACT_INFO.ADDRESS.HREF,
      },
      {
        id: 2,
        icon: "pi pi-envelope",
        titleEN: CONTACT_INFO.EMAIL,
        titleAR: CONTACT_INFO.EMAIL,
        href: `mailto:${CONTACT_INFO.EMAIL}`,
      },
      {
        id: 3,
        icon: "pi pi-phone",
        titleEN: CONTACT_INFO.PHONE.DISPLAY,
        titleAR: CONTACT_INFO.PHONE.DISPLAY_AR,
        href: `https://wa.me/${CONTACT_INFO.PHONE.WHATSAPP}`,
      },
    ];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getContactLabel(item: ContactDetailsInfo): string {
    return this.lang === "en" ? item.titleEN : item.titleAR;
  }

  getOpenDayLabel(item: WorkDays): string {
    return this.lang === "en" ? item.openDaysEN : item.openDaysAR;
  }

  getContactHeading(item: ContactDetailsInfo): string {
    const headings: Record<number, string> = {
      1: "labels.address",
      2: "labels.email",
      3: "labels.phone",
    };
    return headings[item.id] ?? "footer.contact_us";
  }
}
