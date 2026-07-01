import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Image } from "primeng/image";
import { LocalizedPipe } from "../../core/pipes/localized.pipe";

export interface ProductCardData {
  imageSrc: string;
  alt: string;
  nameEN: string;
  nameAR: string;
  descriptionEN: string;
  descriptionAR: string;
  iconType?: "seedling" | "tree" | "custom";
  customIcon?: string;
  imagePrefix?: string;
}

@Component({
  selector: "app-product-card",
  imports: [CommonModule, Image, LocalizedPipe],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.scss",
})
export class ProductCardComponent {
  @Input() product!: ProductCardData;
  @Input() lang: "en" | "ar" = "en";
  @Input() imagePrefix: string = "assets/images/products-page/";
  @Input() customClass: string = "";

  get iconContent(): string {
    if (this.product.iconType === "seedling") {
      return '<i class="fa-solid fa-seedling" aria-hidden="true"></i>';
    }
    if (this.product.iconType === "tree") {
      return '<img src="assets/icons/tree.svg" alt="tree" />';
    }
    if (this.product.customIcon) {
      return `<img src="${this.product.customIcon}" alt="icon" />`;
    }
    return "";
  }
}
