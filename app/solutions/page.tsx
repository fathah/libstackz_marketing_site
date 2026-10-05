import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SolutionsHero } from '@/components/solutions/SolutionsHero';
import { SolutionSection } from '@/components/solutions/SolutionSection';
import { SolutionsCta } from '@/components/solutions/SolutionsCta';
import { solutionsPageData } from '@/data/solutions';

import { siteHeader } from '@/data/site';

export const metadata: Metadata = {
  title: 'Solutions | Libstackz',
  description:
    'Tailored technology for libraries with specialized needs, from contactless checkouts to a fully white-labeled platform.',
  openGraph: {
    title: 'Solutions | Libstackz',
    description:
      'Tailored technology for libraries with specialized needs, from contactless checkouts to a fully white-labeled platform.',
    images: [
      {
        url: '/assets/illustrations/solutions/library-solutions-ecosystem.webp',
        width: 1536,
        height: 1024,
        alt: 'Libstackz Solutions Ecosystem',
      },
    ],
  },
};

const solutionsHeader = {
  ...siteHeader,
  cta: {
    label: 'Talk to Us',
    href: '/contact',
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Header data={solutionsHeader} />
      <main>
        <SolutionsHero data={solutionsPageData.hero} />
        {solutionsPageData.solutions.map((solution) => (
          <SolutionSection key={solution.id} solution={solution} />
        ))}
        <SolutionsCta data={solutionsPageData.cta} />
      </main>
      <Footer />
    </>
  );
}
