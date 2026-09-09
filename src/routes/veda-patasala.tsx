import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";

export const Route = createFileRoute("/veda-patasala")({
  head: () => ({
    meta: [
      { title: "Veda Patasala — Vedashramam Gurukulam, Pondicherry" },
      {
        name: "description",
        content:
          "A traditional residential Gurukulam training students in Vedic chanting, Sanskrit and ritual knowledge through daily adhyayanam and oral transmission.",
      },
      { property: "og:title", content: "Veda Patasala — Vedashramam" },
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

const COURSES = [
  {
    title: "Veda Adhyayanam (Rig & Krishna Yajur)",
    desc: "10 to 12 years of rigorous oral training. Vidyarthis are admitted at the age of 8–9 following Upanayanam, committing sacred hymns to memory with exact intonation and Swara.",
  },
  {
    title: "Veda Bhashyam & Sastras",
    desc: "Higher study of the profound meaning of the Vedas, covering classical disciplines including Vedanta, Nyaya, Vyakarana, and Mimamsa under renowned scholars.",
  },
  {
    title: "Srowtham & Yagna Vidhi",
    desc: "A specialised 3-year comprehensive course preparing scholars in performing Vedic Yagnas and sacred rituals strictly as laid down in the Sastras.",
  },
  {
    title: "Smartham (Prayoga)",
    desc: "Practical Vedic application for domestic rituals and samskaras including Upanayanam, Vivaham, Seemantham, and allied grihya rites.",
  },
  {
    title: "Itihasas, Puranas & Modern Subjects",
    desc: "Study of Srimad Ramayana and Srimad Bhagavatam alongside formal instruction in Sanskrit, English, Mathematics, and Social Sciences for well-rounded development.",
  },
];

const ACHIEVEMENTS = [
  { count: "150+", label: "Scholars Graduated with Distinction" },
  { count: "100+", label: "Completed Rigorous Ghana Stage" },
  { count: "50+", label: "Mastered Krama Stage" },
  { count: "12+", label: "Serving as Adhyapakas at Patasalas" },
  { count: "5", label: "Passed Higher Veda Bhashyam Exams" },
  { count: "3", label: "Attained Salakshana Ghanapati Status" },
];

function PatasalaPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Veda Patasala"
        subtitle="A residential Gurukulam in the guru-shishya parampara"
        image={heroRecitation}
      />

      <Sloka
        devanagari="सा विद्या या विमुक्तये।"
        transliteration="Sa Vidya Ya Vimuktaye."
        meaning="Vishnu Purana — “That alone is true knowledge which liberates.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="About the Veda Patasala" eyebrow="Gurukulam" />
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            The Veda Patasala trains resident Vidyarthis in the authentic Gurukula system — learning through
            daily oral recitation (adhyayanam), active listening, repetition, and memorisation under qualified
            Adhyapakas, strictly preserving the unbroken Guru-Sishya parampara.
          </p>
          <p>
            Vidyarthis are admitted at the tender age of 8 to 9 years immediately following their Upanayanam.
            Throughout their 10 to 12 years of arduous adhyayanam, all students are provided with free boarding,
            wholesome traditional food, clothing, and medical care in a serene, disciplined atmosphere.
          </p>
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

        {/* Achievements */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Progress &amp; Achievements</h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.label} className="surface-card p-6 text-center">
                <p className="font-display text-3xl font-bold text-primary">{a.count}</p>
                <p className="mt-2 text-xs font-medium text-foreground/80">{a.label}</p>
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
