import { Injectable } from '@angular/core';
import { NAV_ITEMS, NavigationItem } from '../config/navigation.config';

/**
 * NavigationConfigService
 * Provides centralized access to navigation configuration
 * Acts as a single source of truth for all navigation items
 */
@Injectable({
  providedIn: 'root',
})
export class NavigationConfigService {
  /**
   * Get all navigation items
   * @returns Array of navigation items used by header and footer
   */
  getNavItems(): NavigationItem[] {
    return NAV_ITEMS;
  }
}
