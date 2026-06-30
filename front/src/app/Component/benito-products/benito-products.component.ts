import { Component, Input, OnInit } from "@angular/core";
import { BenitoProductsService } from "../../core/service/benito-products.service";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";
import { GalleryDetailComponent } from "../../Shared-Component/gallery-detail/gallery-detail.component";

@Component({
  selector: "app-benito-products",
  imports: [FilterNavigationComponent, GalleryDetailComponent],
  templateUrl: "./benito-products.component.html",
  styleUrl: "./benito-products.component.scss",
})
export class BenitoProductsComponent implements OnInit {
  benitoProducts: any[] = [];
  filterItems: FilterItem[] = [];
  selectedBenitoProduct: any;
  activeIndex: number = 0;
  @Input() lang: "en" | "ar" = "en";

  constructor(private readonly _benitoServices: BenitoProductsService) {
    this.benitoProducts = this._benitoServices.getBenitoProducts();
    this.filterItems = this.benitoProducts.map((product) => ({
      id: product.id,
      label: product.nameEN,
    }));
  }

  ngOnInit(): void {
    this.selectedBenitoProduct = this.benitoProducts[0];
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
    this.selectedBenitoProduct = this.benitoProducts[index];
  }
}
