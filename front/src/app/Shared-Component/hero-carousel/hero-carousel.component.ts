import { Component, Input, inject, OnInit } from "@angular/core";
import { Carousel, CarouselResponsiveOptions } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { TranslatePipe } from "@ngx-translate/core";
import { HeroSlide, LocalizedText } from "../../core/types/home.types";
import { LanguageStateService } from "../../core/service/language-state.service";
import { CarouselConfigService } from "../../core/service/carousel-config.service";

@Component({
  selector: "app-hero-carousel",
  imports: [Carousel, PrimeTemplate, TranslatePipe],
  templateUrl: "./hero-carousel.component.html",
  styleUrl: "./hero-carousel.component.scss",
})
export class HeroCarouselComponent implements OnInit {
  @Input({ required: true }) slides!: HeroSlide[];
  @Input() overlayMode: "static" | "slide" = "slide";
  @Input() autoplayInterval = 3000;

  private readonly languageStateService = inject(LanguageStateService);
  private readonly carouselConfigService = inject(CarouselConfigService);

  lang: "en" | "ar" = "en";
  activeIndex = 0;
  responsiveOptions: CarouselResponsiveOptions[] = [];

  ngOnInit(): void {
    this.responsiveOptions = this.carouselConfigService.getResponsiveOptions('HERO_CAROUSEL');
    this.languageStateService.language$.subscribe((language) => {
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
