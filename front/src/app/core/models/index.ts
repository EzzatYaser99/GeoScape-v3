/**
 * Central export file for all models
 * Usage: import { Product, Service, Project } from '@core/models';
 */

// Common models
export type { LocalizedText, MessageResponse } from './common.model';

// Product models
export type { Product, ProductType } from './product.model';
export type { ProductDisplayConfig } from './product.model';
export { SubImage } from './product.model';

// Service models
export type { GeoscapeService } from './service.model';
export { SubImage as ServiceSubImage } from './service.model';

// Project models
export type { Project, ProjectCategory } from './project.model';
export type { ProjectSubImage } from './project.model';

// Client models
export type { Client } from './client.model';

// Contact models
export type { AddressInfo } from './contact.model';

// Home models
export type { HeroSlide, HomeStat, FeatureCard } from './home.model';
