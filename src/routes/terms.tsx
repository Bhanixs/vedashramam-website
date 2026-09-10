import { createFileRoute } from "@tanstack/react-router";
import TermsPage from "@/pages/Terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Vedashrama Gurukulam, Pondicherry" },
      {
        name: "description",
        content:
          "Terms and conditions for Vedashrama Gurukulam Sabha and Veda Patasala, Pondicherry — trust objectives, donations, intellectual property, and jurisdiction.",
      },
      { property: "og:title", content: "Terms & Conditions — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "Institutional directives, donation terms, and legal jurisdiction of Vedashrama Gurukulam Sabha.",
      },
    ],
  }),
  component: TermsPage,
});
