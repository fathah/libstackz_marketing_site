import { HeaderData, FooterData } from '@/types/site';
import { assets } from '@/data/assets';

export const siteHeader: HeaderData = {
  logo: {
    src: assets.logo.src,
    alt: 'Libstackz Logo',
    width: assets.logo.width,
    height: assets.logo.height,
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Contact', href: '/contact' },
  ],
  signIn: {
    label: 'Sign In',
    href: 'https://app.libstackz.com/',
  },
  cta: {
    label: 'Start Free Trial',
    href: 'https://app.libstackz.com/',
  },
};

export const siteFooter: FooterData = {
  brand: {
    logo: {
      src: assets.logoFooter.src,
      alt: 'Libstackz Footer Logo',
      width: assets.logoFooter.width,
      height: assets.logoFooter.height,
    },
    description: 'The complete platform for modern library operations.',
    social: {
      label: 'Instagram @libstackz',
      href: 'https://www.instagram.com/libstackz?stkn=MWx6ODN3eXVzdjc5bQ==',
    },
  },
  linkGroups: [
    {
      title: 'SOLUTIONS',
      links: [
        { label: 'Institutional Libraries', href: '/solutions' },
        { label: 'Self-Checkout Kiosk', href: '/solutions#self-checkout' },
        { label: 'White Label Solutions', href: '/solutions#white-label' },
        { label: 'Digitization Services', href: '/solutions#digitization' },
      ],
    },
    {
      title: 'CONTACT',
      links: [
        { label: 'mail@libstackz.com', href: 'mailto:mail@libstackz.com' },
        { label: 'app.libstackz.com', href: 'https://app.libstackz.com' },
      ],
    },
  ],
  bottom: {
    copyright: '© 2026 Libstackz. All rights reserved.',
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};
