import { Injectable } from "@angular/core";
import { Product, ProductType } from "../types/product.type";
import { BenitoProductsService } from "./benito-products.service";
import { PlantsProductsService } from "./plants-products.service";
import { TreesProductsService } from "./trees-products.service";
import { GreenhouseService } from "./greenhouse.service";
import { SeedlingProductsService } from "./seedling-products.service";
import { CultivationProductsService } from "./cultivation-products.service";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(
    private readonly benitoService: BenitoProductsService,
    private readonly plantsService: PlantsProductsService,
    private readonly treesService: TreesProductsService,
    private readonly greenhouseService: GreenhouseService,
    private readonly seedlingService: SeedlingProductsService,
    private readonly cultivationService: CultivationProductsService,
  ) {}

  getProductsByType(type: ProductType): Product[] {
    switch (type) {
      case "benito":
        return this.benitoService.getBenitoProducts();
      case "plants":
        return this.plantsService.getPlants();
      case "trees":
        return this.treesService.getTrees();
      case "prasada":
        return this.getPrasadaProducts();
      default:
        return [];
    }
  }

  getProductById(type: ProductType, id: number): Product | undefined {
    const products = this.getProductsByType(type);
    return products.find((product) => product.id === id);
  }

  getProductCategories(type: ProductType): string[] {
    const products = this.getProductsByType(type);
    const categories = new Set<string>();

    products.forEach((product) => {
      if (product.category) {
        categories.add(product.category);
      }
      if (product.categoryEN) {
        categories.add(product.categoryEN);
      }
    });

    return Array.from(categories);
  }

  private getPrasadaProducts(): Product[] {
    const greenhouseProducts = this.greenhouseService.getGreenhouseProducts();
    const cultivationProducts =
      this.cultivationService.getCultivationProductProducts();
    const seedlingProducts = this.seedlingService.getSeedlingProducts();

    return [
      ...greenhouseProducts.map((p) => ({ ...p, category: "Greenhouse" })),
      ...cultivationProducts.map((p) => ({ ...p, category: "Cultivation" })),
      ...seedlingProducts.map((p) => ({ ...p, category: "Seedling" })),
    ];
  }
}
