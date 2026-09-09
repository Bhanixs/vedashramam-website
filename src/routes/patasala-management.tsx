import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import { Users, BookOpen, ShieldCheck, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/patasala-management")({
  head: () => ({
    meta: [
      { title: "Patasala Management & Faculty — Vedashramam" },
      {
        name: "description",
        content:
          "Management, Trustees, and Faculty of Veda Ashrama Gurukulam. Preserving Vedic recitation under dedicated Adhyapakas and leadership.",
      },
      { property: "og:title", content: "Patasala Management — Vedashramam" },
      {
        property: "og:description",
        content: "Our founders, managing trustees, adhyapakas, and academic guides.",
      },
    ],
  }),
  component: PatasalaManagementPage,
});

const FACULTY = [
  { name: "Guru Prasad Bhatt", role: "Vedic Teacher (Krishna Yajur Veda)" },
  { name: "Gouri Shankara Sharma", role: "Agama Teacher" },
  { name: "Mehta Sastrigal", role: "Prayoga Teacher (Smartham)" },
  { name: "Chidambaram Sena Sastrigal", role: "Prayoga Teacher (Srowtham & Smartham)" },
  { name: "Sri G. Rama Ghanapati", role: "Principal & Senior Veda Adhyapaka" },
  { name: "Sri M. Swaminatha Sharma", role: "Krishna Yajur Veda Faculty" },
  { name: "Sri V. Sriram Ghanapati", role: "Sanskrit Grammar & Bhashyam" },
];

export function PatasalaManagementPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Patasala Management"
        subtitle="Founders, Managing Trustees & Learned Adhyapakas"
        image={heroRecitation}
      />

      <Sloka
        devanagari="आचार्यात् पादमादत्ते पादं शिष्यः स्वमेधया। पादं सब्रह्मचारिभ्यः पादं कालक्रमेण च॥"
        transliteration="Acharyat Padamadatte Padam Shishyah Swamedhaya, Padam Sabrahmacharibhyah Padam Kalakramena Cha."
        meaning="A student learns one-fourth from the Teacher, one-fourth through personal intellect, one-fourth from fellow students, and one-fourth with the passage of time."
      />

      <section className="container-page py-20">
        <SectionHeading title="Administration & Governance" eyebrow="Patasala Leadership" />

        <div className="mx-auto mt-14 max-w-4xl space-y-10">
          {/* Founder */}
          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Founder</span>
            <h3 className="mt-2 font-display text-2xl text-maroon">Veda Samrat Brahmashri Raja Sastrigal</h3>
            <p className="mt-1 text-sm font-medium text-primary">Founder – Veda Ashrama Gurukulam, Puducherry</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Devoting his life and family resources to traditional Vedic education, Sanātana Dharma, and Go Samrakshana
              in Karuvadikuppam, Puducherry.
            </p>
          </div>

          {/* Managing Trustees */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="surface-card rounded-2xl border border-border p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Managing Trustees</span>
              <h4 className="mt-2 font-display text-xl text-maroon">Brahmashri Raja Sastrigal &amp; Smt. Kalyani</h4>
              <p className="mt-3 text-xs leading-relaxed text-foreground/75">
                Steering the day-to-day welfare, student residential accommodations, and religious festivals of the Gurukulam.
              </p>
            </div>

            <div className="surface-card rounded-2xl border border-border p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Scholastic Leadership</span>
              <h4 className="mt-2 font-display text-xl text-maroon">Brahma Sri G. Rama Ghanapatigal</h4>
              <p className="mt-3 text-xs leading-relaxed text-foreground/75">
                Principal and Salakshana Ghanapati overseeing the academic rigor, intonation benchmarks, and student admissions.
              </p>
            </div>
          </div>

          {/* Patrons & Advisory */}
          <div className="surface-card rounded-2xl border border-border p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Patrons &amp; Advisory Board</span>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                <span className="font-semibold text-foreground">Sri K. R. Paramahamsa I.A.S (Retd.)</span>
                <p className="text-xs text-muted-foreground">Distinguished Patron</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                <span className="font-semibold text-foreground">Sri N. Panchapakesan FCA</span>
                <p className="text-xs text-muted-foreground">Chartered Accountant &amp; Patron</p>
              </div>
            </div>
          </div>

          {/* Faculty / Adhyapakas */}
          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Faculty</span>
                <h3 className="font-display text-2xl text-maroon">Learned Adhyapakas &amp; Scholars</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {FACULTY.map((f) => (
                <div key={f.name} className="rounded-xl border border-border/70 bg-card p-4 shadow-2xs">
                  <div className="font-semibold text-foreground">{f.name}</div>
                  <div className="mt-1 text-xs text-primary font-medium">{f.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
