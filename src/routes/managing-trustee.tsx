import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";

export const Route = createFileRoute("/managing-trustee")({
  head: () => ({
    meta: [
      { title: "Sri Rajasasthrigal, Managing Trustee — Vedashramam" },
      {
        name: "description",
        content:
          "Sri Rajasasthrigal serves as Managing Trustee of Vedashramam, guiding the spiritual and administrative direction of the Sabha and the Veda Patasala.",
      },
      { property: "og:title", content: "Sri Rajasasthrigal, Managing Trustee" },
      {
        property: "og:description",
        content: "Guiding the Sabha and the Veda Patasala at Vedashramam, Pondicherry.",
      },
    ],
  }),
  component: TrusteePage,
});

const TRUSTEES = [
  { name: "Veda Samrat Brahmashri Raja Sastrigal", role: "Founder & Managing Trustee" },
  { name: "Smt. Kalyani", role: "Managing Trustee" },
  { name: "Sri Arunachalam", role: "Trustee" },
  { name: "Smt. Subbulakshmi", role: "Trustee" },
];

const TEACHERS = [
  { name: "Guru Prasad Bhatt", role: "Vedic Teacher (Krishna Yajur Veda)" },
  { name: "Gouri Shankara Sharma", role: "Agama Teacher" },
  { name: "Mehta Sastrigal", role: "Prayoga Teacher" },
  { name: "Chidambaram Sena Sastrigal", role: "Prayoga Teacher" },
];

function TrusteePage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Managing Trustee"
        subtitle="Veda Samrat Brahmashri Raja Sastrigal — Founder & Managing Trustee"
        image={heroHomam}
      />

      <Sloka
        devanagari="गुरुर्ब्रह्மா गुरुर्विष्णुः गुरुर्देवो महेश्वरः।"
        transliteration="Gurur Brahma Gurur Vishnuh Gurur Devo Maheshwarah."
        meaning="The Guru is Brahma, Vishnu and Maheshwara; the Guru is the Supreme Reality itself."
      />

      <section className="container-page py-20">
        <SectionHeading title="Brahmashri Raja Sastrigal" eyebrow="Founder &amp; Leadership" />
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            In Karuvadikuppam, Puducherry, Veda Samrat Brahmashri Raja Sastrigal and his family are dedicating
            their lives to the preservation and development of Vedic knowledge, Sanātana Dharma, Agama traditions,
            Go Samrakshana and traditional education.
          </p>
          <p>
            He is the founder of Veda Ashrama Gurukulam and Sri Sai Shankara Bhakta Sabha Educational and Go
            Samrakshana Seva Trust. His parents, Sri Arunachalam and Smt. Subbulakshmi, have also played an
            important role as trustees in supporting the Vedic institution and its educational mission. Brahmashri
            Raja Sastrigal and Smt. Kalyani serve as managing trustees and continue to guide and develop these
            meaningful activities.
          </p>
          <p>
            Their collective service is not simply about teaching scriptures. It is about preserving a living
            tradition and passing Vedic wisdom, discipline, values, culture, and spiritual knowledge to the next
            generation under the timeless prayer: <em>“Loka Samastha Sukhino Bhavantu”</em>.
          </p>
        </div>

        {/* Board of Trustees */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Board of Trustees</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {TRUSTEES.map((t) => (
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

        {/* Faculty & Scholars */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Adhyapakas &amp; Teachers</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {TEACHERS.map((t) => (
              <div key={t.name} className="surface-card flex items-center gap-4 p-5">
                <span className="h-3 w-3 rotate-45 bg-primary" />
                <div>
                  <h4 className="font-display text-base text-maroon">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mandala-bg mx-auto mt-14 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">ஸ்ரீ ராஜசாஸ்திரிகள், நிறுவனர் &amp; நிர்வாக அறங்காவலர்</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            வேத சாம்ராட் பிரம்மஸ்ரீ ராஜசாஸ்திரிகள் மற்றும் அவரது குடும்பத்தினர் புதுச்சேரி கருவாடிக்குப்பத்தில்
            வேத அறிவு, சநாதன தர்மம், ஆகம மரபுகள், கோ சம்ரக்ஷணம் மற்றும் பாரம்பரிய கல்வியின் பாதுகாப்பு மற்றும்
            வளர்ச்சிக்காகத் தங்களை அர்ப்பணித்துள்ளனர்.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
