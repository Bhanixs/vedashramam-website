import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import { GraduationCap, Users, HeartHandshake, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/rajasastrigal")({
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

function AboutPatasalaPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Brahmashri Raja Sastrigal"
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
              He is the founder of Veda Ashrama Gurukulam and Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational
              Seva Trust. His parents, Sri Arunachalam and Smt. Subbulakshmi, have also played an important
              role as trustees in supporting the Vedic institution and its educational mission. Brahmashri Raja
              Sastrigal and Smt. Kalyani serve as managing trustees and continue to guide and develop these meaningful
              activities.
            </p>
          </div>
        </div>

        {/* Student & Teaching Strength */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
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
      </section>
    </PageShell>
  );
}
