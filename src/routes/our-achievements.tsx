import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import { Trophy, Award, Star, CheckCircle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/our-achievements")({
  head: () => ({
    meta: [
      { title: "Our Achievements — Veda Ashrama Gurukulam" },
      {
        name: "description",
        content:
          "Milestones, examinations, and academic progress of our Vedic students in Krishna Yajur Veda, Agama, and Sastras.",
      },
      { property: "og:title", content: "Our Achievements — Vedashramam" },
      {
        property: "og:description",
        content: "Celebrating the dedication and accomplishments of our Vidyarthis and Adhyapakas.",
      },
    ],
  }),
  component: OurAchievementsPage,
});

const ACHIEVEMENTS = [
  {
    title: "Vedic Pariksha & Recitation Milestones",
    desc: "Rigorous evaluation under renowned Ghanapatis and Matha examiners. Students successfully master Taittiriya Samhita, Padam, and Kramam.",
  },
  {
    title: "Ghana & Advanced Recitation Training",
    desc: "Dedicated senior Vidyarthis undertaking the challenging Ghana chanting pattern, known for its intricate permutations and acoustic precision.",
  },
  {
    title: "Sanskrit Drama & Language Proficiency",
    desc: "Annual staging of classical Sanskrit plays enacted with pristine diction, memorization, and emotional resonance by resident students.",
  },
  {
    title: "Ritual Mastery in Agama & Prayoga",
    desc: "Hands-on participation in community homams, Mahanyasa Purvaka Rudrabhishekam, and domestic samskaras across Puducherry and Tamil Nadu.",
  },
  {
    title: "Dual Academic Success",
    desc: "100% pass record in modern board examinations, validating our synthesis of ancient Vedic discipline with modern scientific curriculum.",
  },
  {
    title: "Graduation & Career Purses",
    desc: "Following the instructions of Kanchi Paramacharyal, graduating Vidyarthis are presented with cash purses to establish their families comfortably in Vedic service.",
  },
];

function OurAchievementsPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Our Achievements"
        subtitle="Progress, Parikshas &amp; Scholarly Milestones of Veda Ashrama Gurukulam"
        image={heroRecitation}
      />

      <Sloka
        devanagari="सत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः।"
        transliteration="Satyam Vada, Dharmam Chara, Svadhyayan Ma Pramadah."
        meaning="Taittiriya Upanishad — “Speak the truth. Walk the path of Dharma. Never neglect your daily Vedic study.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Progress and Milestones" eyebrow="Institutional Honors" />

        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-sm leading-relaxed text-foreground/80">
          <p>
            The Gurukulam is committed to nurturing students through traditional Vedic education, unyielding discipline,
            and profound cultural learning. Every year marks meaningful growth in scholastic excellence and spiritual
            maturation.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="surface-card rounded-xl border border-border p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                <Trophy className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-display text-base text-maroon">{a.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-foreground/75">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Note on official verification */}
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-border bg-card p-6 text-center text-xs text-muted-foreground">
          <p>
            Specific annual examination roll counts, Veda Bhashyam prizes, and Lakshana Pariksha distinctions are
            regularly reviewed and maintained by the Board of Trustees in Karuvadikuppam, Puducherry.
          </p>
          <div className="mt-6">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
            >
              View Annual Day &amp; Celebration Photos in Gallery →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
