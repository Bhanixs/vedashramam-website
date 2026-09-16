import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import defaultUpiQr from "@/assets/UPI-QR/qr-code.jpeg";
import { ArrowRight, Building2, Copy, Check, QrCode, Maximize2, X, ZoomIn } from "lucide-react";
import { useTrustSettings } from "@/lib/use-trust-settings";
import { TRUST_DETAILS } from "@/lib/trust-details";
import { resolveMediaUrl } from "@/lib/resolve-media";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate Now — Veda Ashrama Gurukulam, Puducherry" },
      {
        name: "description",
        content:
          "Support Veda Ashrama Gurukulam. Contribute for Sankara Jayanthi & Nithya Sevas, sponsor our Vidyarthis, or support the Patasala Building Fund.",
      },
      { property: "og:title", content: "Donate Now — Vedashrama Gurukulam" },
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

function DonatePage() {
  const trust = useTrustSettings();
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [isQrZoomed, setIsQrZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsQrZoomed(false);
      }
    };
    if (isQrZoomed) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isQrZoomed]);

  const handleCopyUpi = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(trust.upiId);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2500);
    }
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
                <a
                  href="#upi-qr-section"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-maroon"
                >
                  <QrCode className="h-4 w-4" />
                  Scan UPI QR to Donate
                </a>

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

        {/* UPI QR Code Section */}
        <div id="upi-qr-section" className="mx-auto mt-16 max-w-3xl scroll-mt-24 rounded-2xl border-2 border-gold/40 bg-card p-6 sm:p-8 shadow-md">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Instant &amp; Direct Contribution</span>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl text-maroon">Scan to Donate via UPI</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Zero transaction charges. Remit directly to the Trust&apos;s verified account at Indian Overseas Bank.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-center sm:justify-around">
            {/* QR Image with Click to Enlarge */}
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => setIsQrZoomed(true)}
                className="group relative cursor-zoom-in rounded-2xl border-2 border-gold/40 bg-white p-3 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-gold hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold"
                title="Click to view larger in image viewer"
              >
                <img
                  src={resolveMediaUrl(trust.upiQrUrl) || defaultUpiQr}
                  alt="Vedashrama Gurukulam Official UPI QR Code"
                  className="h-60 w-60 sm:h-64 sm:w-64 object-contain rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/35 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-maroon shadow-md">
                    <Maximize2 className="h-3.5 w-3.5" />
                    Click to Enlarge
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setIsQrZoomed(true)}
                className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-maroon hover:underline"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                Tap to view larger / scan clearly
              </button>
            </div>

            {/* UPI ID Details & Copy */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 max-w-sm">
              <div className="w-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Official UPI ID</p>
                <div className="mt-1.5 flex items-center justify-between gap-2 rounded-xl border border-border bg-background px-4 py-2.5 shadow-sm">
                  <span className="font-mono text-base font-bold text-primary">{trust.upiId}</span>
                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className="inline-flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-foreground hover:bg-gold/20 hover:text-maroon transition-colors"
                    title="Copy UPI ID"
                  >
                    {copiedUpi ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Supported Payment Apps</p>
                <div className="mt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                  {["Google Pay", "PhonePe", "Paytm", "BHIM", "Any UPI App"].map((app) => (
                    <span
                      key={app}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-[0.72rem] font-medium text-foreground/80 shadow-2xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-gold/30 bg-gold/5 p-3 text-xs text-foreground/85 leading-relaxed">
                <p>
                  <strong>Tax Exemption Note:</strong> Eligible for 80G tax deduction (URN: <span className="font-mono font-semibold">{trust.reg80g}</span>). After transferring, kindly send your transaction reference and PAN to{" "}
                  <a href={`tel:${trust.phone}`} className="font-semibold text-maroon hover:underline">{trust.phone}</a> or{" "}
                  <a href={`mailto:${trust.email}`} className="font-semibold text-maroon hover:underline">{trust.email}</a> so we may issue receipts and offer prayers with Sankalpam.
                </p>
              </div>
            </div>
          </div>
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
              <span className="text-muted-foreground">Trust / Establishment Name:</span>
              <span className="font-semibold text-foreground text-right sm:max-w-md">
                {trust.trustName}
              </span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">Account Name / In favour of:</span>
              <span className="font-bold text-maroon">{TRUST_DETAILS.banking.accountName}</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">Bank &amp; Branch:</span>
              <span className="font-semibold text-foreground">
                {trust.bankName}, {trust.bankBranch}
              </span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">Account Number:</span>
              <span className="font-mono font-bold text-foreground">{trust.accountNumber}</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">Branch Code:</span>
              <span className="font-mono font-semibold text-foreground">2121</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">IFSC Code:</span>
              <span className="font-mono font-bold text-foreground">{trust.ifscCode}</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">UPI ID:</span>
              <span className="font-mono font-bold text-primary">{trust.upiId}</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">PAN:</span>
              <span className="font-mono font-bold text-foreground">{trust.pan}</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">80G Unique Registration No.:</span>
              <span className="font-mono font-bold text-primary">{trust.reg80g}</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">80G Approval Period:</span>
              <span className="font-semibold text-foreground">03-08-2022 to AY 2025-2026 (Provisional: 03-08-2022)</span>
            </div>
            <div className="flex flex-col py-2.5 sm:flex-row sm:justify-between">
              <span className="text-muted-foreground">Registered Address:</span>
              <span className="font-semibold text-foreground text-right sm:max-w-xs">
                {trust.address}
              </span>
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

      {/* Lightbox / Large Image Viewer Modal */}
      {isQrZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all animate-in fade-in duration-200"
          onClick={() => setIsQrZoomed(false)}
        >
          <div
            className="relative flex flex-col items-center max-w-lg w-full rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsQrZoomed(false)}
              className="absolute right-4 top-4 rounded-full bg-stone-100 p-2 text-stone-600 transition-colors hover:bg-stone-200 hover:text-stone-900 focus:outline-none"
              aria-label="Close QR image viewer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">Official UPI QR Code</span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-maroon mt-0.5">
                {trust.trustName}
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                Scan with Google Pay, PhonePe, Paytm, BHIM or any UPI banking app
              </p>
            </div>

            {/* High-Resolution Large QR Preview */}
            <div className="rounded-2xl border-2 border-gold/40 bg-white p-4 shadow-md my-2">
              <img
                src={resolveMediaUrl(trust.upiQrUrl) || defaultUpiQr}
                alt="Enlarged Official UPI QR Code"
                className="max-h-[60vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* UPI ID Copy & Action Footer */}
            <div className="mt-3 flex w-full flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-stone-100">
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">UPI ID</p>
                <p className="font-mono text-sm font-bold text-maroon">{trust.upiId}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-50 border border-amber-200 px-3.5 py-2 text-xs font-semibold text-amber-900 hover:bg-amber-100 transition-colors"
                >
                  {copiedUpi ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy UPI ID</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsQrZoomed(false)}
                  className="rounded-xl bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
