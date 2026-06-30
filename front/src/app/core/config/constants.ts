/**
 * Application-wide Constants Configuration
 * Centralized configuration for paths, breakpoints, animations, and API settings
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
// BREAKPOINTS - Responsive design breakpoints (must match SCSS variables)
// ============================================================================

export const BREAKPOINTS = {
  XS: '0px',
  SM: '576px',
  MD: '768px',
  LG: '992px',
  XL: '1200px',
  XXL: '1400px',
};

export const BREAKPOINT_VALUES = {
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400,
};

// ============================================================================
// ANIMATIONS - Animation durations and timing configurations
// ============================================================================

export const ANIMATIONS = {
  // Duration constants (in milliseconds)
  DURATION: {
    INSTANT: 0,
    FAST: 150,
    BASE: 300,
    SLOW: 500,
    SLOWER: 1000,
    CAROUSEL_AUTOPLAY: 2000,
    COUNTER_ANIMATION: 1500,
    LOADER_DELAY: 3000,
  },

  // Timing functions
  EASING: {
    LINEAR: 'linear',
    EASE: 'ease',
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
    CUBIC_BEZIER: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Predefined transitions
  TRANSITIONS: {
    BASE: 'all 300ms ease-in-out',
    FADE: 'opacity 300ms ease-in-out',
    SLIDE: 'transform 300ms ease-in-out',
    COLOR: 'background-color 300ms ease-in-out, color 300ms ease-in-out',
  },

  // Scroll behavior
  SCROLL: {
    SMOOTH: 'smooth',
    AUTO: 'auto',
    BEHAVIOR_SMOOTH: 'smooth' as ScrollBehavior,
  },
};

// ============================================================================
// API CONFIG - API endpoints and configuration
// ============================================================================

export const API_CONFIG = {
  // Base configuration
  BASE_URL: window.location.origin,
  TIMEOUT: 30000, // 30 seconds

  // Endpoints
  ENDPOINTS: {
    SEND_EMAIL: '/send-email',
    CONTACT: '/api/contact',
    NEWSLETTER: '/api/newsletter',
  },

  // HTTP headers
  HEADERS: {
    CONTENT_TYPE: 'application/json',
    ACCEPT: 'application/json',
  },

  // Retry configuration
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY: 1000,
  },
};

// ============================================================================
// CAROUSEL OPTIONS - Preset responsive carousel configurations
// ============================================================================

export const CAROUSEL_PRESETS = {
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

// ============================================================================
// LANGUAGE CONFIGURATION
// ============================================================================

export const LANGUAGE_CONFIG = {
  DEFAULT: 'en' as const,
  SUPPORTED_LANGUAGES: ['en', 'ar'] as const,
  STORAGE_KEY: 'lang',
};

// ============================================================================
// PAGINATION CONFIGURATION
// ============================================================================

export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 0,
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
// SOCIAL MEDIA CONFIGURATION
// ============================================================================

export const SOCIAL_MEDIA = {
  FACEBOOK: 'https://www.facebook.com/profile.php?id=61560500246911',
  WHATSAPP: 'https://wa.me/966546644283',
  LINKEDIN: 'https://www.linkedin.com/company/geoscape-landscape/about/',
  INSTAGRAM:
    'https://www.instagram.com/geoscapelandscape?igsh=MWZndjRjZDExZ2Fxaw%3D%3D&utm_source=qr',
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

// ============================================================================
// ACCESSIBILITY
// ============================================================================

export const ACCESSIBILITY = {
  SKIP_TO_CONTENT_ID: 'skip-to-content',
  MAIN_CONTENT_ID: 'main-content',
  ARIA_LIVE_POLITE: 'polite',
  ARIA_LIVE_ASSERTIVE: 'assertive',
};
