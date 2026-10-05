/**
 * Home page specific type definitions (Hero, Metrics, Features, OPAC, Pricing, Final CTA)
 */

export interface HeroData {
  eyebrow?: string;
  title: string;
  body: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  note: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface MetricsData {
  eyebrow?: string;
  metrics: MetricItem[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface FeaturesData {
  eyebrow?: string;
  title: string;
  lead: string;
  features: FeatureItem[];
}

export interface OpacData {
  eyebrow?: string;
  title: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface PricingPlanData {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: string;
  billingPeriod: string;
  annualNote: string;
  cta: {
    label: string;
    href: string;
  };
  finePrint: string;
  isFeatured?: boolean;
  featuresLabel: string;
  featureColumns: string[][];
}

export interface PricingData {
  eyebrow?: string;
  title: string;
  lead: string;
  plans: PricingPlanData[];
}

export interface FinalCtaData {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface HomePageData {
  hero: HeroData;
  metrics: MetricsData;
  features: FeaturesData;
  opac: OpacData;
  pricing: PricingData;
  finalCta: FinalCtaData;
}
