"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#divisions", label: "Software" },
  { href: "#unified", label: "Unified" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-white/10 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/stiv-logo-mark.png"
            alt="STIV"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">STIV</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-gold/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-gold" />
            </span>
            All 7 systems operational
          </div>
          <a
            href="#book-demo"
            className="rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
          >
            Book a demo
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="flex h-8 w-8 flex-col items-center justify-center gap-1.5">
            <span
              className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book-demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-4 py-2 text-center text-sm font-semibold text-slate-950"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
