"use client";

import { setConsent } from "./CookieConsent";

export default function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => setConsent(null)}
      className="inline-flex min-h-11 items-center transition-colors hover:text-accent-gold"
    >
      Cookie preferences
    </button>
  );
}
