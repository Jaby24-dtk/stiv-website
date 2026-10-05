import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { serializeJsonLd } from "./lib/json-ld";
import {
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  IMPACT_URL,
  LEGAL_NAME,
  LINKEDIN_URL,
  CRUNCHBASE_URL,
  G2_URL,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: DEFAULT_TITLE,
    template: "%s — STIV",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "AI command center",
    "enterprise AI software",
    "AI agents for business",
    "division-specific software",
    "enterprise automation",
    "human-in-the-loop AI",
    "STIV Unified",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: LEGAL_NAME,
  category: "Enterprise software",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  verification: {
    google: "n30_jxeyyE6gD1kxI8LzSc26tdqWliRAomJM9zolAnA",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/stiv-logo-mark.png`,
        width: 512,
        height: 512,
      },
      description: DEFAULT_DESCRIPTION,
      foundingDate: "2026",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Singapore UEN",
        value: "202630466E",
      },
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "50 Raffles Place #30-00, Singapore Land Towers",
        postalCode: "048623",
        addressCountry: "SG",
        addressLocality: "Singapore",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales and general enquiries",
        email: CONTACT_EMAIL,
        availableLanguage: "English",
        areaServed: "Worldwide",
      },
      sameAs: [LINKEDIN_URL, CRUNCHBASE_URL, G2_URL],
      hasPart: {
        "@type": "WebSite",
        name: "STIV Community Impact",
        url: IMPACT_URL,
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      alternateName: "STIV AI",
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <head>
        <link rel="preload" href="/fonts/stiv-display.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/stiv-text.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
        />
        <div className="flex flex-1 flex-col">
          <Nav />
          <main id="content" className="flex-1">{children}</main>
          <Footer />
        </div>

        <CookieConsent />
        <AnalyticsEvents />
        <Analytics />
      </body>
    </html>
  );
}
