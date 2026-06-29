import { Component, ViewEncapsulation } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { PlantsProductsComponent } from "../../Component/plants/plants-products.component";
import { TreesProductsComponent } from "../../Component/trees/trees-products.component";
import { LanguageService } from "../../core/service/language.service";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { HeroSectionComponent } from "../../Shared-Component/hero-section/hero-section.component";

@Component({
  selector: "app-products",
  encapsulation: ViewEncapsulation.None,
  imports: [
    TranslatePipe,
    PlantsProductsComponent,
    TreesProductsComponent,
    FilterNavigationComponent,
    HeroSectionComponent,
  ],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss",
})
export class ProductsComponent {
  activeIndex: number = 0;
  lang: "en" | "ar" = "en";
  geoscapeProducts: FilterItem[] = [
    {
      label: "products.plants",
      id: "plants",
    },
    {
      label: "products.trees",
      id: "trees",
    },
  ];
  constructor(private readonly _languageService: LanguageService) {
    this._languageService.language.subscribe((language) => {
      this.lang = language;
    });
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
  }
}
