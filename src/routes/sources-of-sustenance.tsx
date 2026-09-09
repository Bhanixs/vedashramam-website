import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { Coins, TrendingUp, Heart, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/sources-of-sustenance")({
  head: () => ({
    meta: [
      { title: "Sources of Sustenance — Veda Ashrama Gurukulam" },
      {
        name: "description",
        content:
          "Financial sustenance, monthly operating budget, and public appeals for Veda Ashrama Gurukulam and Patasala.",
      },
      { property: "og:title", content: "Sources of Sustenance — Vedashramam" },
      {
        property: "og:description",
        content: "How public donations and corpus funds sustain our 55+ students, teachers, and boarding facilities.",
      },
    ],
  }),
  component: SourcesOfSustenancePage,
});

export function SourcesOfSustenancePage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Sources of Sustenance"
        subtitle="Financial Realities, Operating Costs &amp; The Appeal for Public Sponsorship"
        image={heroTemple}
      />

      <Sloka
        devanagari="दातव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥"
        transliteration="Datavyamiti Yaddanam Deeyate'nupakarine, Deshe Kale Cha Patre Cha Taddanam Sattvikam Smritam."
        meaning="Bhagavad Gita (17.20) — “Charity given out of duty, without expectation of return, at the proper place and time, and to a worthy recipient, is Sattvic (pure).”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Sustaining the Sacred Fire" eyebrow="Financial Foundation" />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            The main source of funds to maintain and run the Patasala relies on donations from well-wishers,
            philanthropists and charitable institutions. The Corpus Fund built over the years is not sufficient to meet
            the expenses now with the present strength of the Patasala, since the interest rates offered by the Banks
            have fallen drastically.
          </p>

          <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 text-center sm:text-left">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Monthly Operational Outlay</span>
                <div className="mt-1 font-display text-3xl font-bold text-maroon">₹ 14,00,000 / month</div>
                <p className="mt-1 text-xs text-foreground/75">
                  Average monthly expenses for Boarding, Clothing, Accommodation, Medical care, and Infrastructure.
                </p>
              </div>
              <Link
                to="/ways-to-support"
                className="shrink-0 rounded-md bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-maroon"
              >
                Support Monthly Costs
              </Link>
            </div>
          </div>

          <p>
            We earnestly appeal to all our Well-Wishers and General Public to come forward and help us by contributing
            their best to sustain the growth of the Patasala for promoting and propagating our Vedic Dharma to future
            generations and preserve our Vedic Tradition &amp; Culture. By sharing our concern you are greatly helping
            us to preserve the Spiritual and Cultural Legacy of Bharata Varsha.
          </p>

          <p>
            Prospective Donors are warmly invited to participate in any of the various Endowment / Sponsorship Schemes
            such that Donors may Contribute for some specific occasion or purpose such as Birthday, Wedding
            Anniversary or in memory of ancestral family members.
          </p>

          <p>
            Apart from this, we also accept contributions in general even in a very small measure according to their mite
            or in kind (Rice, Dal, Oil, Ghee, Vastram, etc.) to take care of the daily activities.
          </p>
        </div>

        {/* 3 Pillars of Support */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-maroon">
              <Coins className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg text-maroon">Corpus Funds</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/75">
              Long-term capital invested in bank deposits where annual interest yields perpetual support for student
              boarding and festivals.
            </p>
          </div>

          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-maroon">
              <Heart className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg text-maroon">Endowment Ubhayams</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/75">
              Specific sponsorships tied to personal family milestones like birthdays, anniversaries, or ancestral
              shraddha tithis.
            </p>
          </div>

          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-maroon">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg text-maroon">In-Kind Offerings</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/75">
              Direct delivery of essential food items (Rice, Pulses, Cooking Oils) and clothing (Dhoties) for resident
              monastic students.
            </p>
          </div>
        </div>

        {/* 80G & Action Banner */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-muted/40 p-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-gold" />
            <h4 className="font-display text-lg text-maroon">Income Tax Exemption U/S 80G</h4>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-foreground/80">
            All donations made to the Trust are eligible for tax deduction under Section 80G of the Indian Income Tax
            Act. Donations above Rs. 2,000/- should be made in non-cash modes to qualify. Donors should kindly provide
            their PAN details along with their remittance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-xs font-semibold text-foreground/70">
              Ready to learn more about specific sponsorship schemes?
            </span>
            <Link
              to="/ways-to-support"
              className="inline-flex items-center gap-2 rounded-md bg-maroon px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-maroon-foreground transition-colors hover:bg-primary"
            >
              Ways to Support – Donate Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
