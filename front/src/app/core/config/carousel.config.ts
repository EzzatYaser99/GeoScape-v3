/**
 * Carousel Configuration
 * Centralized carousel presets with responsive breakpoints
 * Used across components for consistent carousel behavior
 */

import { CarouselResponsiveOptions } from 'primeng/carousel';

export interface CarouselPreset {
  [key: string]: CarouselResponsiveOptions[];
}

export const CAROUSEL_PRESETS: CarouselPreset = {
  // Single column carousel
  SINGLE_COLUMN: [
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '991px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
  ],

  // Two column carousel
  TWO_COLUMN: [
    { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
    { breakpoint: '991px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
  ],

  // Three column carousel
  THREE_COLUMN: [
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '991px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
  ],

  // Five column carousel
  FIVE_COLUMN: [
    { breakpoint: '1199px', numVisible: 5, numScroll: 1 },
    { breakpoint: '991px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
  ],

  // Hero carousel
  HERO_CAROUSEL: [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ],

  // Services carousel
  SERVICES_CAROUSEL: [
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '991px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
  ],

  // Clients carousel
  CLIENTS_CAROUSEL: [
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '991px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
  ],
};
