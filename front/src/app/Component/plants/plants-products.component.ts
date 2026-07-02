import { Component, Input } from "@angular/core";
import { ProductService } from "../../core/service/product.service";
import { Product } from "../../core/models";
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
  constructor(private readonly _productService: ProductService) {
    this.geoscapePlants = this._productService
      .getProductsByType("plants")
      .map((plant: Product) => ({
        ...plant,
        imageSrc: plant.imageSrc || "",
        alt: plant.alt || "",
        iconType: "seedling" as const,
      }));
  }
}
