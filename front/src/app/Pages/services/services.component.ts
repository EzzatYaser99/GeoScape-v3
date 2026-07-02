import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { Carousel, CarouselResponsiveOptions } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { GeoscapeServicesService } from "../../core/service/geoscape-services.service";
import { CarouselConfigService } from "../../core/service/carousel-config.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";
import { LocalizedPipe } from "../../core/pipes/localized.pipe";
import { GeoscapeService } from "../../core/models/service.model";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { HeroSectionComponent } from "../../Shared-Component/hero-section/hero-section.component";
import { GalleryDetailComponent } from "../../Shared-Component/gallery-detail/gallery-detail.component";
import { ASSET_PATHS } from "../../core/config/constants";
import { Subject, takeUntil } from "rxjs";
import { PaginatorStateChangeEvent } from "../../core/types/paginator.type";

@Component({
  selector: "app-services",
  imports: [
    Carousel,
    PrimeTemplate,
    TranslatePipe,
    LocalizedPipe,
    FilterNavigationComponent,
    HeroSectionComponent,
    GalleryDetailComponent,
  ],
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.scss",
})
export class ServicesComponent implements OnInit, OnDestroy {
  private readonly geoscapeServicesService = inject(GeoscapeServicesService);
  private readonly carouselConfigService = inject(CarouselConfigService);
  private readonly languageStateService = inject(LanguageStateService);
  private readonly destroy$ = new Subject<void>();

  geoscapeServices: GeoscapeService[] = [];
  filterItems: FilterItem[] = [];
  lang: "en" | "ar" = "en";
  activeIndex: number = 0;
  responsiveOptions: CarouselResponsiveOptions[] = [];
  currentPage: number = 0;
  readonly servicePath = ASSET_PATHS.SERVICES;

  constructor() {
    this.geoscapeServices = this.geoscapeServicesService.getGeoscapeServices();
    this.filterItems = this.geoscapeServices.map((service) => ({
      id: service.id,
      label: service.nameEN,
    }));
    this.languageStateService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.lang = language;
      });
  }

  ngOnInit(): void {
    this.responsiveOptions = this.carouselConfigService.getResponsiveOptions('SERVICES_CAROUSEL');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
  }

  onClientsPage(event: PaginatorStateChangeEvent): void {
    this.currentPage = event.page ?? 0;
  }
}
