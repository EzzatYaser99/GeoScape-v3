import { Component, Input } from "@angular/core";
import { Carousel, CarouselResponsiveOptions } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { TranslatePipe } from "@ngx-translate/core";
import { HeroSlide, LocalizedText } from "../../core/types/home.types";
import { LanguageService } from "../../core/service/language.service";

@Component({
  selector: "app-hero-carousel",
  imports: [Carousel, PrimeTemplate, TranslatePipe],
  templateUrl: "./hero-carousel.component.html",
  styleUrl: "./hero-carousel.component.scss",
})
export class HeroCarouselComponent {
  @Input({ required: true }) slides!: HeroSlide[];
  @Input() overlayMode: "static" | "slide" = "slide";
  @Input() autoplayInterval = 3000;

  lang: "en" | "ar" = "en";
  activeIndex = 0;

  readonly responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: "1024px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(private readonly _languageService: LanguageService) {
    this._languageService.language.subscribe((language) => {
      this.lang = language;
    });
  }

  get activeSlide(): HeroSlide | undefined {
    return this.slides[this.activeIndex];
  }

  get progressPercent(): number {
    if (!this.slides?.length) {
      return 0;
    }
    return ((this.activeIndex + 1) / this.slides.length) * 100;
  }

  onPageChange(page: number): void {
    this.activeIndex = page;
  }

  goToSlide(index: number): void {
    this.activeIndex = index;
  }

  localized(text?: LocalizedText): string {
    if (!text) {
      return "";
    }
    return this.lang === "ar" ? text.ar : text.en;
  }
}
