"use client";

import { setConsent } from "./CookieConsent";

export default function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => setConsent(null)}
      className="text-sm text-muted transition-colors hover:text-foreground"
    >
      Cookie preferences
    </button>
  );
}
