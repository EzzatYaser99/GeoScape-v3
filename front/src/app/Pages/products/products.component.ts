import { Component, ViewEncapsulation, OnDestroy } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { PlantsProductsComponent } from "../../Component/plants/plants-products.component";
import { TreesProductsComponent } from "../../Component/trees/trees-products.component";
import { LanguageStateService } from "../../core/service/language-state.service";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { HeroSectionComponent } from "../../Shared-Component/hero-section/hero-section.component";
import { Subject, takeUntil } from "rxjs";

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
export class ProductsComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  activeIndex: number = 0;
  lang: "en" | "ar" = "en";
  geoscapeProducts: FilterItem[] = [
    {
      labelEN: "products.plants",
      labelAR: "products.plants",
      id: "plants",
    },
    {
      labelEN: "products.trees",
      labelAR: "products.trees",
      id: "trees",
    },
  ];
  constructor(private readonly _languageStateService: LanguageStateService) {
    this._languageStateService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.lang = language;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
  }
}
