import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/sabha-patrons-trustees")({
  head: () => ({
    meta: [
      { title: "Patrons & Trustees — Veda Ashrama Gurukulam & Sabha" },
      {
        name: "description",
        content:
          "Founder & Managing Trustee G Arunachalam, Managing Trustee Smt. Kalyani, Trustees, and Vedic Teachers & Scholars.",
      },
      { property: "og:title", content: "Patrons & Trustees — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "Our Founder, Managing Trustees, Trustees, and dedicated Vedic Teachers & Scholars.",
      },
    ],
  }),
  component: SabhaPatronsTrusteesPage,
});

const TEACHERS = [
  { name: "Guru Prasad Bhatt", role: "Vedic Teacher" },
  { name: "Gouri Shankara Sharma", role: "Agama Teacher" },
  { name: "Mehta Sastrigal", role: "Prayoga Teacher" },
  { name: "Chidambaram Sena Sastrigal", role: "Prayoga Teacher" },
];

function SabhaPatronsTrusteesPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Patrons & Trustees"
        subtitle="Veda Ashrama Gurukulam & Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust"
        image={heroTemple}
      />

      <Sloka
        devanagari="लोकाः समस्ताः सुखिनो भवन्तु।"
        transliteration="Loka Samastha Sukhino Bhavantu."
        meaning="“May all beings in the world be happy and peaceful.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Patrons & Trustees" eyebrow="Leadership & Governance" />

        <div className="mx-auto mt-14 max-w-4xl space-y-10">
          {/* Founder & Managing Trustee */}
          <div className="surface-card rounded-2xl border-2 border-border/80 p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Founder &amp; Managing Trustee</span>
            <h3 className="mt-2 font-display text-3xl text-maroon">Sri G Arunachalam</h3>
            <p className="mt-1 text-sm font-semibold text-primary">Founder – Veda Ashrama Gurukulam, Puducherry</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              G Arunachalam is the founder of Veda Ashrama Gurukulam and Sri Sai Sankara Bhaktha Sabha
              Gomarsakshana Educational Seva Trust. Based in Puducherry, he is dedicated to the preservation and development of
              Vedic knowledge, Sanātana Dharma, Agama traditions, Go Samrakshana and traditional education.
            </p>
          </div>

          {/* Managing Trustee */}
          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Managing Trustee</span>
            <h3 className="mt-2 font-display text-2xl text-maroon">Smt. Subulakshmi</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              Smt. Subulakshmi serves as a Managing Trustee and works alongside Sri G Arunachalam in guiding and
              developing the Gurukulam's educational, spiritual and service-oriented activities.
            </p>
          </div>

          {/* Trustees */}
          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Trustees</span>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
                <h4 className="font-display text-xl text-maroon">Brahmashri Raja Sastrigal</h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Trustee</p>
              </div>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
                <h4 className="font-display text-xl text-maroon">Smt. Kalyani</h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Trustee</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-foreground/85">
              Sri Arunachalam and Smt. Subbulakshmi have played an important role in supporting the Vedic institution and its
              educational mission.
            </p>
          </div>

          {/* Vedic Teachers & Scholars */}
          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Scholars &amp; Adhyapakas</span>
                <h3 className="font-display text-2xl text-maroon">Vedic Teachers &amp; Scholars</h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              The Gurukulam is supported by dedicated teachers and scholars who contribute to the traditional education
              and training of its students:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {TEACHERS.map((t) => (
                <div key={t.name} className="flex items-center justify-between rounded-xl border border-border/60 bg-card p-4 shadow-2xs">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="text-xs font-medium text-primary">{t.role}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground/85">
              Together, the trustees, teachers and scholars work towards preserving a living Vedic tradition and passing
              Vedic wisdom, discipline, values, culture and spiritual knowledge to the next generation.
            </p>
          </div>

          {/* Closing Universal Prayer */}
          <div className="mandala-bg rounded-2xl border border-border p-8 text-center">
            <h4 className="font-display text-2xl font-bold text-maroon">Loka Samastha Sukhino Bhavantu</h4>
            <p className="mt-2 text-sm italic text-foreground/80">May all beings in the world be happy and peaceful.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
