export interface ProjectSubImage {
  id: number;
  image: string;
  alt?: string;
}

export interface Project {
  id: number;
  nameEN: string;
  nameAR: string;
  scopeOfWorkEN: string;
  scopeOfWorkAR: string;
  mainContractorEN: string;
  mainContractorAR: string;
  consultantEN: string;
  consultantAR: string;
  statusEN: string;
  statusAR: string;
  descriptionEN: string;
  descriptionAR: string;
  image: string;
  alt?: string;
  progress: string;
  subImages: ProjectSubImage[];
  category?: string;
}
