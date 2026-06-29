import { Component, Input } from "@angular/core";

export type SocialPlatform =
  | "facebook"
  | "whatsapp"
  | "linkedin"
  | "twitter"
  | "instagram";

export interface SocialMediaLink {
  id: number;
  platform: SocialPlatform;
  titleEN: string;
  titleAR: string;
  iconClass: string;
  href: string;
}

@Component({
  selector: "app-social-media-info",
  standalone: true,
  templateUrl: "./social-media-info.component.html",
  styleUrl: "./social-media-info.component.scss",
})
export class SocialMediaInfoComponent {
  @Input() lang: "en" | "ar" = "en";

  readonly socialMediaInfo: SocialMediaLink[] = [
    {
      id: 1,
      platform: "facebook",
      titleEN: "Facebook",
      titleAR: "فيسبوك",
      iconClass: "fa-brands fa-facebook-f",
      href: "https://www.facebook.com/profile.php?id=61560500246911",
    },
    {
      id: 2,
      platform: "whatsapp",
      titleEN: "WhatsApp",
      titleAR: "واتساب",
      iconClass: "fa-brands fa-whatsapp",
      href: "https://wa.me/966546644283",
    },
    {
      id: 3,
      platform: "linkedin",
      titleEN: "LinkedIn",
      titleAR: "لينكد إن",
      iconClass: "fa-brands fa-linkedin-in",
      href: "https://www.linkedin.com/company/geoscape-landscape/about/",
    },
    {
      id: 4,
      platform: "instagram",
      titleEN: "Instagram",
      titleAR: "إنستغرام",
      iconClass: "fa-brands fa-instagram",
      href: "https://www.instagram.com/geoscapelandscape?igsh=MWZndjRjZDExZ2Fxaw%3D%3D&utm_source=qr",
    },
  ];

  getLabel(item: SocialMediaLink): string {
    return this.lang === "en" ? item.titleEN : item.titleAR;
  }
}
