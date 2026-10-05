import { Solution, SolutionsHero, SolutionsCta, SolutionsPageData } from '@/types/solutions';
import { solutionAssets } from '@/data/solution-assets';

/**
 * Solutions Hero Section Data
 * Source of truth: Libstckz Landing Page (1).fig & Solutions — Desktop.pdf
 */
const solutionsHero: SolutionsHero = {
  title: 'Built for how your library actually runs',
  description:
    'Beyond our standard plans, we build tailored technology for libraries with specialized needs, from contactless checkouts to a fully white-labeled platform. Contact us to discuss what your library needs.',
  image: solutionAssets.solutionsHero,
  links: [
    { label: 'Digitization', href: '#digitization' },
    { label: 'White Label', href: '#white-label' },
    { label: 'Self-Checkout Kiosk', href: '#self-checkout' },
    { label: 'Contactless Circulation', href: '#contactless' },
  ],
};

/**
 * Four Primary Solution Areas
 * Order, alignment, background, and feature presentations strictly verified from Figma.
 */
const solutions: Solution[] = [
  {
    id: 'digitization',
    title: "We'll digitize your entire library for you",
    description:
      "Moving from paper registers to a digital system shouldn't become your team's part-time job. Our team handles the complete migration: cataloging every book, labeling barcodes or NFC tags, setting up the system, and training your staff to run it from day one.",
    image: solutionAssets.digitization,
    layout: 'image-left',
    background: 'white',
    featureType: 'checklist',
    featureVariant: 'grid',
    features: [
      'Physical catalog conversion',
      'Barcode / NFC labeling',
      'Staff training',
      'End-to-end project management',
    ],
    cta: {
      label: 'Talk to Us →',
      href: '/contact',
    },
  },
  {
    id: 'white-label',
    title: 'Brand the entire platform as your own',
    description:
      "Get a custom domain, your logo and brand colors, a branded mobile app, and personalized email templates, all powered by Libstackz's proven infrastructure. Your members see your library's identity, not ours.",
    image: solutionAssets.whiteLabel,
    layout: 'image-right',
    background: 'light',
    featureType: 'checklist',
    featureVariant: 'default',
    features: [
      'Custom domain & branding',
      'Branded mobile app',
      'Full platform access',
      'Personalized email templates',
    ],
    cta: {
      label: 'Talk to Us →',
      href: '/contact',
    },
  },
  {
    id: 'self-checkout',
    title: 'A complete self-checkout kiosk, hardware included',
    description:
      'A complete hardware and software solution for unattended book checkouts. Members scan their card and book barcodes, or tap with NFC to check out without staff assistance, ideal for high-traffic libraries looking to cut wait times at the front desk.',
    image: solutionAssets.selfCheckout,
    layout: 'image-left',
    background: 'white',
    featureType: 'chips',
    features: [
      'Barcode & RFID scanning',
      'Receipt printing',
      'Touchscreen interface',
      'Optional NFC tap support',
    ],
    cta: {
      label: 'Talk to Us →',
      href: '/contact',
    },
  },
  {
    id: 'contactless',
    title: 'Checkout at a tap, no scanning required',
    description:
      'Replace barcode scanning with NFC tags embedded in your books and NFC-enabled membership cards. Members tap their card, tap the book, and the checkout completes instantly, faster than barcode scanning, more durable than printed labels, and it works standalone or paired with a Self-Checkout Kiosk.',
    image: solutionAssets.contactless,
    layout: 'image-right',
    background: 'light',
    featureType: 'checklist',
    featureVariant: 'detailed',
    features: [
      'NFC tag embedded in the book spine or cover, with no barcode label to print, stick, or replace',
      'Tap-to-checkout with NFC membership cards or wristbands',
      'Pairs seamlessly with the Self-Checkout Kiosk for a fully contactless experience',
      'Cuts circulation time during high-traffic hours, including exam season, new releases, and event days',
    ],
    cta: {
      label: 'Talk to Us →',
      href: '/contact',
    },
  },
];

/**
 * Final Solutions CTA Section Data
 */
const solutionsCta: SolutionsCta = {
  title: 'Have something specific in mind?',
  description:
    "Every library is different. Tell us what you're trying to solve and we'll help you figure out the right combination of solutions.",
  cta: {
    label: 'Talk to Us →',
    href: '/contact',
  },
};

/**
 * Unified Solutions Page Data Contract
 */
export const solutionsPageData: SolutionsPageData = {
  hero: solutionsHero,
  solutions,
  cta: solutionsCta,
};
