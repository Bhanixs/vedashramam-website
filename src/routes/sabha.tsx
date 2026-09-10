import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/sabha")({
  head: () => ({
    meta: [
      { title: "About the Sabha — Vedashrama Gurukulam" },
      {
        name: "description",
        content:
          "Vedashrama Gurukulam Sabha is a non-profit charitable trust promoting Sanatana Dharma and preserving oral Vedic recitation under the guru-shishya parampara.",
      },
      { property: "og:title", content: "About the Sabha — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "A non-profit charitable trust rendering service in religious and spiritual activities.",
      },
    ],
  }),
  component: SabhaPage,
});

const OBJECTIVES = [
  "Function purely as an organisation for spiritual, moral, and cultural up-liftment of society.",
  "Preservation of the ancient tradition of oral Vedic recitation and study under the Guru-Sishya parampara.",
  "Continuous support for the residential Veda Patasala, its Vidyarthis, Adhyapakas, and infrastructure.",
  "Offer a day’s Biksha to His Holiness Jagadguru Sankaracharya during Chatur Masya every year.",
  "Hospital visits to distribute sacred Prasadam and devotional publications, invoking solace and speedy recovery for patients.",
  "Inculcate the sacred 'Pidi Arisi Thittam' (a handful of rice daily) and distribute cooked Annadanam among the needy.",
  "Samskara Sahayam — financial and ceremonial assistance for the cremation and last rites of unattended and orphan souls.",
];

function SabhaPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Sabha"
        subtitle="A charitable trust in the service of Sanatana Dharma"
        image={heroTemple}
      />

      <Sloka
        devanagari="विद्या ददाति विनयं विनयाद्याति पात्रताम्।"
        transliteration="Vidya Dadati Vinayam, Vinayat Yati Patratam."
        meaning="Traditional subhashita — “Knowledge gives humility; from humility comes true worthiness.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="About the Sabha" eyebrow="The Trust" />
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Veda Ashrama Gurukulam and Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust is a
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
          <h3 className="font-display text-2xl text-maroon">Aims &amp; Objectives</h3>
          <ul className="mt-6 space-y-4">
            {OBJECTIVES.map((o) => (
              <li key={o} className="surface-card flex gap-4 p-5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                <span className="text-sm leading-relaxed text-foreground/85">{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">சபை பற்றி &amp; நோக்கங்கள்</h3>
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
