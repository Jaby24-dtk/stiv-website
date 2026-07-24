"use client";

import Link from "next/link";
import DivisionsSwipe from "./DivisionsSwipe";
import Reveal from "./Reveal";
import { divisions } from "../lib/divisions";

export default function Divisions() {
  return (
    <section id="divisions" className="relative border-t border-white/10">
      <div className="px-6 pb-16 pt-24 lg:px-8">
        <Reveal variant="text" className="mx-auto max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            SOFTWARE
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Seven divisions, seven premium systems.
          </h2>
          <p className="mt-4 text-xl text-muted">
            STIV builds a dedicated, exclusive system for each division of
            your enterprise — licensed independently, so you invest only in
            what your teams actually run.
          </p>
        </Reveal>
      </div>

      <DivisionsSwipe divisions={divisions} />

      <div className="border-t border-white/10 px-6 py-12 text-center lg:px-8">
        <p className="text-sm text-muted">Explore each division</p>
        <div className="mx-auto mt-4 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm">
          {divisions.map((division, i) => (
            <span key={division.slug} className="flex items-center gap-2">
              <Link
                href={`/software/${division.slug}`}
                className="font-semibold text-foreground/90 transition-colors hover:text-accent-gold"
              >
                {division.name}
              </Link>
              {i < divisions.length - 1 && (
                <span aria-hidden className="text-white/20">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-16 text-center lg:px-8">
        <p className="text-sm text-muted">
          Want every division running as one exclusive system?
        </p>
        <a
          href="#unified"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-gold hover:underline"
        >
          See STIV Unified →
        </a>
      </div>
    </section>
  );
}
