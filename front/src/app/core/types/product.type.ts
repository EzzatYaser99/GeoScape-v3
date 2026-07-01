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

export interface SubImage {
  id: number;
  imageSrc: string;
  alt?: string;
}

