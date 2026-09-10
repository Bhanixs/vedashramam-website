import { createFileRoute } from "@tanstack/react-router";
import PrivacyPage from "@/pages/Privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vedashrama Gurukulam, Pondicherry" },
      {
        name: "description",
        content:
          "Privacy policy of Vedashrama Gurukulam — information collection for donations and admissions, data protection, and RBI-compliant payment processing.",
      },
      { property: "og:title", content: "Privacy Policy — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "Data protection guidelines, 80G receipt compliance, and secure payment handling.",
      },
    ],
  }),
  component: PrivacyPage,
});
