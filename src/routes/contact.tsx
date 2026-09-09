import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageShell, PageBanner, SectionHeading } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";
import { useTrustSettings } from "@/lib/use-trust-settings";

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
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState("General Enquiry");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin?action=contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, interest, message }),
      });
      if (res.ok) {
        setSent(true);
        setName("");
        setContact("");
        setMessage("");
        toast.success("நன்றி! உங்கள் செய்தி பெறப்பட்டது / Thank you! Your enquiry has been received.");
      } else {
        toast.error("Failed to submit enquiry. Please try calling directly.");
      }
    } catch {
      toast.error("Network error. Please try again or reach out via phone.");
    } finally {
      setLoading(false);
    }
  };

  const trust = useTrustSettings();

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
                value: trust.address,
              },
              {
                icon: Phone,
                label: "Phone / UPI",
                value: `${trust.phone} (UPI: ${trust.upiId})`,
              },
              {
                icon: Mail,
                label: "Email",
                value: `${trust.email} (Official contact)`,
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

          <form className="surface-card space-y-5 p-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
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
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Mobile number or email address"
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div>
              <label htmlFor="interest" className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                I&apos;m interested in
              </label>
              <select
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              >
                {INTERESTS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
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
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your enquiry or requirement..."
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
            {sent && (
              <p className="text-center text-sm text-primary">
                Thank you — your enquiry has been saved and registered. Our Trustees will connect with you soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}
