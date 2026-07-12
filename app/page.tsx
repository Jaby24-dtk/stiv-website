import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Divisions from "./components/Divisions";
import Unified from "./components/Unified";
import HowItWorks from "./components/HowItWorks";
import Security from "./components/Security";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Divisions />
      <Unified />
      <HowItWorks />
      <Security />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
