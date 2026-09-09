import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import { Quote, Sparkles, BookOpen } from "lucide-react";

export const Route = createFileRoute("/why-veda-samrakshanam")({
  head: () => ({
    meta: [
      { title: "Why Veda Samrakshanam — Vedashramam" },
      {
        name: "description",
        content:
          "The eternal glory of the Vedas and the imperative duty of Veda Samrakshanam, guided by the Anugraha Bhashanams of Sringeri and Kanchi Acharyas.",
      },
      { property: "og:title", content: "Why Veda Samrakshanam — Vedashramam" },
      {
        property: "og:description",
        content: "Understanding the cosmic significance of Vedic vibrations and protecting our sacred heritage.",
      },
    ],
  }),
  component: WhyVedaSamrakshanamPage,
});

function WhyVedaSamrakshanamPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Why Veda Samrakshanam"
        subtitle="The Eternal Glory of Our Tradition & The Sacred Duty to Nourish It"
        image={heroRecitation}
      />

      <Sloka
        devanagari="वेदोऽखिलो धर्ममूलम् स्मृतिशीले च तद्विदाम्।"
        transliteration="Vedo'khilo Dharma Moolam Smriti Sheele Cha Tadvidam."
        meaning="Manusmriti — “The entire Veda is the root and fountainhead of all Dharma.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="The Vedas – Eternal Glory of Our Tradition" eyebrow="Sanatana Dharma" />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Vedas are believed to be the Divine revelations from the Cosmic Space recognised by Ancient Rishis. No
            authorship has been ascribed to these ancient Scriptures. The Vedic Vibrations are eternally present in
            the Cosmic Space in a very subtle form. In ancient Yugas, the Vedas as known to humanity were much larger in
            content than it is known today. Sage Vyasa has classified the whole Vedas into four groups known as Rig,
            Yajur, Sama and Atharva.
          </p>
          <p>
            Sage Patanjali further divided these four into many branches or Shakhas. Rig Veda had twenty-one, Yajur Veda
            had one hundred and eight, Sama Veda had one thousand and Atharva Veda had nine shakhas. However, due to
            passage of time most of these have been lost to the present world. Of the remaining, one is of Rig Veda, Six
            are of Yajur Veda, Three are of Sama Veda and two are of Atharva Veda available now.
          </p>
          <p>
            It is already proven beyond doubt that Veda Mantras confer peace, prosperity and general well being of the
            whole world. It is our abundant duty to nourish and cherish the Vedas, which are the roots of our Culture
            and Sanatana Dharma for future generations.
          </p>
          <p>
            Veda Ashrama Gurukulam is dedicated to preserving the traditional Guru-Shishya system of Vedic learning and
            passing this knowledge to future generations.
          </p>
        </div>

        {/* Shakha Stats Card */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h3 className="font-display text-xl text-maroon text-center">Preservation of Vedic Shakhas</h3>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            A sober reminder of why continuous active gurukulam recitation is critically essential
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="rounded-xl border border-border/80 bg-muted/40 p-5">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Rig Veda</span>
              <div className="mt-2 font-display text-2xl font-bold text-maroon">1 Shakha Remaining</div>
              <p className="mt-1 text-xs text-foreground/70">Originally 21 Shakhas</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/40 p-5">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Yajur Veda</span>
              <div className="mt-2 font-display text-2xl font-bold text-maroon">6 Shakhas Remaining</div>
              <p className="mt-1 text-xs text-foreground/70">Originally 108 Shakhas</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/40 p-5">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Sama Veda</span>
              <div className="mt-2 font-display text-2xl font-bold text-maroon">3 Shakhas Remaining</div>
              <p className="mt-1 text-xs text-foreground/70">Originally 1,000 Shakhas</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-muted/40 p-5">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Atharva Veda</span>
              <div className="mt-2 font-display text-2xl font-bold text-maroon">2 Shakhas Remaining</div>
              <p className="mt-1 text-xs text-foreground/70">Originally 9 Shakhas</p>
            </div>
          </div>
        </div>

        {/* Acharyal Anugraha Bhashanams */}
        <div className="mx-auto mt-20 max-w-4xl space-y-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Divine Guidance</span>
            <h3 className="mt-2 font-display text-3xl text-maroon">Words of Nectar from Jagadgurus</h3>
            <p className="mt-2 text-sm text-foreground/75">
              With all our Respects, Obeisances and Pranams to our Great Sages H. H. Jagadguru Sri Chandrashekhara
              Bharati Mahaswamigal and H.H. Jagadguru Sri Chandrashekhara Saraswati Mahaswamigal:
            </p>
          </div>

          {/* Sringeri Acharyal */}
          <div className="surface-card relative rounded-2xl border-l-4 border-gold p-8 shadow-sm">
            <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20" />
            <h4 className="font-display text-xl text-maroon">
              Anugraha Bhashanam of H.H. Jagadguru Sri Chandrashekhara Bharati Mahaswamigal
            </h4>
            <p className="mt-1 text-xs text-gold font-medium">34th Jagadguru Shankaracharya of Sringeri Sharada Peetham</p>
            <blockquote className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85 italic">
              <p>
                “The Lord Himself has given us His commands in the eternal Vedas. We should not disobey our Scriptures.
                They are His breath and the fountain-head of all right knowledge. It is our duty to learn the scriptures
                and follow the commands of our sastras implicitly. Ignorance by itself is certainly no sin but it is a
                sin when there is a duty to learn. There is no doubt that the man who knows and yet errs is a greater
                sinner; but there is no satisfaction, much less an excuse for the man who prefers to continue in
                ignorance and in error.
              </p>
              <p>
                Scientists have discovered that matter is nothing but a manifestation of cosmic energy. So there exists a
                single cosmic energy or force which is infinite in capacity and takes on the form of matter under
                certain conditions. Our holy scriptures also make the same assertion.”
              </p>
            </blockquote>
          </div>

          {/* Kanchi Paramacharyal */}
          <div className="surface-card relative rounded-2xl border-l-4 border-primary p-8 shadow-sm">
            <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
            <h4 className="font-display text-xl text-maroon">
              Anugraha Bhashanam of H.H. Jagadguru Sri Chandrashekhara Saraswati Mahaswamigal
            </h4>
            <p className="mt-1 text-xs text-primary font-medium">68th Jagadguru Shankaracharya of Kanchi Kamakoti Peetham</p>
            <blockquote className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85 italic">
              <p>
                “The Vedas that Constitute the Scripture common to all and which reveal the Godhead that is common to us
                also teach us, how to lead our life, and – this is important – they do us the ultimate good by showing
                us in the end the way to become that very Godhead ourselves. They are our refuge both here and the
                hereafter and are the source and root of all our different traditions – all our systems of thought. All
                sects, all schools of thoughts, our religion, have their origin in Vedas.
              </p>
              <p>
                The Root is one but the branches are many. The Vedas are the source not only for the various divisions of
                Hinduism, but also for all the religions of the world that may be traced back to them. It is our bounden
                duty to preserve them for all time to come with their glory undiminished.
              </p>
              <p className="font-semibold text-maroon not-italic">
                “If we, of this generation, create a break in the chain of Vedic study, kept up for ages, from generation
                to generation, we shall be committing the unforgivable crime of denying our descendants the opportunity
                of learning the Vedas….”
              </p>
            </blockquote>
          </div>

          {/* Solemn Pledge */}
          <div className="mandala-bg rounded-2xl border border-border p-8 text-center">
            <h4 className="font-display text-2xl text-maroon">Give a serious thought to this call of our Acharyals</h4>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85">
              The Sankara Gurukula Veda Patasala assures that it will live and serve for the study of Vedas and resultant
              prayers for the peace and welfare of the entire world keeping the above ideal words of our Acharyals of
              Sringeri and Kanchi.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/ways-to-support"
                className="rounded-md bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-maroon"
              >
                Support Veda Samrakshanam
              </Link>
              <Link
                to="/about-patasala"
                className="rounded-md border border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent"
              >
                About our Gurukulam
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
