/**
 * Type definitions for the Libstackz Contact page architecture.
 * Source of truth: Libstckz Landing Page (2).fig & Contact — Desktop.pdf.
 */

export interface ContactHero {
  eyebrow?: string;
  title: string;
  description: string;
}

export type ContactFieldType = 'text' | 'email' | 'select' | 'textarea';

export interface ContactFormField {
  id: string;
  name: string;
  label: string;
  type: ContactFieldType;
  placeholder?: string;
  defaultValue?: string;
  options?: string[];
  required?: boolean;
  rows?: number;
  colSpan?: 1 | 2;
}

export interface ContactFormConfig {
  title: string;
  description: string;
  fields: ContactFormField[];
  submitButton: {
    label: string;
  };
}

export interface ContactChannelItem {
  id: string;
  label: string;
  value: string;
  href: string;
  type: 'email' | 'phone' | 'url';
}

export interface ContactChannelsConfig {
  title: string;
  channels: ContactChannelItem[];
}

export interface ContactLocationConfig {
  title: string;
  mapPreviewText: string;
  mapEmbedUrl?: string;
  address: string;
  directions: {
    label: string;
    href: string;
  };
}

export interface ContactPageData {
  hero: ContactHero;
  form: ContactFormConfig;
  channels: ContactChannelsConfig;
  location: ContactLocationConfig;
}
