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
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");

    if (source || medium || campaign) {
      sendEvent("campaign_landing", {
        campaign_source: source ?? "",
        campaign_medium: medium ?? "",
        campaign_name: campaign ?? "",
        landing_page: window.location.pathname,
      });
    }

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const cta = link.getAttribute("data-analytics-cta");

      if (cta || href === "/contact") {
        sendEvent("select_content", {
          content_type: "private_briefing_cta",
          item_id: cta ?? "contact",
        });
      }

      if (href.startsWith("mailto:")) {
        sendEvent("contact", {
          method: "email",
          destination: href.slice("mailto:".length).split("?")[0],
        });
      }

      if (href.includes("linkedin.com/company/stiv-pte-ltd")) {
        sendEvent("select_content", {
          content_type: "social_profile",
          item_id: "linkedin_company_page",
        });
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (form.dataset.analyticsForm === "private_briefing_application") {
        sendEvent("application_submit", {
          form_type: "private_briefing",
          form_location: window.location.pathname,
        });
      }
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
