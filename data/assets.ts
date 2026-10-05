/**
 * Centralized Asset Mapping for Libstackz
 * Source of truth: Brand and Home page illustrations
 */

export const assets = {
  // Brand Logos
  logo: {
    src: '/assets/brand/logo.svg',
    alt: 'Libstackz Logo',
    width: 155,
    height: 32,
    aspectRatio: '155 / 32',
  },
  logoFooter: {
    src: '/assets/brand/logo-footer.svg',
    alt: 'Libstackz Footer Logo',
    width: 136,
    height: 28,
    aspectRatio: '136 / 28',
  },

  // Hero Section
  hero: {
    src: '/assets/illustrations/home/library-dashboard.webp',
    alt: 'Libstackz library dashboard illustration',
    width: 1536,
    height: 1024,
    aspectRatio: '624 / 416', // Desktop display aspect ratio
  },

  // Platform Feature Illustrations (Grid 3x2)
  features: {
    cataloging: {
      src: '/assets/illustrations/home/cataloging-collections.webp',
      alt: 'Cataloging and collections management illustration',
      width: 1536,
      height: 1024,
      aspectRatio: '3 / 2',
    },
    circulation: {
      src: '/assets/illustrations/home/barcode-circulation.webp',
      alt: 'Barcode and circulation checkout illustration',
      width: 1536,
      height: 1024,
      aspectRatio: '3 / 2',
    },
    fines: {
      src: '/assets/illustrations/home/fines-billing.webp',
      alt: 'Automated fines and billing history illustration',
      width: 1536,
      height: 1024,
      aspectRatio: '3 / 2',
    },
    membership: {
      src: '/assets/illustrations/home/membership-management.webp',
      alt: 'Digital QR membership card and notices illustration',
      width: 1536,
      height: 1024,
      aspectRatio: '3 / 2',
    },
    opac: {
      src: '/assets/illustrations/home/public-catalogue-opac.webp',
      alt: 'Public online catalogue search illustration',
      width: 1536,
      height: 1024,
      aspectRatio: '3 / 2',
    },
    admin: {
      src: '/assets/illustrations/home/staff-admin-controls.webp',
      alt: 'Staff and administrative controls dashboard illustration',
      width: 1536,
      height: 1024,
      aspectRatio: '3 / 2',
    },
  },

  // OPAC Spotlight Section
  opac: {
    src: '/assets/illustrations/home/public-catalogue-opac-mobile-app.webp',
    alt: 'Public catalogue and reader mobile app showcase illustration',
    width: 1536,
    height: 1024,
    aspectRatio: '656 / 438', // Desktop display aspect ratio
  },
} as const;
