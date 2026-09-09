import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { CreditCard, ArrowRight, ShieldCheck, Heart, Building2, CheckCircle2, X } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate Now — Veda Ashrama Gurukulam, Puducherry" },
      {
        name: "description",
        content:
          "Support Veda Ashrama Gurukulam. Contribute for Sankara Jayanthi & Nithya Sevas, sponsor our Vidyarthis, or support the Patasala Building Fund.",
      },
      { property: "og:title", content: "Donate Now — Vedashramam" },
      {
        property: "og:description",
        content: "Donate online for Sevas, Annadanam, Vidyarthi sponsorship, and the New Patasala Building Fund.",
      },
    ],
  }),
  component: DonatePage,
});

type DonationStream = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  detailsLink: string;
  detailsLabel: string;
  defaultCategory: string;
};

const DONATION_STREAMS: DonationStream[] = [
  {
    id: "sevas",
    tag: "Donate for",
    title: "Veda Ashrama Gurukulam",
    subtitle: "Contribute for Sankara Jayanthi & Nithya Sevas",
    detailsLink: "/donate-for-sevas",
    detailsLabel: "Donate for Sevas / Annadanam",
    defaultCategory: "Sankara Jayanthi & Nithya Sevas",
  },
  {
    id: "vidyarthis",
    tag: "Donate for",
    title: "Veda Ashrama Gurukulam",
    subtitle: "Sponsor our Vidyarthis or support the Gurukulam",
    detailsLink: "/ways-to-support",
    detailsLabel: "Ways to Support – Donate Now",
    defaultCategory: "Vidyarthi Sponsorship & Gurukulam Support",
  },
  {
    id: "building",
    tag: "Donate for",
    title: "Veda Patasala Building Fund",
    subtitle: "Contribute to our New Patasala building fund",
    detailsLink: "/appeal-for-building-construction",
    detailsLabel: "Appeal for Building Construction",
    defaultCategory: "New Patasala Building Fund",
  },
];

