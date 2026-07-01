import { Component, OnInit, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Carousel, CarouselResponsiveOptions } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { NgOptimizedImage } from "@angular/common";
import { GeoscapeClientsService } from "../../core/service/geoscape-clients.service";
import { CarouselConfigService } from "../../core/service/carousel-config.service";
import { Client } from "../../core/types/client.type";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";

@Component({
  selector: "app-about",
  imports: [
    RouterLink,
    Carousel,
    PrimeTemplate,
    NgOptimizedImage,
    TranslatePipe,
  ],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent implements OnInit {
  private readonly geoscapeClientsService = inject(GeoscapeClientsService);
  private readonly carouselConfigService = inject(CarouselConfigService);
  private readonly languageStateService = inject(LanguageStateService);

  clients: Client[];
  lang: "en" | "ar" = "en";
  responsiveOptions: CarouselResponsiveOptions[] = [];
  currentPage: number = 0;

  constructor() {
    this.languageStateService.language$.subscribe((language) => {
      this.lang = language;
    });
    this.clients = this.geoscapeClientsService.getGeoscapeClients();
  }

  ngOnInit(): void {
    this.responsiveOptions = this.carouselConfigService.getResponsiveOptions('TWO_COLUMN');
  }

  onClientsPage(event: any): void {
    this.currentPage = event.page;
  }
}
