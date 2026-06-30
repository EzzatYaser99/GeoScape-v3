import { Component, Input, OnInit } from "@angular/core";
import { GreenhouseService } from "../../core/service/greenhouse.service";
import { SeedlingProductsService } from "../../core/service/seedling-products.service";
import { CultivationProductsService } from "../../core/service/cultivation-products.service";
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
  allProducts: any[] = [];
  filterItems: FilterItem[] = [];
  selectedProduct: any;
  activeIndex: number = 0;
  @Input() lang: "en" | "ar" = "en";

  constructor(
    private readonly _greenhouseService: GreenhouseService,
    private readonly _seedlingService: SeedlingProductsService,
    private readonly _cultivationService: CultivationProductsService,
  ) {}

  ngOnInit(): void {
    const greenhouseProducts = this._greenhouseService.getGreenhouseProducts();
    const seedlingProducts = this._seedlingService.getSeedlingProducts();
    const cultivationProducts =
      this._cultivationService.getCultivationProductProducts();
    this.allProducts = [
      ...greenhouseProducts.map((p) => ({ ...p, category: "Greenhouse" })),
      ...cultivationProducts.map((p) => ({ ...p, category: "cultivation" })),
      ...seedlingProducts.map((p) => ({ ...p, category: "Seedling" })),
    ];

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
}