export function DonatePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState<string>("Sankara Jayanthi & Nithya Sevas");
  const [amount, setAmount] = useState<string>("5000");
  const [donorName, setDonorName] = useState<string>("");
  const [donorPhone, setDonorPhone] = useState<string>("");
  const [donorPan, setDonorPan] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const openDonateModal = (purpose: string) => {
    setSelectedPurpose(purpose);
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Donate Now"
        subtitle="Support Veda Ashrama Gurukulam — Karuvadikuppam, Puducherry"
        image={heroTemple}
      />

      <Sloka
        devanagari="दातव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥"
        transliteration="Datavyamiti Yaddanam Deeyate'nupakarine, Deshe Kale Cha Patre Cha Taddanam Sattvikam Smritam."
        meaning="Bhagavad Gita (17.20) — “Charity given out of duty, without expectation of return, at the proper place and time, and to a worthy recipient, is Sattvic.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Choose Your Contribution" eyebrow="Donate Now" />

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-foreground/80">
          As a non-profit charitable trust, Veda Ashrama Gurukulam relies on the munificence and devotion of patrons,
          philanthropists, and well-wishers to sustain traditional Vedic education and student welfare.
        </p>

        {/* 3 Core Featured Donation Streams */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
          {DONATION_STREAMS.map((stream) => (
            <div
              key={stream.id}
              className="surface-card flex flex-col justify-between rounded-2xl border-2 border-border/80 p-8 shadow-sm transition-all hover:border-gold/60 hover:shadow-md"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{stream.tag}</span>
                <h3 className="mt-2 font-display text-2xl text-maroon">{stream.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{stream.subtitle}</p>
              </div>

              <div className="mt-8 space-y-3 border-t border-border/60 pt-6">
                <button
                  type="button"
                  onClick={() => openDonateModal(stream.defaultCategory)}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-maroon"
                >
                  <CreditCard className="h-4 w-4" />
                  Donate Now
                </button>

                <div className="text-center">
                  <Link
                    to={stream.detailsLink}
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-maroon hover:underline"
                  >
                    More Details ({stream.detailsLabel})
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bank & Cheque Details */}
        <div className="mandala-bg mx-auto mt-20 max-w-3xl rounded-2xl border border-border p-8 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-maroon">
            <Building2 className="h-6 w-6 text-gold" />
            <h3 className="font-display text-2xl">Contributions by Cheque / DD &amp; Bank Transfer</h3>
          </div>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.14em] text-muted-foreground">
            வங்கி விவரங்கள் &amp; நேரடி பரிவர்த்தனை
          </p>

          <div className="mt-6 divide-y divide-border/70 rounded-xl border border-border bg-card p-6 text-sm">
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">Account Name / Cheque in favour of:</span>
              <span className="font-bold text-maroon">VEDA ASHRAMA GURUKULAM</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">Postal / Ashram Address:</span>
              <span className="font-semibold text-foreground">
                The Managing Trustee, Karuvadikuppam, Puducherry
              </span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">PAN Number:</span>
              <span className="font-mono font-bold text-foreground">To be verified prior to publication</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">80-G Registration:</span>
              <span className="font-mono font-bold text-primary">AAATS7438NF19923 (AY 2022-23 to AY 2026-27)</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-gold/30 bg-gold/5 p-4 text-xs leading-relaxed text-foreground/85">
            <p>
              <strong>Note on 80G Tax Exemption:</strong> Donations above ₹2,000/- should be made in any mode other than
              cash to qualify as a deduction under Section 80G. Donors are kindly requested to send their PAN number and
              transaction details so we may dispatch receipts and offer prayers with Sankalpam.
            </p>
          </div>
        </div>
      </section>

      {/* Online Donation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Online Donation</span>
                <h3 className="font-display text-2xl text-maroon">Support Vedashramam</h3>
                <p className="text-xs text-muted-foreground">Zero transaction charges apply.</p>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/75">
                    Selected Purpose
                  </label>
                  <select
                    value={selectedPurpose}
                    onChange={(e) => setSelectedPurpose(e.target.value)}
                    className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Sankara Jayanthi & Nithya Sevas">Sankara Jayanthi &amp; Nithya Sevas</option>
                    <option value="Vidyarthi Sponsorship & Gurukulam Support">
                      Vidyarthi Sponsorship &amp; Gurukulam Support
                    </option>
                    <option value="New Patasala Building Fund">New Patasala Building Fund</option>
                    <option value="Sabha Sashwata Nidhi Fund (₹11,000)">
                      Sabha Sashwata Nidhi Fund (₹11,000)
                    </option>
                    <option value="Mid-Day Samaradhana (₹6,000)">Mid-Day Samaradhana (₹6,000)</option>
                    <option value="General Corpus Contribution">General Corpus Contribution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/75">
                    Amount (₹ INR)
                  </label>
                  <div className="mt-1 flex gap-2">
                    {["2000", "5000", "11000", "25000"].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(preset)}
                        className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                          amount === preset
                            ? "border-primary bg-primary text-primary-foreground font-bold"
                            : "border-border bg-card text-foreground hover:bg-muted"
                        }`}
                      >
                        ₹{preset}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    min="100"
                    className="mt-2 w-full rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/75">
                    Full Name (For Sankalpam &amp; Receipt)
                  </label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/75">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      required
                      placeholder="+91 Mobile"
                      className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/75">
                      PAN Number (80G)
                    </label>
                    <input
                      type="text"
                      value={donorPan}
                      onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                      placeholder="ABCDE1234F"
                      className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 text-sm uppercase text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-maroon"
                  >
                    Proceed with ₹{amount}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl text-maroon">Dhanyosmi! Thank You</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Thank you, <strong>{donorName}</strong>. Your intention to contribute{" "}
                  <strong>₹{amount}</strong> towards <strong>{selectedPurpose}</strong> has been registered.
                </p>
                <p className="text-xs text-muted-foreground">
                  Our Trustees will contact you directly at {donorPhone} with bank transfer verification, Sankalpam
                  details, and your 80-G tax exemption receipt.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="rounded-md bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-maroon"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </PageShell>
  );
}
