const columns = [
  {
    title: "Product",
    links: ["Agents", "How it works", "Security", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Subprocessors"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent-indigo to-accent-teal text-xs font-bold text-slate-950">
                S
              </span>
              <span className="text-base font-semibold">STIV</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Your AI-powered organization. Est. 2026, Singapore.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
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
