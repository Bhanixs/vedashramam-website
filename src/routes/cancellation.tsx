import { createFileRoute } from "@tanstack/react-router";
import CancellationPage from "@/pages/Cancellation";

export const Route = createFileRoute("/cancellation")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy — Vedashrama Gurukulam, Pondicherry" },
      {
        name: "description",
        content:
          "Cancellation and refund policy for voluntary charitable contributions, duplicate payment resolutions (within 7 days), and 7-10 business day turnaround.",
      },
      { property: "og:title", content: "Cancellation & Refund Policy — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "Donation refund rules, duplicate payment resolution, and support contact details.",
      },
    ],
  }),
  component: CancellationPage,
});
