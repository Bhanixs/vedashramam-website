import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import { BookOpen, Award, CheckCircle, Clock, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/patasala-details")({
  head: () => ({
    meta: [
      { title: "Gurukulam & Patasala Details — Vedashrama Gurukulam" },
      {
        name: "description",
        content:
          "Courses of study, admission of Vidyarthis, Gurukula oral teaching method, and daily life at Veda Ashrama Gurukulam.",
      },
      { property: "og:title", content: "Patasala Details — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "Comprehensive overview of the 10-12 year Vedic curriculum, admission criteria, and student welfare.",
      },
    ],
  }),
  component: PatasalaDetailsPage,
});

const CURRICULUM_AREAS = [
  {
    title: "Krishna Yajur Veda",
    duration: "10 to 12 Years",
    desc: "Comprehensive Samhita, Brahmana, Aranyaka, and Upanishad recitation. Admitted at age 8–9 right after Upanayanam.",
  },
  {
    title: "Agama Traditions",
    duration: "Integrated",
    desc: "Rigorous training in temple rituals, murthi consecration, archana vidhi, and traditional Agama sastras.",
  },
  {
    title: "Prayoga (Smartham)",
    duration: "Core Practice",
    desc: "Practical application of Vedic procedures for domestic samskaras: Upanayanam, Vivaham, Seemantham, and shraddha vidhis.",
  },
  {
    title: "Srowtham & Yagnas",
    duration: "3 Years Advanced",
    desc: "Specialized study for performing sacred Yagnas strictly according to Vedic injunctions for the welfare of humanity.",
  },
  {
    title: "Veda Bhashyam & Sastras",
    duration: "Higher Studies",
    desc: "In-depth exposition of Vedanta, Nyaya, Vyakarana, and Mimamsa for advanced students showing philosophical aptitude.",
  },
  {
    title: "Samskrit & Modern Academics",
    duration: "Concurrent",
    desc: "English, Mathematics, and Social Sciences alongside Sanskrit drama, spoken Samskritam, and literary study.",
  },
];

function PatasalaDetailsPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Patasala Details"
        subtitle="Courses of Study, Admission of Vidyarthis & Method of Teaching"
        image={heroRecitation}
      />

      <Sloka
        devanagari="विद्या ददाति विनयं विनयाद्याति पात्रताम्। पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥"
        transliteration="Vidya Dadati Vinayam, Vinayad Yati Patratam, Patratvad Dhanam Apnoti, Dhanad Dharmam Tatah Sukham."
        meaning="Wisdom bestows humility; humility leads to merit; merit yields worthy means; through Dharma comes lasting peace."
      />

      <section className="container-page py-20">
        <SectionHeading title="Pedagogy &amp; Admission" eyebrow="Gurukula Curriculum" />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Krishna Yajur Veda, Agama and Prayoga are being taught at present in the Gurukulam. Normally it takes about
            <strong> 10 to 12 years of hard work</strong> to acquire mastery in one Sakha of the Vedas. Vidyarthis are
            screened and selected at the tender age of 8 to 9 years immediately after Upanayanam and admitted into the
            curriculum.
          </p>
          <div className="rounded-xl border border-gold/40 bg-gold/5 p-6 text-sm text-foreground">
            <strong className="font-display text-maroon">Complete Student Welfare:</strong> The Vidyarthis are provided
            free boarding (Annadanam), clothing (Vastram), and comprehensive medical facilities to ensure excellent
            health throughout this entire course of study.
          </div>
          <p>
            All branches of Vedas are being taught only as per the age-old Gurukula system of oral chanting, hearing,
            repeating and committing to memory. The exact intonation and the Swara / Pitch are very important and any
            deviation will change the meaning of the text. Hence, this mode of learning is possible only where the Guru
            &amp; the Vidyarthi live under one roof.
          </p>
          <p>
            This pedagogy helps improving listening skills, memory power and ability to visualise in abstraction. Such
            development in the cognitive skills of the students helps them in adjusting, adapting and thriving in all
            contexts and situations.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Comprehensive Areas of Study</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CURRICULUM_AREAS.map((c) => (
              <div key={c.title} className="surface-card flex flex-col justify-between rounded-xl border border-border p-6 shadow-sm">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold">
                    <span>{c.duration}</span>
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h4 className="mt-2 font-display text-lg text-maroon">{c.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/75">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Moral & Cultural Formation */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-muted/30 p-8">
          <h3 className="font-display text-xl text-maroon">Cultural &amp; Character Formation</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            The Vidyarthis are given regular exposure to India’s great epics – Itihasas and Puranas like Srimad
            Ramayana, Srimad Bhagavatha and other great works. This fosters a devotional attitude and provides
            opportunities to learn organizing skills. Interaction with devotees and performing duties like serving and
            attending to senior citizens helps the Vidyarthis imbibe empathy and a selfless approach.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Regular classes in Samskrit, English, Arithmetic &amp; Social Sciences help students establish themselves in
            society. During the annual day celebrations, students enact a play with all dialogues delivered purely in
            Samskrit.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            to="/ways-to-support"
            className="rounded-md bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-maroon"
          >
            Sponsor a Student
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent"
          >
            Inquire About Admissions
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
