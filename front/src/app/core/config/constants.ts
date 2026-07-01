/**
 * Application-wide Constants Configuration
 * Centralized configuration for paths and API settings
 */

// ============================================================================
// ASSET PATHS - Image and media paths
// ============================================================================

export const ASSET_PATHS = {
  // Product Images
  PRODUCTS: {
    BENITO: 'assets/images/products-page/benito-products/',
    PLANTS: 'assets/images/products-page/plants/',
    TREES: 'assets/images/products-page/trees/',
    PRASADA: {
      GREENHOUSE: 'assets/images/products-page/prasada-products/Greenhouse/',
      CULTIVATION: 'assets/images/products-page/prasada-products/cultivation/',
      SEEDLING: 'assets/images/products-page/prasada-products/Seedling/',
    },
  },

  // Service Images
  SERVICES: 'assets/images/service-details/',

  // Project Images
  PROJECTS: 'assets/images/projects-details/',

  // Document Images
  DOCUMENTS: 'assets/document-approvals/',

  // Logo and Brand Assets
  LOGO: 'assets/images/logo-2.png',
  FAVICON: 'assets/favicon.ico',

  // Icon Assets
  ICONS: {
    TREE: 'assets/icons/tree.svg',
    CALENDAR: 'assets/icons/calendar.svg',
    TARGET: 'assets/icons/target.svg',
    HANDSHAKE: 'assets/icons/handshake.svg',
    BADGE: 'assets/icons/badge.svg',
    GLOBE: 'assets/icons/globe.svg',
    BUILDING: 'assets/icons/building.svg',
  },

  // Background Images
  BACKGROUNDS: {
    HERO_SERVICES: 'assets/images/services/Our-Services.webp',
    HERO_PRODUCTS: 'assets/images/products-page/our-products.webp',
  },
};


// ============================================================================
// SCROLL CONFIGURATION
// ============================================================================

export const SCROLL_CONFIG = {
  SCROLL_THRESHOLD: 60, // Pixels scrolled before header changes style
  SMOOTH_SCROLL_DURATION: 500,
};

// ============================================================================
// FORM VALIDATION PATTERNS
// ============================================================================

export const FORM_PATTERNS = {
  EMAIL: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
  PHONE: /^(?=(?!0{5,}))(?:\+?\d{1,3}[- ]?)?\d{10,11}$/,
  URL: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)$/,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
};

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT_INFO = {
  ADDRESS: {
    EN: 'King Fahd Rd, Al Olaya, Riyadh',
    AR: 'طريق الملك فهد، العليا، الرياض',
    HREF: 'https://maps.app.goo.gl/tAMe31CRJtVjrR717',
  },
  EMAIL: 'info@geoscape.net',
  PHONE: {
    DISPLAY: '+966 546644283',
    DISPLAY_AR: '546644283 966+',
    WHATSAPP: '966546644283',
  },

  OPENING_HOURS: {
    DAYS_EN: 'Sunday to Thursday',
    DAYS_AR: 'من الأحد إلى الخميس',
    HOURS_EN: '9.00 Am - 6.00 Pm (KSA time)',
    HOURS_AR: '9:00 صباحًا إلى 6:00 مساءً (بتوقيت السعودية)',
  },
};

// ============================================================================
// STATISTICS - Company statistics
// ============================================================================

export const COMPANY_STATS = {
  YEARS_EXPERIENCE: 14,
  PROJECTS_DELIVERED: 92,
  CLIENTS: 18,
  CERTIFICATIONS: 9,
  GLOBAL_PARTNERS: 2,
  TEAM_MEMBERS: 250,
  AWARDS: 92,
  BUILDINGS: 150,
};
