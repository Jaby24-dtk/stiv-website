"use client";

import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Link from "next/link";

const CONSENT_KEY = "stiv-cookie-consent";
const GA_ID = "G-45P3ZK5YCD";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

type Consent = "granted" | "denied" | null;

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Consent {
  const stored = localStorage.getItem(CONSENT_KEY);
  return stored === "granted" || stored === "denied" ? stored : null;
}

function getServerSnapshot(): Consent {
  return null;
}

export function setConsent(choice: Consent) {
  if (choice === null) {
    localStorage.removeItem(CONSENT_KEY);
  } else {
    localStorage.setItem(CONSENT_KEY, choice);
  }
  listeners.forEach((listener) => listener());
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <>
      {consent === "granted" && (
        <>
          <GoogleAnalytics gaId={GA_ID} />
          {CLARITY_ID && (
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
              `}
            </Script>
          )}
        </>
      )}

      {consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-[60] px-6 pb-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-background/98 p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-muted">
              We use analytics cookies to understand how the site is used.
              Non-essential cookies aren&apos;t set until you accept. See our{" "}
              <Link href="/privacy" className="inline-flex min-h-11 items-center text-foreground underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setConsent("denied")}
                className="min-h-11 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => setConsent("granted")}
                className="min-h-11 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
