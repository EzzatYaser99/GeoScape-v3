import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { LanguageStateService } from "../../core/service/language-state.service";
import { RouterLink } from "@angular/router";
import { StatCounterComponent } from "../../Shared-Component/stat-counter/stat-counter.component";
import {BenitoProductsComponent} from "../../Component/benito-products/benito-products.component";
import {FilterItem, FilterNavigationComponent} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import {PrasadaProductsComponent} from "../../Component/prasada-products/prasada-products.component";

@Component({
  selector: "app-partners",
  imports: [TranslatePipe, RouterLink, StatCounterComponent, BenitoProductsComponent, FilterNavigationComponent, PrasadaProductsComponent],
  templateUrl: "./partners.component.html",
  styleUrl: "./partners.component.scss",
})
export class PartnersComponent {
  lang: "en" | "ar" = "en";
  activeIndex: number = 0;
  geoscapeProducts: FilterItem[] = [
    {
      label: "products.benito_urban",
      id: "benito",
    },
    {
      label: "products.prasada_products",
      id: "prasada",
    },
  ];
  constructor(private readonly _languageStateService: LanguageStateService) {
    this._languageStateService.language$.subscribe((language) => {
      this.lang = language;
    });
  }

  handleKeyNavigation(event: KeyboardEvent, url: string): void {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
  }

}
