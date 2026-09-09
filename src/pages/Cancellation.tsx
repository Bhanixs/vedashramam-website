import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";
import { Heart, RefreshCw, Clock, LifeBuoy } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CancellationPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Cancellation & Refund Policy"
        subtitle="ரத்து மற்றும் பணத்தைத் திரும்பப் பெறுதல் கொள்கை"
        image={heroHomam}
      />

      <Sloka
        devanagari="श्रद्धया देयम्। अश्रद्धया अदेयम्। श्रिया देयम्। ह्रिया देयम्। भिया देयम्। संविदा देयम्॥"
        transliteration="Shraddhaya Deyam, Ashraddhaya Adeyam, Shriya Deyam, Hriya Deyam, Bhiya Deyam, Samvida Deyam."
        meaning="Taittiriya Upanishad — “Give with faith; never give without faith. Give with dignity, modesty, reverence, and understanding.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Cancellation & Refund Policy" eyebrow="ரத்து மற்றும் பணத்தைத் திரும்பப் பெறுதல்" />

        <div className="mx-auto mt-12 max-w-4xl space-y-10">
          {/* Section 1: Voluntary Charitable Contributions */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">1. Voluntary Charitable Contributions</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  தன்னார்வ அறக்கொடைகள்
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                All financial offerings, donations, and sponsorships made to <strong>Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust</strong> (operating the residential Veda Ashrama Gurukulam in Puducherry, including <em>Vidyadanam</em>, <em>Annadanam</em>, and <em>General Corpus Funds</em>) are voluntary charitable contributions given in support of Sanatana Dharma Prachara and traditional Vedic education.
              </p>
              <p>
                As charitable donations are immediately committed to student welfare, acharya support, and ritual observances, regular donations are non-refundable once processed.
              </p>
            </div>
          </div>

          {/* Section 2: Duplicate & Erroneous Payments */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <RefreshCw className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">2. Duplicate &amp; Erroneous Payments</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  இரட்டை மற்றும் தவறான கட்டணங்கள் (7 நாட்களுக்குள்)
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                In cases where a payment error occurs — such as a technical glitch resulting in double debiting, an incorrect amount being charged, or an accidental transaction — the donor must notify Vedashramam within <strong>7 calendar days</strong> of the transaction date.
              </p>
              <div className="rounded-lg bg-muted/50 p-4 text-sm text-foreground/80">
                <strong>Notification Requirement:</strong> Please write to us with the transaction ID, date, donor name, and payment receipt copy to initiate verification.
              </div>
            </div>
          </div>

          {/* Section 3: Refund Processing Turnaround */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">3. Refund Processing Turnaround</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  பணத்தைத் திரும்பப் பெறும் காலம் (7–10 வேலை நாட்கள்)
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                Once a duplicate or erroneous transaction request is verified and approved by the trust management:
              </p>
              <ul className="space-y-2 pl-4 text-sm text-foreground/85">
                <li className="list-disc">
                  The refund will be processed back to the <strong>original payment source</strong> (bank account, UPI handle, or debit/credit card used during the transaction).
                </li>
                <li className="list-disc">
                  The standard refund processing turnaround time is <strong>7 to 10 business days</strong> from the date of refund approval, depending on bank and gateway processing schedules.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: Contact & Support */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <LifeBuoy className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">4. Contact &amp; Support</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  தொடர்புகொள்ள
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                For any queries regarding donations, transaction verification, or cancellation requests, please contact our trust administration:
              </p>
              <div className="mandala-bg rounded-lg border border-border p-6 text-center space-y-3">
                <p className="font-display text-lg text-maroon">Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust</p>
                <p className="text-sm text-foreground/80">151, Edayanchavadi Road, OM Sakthi Nagar, Lawspet S.O, Puducherry, India - 605008</p>
                <p className="text-xs text-muted-foreground">Contact / UPI: +91 98423 27791 (UPI: 9842327791@IOB)</p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-maroon"
                  >
                    Send Support Message / தொடர்புகொள்ள
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default CancellationPage;
