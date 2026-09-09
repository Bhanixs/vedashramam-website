import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { FileText, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/epfo-form-5a")({
  head: () => ({
    meta: [
      { title: "EPFO Form 5A Extract — Statutory Disclosures — Vedashramam" },
      {
        name: "description",
        content:
          "Statutory disclosure of Employees' Provident Fund Organisation (EPFO) Form 5A establishment particulars and governance records.",
      },
      { property: "og:title", content: "EPFO Form 5A Extract — Vedashramam" },
      {
        property: "og:description",
        content: "Statutory compliance and establishment particulars for Sri Sai Shankara Bhakta Sabha Trust.",
      },
    ],
  }),
  component: EpfoForm5aPage,
});

export function EpfoForm5aPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="EPFO Form 5A Extract"
        subtitle="Statutory Compliance &amp; Institutional Governance Returns"
        image={heroTemple}
      />

      <section className="container-page py-20">
        <SectionHeading title="Statutory Compliance Disclosures" eyebrow="EPFO Form 5A" />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, Form 5A represents the
            official return of ownership and particulars of the establishment and its branches/departments.
          </p>
          <p>
            Sri Sai Shankara Bhakta Sabha Educational and Go Samrakshana Seva Trust and Veda Ashrama Gurukulam uphold
            uncompromising standards of institutional transparency, statutory filing, and compliance with Central and
            State regulatory frameworks.
          </p>
        </div>

        {/* Compliance Table Card */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-gold" />
            <h3 className="font-display text-xl text-maroon">Establishment Particulars</h3>
          </div>

          <div className="mt-6 divide-y divide-border/80 text-sm">
            <div className="flex flex-col py-3 sm:flex-row sm:justify-between">
              <span className="font-medium text-foreground/70">Name of the Establishment:</span>
              <span className="font-semibold text-foreground">
                Sri Sai Shankara Bhakta Sabha Educational and Go Samrakshana Seva Trust
              </span>
            </div>
            <div className="flex flex-col py-3 sm:flex-row sm:justify-between">
              <span className="font-medium text-foreground/70">Registered Address:</span>
              <span className="font-semibold text-foreground">Karuvadikuppam, Puducherry</span>
            </div>
            <div className="flex flex-col py-3 sm:flex-row sm:justify-between">
              <span className="font-medium text-foreground/70">Statutory Constitution:</span>
              <span className="font-semibold text-foreground">Public Charitable Religious &amp; Educational Trust</span>
            </div>
            <div className="flex flex-col py-3 sm:flex-row sm:justify-between">
              <span className="font-medium text-foreground/70">80-G Unique Registration No:</span>
              <span className="font-semibold text-primary">AAATS7438NF19923 (AY 2022-23 to AY 2026-27)</span>
            </div>
            <div className="flex flex-col py-3 sm:flex-row sm:justify-between">
              <span className="font-medium text-foreground/70">Form 5A Ownership Filing Status:</span>
              <span className="inline-flex items-center gap-1 font-semibold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-4 w-4" /> Complied &amp; Filed
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border bg-muted/30 p-6 text-center text-xs text-muted-foreground">
          <p>
            Verified extract copies of statutory returns, audited financial statements, and EPF inspection reports are
            maintained at the Registered Administrative Office at Karuvadikuppam, Puducherry, and are available for
            inspection by authorized statutory authorities.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
