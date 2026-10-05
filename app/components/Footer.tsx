import Link from "next/link";
import CookiePreferencesLink from "./CookiePreferencesLink";
import Logo from "./Logo";
import { IMPACT_URL, LINKEDIN_URL } from "../lib/site";

const columns = [
  {
    title: "PLATFORM",
    links: [
      { label: "Command Center", href: "/#command-center" },
      { label: "Divisions", href: "/#workforce" },
      { label: "STIV Unified", href: "/unified" },
      { label: "Solutions", href: "/solutions" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "TRUST",
    links: [
      { label: "Security", href: "/security" },
      { label: "Status", href: "/status" },
      { label: "Subprocessors", href: "/subprocessors" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/blog" },
      { label: "Community Impact", href: IMPACT_URL },
      { label: "Book a Demo", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="wordmark" href="/" aria-label="STIV home">
          <Logo size={30} />
          STIV
        </Link>
        <span>INTELLIGENCE, ORCHESTRATED.</span>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <div className="footer-columns">
        {columns.map((col) => (
          <div key={col.title}>
            <p className="eyebrow">{col.title}</p>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.href.startsWith("https://")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>
          STIV Pte. Ltd. · UEN 202630466E
          <br />
          50 Raffles Place #30-00, Singapore Land Towers, Singapore 048623
        </p>
        <div>
          <CookiePreferencesLink />
        </div>
        <span>© {new Date().getFullYear()} STIV</span>
      </div>
    </footer>
  );
}
