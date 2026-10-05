"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/#platform", label: "Platform" },
  { href: "/#command-center", label: "Command Center" },
  { href: "/#workforce", label: "AI Workforce" },
  { href: "/solutions", label: "Solutions" },
  { href: "/integrations", label: "Integrations" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Company" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className={`site-header${scrolled || open ? " scrolled" : ""}`}>
        <Link className="wordmark" href="/" aria-label="STIV home">
          <Logo priority />
          STIV
        </Link>
        <nav
          id="links"
          className={`site-nav${open ? " open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contact">
          Book a Demo
        </Link>
        <button
          type="button"
          className="menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "×" : "☰"}
        </button>
      </header>
    </>
  );
}
