/**
 * Navigation Configuration
 * Centralized configuration for all navigation items used across the application
 * Used by header, footer, and other navigation components
 */

export interface NavigationItem {
  label: string;
  routerLink: string;
  icon: string;
}

export const NAV_ITEMS: NavigationItem[] = [
  {
    label: 'navigation.home',
    routerLink: 'home',
    icon: 'pi pi-home',
  },
  {
    label: 'navigation.services',
    routerLink: 'services',
    icon: 'pi pi-briefcase',
  },
  {
    label: 'navigation.projects',
    routerLink: 'projects',
    icon: 'pi pi-building',
  },
  {
    label: 'navigation.partners',
    routerLink: 'partners',
    icon: 'pi pi-users',
  },
  {
    label: 'navigation.nursery',
    routerLink: 'nursery',
    icon: 'pi pi-box',
  },
  {
    label: 'navigation.about',
    routerLink: 'about',
    icon: 'pi pi-info-circle',
  },
  {
    label: 'navigation.contacts',
    routerLink: 'contacts',
    icon: 'pi pi-envelope',
  },
];
