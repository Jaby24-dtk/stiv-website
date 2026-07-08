import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Software", href: "/#divisions" },
      { label: "Unified", href: "/#unified" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Security", href: "/#security" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Subprocessors", href: "/subprocessors" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/stiv-logo-mark.png"
                alt="STIV"
                width={28}
                height={28}
                className="h-7 w-7 rounded-lg object-contain"
              />
              <span className="text-base font-semibold">STIV</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Premium software, division by division. Est. 2026, Singapore.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} STIV. All rights reserved.</p>
          <p>Made for teams who&apos;d rather build than babysit process.</p>
        </div>
      </div>
    </footer>
  );
}
