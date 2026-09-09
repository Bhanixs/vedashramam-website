import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { HeartHandshake, CheckCircle2, ShieldCheck, CreditCard, Gift, Building } from "lucide-react";
import { useTrustSettings } from "@/lib/use-trust-settings";

export const Route = createFileRoute("/donate-for-sevas")({
  head: () => ({
    meta: [
      { title: "Donate for Sevas / Annadanam — Vedashramam" },
      {
        name: "description",
        content:
          "Sponsor sacred Sevas and Annadanam at Vedashramam. Sabha Sashwata Nidhi Fund, Nithya Sevas, Annual Sevas, and Corpus endowments.",
      },
      { property: "og:title", content: "Donate for Sevas / Annadanam — Vedashramam" },
      {
        property: "og:description",
        content: "Offer sacred Sevas and Annadanam with Sankalpam and Prasadam for donors.",
      },
    ],
  }),
  component: DonateForSevasPage,
});

function DonateForSevasPage() {
  const trust = useTrustSettings();

  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Donate for Sevas & Annadanam"
        subtitle="Support sacred daily pujas, homams, and Annadanam for Vedic Vidyarthis"
        image={heroTemple}
      />

      <Sloka
        devanagari="अन्नदानं परं दानं विद्यादानमतः परम्। अन्नेन क्षणिका तृप्तिः यावज्जीवं च विद्यया॥"
        transliteration="Annadanam Param Dhanam Vidyadanam Atah Param, Annena Kshanika Triptih Yavajjivam Cha Vidyaya."
        meaning="Gift of food is noble; gift of spiritual knowledge is paramount. Food grants immediate nourishment, while sacred wisdom sustains throughout life."
      />

      <section className="container-page py-20">
        <SectionHeading title="Seva & Annadanam Offerings" eyebrow="Sacred Sponsorships" />

        <div className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-foreground/80">
          Donors can contribute to any of the schemes below. <strong className="text-maroon">ANNADANAM</strong> will be
          performed on the respective auspicious occasion with your Sankalpam and prayers.
        </div>

        {/* Corpus Donation Highlight Card */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="surface-card relative overflow-hidden rounded-2xl border-2 border-gold/40 p-8 shadow-md">
            <div className="absolute right-0 top-0 rounded-bl-xl bg-gold px-4 py-1 text-[0.72rem] font-bold uppercase tracking-wider text-maroon">
              Corpus Endowment
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Scheme 1</span>
            <h3 className="mt-2 font-display text-2xl text-maroon">Sabha Sashwata Nidhi Fund</h3>
            <p className="mt-2 text-2xl font-bold text-primary">₹ 11,000 /-</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              Puja &amp; Sankalpam will be performed every Vinayaka Chaturthi in the name of the donor and family, and
              blessed sacred Prasadam will be dispatched.
            </p>
            <div className="mt-6">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-maroon"
              >
                <CreditCard className="h-4 w-4" />
                Donate Online Now
              </Link>
            </div>
          </div>
        </div>

        {/* Seva Categories Grid */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h4 className="font-display text-lg text-maroon">Annadanam During Nithya Sevas</h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              Daily morning and afternoon wholesome meals for 55+ resident Vedic students, Adhyapakas, and visitors.
              Sponsor a day's breakfast, lunch, or special feast.
            </p>
          </div>

          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                <Gift className="h-5 w-5" />
              </div>
              <h4 className="font-display text-lg text-maroon">Annadanam During Annual Sevas</h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              Special Samaradhana and Annadanam during major festivals including Sankara Jayanthi, Vasanta Navarathri,
              Mahasivarathri, and Patasala Annual Day celebrations.
            </p>
          </div>

          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                <Building className="h-5 w-5" />
              </div>
              <h4 className="font-display text-lg text-maroon">Contributions by Cheques / DDs</h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              Cheques or Demand Drafts drawn in favor of{" "}
              <strong className="text-maroon">{trust.trustName}</strong> or{" "}
              <strong className="text-maroon">Veda Ashrama Gurukulam</strong> may be sent to our registered address:{" "}
              <strong>{trust.address}</strong>.
              For direct bank transfer: <strong>{trust.bankName}, {trust.bankBranch}</strong>, A/c:{" "}
              <strong>{trust.accountNumber}</strong>, IFSC: <strong>{trust.ifscCode}</strong>, UPI:{" "}
              <strong>{trust.upiId}</strong>.
            </p>
          </div>

          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="font-display text-lg text-maroon">Contributions in Kind</h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              We warmly accept groceries including Rice, Toor Dal, Pure Ghee, Cooking Oil, Jaggery, Groceries, and Vastram
              (Dhoties) for the Vidyarthis and Gomata grass/fodder.
            </p>
          </div>
        </div>

        {/* Important Note to Donors / Statutory Info */}
        <div className="surface-card mt-12 rounded-2xl border-2 border-gold/40 p-8 shadow-md">
          <div className="flex items-center gap-2 text-maroon">
            <ShieldCheck className="h-5 w-5 text-gold" />
            <h4 className="font-display text-xl">Important Note to Donors</h4>
          </div>

          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Zero Transaction Fees:</strong> There are <strong>NO</strong> transaction charges applicable when
                donating online through our secure portal.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Sankalpam Details:</strong> Donors are requested to provide their Nakshatram, Gothram, and occasion
                details (Birthday, Wedding Day, or Ancestor Tithi) to perform Sankalpam and send receipt.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Corpus Protection:</strong> Corpus contributions are deposited in a designated Bank Account and the
                accrued interest is utilized for the chosen seva. Large corpus sums may also be remitted in 2 to 3 payments.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>80G Tax Exemption &amp; PAN:</strong> Income tax exemption is available under 80G Unique Registration
                No.: <strong>{trust.reg80g}</strong> (PAN: <strong>{trust.pan}</strong>) for{" "}
                <strong>{trust.trustName}</strong>. Donations above ₹2,000/- must
                be made in non-cash modes to qualify.
              </span>
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
            <Link
              to="/donate"
              className="rounded-md bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-maroon"
            >
              Proceed to Donate Online
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
