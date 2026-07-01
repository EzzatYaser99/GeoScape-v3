/**
 * Service-related types and interfaces
 */

export interface SubImage {
  id: number;
  image: string;
  alt?: string;
}

export interface GeoscapeService {
  id: number;
  nameEN: string;
  nameAR: string;
  image: string;
  descriptionEN: string;
  descriptionAR: string;
  subImages: SubImage[];
  whatWeDoEN: string;
  whatWeDoAR: string;
  alt?: string;
}
