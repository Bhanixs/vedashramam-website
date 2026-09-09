import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/veda-ashramam")({
  head: () => ({
    meta: [
      { title: "Veda Ashramam — Karuvadikuppam, Puducherry" },
      {
        name: "description",
        content:
          "Veda Ashrama Gurukulam promotes Vedic studies and preserves the oral recitation of the Vedas under the Guru-Shishya Parampara.",
      },
      { property: "og:title", content: "Veda Ashramam — Karuvadikuppam" },
      {
        property: "og:description",
        content: "A living center of traditional Vedic learning, spiritual discipline, and cultural heritage.",
      },
    ],
  }),
  component: VedaAshramamPage,
});

function VedaAshramamPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Veda Ashramam"
        subtitle="Preserving the Eternal Guru-Shishya Parampara in Karuvadikuppam, Puducherry"
        image={heroTemple}
      />

      <Sloka
        devanagari="वेदोऽखिलो धर्ममूलम् स्मृतिशीले च तद्विदाम्।"
        transliteration="Vedo'khilo Dharma Moolam Smriti Sheele Cha Tadvidam."
        meaning="Manusmriti — “The entire Veda is the root source of Dharma, followed by the sacred traditions and virtuous conduct of those who know it.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Preserving Sacred Vedic Wisdom" eyebrow="Veda Ashramam" />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Veda Ashrama Gurukulam works with the objective of promoting Vedic studies and preserving the ancient
            tradition of oral recitation of the Vedas under the Guru-Shishya Parampara. The Gurukulam is dedicated to
            traditional education, spiritual discipline, cultural preservation and the transmission of Vedic knowledge
            to the next generation.
          </p>
          <p>
            With the growth of the Gurukulam and its activities, suitable facilities are required to support the students,
            teachers and traditional learning environment. With the cooperation of devotees, well-wishers and
            philanthropists, the institution continues to develop its facilities in Karuvadikuppam, Puducherry.
          </p>
          <p>
            As the number of students and educational activities grow, the Gurukulam aims to strengthen its learning
            facilities, accommodation, library resources, prayer and activity spaces, and other infrastructure required
            for traditional education and student welfare.
          </p>
          <p>
            Veda Ashrama Gurukulam envisions becoming a strong centre for high-quality traditional Vedic education,
            while enabling students to pursue contemporary education alongside their traditional studies.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Oral Transmission</span>
            <h4 className="mt-2 font-display text-lg text-maroon">Guru-Shishya Parampara</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/75">
              Exact pitch, swara, and meter preserved through continuous oral chanting directly between teacher and student.
            </p>
          </div>

          <div className="surface-card rounded-xl border border-border p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Infrastructure</span>
            <h4 className="mt-2 font-display text-lg text-maroon">Holistic Facilities</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/75">
              Residential accommodation, nutritious Annadanam, prayer halls, and dedicated classrooms for all Vidyarthis.
            </p>
          </div>

          <div className="surface-card rounded-xl border border-border p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Dual Curriculum</span>
            <h4 className="mt-2 font-display text-lg text-maroon">Tradition &amp; Academics</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/75">
              Rigorous Krishna Yajur Veda and Prayoga alongside modern English, Mathematics, and Social Science education.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-md justify-center gap-4">
          <Link
            to="/donate"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-colors hover:bg-maroon"
          >
            Support Veda Ashramam
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent"
          >
            Visit Gurukulam
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
