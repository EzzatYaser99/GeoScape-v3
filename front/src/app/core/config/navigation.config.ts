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
    label: 'header.home',
    routerLink: 'home',
    icon: 'pi-home',
  },
  {
    label: 'header.services',
    routerLink: 'services',
    icon: 'pi-briefcase',
  },
  {
    label: 'header.projects',
    routerLink: 'projects',
    icon: 'pi-building',
  },
  {
    label: 'header.partners',
    routerLink: 'partners',
    icon: 'pi-users',
  },
  {
    label: 'header.nursery',
    routerLink: 'nursery',
    icon: 'pi-box',
  },
  {
    label: 'header.about',
    routerLink: 'about',
    icon: 'pi-info-circle',
  },
  {
    label: 'header.contacts',
    routerLink: 'contacts',
    icon: 'pi-envelope',
  },
];
