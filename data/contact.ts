import {
  ContactHero,
  ContactFormConfig,
  ContactChannelsConfig,
  ContactLocationConfig,
  ContactPageData,
} from '@/types/contact';

/**
 * Contact Hero Section Data
 * Source of truth: Libstckz Landing Page (2).fig & Contact — Desktop.pdf
 */
const contactHero: ContactHero = {
  title: "Let's talk about your library",
  description:
    "Whether you're comparing plans, need help with your account, or want a custom solution built for you, a real person on our team will get back to you, usually within one business day.",
};

/**
 * Contact Form Configuration
 * Source of truth: Exact field sequence, labels, placeholders, and controls from Figma
 */
const contactForm: ContactFormConfig = {
  title: 'Send us a message',
  description: "Fill this in and we'll route it to the right team.",
  fields: [
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Full name',
      type: 'text',
      placeholder: 'Anjali Rao',
      required: true,
      colSpan: 1,
    },
    {
      id: 'workEmail',
      name: 'workEmail',
      label: 'Work email',
      type: 'email',
      placeholder: 'you@library.org',
      required: true,
      colSpan: 1,
    },
    {
      id: 'organization',
      name: 'organization',
      label: 'Library / organization',
      type: 'text',
      placeholder: 'Maple Community Library',
      required: true,
      colSpan: 1,
    },
    {
      id: 'subject',
      name: 'subject',
      label: "What's this about?",
      type: 'select',
      defaultValue: 'Choosing a plan',
      options: [
        'Choosing a plan',
        'Technical support',
        'Custom solution',
        'Billing inquiry',
        'Other',
      ],
      required: true,
      colSpan: 1,
    },
    {
      id: 'message',
      name: 'message',
      label: 'How can we help?',
      type: 'textarea',
      placeholder: "Tell us a bit about your library and what you're trying to solve...",
      rows: 5,
      required: true,
      colSpan: 2,
    },
  ],
  submitButton: {
    label: 'Send message →',
  },
};

/**
 * Contact Channels Configuration
 * Source of truth: Figma channel card with verified Lucide icons
 */
const contactChannels: ContactChannelsConfig = {
  title: 'Prefer a different channel?',
  channels: [
    {
      id: 'email',
      label: 'Email',
      value: 'mail@libstackz.com',
      href: 'mailto:mail@libstackz.com',
      type: 'email',
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+91 80 4718 2200',
      href: 'tel:+918047182200',
      type: 'phone',
    },
    {
      id: 'help-center',
      label: 'Help Center',
      value: 'libstackz.com',
      href: 'https://libstackz.com',
      type: 'url',
    },
  ],
};

/**
 * Location Card Configuration
 * Source of truth: Physical address and external direction link from Figma & PDF
 */
const contactLocation: ContactLocationConfig = {
  title: 'Locate Us',
  mapPreviewText: 'Ziqx Creative Clique, Calicut',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Ziqx+Creative+Clique,+Markaz+Knowledge+City,+Calicut&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'Ziqx Creative Clique, Markaz Knowledge City,\nCalicut, Kerala 673580, India',
  directions: {
    label: 'Get Directions →',
    href: 'https://www.google.com/maps?kgmid=/g/11l6zcjbr6&hl=en-IN&shem=epsd1,ltae,rimspwouoe&shndl=30&kgs=bca7a9b2a939be7a&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTXdcimobaY7MZKmzj6a1meu&daddr=Markaz+Knowledge+City,+Calicut,+Keralam+673580',
  },
};

/**
 * Unified Contact Page Data Contract
 */
export const contactPageData: ContactPageData = {
  hero: contactHero,
  form: contactForm,
  channels: contactChannels,
  location: contactLocation,
};
