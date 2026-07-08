import Hero from "./components/Hero";
import Divisions from "./components/Divisions";
import Unified from "./components/Unified";
import HowItWorks from "./components/HowItWorks";
import Security from "./components/Security";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Divisions />
      <Unified />
      <HowItWorks />
      <Security />
      <Pricing />
      <CTA />
    </>
  );
}
