/**
 * Solution Asset Mapping
 * Canonical high-resolution WebP product illustrations in public/assets/illustrations/solutions/
 */

export const solutionAssets = {
  solutionsHero: '/assets/illustrations/solutions/library-solutions-ecosystem.webp',
  digitization: '/assets/illustrations/solutions/digitization-migration.webp',
  whiteLabel: '/assets/illustrations/solutions/white-label-branding.webp',
  selfCheckout: '/assets/illustrations/solutions/self-checkout-kiosk-member-card.webp',
  contactless: '/assets/illustrations/solutions/contactless-circulation.webp',
} as const;

export type SolutionAssetKey = keyof typeof solutionAssets;
