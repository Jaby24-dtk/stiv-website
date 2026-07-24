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
import { serializeJsonLd } from "./lib/json-ld";
import {
  DEFAULT_DESCRIPTION,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
} from "./lib/site";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "STIV — Premium software, division by division",
  description: DEFAULT_DESCRIPTION,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/opengraph-image`,
  },
  inLanguage: "en",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd) }}
      />
      <Hero />
      <Marquee />
      <div className="home-deferred">
        <Stats />
      </div>
      <Divisions />
      <Unified />
      <div className="home-deferred">
        <HowItWorks />
      </div>
      <div className="home-deferred">
        <Security />
      </div>
      <div className="home-deferred">
        <Pricing />
      </div>
      <div className="home-deferred">
        <FAQ />
      </div>
      <div className="home-deferred">
        <CTA />
      </div>
    </>
  );
}
