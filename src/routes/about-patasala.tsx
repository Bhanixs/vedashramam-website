import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import { GraduationCap, Users, HeartHandshake, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about-patasala")({
  head: () => ({
    meta: [
      { title: "About Patasala — Veda Ashrama Gurukulam, Puducherry" },
      {
        name: "description",
        content:
          "Veda Ashrama Gurukulam in Karuvadikuppam, Puducherry. 55 resident students studying Krishna Yajur Veda, Agama, and Prayoga alongside modern schooling.",
      },
      { property: "og:title", content: "About Patasala — Veda Ashrama Gurukulam" },
      {
        property: "og:description",
        content: "Preserving the sacred Guru-Shishya tradition under Founder Veda Samrat Brahmashri Raja Sastrigal.",
      },
    ],
  }),
  component: AboutPatasalaPage,
});

const TEACHERS = [
  { name: "Guru Prasad Bhatt", role: "Vedic Teacher (Krishna Yajur Veda)" },
  { name: "Gouri Shankara Sharma", role: "Agama Teacher" },
  { name: "Mehta Sastrigal", role: "Prayoga Teacher" },
  { name: "Chidambaram Sena Sastrigal", role: "Prayoga Teacher" },
];

export function AboutPatasalaPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="About Patasala"
        subtitle="Veda Ashrama Gurukulam — Karuvadikuppam, Puducherry"
        image={heroRecitation}
      />

      <Sloka
        devanagari="लोकाः समस्ताः सुखिनो भवन्तु।"
        transliteration="Loka Samastha Sukhino Bhavantu."
        meaning="“May all beings everywhere in the world be happy, peaceful, and free from suffering.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="A Living Tradition of Vedic Wisdom" eyebrow="Gurukulam Overview" />

        {/* Founder Section */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Founder &amp; Visionary</span>
          <h3 className="mt-2 font-display text-3xl text-maroon">Veda Samrat Brahmashri Raja Sastrigal</h3>
          <p className="mt-1 text-sm font-medium text-primary">Founder – Veda Ashrama Gurukulam, Puducherry</p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/85">
            <p>
              In Karuvadikuppam, Puducherry, Veda Samrat Brahmashri Raja Sastrigal and his family are dedicating their
              lives to the preservation and development of Vedic knowledge, Sanātana Dharma, Agama traditions, Go
              Samrakshana and traditional education.
            </p>
            <p>
              He is the founder of Veda Ashrama Gurukulam and Sri Sai Shankara Bhakta Sabha Educational and Go
              Samrakshana Seva Trust. His parents, Sri Arunachalam and Smt. Subbulakshmi, have also played an important
              role as trustees in supporting the Vedic institution and its educational mission. Brahmashri Raja
              Sastrigal and Smt. Kalyani serve as managing trustees and continue to guide and develop these meaningful
              activities.
            </p>
          </div>
        </div>

        {/* Student & Teaching Strength */}
        <div className="mx-auto mt-14 max-w-4xl grid gap-8 md:grid-cols-2">
          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Resident Vidyarthis</span>
                <h4 className="font-display text-2xl text-maroon">55 Active Students</h4>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              Today, around 55 students are receiving traditional Vedic education at the Gurukulam. The students are
              studying Krishna Yajur Veda, Agama and Prayoga, while also pursuing the regular modern school curriculum.
              This combination allows the young generation to remain connected with their ancient heritage while
              receiving contemporary education.
            </p>
          </div>

          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Dedicated Faculty</span>
                <h4 className="font-display text-2xl text-maroon">Learned Adhyapakas</h4>
              </div>
            </div>
            <div className="mt-4 space-y-2.5">
              {TEACHERS.map((t) => (
                <div key={t.name} className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/40 px-3.5 py-2 text-xs">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="text-muted-foreground">{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preserving a living tradition */}
        <div className="mx-auto mt-14 max-w-3xl space-y-6 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Their collective service is not simply about teaching scriptures. It is about preserving a living tradition
            and passing Vedic wisdom, discipline, values, culture and spiritual knowledge to the next generation.
          </p>
          <p>
            The work of Veda Ashrama Gurukulam represents a beautiful commitment to Sanātana Dharma, traditional
            education, cultural preservation and service to society. Supporting and protecting such institutions is
            essential for ensuring that India’s ancient knowledge systems continue to live and guide future generations.
          </p>
        </div>

        {/* Closing Banner */}
        <div className="mandala-bg mx-auto mt-14 max-w-3xl rounded-2xl border border-border p-8 text-center">
          <h4 className="font-display text-2xl text-maroon">Preserve the Veda. Protect the Dharma.</h4>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Educate the next generation. Serve all beings. May the dedicated service of Veda Samrat Brahmashri Raja
            Sastrigal, his family, teachers and students continue to grow and inspire many more generations.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/ways-to-support"
              className="rounded-md bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-maroon"
            >
              Support Gurukulam
            </Link>
            <Link
              to="/patasala-details"
              className="rounded-md border border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent"
            >
              Curriculum Details
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
