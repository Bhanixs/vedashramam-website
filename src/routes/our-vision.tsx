import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import { Compass, BookOpen, Library, GraduationCap, Globe, Check } from "lucide-react";

export const Route = createFileRoute("/our-vision")({
  head: () => ({
    meta: [
      { title: "Our Vision & Objectives — Vedashrama Gurukulam" },
      {
        name: "description",
        content:
          "The vision, aims, and objectives of Veda Ashrama Gurukulam: Traditional Gurukula education, Higher Vedic Studies, and contemporary academic excellence.",
      },
      { property: "og:title", content: "Our Vision & Objectives — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "Nurturing scholarly mastery of the Vedas while cultivating modern societal awareness.",
      },
    ],
  }),
  component: OurVisionPage,
});

const AIMS = [
  {
    title: "Vedic Sciences & Sastras",
    desc: "To impart Vedic Sciences & Sastras in the Traditional Gurukulam method and other related subjects in depth, conducting daily classes, holding meetings and publishing Books.",
  },
  {
    title: "Vedic Scholars for Bharata Varsha",
    desc: "To establish, maintain, run the Gurukula Veda Patasalas in various parts of the country and to produce Vedic Scholars to propogate all the four Vedas.",
  },
  {
    title: "Spiritual Centers for the Public",
    desc: "To enforce spiritual studies by augmenting Spiritual Training and Yoga centres for General Public also.",
  },
  {
    title: "Vedic & Modern Libraries",
    desc: "To establish and maintain Libraries for Vidyarthis, Scholars and General Public as well.",
  },
];

const VISION_PILLARS = [
  {
    title: "Preservation of Oral Recitation",
    desc: "The preservation of our ancient culture and tradition of Oral Recitation of Vedas in Gurukula System under the Guru-Shishya Parampara.",
  },
  {
    title: "Higher Vedic Studies",
    desc: "To promote Higher Vedic Studies such as Veda Bhashyam, Shadangam, Srowtham, Smartham, Kavyam, Samskritam, and Ithihasa Puranam among the Vidyarthis who have completed basic Studies.",
  },
  {
    title: "Modern Academic Integration",
    desc: "To teach the Vidyarthis Mathematics, Social Sciences, Modern Science and Technological Education and also make them responsible citizens with Social Values and awareness.",
  },
];

function OurVisionPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Our Vision"
        subtitle="Aims, Objectives &amp; Long-Term Vision of Veda Ashrama Gurukulam"
        image={heroRecitation}
      />

      <Sloka
        devanagari="दृष्टे रूपे परं ब्रह्म दृष्टे वेदे जगद्गुरुः। उभयोर्मिलनेनैव जगतां संप्रसीदति॥"
        transliteration="Drishte Rupe Param Brahma Drishte Vede Jagadguruh, Ubhayor Milanenaiva Jagatam Sampraseedati."
        meaning="In divine beauty shines the Supreme Reality; in the sacred Veda abides the Cosmic Teacher. From their unified embrace, peace and blessings radiate throughout creation."
      />

      <section className="container-page py-20">
        <SectionHeading title="Aims &amp; Objectives of the Trust" eyebrow="Our Mission" />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {AIMS.map((aim, idx) => (
            <div key={aim.title} className="surface-card rounded-2xl border border-border p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 font-display text-sm font-bold text-maroon">
                  {idx + 1}
                </span>
                <h3 className="font-display text-lg text-maroon">{aim.title}</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground/80">{aim.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading title="Guiding Vision Pillars" eyebrow="Future Direction" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {VISION_PILLARS.map((p) => (
              <div key={p.title} className="surface-card rounded-2xl border border-border p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                  <Compass className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-display text-base text-maroon">{p.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-2xl border border-border p-8 text-center">
          <h4 className="font-display text-2xl text-maroon">Building Responsible Citizens &amp; Vedic Scholars</h4>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            By blending classical Vedic wisdom, Sastras, and Sanskrit fluency with modern technological skills and social
            consciousness, our Gurukulam creates leaders who embody Dharma in the modern world.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/patasala-details"
              className="rounded-md bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-maroon"
            >
              Curriculum &amp; Daily Life
            </Link>
            <Link
              to="/ways-to-support"
              className="rounded-md border border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent"
            >
              Ways to Support
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
