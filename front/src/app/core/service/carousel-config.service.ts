import { Injectable } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { CAROUSEL_PRESETS } from '../config/carousel.config';

/**
 * CarouselConfigService
 * Provides centralized access to carousel configuration
 * Returns responsive options for different carousel presets
 */
@Injectable({
  providedIn: 'root',
})
export class CarouselConfigService {
  /**
   * Get responsive options for a carousel preset
   * @param preset The carousel preset name (e.g., 'TWO_COLUMN', 'THREE_COLUMN')
   * @returns Array of responsive options for the carousel
   */
  getResponsiveOptions(preset: string): CarouselResponsiveOptions[] {
    const options = CAROUSEL_PRESETS[preset];
    if (!options) {
      console.warn(`Carousel preset "${preset}" not found, using default TWO_COLUMN`);
      return CAROUSEL_PRESETS['TWO_COLUMN'];
    }
    return options;
  }
}
