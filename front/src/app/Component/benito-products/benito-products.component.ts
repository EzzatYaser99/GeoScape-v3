import { Component, Input, OnInit } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { BenitoProductsService } from "../../core/service/benito-products.service";
import { Image } from "primeng/image";
import {
  FilterNavigationComponent,
  FilterItem,
} from "../../Shared-Component/filter-navigation/filter-navigation.component";

@Component({
  selector: "app-benito-products",
  imports: [TranslatePipe, Image, FilterNavigationComponent],
  templateUrl: "./benito-products.component.html",
  styleUrl: "./benito-products.component.scss",
})
export class BenitoProductsComponent implements OnInit {
  benitoProducts: any[] = [];
  filterItems: FilterItem[] = [];
  showSelectedProduct: boolean = false;
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
    this.showSelectedProduct = true;
    this.selectedBenitoProduct = this.benitoProducts[0];
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
    this.selectedBenitoProduct = this.benitoProducts[index];
  }
}
