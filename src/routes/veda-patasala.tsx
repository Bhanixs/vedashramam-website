import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";

export const Route = createFileRoute("/veda-patasala")({
  head: () => ({
    meta: [
      { title: "Veda Patasala — Vedashrama Gurukulam, Pondicherry" },
      {
        name: "description",
        content:
          "A traditional residential Gurukulam training students in Vedic chanting, Sanskrit and ritual knowledge through daily adhyayanam and oral transmission.",
      },
      { property: "og:title", content: "Veda Patasala — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "Residential Gurukulam training students in the traditional guru-shishya system.",
      },
    ],
  }),
  component: PatasalaPage,
});

const ROUTINE = [
  { time: "Early Morning (5:00 AM – 7:00 AM)", activity: "Sandhyavandanam, Agni Karyam and morning Adhyayanam" },
  { time: "Morning (7:30 AM – 11:30 AM)", activity: "Veda recitation, Swara / Pitch training and memorisation under Adhyapakas" },
  { time: "Midday (11:30 AM – 2:00 PM)", activity: "Madhyahnika Sandhyavandanam, Bhojanam and rest" },
  { time: "Afternoon (2:00 PM – 5:00 PM)", activity: "Sanskrit grammar, Srowtham, Smartham (Prayoga), English & Mathematics" },
  { time: "Evening (5:30 PM – 8:00 PM)", activity: "Sayam Sandhyavandanam, Deeparadhana, Mantrapushpam and group Parayanam" },
  { time: "Night (8:00 PM onwards)", activity: "Dinner, revision of the day’s lessons and rest" },
];

const TEACHERS = [
  { name: "Guru Prasad Bhatt", role: "Vedic Teacher (Krishna Yajur Veda)" },
  { name: "Gouri Shankara Sharma", role: "Agama Teacher" },
  { name: "Mehta Sastrigal", role: "Prayoga Teacher" },
  { name: "Chidambaram Sena Sastrigal", role: "Prayoga Teacher" },
];

const COURSES = [
  {
    title: "Krishna Yajur Veda",
    desc: "Comprehensive adhyayanam in the traditional Gurukula method. Normally takes 10 to 12 years of dedicated adhyayanam to acquire mastery.",
  },
  {
    title: "Agama Traditions",
    desc: "Systematic instruction in temple rituals, consecration, daily aradhana, and the sacred principles of Agama sastras.",
  },
  {
    title: "Prayoga (Smartham & Srowtham)",
    desc: "Hands-on application of Vedic procedures for domestic samskaras (Upanayanam, Vivaham, Seemantham) and sacred Srowtha ritual practices.",
  },
  {
    title: "Veda Bhashyam & Sastras",
    desc: "Deeper study of philosophical and grammatical texts including Vedanta, Nyaya, Vyakarana, and Mimamsa.",
  },
  {
    title: "Contemporary Schooling & Samskritam",
    desc: "Students simultaneously pursue the modern curriculum (Mathematics, Social Sciences, English) and Sanskrit drama and literature.",
  },
  {
    title: "Go Samrakshanam & Values",
    desc: "Active participation in Go Samrakshanam (cow protection), seva to elders, community interaction, and value-based character building.",
  },
];

const HIGHLIGHTS = [
  { count: "55+", label: "Resident Vidyarthis Receiving Traditional Education" },
  { count: "4", label: "Dedicated Traditional Scholars & Adhyapakas" },
  { count: "100%", label: "Free Boarding, Traditional Food, Clothing & Healthcare" },
  { count: "Dual", label: "Integration of Vedic Gurukulam & Modern Schooling" },
];

function PatasalaPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Veda Patasala"
        subtitle="Veda Ashrama Gurukulam — Karuvadikuppam, Puducherry"
        image={heroRecitation}
      />

      <Sloka
        devanagari="सा विद्या या विमुक्तये।"
        transliteration="Sa Vidya Ya Vimuktaye."
        meaning="Vishnu Purana — “That alone is true knowledge which liberates.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="About the Gurukulam" eyebrow="Karuvadikuppam, Puducherry" />
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            In Karuvadikuppam, Puducherry, Veda Samrat Brahmashri Raja Sastrigal and his family are dedicating
            their lives to the preservation and development of Vedic knowledge, Sanātana Dharma, Agama traditions,
            Go Samrakshana and traditional education.
          </p>
          <p>
            Today, around 55 students are receiving traditional Vedic education at the Gurukulam. The students are
            studying Krishna Yajur Veda, Agama and Prayoga, while also pursuing the regular modern school
            curriculum. This combination allows the young generation to remain connected with their ancient heritage
            while receiving contemporary education.
          </p>
          <p>
            All Vidyarthis are provided with free wholesome food, clothing, and medical facilities to ensure good
            health during this entire course of study.
          </p>
        </div>

        {/* Teachers & Scholars */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Teachers &amp; Scholars</h3>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Preserving a living tradition of Vedic wisdom and spiritual discipline
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {TEACHERS.map((t) => (
              <div key={t.name} className="surface-card flex items-center gap-4 p-5">
                <span className="h-3 w-3 rotate-45 bg-gold" />
                <div>
                  <h4 className="font-display text-base text-maroon">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Gurukulam Highlights</h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {HIGHLIGHTS.map((a) => (
              <div key={a.label} className="surface-card p-6 text-center">
                <p className="font-display text-3xl font-bold text-primary">{a.count}</p>
                <p className="mt-2 text-xs font-medium text-foreground/80">{a.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses of Study */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Courses of Study &amp; Curriculum</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {COURSES.map((c) => (
              <div key={c.title} className="surface-card p-6">
                <h4 className="font-display text-lg text-maroon">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Routine */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="font-display text-2xl text-maroon text-center">A Day in the Patasala</h3>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            {ROUTINE.map((r, i) => (
              <div
                key={r.time}
                className={`grid grid-cols-1 gap-1 p-5 sm:grid-cols-[250px_1fr] ${
                  i % 2 === 0 ? "bg-card" : "bg-muted"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{r.time}</span>
                <span className="text-sm text-foreground/85">{r.activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            For admissions, curriculum details, and student sponsorship enquiries, please contact us.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-md bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon"
          >
            Enquire about Admissions &amp; Visits
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
