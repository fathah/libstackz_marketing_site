import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactWorkspace } from '@/components/contact/ContactWorkspace';
import { contactPageData } from '@/data/contact';
import { siteHeader } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact — Libstackz',
  description:
    "Whether you're comparing plans, need help with your account, or want a custom solution built for you - a real person on our team will get back to you, usually within one business day.",
  openGraph: {
    title: 'Contact — Libstackz',
    description:
      "Whether you're comparing plans, need help with your account, or want a custom solution built for you - a real person on our team will get back to you, usually within one business day.",
  },
};

const contactHeaderData = {
  ...siteHeader,
  cta: {
    label: 'Talk to Us',
    href: '#contact-form',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header data={contactHeaderData} />
      <main>
        <ContactHero data={contactPageData.hero} />
        <ContactWorkspace
          form={contactPageData.form}
          channels={contactPageData.channels}
          location={contactPageData.location}
        />
      </main>
      <Footer />
    </>
  );
}
