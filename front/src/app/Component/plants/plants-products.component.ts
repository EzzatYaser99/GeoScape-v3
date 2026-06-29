import { Component, Input } from "@angular/core";
import { PlantsProductsService } from "../../core/service/plants-products.service";
import {
  ProductCardComponent,
  ProductCardData,
} from "../../Shared-Component/product-card/product-card.component";

@Component({
  selector: "app-plants",
  imports: [ProductCardComponent],
  templateUrl: "./plants-products.component.html",
  styleUrl: "./plants-products.component.scss",
})
export class PlantsProductsComponent {
  geoscapePlants: ProductCardData[] = [];
  @Input() lang: "en" | "ar" = "en";
  constructor(private readonly _plantsServices: PlantsProductsService) {
    this.geoscapePlants = this._plantsServices
      .getPlants()
      .map((plant: any) => ({
        ...plant,
        iconType: "seedling" as const,
      }));
  }
}
