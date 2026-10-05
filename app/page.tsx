import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { Metrics } from '@/components/home/Metrics';
import { Features } from '@/components/home/Features';
import { OpacSection } from '@/components/home/OpacSection';
import { Pricing } from '@/components/home/Pricing';
import { FinalCta } from '@/components/home/FinalCta';
import { Footer } from '@/components/layout/Footer';
import { homeData } from '@/data/home';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero data={homeData.hero} />
        <Metrics data={homeData.metrics} />
        <Features data={homeData.features} />
        <OpacSection data={homeData.opac} />
        <Pricing data={homeData.pricing} />
        <FinalCta data={homeData.finalCta} />
      </main>
      <Footer />
    </>
  );
}
