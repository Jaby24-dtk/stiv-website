import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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

export const metadata: Metadata = {
  title: "STIV — Premium software, division by division",
  description:
    "STIV designs exclusive, purpose-built software for every division of your enterprise — Executive, Sales, Marketing, Finance, Operations, Legal, Support. Or unify them all into one exclusive assistant with STIV Unified.",
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
        <div className="grain-overlay" aria-hidden />
        <div className="flex flex-1 flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        
        <GoogleAnalytics gaId="G-E1Y1GRKG2M" />
      </body>
    </html>
  );
}
