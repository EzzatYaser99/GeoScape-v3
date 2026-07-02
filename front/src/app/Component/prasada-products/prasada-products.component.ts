import { Component, Input, OnInit } from "@angular/core";
import { ProductService } from "../../core/service/product.service";
import { Product, SubImage } from "../../core/models";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { GalleryDetailComponent } from "../../Shared-Component/gallery-detail/gallery-detail.component";

@Component({
  selector: "app-prasada-products",
  imports: [FilterNavigationComponent, GalleryDetailComponent],
  templateUrl: "./prasada-products.component.html",
  styleUrl: "./prasada-products.component.scss",
})
export class PrasadaProductsComponent implements OnInit {
  allProducts: Product[] = [];
  filterItems: FilterItem[] = [];
  selectedProduct: Product | undefined;
  activeIndex: number = 0;
  @Input() lang: "en" | "ar" = "en";

  constructor(private readonly _productService: ProductService) {}

  ngOnInit(): void {
    this.allProducts = this._productService.getProductsByType("prasada");

    this.filterItems = this.allProducts.map((product) => ({
      id: product.id,
      label: product.nameEN,
    }));

    if (this.allProducts.length > 0) {
      this.selectedProduct = this.allProducts[0];
    }
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
    this.selectedProduct = this.allProducts[index];
  }

  getGalleryData(): { subImages: SubImage[]; descriptionEN?: string; descriptionAR?: string } {
    return {
      subImages: this.selectedProduct?.subImages ?? [],
      descriptionEN: this.selectedProduct?.descriptionEN,
      descriptionAR: this.selectedProduct?.descriptionAR,
    };
  }
}
