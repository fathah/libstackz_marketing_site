import Header from "./homecomps/Header";
import Hero from "./homecomps/Hero";
import Features from "./homecomps/Features";
import Achievements from "./homecomps/Achievements";
import CallToAction from "./homecomps/CallToAction";
import Footer from "./homecomps/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Achievements />
      <CallToAction />
      <Footer />
    </main>
  );
}