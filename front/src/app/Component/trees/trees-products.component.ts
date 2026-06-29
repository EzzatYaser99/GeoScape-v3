import { Component, Input } from "@angular/core";
import { TreesProductsService } from "../../core/service/trees-products.service";
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
  constructor(private readonly _treesServices: TreesProductsService) {
    this.geoscapeTrees = this._treesServices.getTrees().map((tree: any) => ({
      ...tree,
      iconType: "tree" as const,
    }));
  }
}
