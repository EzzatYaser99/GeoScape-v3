import { Component, OnInit } from "@angular/core";
import { Carousel, CarouselResponsiveOptions } from "primeng/carousel";
import { PrimeTemplate } from "primeng/api";
import { Image } from "primeng/image";
import { GeoscapeServicesService } from "../../core/service/geoscape-services.service";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageService } from "../../core/service/language.service";
import { GeoscapeService } from "../../core/types/service.type";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { HeroSectionComponent } from "../../Shared-Component/hero-section/hero-section.component";

@Component({
  selector: "app-services",
  imports: [
    Carousel,
    PrimeTemplate,
    Image,
    TranslatePipe,
    FilterNavigationComponent,
    HeroSectionComponent,
  ],
  templateUrl: "./services.component.html",
  styleUrl: "./services.component.scss",
})
export class ServicesComponent implements OnInit {
  geoscapeServices: GeoscapeService[] = [];
  filterItems: FilterItem[] = [];
  lang: "en" | "ar" = "en";
  activeIndex: number = 0;
  // track selected image index per service id
  selectedImageIndex: Record<string, number> = {};
  protected responsiveOptions: CarouselResponsiveOptions[] | undefined;
  currentPage: number = 0;

  constructor(
    private readonly _geoscapeServices: GeoscapeServicesService,
    private readonly _languageService: LanguageService,
  ) {
    this.geoscapeServices = this._geoscapeServices.getGeoscapeServices();
    this.filterItems = this.geoscapeServices.map((service) => ({
      id: service.id,
      label: service.nameEN,
    }));
    // initialize selected image index for each service so main image has a valid index
    this.geoscapeServices.forEach((s) => {
      if (s && s.id !== undefined) {
        this.selectedImageIndex[String(s.id)] = 0;
      }
    });
    this._languageService.language.subscribe((language) => {
      this.lang = language;
    });
  }

  ngOnInit(): void {
    // Desktop carousel shows 3 items (configured on the template), tablets 2, mobile 1
    this.responsiveOptions = [
      {
        breakpoint: "1199px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
    // reset selected image index for the activated service (default to 0)
    const service = this.geoscapeServices[index];
    if (service && service.id !== undefined) {
      this.selectedImageIndex[String(service.id)] = 0;
    }
  }

  onClientsPage(event: any): void {
    this.currentPage = event.page;
  }
}
