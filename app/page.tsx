import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Agents from "./components/Agents";
import HowItWorks from "./components/HowItWorks";
import Security from "./components/Security";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Agents />
        <HowItWorks />
        <Security />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
