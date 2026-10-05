import {
  HeroData,
  MetricsData,
  FeaturesData,
  OpacData,
  PricingData,
  FinalCtaData,
  HomePageData,
} from '@/types/home';
import { assets } from '@/data/assets';

const homeHero: HeroData = {
  title: 'Run your entire library from one dashboard',
  body: 'Libstackz brings cataloging, circulation, fines, membership, and a public catalogue into a single cloud platform, built for schools, colleges, and public libraries of any size.',
  primaryCta: {
    label: 'Start Free Trial',
    href: 'https://app.libstackz.com/',
  },
  secondaryCta: {
    label: 'See Pricing →',
    href: '#pricing',
  },
  note: 'No installation required. Access your library from any browser, on any device.',
  image: {
    src: assets.hero.src,
    alt: assets.hero.alt,
    width: assets.hero.width,
    height: assets.hero.height,
  },
};

const homeMetrics: MetricsData = {
  eyebrow: 'LIBRARIES RUNNING ON LIBSTACKZ, AT A GLANCE',
  metrics: [
    { value: '12+', label: 'Libraries onboarded' },
    { value: '13,400+', label: 'Books catalogued' },
    { value: '946+', label: 'Active members served' },
    { value: '4,500+', label: 'Checkouts processed' },
  ],
};

const homeFeatures: FeaturesData = {
  title: 'Everything your library needs, built in',
  lead: 'From the first book you catalogue to the last fine you collect, Libstackz covers the full operational workflow.',
  features: [
    {
      id: 'cataloging',
      title: 'Cataloging & Collections',
      description:
        'Organize every title, copy, and digital asset with rich metadata, mapped to the real sections and shelves of your library. Bulk import via CSV or MARC and track shelf capacity in real time.',
      image: assets.features.cataloging.src,
      tags: ['Bulk Import', 'Shelf Tracking', 'Rich Metadata'],
    },
    {
      id: 'circulation',
      title: 'Barcode & Circulation',
      description:
        'Generate and print barcodes for every book and member card. Scan to check out in seconds using handheld readers or tablet cameras, with offline sync that keeps lending running without internet.',
      image: assets.features.circulation.src,
      tags: ['Barcode Printing', 'Offline Sync', 'Quick Checkout'],
    },
    {
      id: 'fines',
      title: 'Fines & Billing',
      description:
        'Automatically calculate overdue fines with custom rules per book type or member category. Accept payments online with integrated processing, automatic receipts, and complete billing history.',
      image: assets.features.fines.src,
      tags: ['Auto Fines', 'Online Payments', 'Billing History'],
    },
    {
      id: 'membership',
      title: 'Membership Management',
      description:
        'Issue QR-code digital membership cards via the mobile app, with no more lost plastic cards. Bulk import existing members from spreadsheets and send automated notices for due dates and announcements.',
      image: assets.features.membership.src,
      tags: ['QR Membership Cards', 'Bulk Import', 'Automated Notices'],
    },
    {
      id: 'opac',
      title: 'Public Catalogue (OPAC)',
      description:
        "Give visitors a public-facing web catalogue to search your entire collection without logging in. Show real-time availability, allow reservations, and configure exactly what's visible to the public.",
      image: assets.features.opac.src,
      tags: ['Public Search', 'Real-Time Availability', 'Reservations'],
    },
    {
      id: 'admin',
      title: 'Staff & Admin Controls',
      description:
        "Define granular permissions for every staff level, from front-desk operators to senior librarians. Manage your library's profile, branding, operating hours, and public information from one dashboard.",
      image: assets.features.admin.src,
      tags: ['Role Permissions', 'Branding Controls', 'Operating Hours'],
    },
  ],
};

const homeOpac: OpacData = {
  title: 'Give readers a catalogue they can browse and check availability, anywhere',
  body: "Every Libstackz library comes with a public web catalogue and a reader mobile app. Patrons can browse your full collection, check real-time availability down to the branch and shelf, and reserve titles whether they're on your website or on the go with the app. You control exactly which collections and details are visible.",
  cta: {
    label: 'Get This for Your Library',
    href: 'https://app.libstackz.com/',
  },
  image: {
    src: assets.opac.src,
    alt: assets.opac.alt,
    width: assets.opac.width,
    height: assets.opac.height,
  },
};

const homePricing: PricingData = {
  title: 'Simple pricing for your library',
  lead: 'Pick the plan that fits your collection. Pay monthly, or pay annually and get 2 months free.',
  plans: [
    {
      id: 'basic',
      name: 'Library Basic',
      priceMonthly: '₹599',
      billingPeriod: '/month',
      annualNote: 'or ₹5,990/year • 2 months free',
      cta: {
        label: 'Start 30-Day Free Trial',
        href: 'https://app.libstackz.com/',
      },
      finePrint: 'No card required',
      featuresLabel: 'FEATURES INCLUDED',
      featureColumns: [
        [
          'Up to 2,000 books & 200 members',
          'Book cataloging with rich metadata',
          'Barcode-based checkout & generation',
          'Fine tracking with custom policies',
          'Digital membership cards & member import',
        ],
        [
          'Public catalogue (OPAC) for patrons',
          'Member mobile app for browsing & checkouts',
          '2 staff roles + basic reports',
        ],
      ],
    },
    {
      id: 'max',
      name: 'Library Max',
      badge: 'MOST POPULAR',
      priceMonthly: '₹1,199',
      billingPeriod: '/month',
      annualNote: 'or ₹11,990/year • 2 months free',
      cta: {
        label: 'Start 30-Day Free Trial',
        href: 'https://app.libstackz.com/',
      },
      finePrint: 'No card required',
      isFeatured: true,
      featuresLabel: 'ALL FEATURES INCLUDED',
      featureColumns: [
        [
          'Unlimited books & unlimited members',
          'Book cataloging with rich metadata',
          'Barcode-based checkout & generation',
          'Fine tracking with custom policies',
          'Digital membership cards & member import',
          'Public catalogue (OPAC) for patrons',
          'Member mobile app for browsing & checkouts',
        ],
        [
          'Offline checkout sync',
          'Multi-branch reporting',
          'CSV data migration assistance',
          'Priority support',
          '5 staff roles + advanced reports',
        ],
      ],
    },
  ],
};

const homeFinalCta: FinalCtaData = {
  title: 'Ready to modernize your library?',
  description: 'Join libraries running cataloging, circulation, and public access from one platform.',
  primaryCta: {
    label: 'Start Free Trial',
    href: 'https://app.libstackz.com/',
  },
  secondaryCta: {
    label: 'View Pricing',
    href: '#pricing',
  },
};

/**
 * Unified Home Page Data Contract
 */
export const homeData: HomePageData = {
  hero: homeHero,
  metrics: homeMetrics,
  features: homeFeatures,
  opac: homeOpac,
  pricing: homePricing,
  finalCta: homeFinalCta,
};
