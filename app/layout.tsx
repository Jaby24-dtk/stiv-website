import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const interTight = Inter_Tight({
  variable: "--font-tight",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.iamstivai.com";
const SITE_NAME = "STIV";
const DEFAULT_TITLE = "STIV — Premium software, division by division";
const DEFAULT_DESCRIPTION =
  "STIV designs exclusive, purpose-built software for every division of your enterprise — Executive, Sales, Marketing, Finance, Operations, Legal, Support. Or unify them all into one exclusive assistant with STIV Unified.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — STIV",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
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
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "STIV",
  url: SITE_URL,
  logo: `${SITE_URL}/stiv-logo-mark.png`,
  description: DEFAULT_DESCRIPTION,
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SG",
    addressLocality: "Singapore",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="grain-overlay" aria-hidden />
        <div className="flex flex-1 flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
