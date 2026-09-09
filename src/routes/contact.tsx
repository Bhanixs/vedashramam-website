import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageShell, PageBanner, SectionHeading } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Vedashramam, Pondicherry" },
      {
        name: "description",
        content:
          "Get in touch with Vedashramam, Pondicherry for Sabha activities, Veda Patasala admissions, donations or general enquiries.",
      },
      { property: "og:title", content: "Contact Us — Vedashramam" },
      { property: "og:description", content: "Sabha activities, Patasala admissions, donations and enquiries." },
    ],
  }),
  component: ContactPage,
});

const INTERESTS = [
  "Sabha Activities",
  "Veda Patasala Admissions",
  "Donations",
  "General Enquiry",
];

import { toast } from "sonner";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell transparentHeader>
      <PageBanner title="Contact Us" subtitle="We would be glad to hear from you" image={heroHomam} />

      <section className="container-page py-20">
        <SectionHeading title="Get in Touch" eyebrow="Lawspet / Karuvadikuppam, Puducherry" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                label: "Registered Address",
                value: "151, Edayanchavadi Road, OM Sakthi Nagar, Lawspet S.O, Puducherry, India - 605008",
              },
              {
                icon: Phone,
                label: "Phone / UPI",
                value: "+91 98423 27791 (UPI: 9842327791@IOB)",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@vedaashramam.example (Official contact)",
              },
            ].map((c) => (
              <div key={c.label} className="surface-card flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent">
                  <c.icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{c.label}</p>
                  <p className="mt-1 text-sm text-foreground/85">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="surface-card space-y-5 p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("நன்றி! உங்கள் செய்தி பெறப்பட்டது / Thank you! Your enquiry has been received.");
            }}
          >
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                required
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div>
              <label htmlFor="contact" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Email / Phone
              </label>
              <input
                id="contact"
                required
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div>
              <label htmlFor="interest" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                I&apos;m interested in
              </label>
              <select
                id="interest"
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              >
                {INTERESTS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon"
            >
              Send Enquiry
            </button>
            {sent && (
              <p className="text-center text-sm text-primary">
                Thank you — your enquiry has been noted. We will respond shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}
