import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

import { useTrustSettings } from "@/lib/use-trust-settings";
import { TRUST_DETAILS } from "@/lib/trust-details";

export function SiteFooter() {
  const trust = useTrustSettings();

  return (
    <footer className="bg-maroon text-maroon-foreground">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" width={40} height={40} className="h-10 w-10" loading="lazy" />
            <span className="font-display text-2xl">Vedashramam</span>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-maroon-foreground/75">
            {trust.trustName} — Puducherry. Dedicated to Vedic education, Agama, Prayoga and Go Samrakshanam.
          </p>
          <p className="mt-5 font-display text-sm text-gold">
            लोकाः समस्ताः सुखिनो भवन्तु
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Sabha</h3>
          <ul className="mt-4 space-y-2 text-xs text-maroon-foreground/80">
            {[
              { label: "About Sabha", to: "/about-sabha" },
              { label: "Sabha Patrons & Trustees", to: "/sabha-patrons-trustees" },
              { label: "Veda Ashramam", to: "/veda-ashramam" },
              { label: "Activities & Events", to: "/activities" },
              { label: "Donate for Sevas/Annadanam", to: "/donate-for-sevas" },
              { label: "Panchangam", to: "/panchangam" },
              { label: "Downloads", to: "/downloads" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Veda Patasala</h3>
          <ul className="mt-4 space-y-2 text-xs text-maroon-foreground/80">
            {[
              { label: "Why Veda Samrakshanam", to: "/why-veda-samrakshanam" },
              { label: "Raja Sastrigal", to: "/rajasastrigal"},
              { label: "Our Vision", to: "/our-vision" },
              { label: "Patasala Details", to: "/patasala-details" },
              { label: "Our Achievements", to: "/our-achievements" },
              { label: "Sources of Sustenance", to: "/sources-of-sustenance" },
              { label: "Ways to Support – Donate Now", to: "/ways-to-support" },
              { label: "Appeal for Building Construction", to: "/appeal-for-building-construction" },
              { label: "EPFO Form 5A Extract", to: "/epfo-form-5a" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Reach Us</h3>
          <ul className="mt-4 space-y-3 text-xs text-maroon-foreground/80">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{trust.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{trust.phone} (UPI: {trust.upiId})</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{trust.email}</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/donate"
              className="inline-block rounded bg-primary px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-maroon transition-colors"
            >
              Donate Online Now
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-maroon-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-maroon-foreground/65 sm:flex-row">
          <div>
            <p>© {new Date().getFullYear()} Vedashramam. All rights reserved.</p>
            <p className="mt-0.5 text-[0.7rem] text-gold/80">
              PAN: {trust.pan} | 80G Unique Regn No: {trust.reg80g} ({TRUST_DETAILS.approval80G.validityPeriod})
            </p>
          </div>
          <div className="flex gap-5">
            <Link to="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/cancellation" className="hover:text-gold">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
