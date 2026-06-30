import { Component, OnInit } from "@angular/core";
import { Carousel, CarouselResponsiveOptions } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { GeoscapeServicesService } from "../../core/service/geoscape-services.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageService } from "../../core/service/language.service";
import { GeoscapeService } from "../../core/types/service.type";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { HeroSectionComponent } from "../../Shared-Component/hero-section/hero-section.component";
import { GalleryDetailComponent } from "../../Shared-Component/gallery-detail/gallery-detail.component";
import { CAROUSEL_PRESETS, ASSET_PATHS } from "../../core/config/constants";

@Component({
  selector: "app-services",
  imports: [
    Carousel,
    PrimeTemplate,
    TranslatePipe,
    FilterNavigationComponent,
    HeroSectionComponent,
    GalleryDetailComponent,
  ],
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.scss",
})
export class ServicesComponent implements OnInit {
  geoscapeServices: GeoscapeService[] = [];
  filterItems: FilterItem[] = [];
  lang: "en" | "ar" = "en";
  activeIndex: number = 0;
  protected responsiveOptions: CarouselResponsiveOptions[] | undefined;
  currentPage: number = 0;
  readonly servicePath = ASSET_PATHS.SERVICES;

  constructor(
    private readonly _geoscapeServices: GeoscapeServicesService,
    private readonly _languageService: LanguageService,
  ) {
    this.geoscapeServices = this._geoscapeServices.getGeoscapeServices();
    this.filterItems = this.geoscapeServices.map((service) => ({
      id: service.id,
      label: service.nameEN,
    }));
    this._languageService.language.subscribe((language) => {
      this.lang = language;
    });
  }

  ngOnInit(): void {
    this.responsiveOptions = CAROUSEL_PRESETS.SERVICES_CAROUSEL as CarouselResponsiveOptions[];
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
  }

  onClientsPage(event: any): void {
    this.currentPage = event.page;
  }
}
