/**
 * Product-related types and interfaces
 */

export interface SubImage {
  id: number;
  imageSrc: string;
  alt?: string;
}

export interface Product {
  id: number;
  nameEN: string;
  nameAR: string;
  descriptionEN: string;
  descriptionAR: string;
  imageSrc?: string;
  alt?: string;
  categoryEN?: string;
  categoryAR?: string;
  category?: string;
  subImages?: SubImage[];
}

export type ProductType = "benito" | "plants" | "trees" | "prasada";

export interface ProductDisplayConfig {
  productType: ProductType;
  imagePath?: string;
  showFilters?: boolean;
  showDescription?: boolean;
  useCardLayout?: boolean;
}
