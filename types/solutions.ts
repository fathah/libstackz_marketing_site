/**
 * Type definitions for the Libstackz Solutions page architecture.
 * Source of truth: Libstckz Landing Page (1).fig & Solutions — Desktop.pdf.
 */

export type SolutionFeatureType = 'checklist' | 'chips';

export type SolutionFeatureVariant = 'default' | 'grid' | 'detailed';

export type SolutionLayout = 'image-left' | 'image-right';

export type SolutionBackground = 'light' | 'white';

export interface Solution {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  layout: SolutionLayout;
  background: SolutionBackground;
  featureType: SolutionFeatureType;
  featureVariant?: SolutionFeatureVariant;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface SolutionsHeroLink {
  label: string;
  href: string;
}

export interface SolutionsHero {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  links: SolutionsHeroLink[];
}

export interface SolutionsCta {
  eyebrow?: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface SolutionsPageData {
  hero: SolutionsHero;
  solutions: Solution[];
  cta: SolutionsCta;
}
