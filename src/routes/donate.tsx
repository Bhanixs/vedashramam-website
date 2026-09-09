import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, UtensilsCrossed, Building2 } from "lucide-react";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate Now — Support Vedashramam" },
      {
        name: "description",
        content:
          "Support Vedashramam through Vidyadanam and Annadanam — sustaining student boarding, acharya support and facility upkeep at the Veda Patasala.",
      },
      { property: "og:title", content: "Donate Now — Support Vedashramam" },
      {
        property: "og:description",
        content: "Vidyadanam and Annadanam for the students and acharyas of the Veda Patasala.",
      },
    ],
  }),
  component: DonatePage,
});

const WAYS = [
  {
    icon: BookOpen,
    title: "Vidyadanam & Student Welfare",
    body: "Sponsor a Vidyarthi’s comprehensive education, instruction, traditional vastram (dhoties), and study materials for a month or year.",
  },
  {
    icon: UtensilsCrossed,
    title: "Annadanam & Samaradhana",
    body: "Sponsor daily meals (Bhojanam / Samaradhana) for resident students and Adhyapakas on special family occasions, birthdays, or anniversaries.",
  },
  {
    icon: Building2,
    title: "Patasala Building & Corpus Fund",
    body: "Contribute to the long-term Sashwata Nidhi endowment and the expansion of classroom facilities, library, and student living quarters.",
  },
];

const SEVAS = [
  { seva: "Daily Rudrabhishekam", schedule: "Daily at 6:00 AM", amount: "₹101 / day", details: "Sankalpam performed daily with sacred abhishekam." },
  { seva: "Pradosha Puja", schedule: "Every Trayodashi at 5:00 PM", amount: "₹150 / ₹2,400 (Annual)", details: "Special Shiva puja & archana during Pradosham." },
  { seva: "Ganapathi Homam", schedule: "Sankatahara Chaturthi at 6:00 AM", amount: "₹200 / ₹2,400 (Annual)", details: "Vighnaharta homam for obstacle removal." },
  { seva: "Avahanti Homam", schedule: "Shukla Panchami at 6:00 AM", amount: "₹200 / ₹2,400 (Annual)", details: "Vedic homam for prosperity and spiritual wisdom." },
  { seva: "Pada Pooja & Anusham Star", schedule: "Thursdays & Anusham at 7:00 AM", amount: "₹200 / ₹2,400 (Annual)", details: "Acharya pada pooja and Mahaswamigal star worship." },
  { seva: "Sahasranama & Parayanam", schedule: "Lalitha / Vishnu / Sundarakanda", amount: "₹500 – ₹1,000 / occurrence", details: "Monthly parayanams with community chanting." },
];

function DonatePage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Donate Now"
        subtitle="Loka Samastha Sukhino Bhavantu — Ways to Support"
        image={heroTemple}
      />

      <Sloka
        devanagari="असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय॥"
        transliteration="Asato Ma Sadgamaya, Tamaso Ma Jyotirgamaya, Mrityor Ma Amritam Gamaya."
        meaning="Brihadaranyaka Upanishad — “Lead me from the unreal to the real, from darkness to light, from death to immortality.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Support Vedashramam" eyebrow="Vidyadanam · Annadanam · Sevas" />

        <p className="mx-auto mt-12 max-w-3xl text-center text-[0.95rem] leading-relaxed text-foreground/85">
          As a non-profit charitable trust, Vedashramam relies on the munificence and devotion of patrons,
          philanthropists, and well-wishers to sustain the daily Gurukula education, student boarding, Adhyapaka
          support, and spiritual activities.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {WAYS.map((w) => (
            <div key={w.title} className="surface-card surface-card-hover p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <w.icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-6 font-display text-xl text-maroon">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>

        {/* Nithya Sevas & Sankalpam Table */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Nithya &amp; Monthly Sevas</h3>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Devotees can subscribe for regular sankalpam and receive sacred prasadam
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <div className="hidden grid-cols-[1.5fr_1.5fr_1.2fr_2fr] bg-accent/50 p-4 text-xs font-semibold uppercase tracking-[0.12em] text-maroon sm:grid">
              <span>Seva / Occasion</span>
              <span>Schedule</span>
              <span>Contribution</span>
              <span>Details</span>
            </div>
            {SEVAS.map((s, i) => (
              <div
                key={s.seva}
                className={`grid grid-cols-1 gap-2 p-5 sm:grid-cols-[1.5fr_1.5fr_1.2fr_2fr] sm:items-center ${
                  i % 2 === 0 ? "bg-card" : "bg-muted/40"
                }`}
              >
                <span className="font-medium text-foreground">{s.seva}</span>
                <span className="text-xs text-muted-foreground">{s.schedule}</span>
                <span className="text-xs font-semibold text-primary">{s.amount}</span>
                <span className="text-xs text-foreground/80">{s.details}</span>
              </div>
            ))}
          </div>
        </div>

        {/* In-Kind Contributions Note */}
        <div className="mx-auto mt-12 max-w-4xl surface-card p-6 text-center">
          <h4 className="font-display text-lg text-maroon">Contributions in Kind</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Offerings in kind such as Vastram (traditional dhoties for Vidyarthis), Rice, Dal, Ghee, and Oil are gratefully accepted for the daily Annadanam of the Gurukulam.
          </p>
        </div>

        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-lg border border-border p-8 text-center shadow-soft">
          <h3 className="font-display text-2xl text-maroon">Bank Transfer &amp; Payment Details</h3>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            வங்கி விவரங்கள் &amp; நன்கொடை விவரங்கள்
          </p>

          <div className="mt-6 text-left grid gap-4 rounded-md border border-border bg-card p-6 text-sm">
            <div className="flex justify-between border-b border-border/60 pb-2">
              <span className="text-muted-foreground">Account Name:</span>
              <span className="font-semibold text-foreground">Vedashramam Sabha</span>
            </div>
            <div className="flex justify-between border-b border-border/60 pb-2">
              <span className="text-muted-foreground">Bank &amp; Branch:</span>
              <span className="font-semibold text-foreground">Puducherry Branch</span>
            </div>
            <div className="flex justify-between border-b border-border/60 pb-2">
              <span className="text-muted-foreground">Account No / IFSC:</span>
              <span className="font-semibold text-foreground">[To be published upon gateway finalisation]</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">UPI ID:</span>
              <span className="font-semibold text-foreground">vedashramam@upi</span>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-foreground/80">
            For online gateway contributions, specific sponsorship inquiries (Vidyadanam / Annadanam), or Ubhayam sankalpams, please reach out to us directly. Tax receipts under Section 80G will be issued upon receipt.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-md bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon"
            >
              Contact Us to Donate / தொடர்புகொள்ள
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span>Donations governed by our:</span>
            <Link to="/terms" className="text-primary underline-offset-2 hover:underline">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link to="/privacy" className="text-primary underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/cancellation" className="text-primary underline-offset-2 hover:underline">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
