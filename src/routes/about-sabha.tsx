import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/about-sabha")({
  head: () => ({
    meta: [
      { title: "About Sabha — Vedashramam, Puducherry" },
      {
        name: "description",
        content:
          "Veda Ashrama Gurukulam and Sri Sai Shankara Bhakta Sabha Educational and Go Samrakshana Seva Trust in Karuvadikuppam, Puducherry.",
      },
      { property: "og:title", content: "About Sabha — Vedashramam" },
      {
        property: "og:description",
        content: "Dedicated to Vedic knowledge, Sanatana Dharma, Agama traditions, and Go Samrakshana.",
      },
    ],
  }),
  component: AboutSabhaPage,
});

const OBJECTIVES = [
  "Function purely as an organisation for spiritual, moral, and cultural up-liftment of society.",
  "Offer a day’s Biksha to His Holiness Jagadguru Sankaracharya of Kanchi Kamakoti Peetam from the amount subscribed during Chatur Masya every year.",
  "Visit patients in the hospitals once a week, distribute ‘Prasad’ (Veebhuthi and Kumkum) of His Holiness and Books of devotional songs and Hymns, thus invoking in them a sense of devotion to God, which would go a long way towards their speedy recovery.",
  "Inculcate in the people the importance of the Scheme ‘Contribution of a handful of rice daily’ (Pidi Arisi Thittam), to further propagate the scheme, distribute the cooked rice amongst poor as ‘prasad’ after offering it to the God.",
  "Aid financially (Samskara Sahayam) for the Scheme for the cremation/last rites of those who die as orphans in the Hospitals and streets.",
];

export function AboutSabhaPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="About Sabha"
        subtitle="Sri Sai Shankara Bhakta Sabha Educational and Go Samrakshana Seva Trust"
        image={heroTemple}
      />

      <Sloka
        devanagari="विद्या ददाति विनयं विनयाद्याति पात्रताम्।"
        transliteration="Vidya Dadati Vinayam, Vinayat Yati Patratam."
        meaning="Traditional subhashita — “Knowledge gives humility; from humility comes true worthiness.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="About the Sabha" eyebrow="The Trust & Mission" />
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Veda Ashrama Gurukulam and Sri Sai Shankara Bhakta Sabha Educational and Go Samrakshana Seva Trust is a
            charitable initiative based in Karuvadikuppam, Puducherry. Founded under the guidance and leadership of
            Veda Samrat Brahmashri Raja Sastrigal, the institution is dedicated to the preservation and development
            of Vedic knowledge, Sanātana Dharma, Agama traditions, Go Samrakshana and traditional education.
          </p>
          <p>
            With the support and financial help of well-wishers, devotees, philanthropists and the general public,
            Veda Ashrama Gurukulam continues its work in Karuvadikuppam, Puducherry, providing traditional Vedic
            education and supporting the preservation of India’s ancient spiritual and cultural heritage.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="font-display text-2xl text-maroon">Aims & Objectives</h3>
          <p className="mt-2 text-sm text-foreground/75">
            The Sabha shall function purely as an Organisation for the spiritual & moral up-liftment. It shall:
          </p>
          <ul className="mt-6 space-y-4">
            {OBJECTIVES.map((o) => (
              <li key={o} className="surface-card flex gap-4 p-5 shadow-sm">
                <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                <span className="text-sm leading-relaxed text-foreground/85">{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">சபை பற்றி & நோக்கங்கள்</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            சபை என்பது சமய மற்றும் ஆன்மீக நடவடிக்கைகளில் சேவை செய்வதற்காக அர்ப்பணிக்கப்பட்ட ஒரு இலாப
            நோக்கற்ற தொண்டு அறக்கட்டளையாகும் — சநாதன தர்மத்தை மேம்படுத்துதல், வாய்மொழி வேத பாராயண
            மரபின் பாதுகாப்பை ஆதரித்தல், பிடி அரிசி திட்டம் மூலம் அன்னதானம் வழங்குதல், மற்றும் ஆதரவற்றோருக்கு
            சம்ஸ்கார உதவி அளித்தல்.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
