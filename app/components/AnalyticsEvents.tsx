"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(name: string, params: Record<string, string>) {
  window.gtag?.("event", name, params);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const cta = link.getAttribute("data-analytics-cta");

      if (cta || href === "/contact") {
        sendEvent("select_content", {
          content_type: "demo_cta",
          item_id: cta ?? "contact",
        });
      }

      if (href.startsWith("mailto:")) {
        sendEvent("contact", {
          method: "email",
          destination: href.slice("mailto:".length).split("?")[0],
        });
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (form.action.startsWith("mailto:")) {
        sendEvent("generate_lead", {
          method: "email_form",
          form_location: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}

