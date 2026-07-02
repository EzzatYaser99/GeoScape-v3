import { Component, Input } from "@angular/core";
import { ProductService } from "../../core/service/product.service";
import { Product } from "../../core/models";
import {
  ProductCardComponent,
  ProductCardData,
} from "../../Shared-Component/product-card/product-card.component";

@Component({
  selector: "app-trees",
  imports: [ProductCardComponent],
  templateUrl: "./trees-products.component.html",
  styleUrl: "./trees-products.component.scss",
})
export class TreesProductsComponent {
  geoscapeTrees: ProductCardData[] = [];
  @Input() lang: "en" | "ar" = "en";
  constructor(private readonly _productService: ProductService) {
    this.geoscapeTrees = this._productService
      .getProductsByType("trees")
      .map((tree: Product) => ({
        ...tree,
        imageSrc: tree.imageSrc || "",
        alt: tree.alt || "",
        iconType: "tree" as const,
      }));
  }
}
