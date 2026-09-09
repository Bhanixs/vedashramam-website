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

const FACULTY_DOMAINS = [
  { domain: "Veda Bhashyam & Sastras", desc: "Instruction in Vedanta, Mimamsa, Vyakarana, and higher Vedic interpretation." },
  { domain: "Rig Veda Adhyayanam", desc: "Complete Samhita, Pada, Krama, and Ghana chanting under Salakshana Ghanapatis." },
  { domain: "Krishna Yajur Veda", desc: "Taittiriya Sakha adhyayanam, Aranyakam, Upanishads, and allied prayogas." },
  { domain: "Samskritam & Sahitya", desc: "Classical Sanskrit grammar, literature, and dialogue mastery for all students." },
  { domain: "Modern Disciplines", desc: "Mathematics, Social Studies, and English to foster capable, well-rounded scholars." },
];

function TrusteePage() {
  return (
    <PageShell transparentHeader>
      <PageBanner title="Managing Trustee" subtitle="Sri Rajasasthrigal" image={heroHomam} />

      <Sloka
        devanagari="गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।"
        transliteration="Gurur Brahma Gurur Vishnuh Gurur Devo Maheshwarah."
        meaning="The Guru is Brahma, Vishnu and Maheshwara; the Guru is the Supreme Reality itself."
      />

      <section className="container-page py-20">
        <SectionHeading title="Sri Rajasasthrigal" eyebrow="Managing Trustee &amp; Administration" />
        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Sri Rajasasthrigal serves as the Managing Trustee of Vedashramam, guiding both the spiritual and
            administrative direction of the Sabha and the Veda Patasala — overseeing the Adhyapakas, the Vidyarthis’
            moral and Vedic progress, and the trust’s broader charitable mission.
          </p>
          <p>
            Under his stewardship, the Gurukulam maintains an uncompromising standard of Vedic pedagogy, ensuring
            that oral adhyayanam is imparted with pristine swara, strict anushthanam, and dedicated service to
            Sanatana Dharma.
          </p>
        </div>

        {/* Faculty & Academic Structure */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="font-display text-2xl text-maroon text-center">Faculty &amp; Academic Guidance</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FACULTY_DOMAINS.map((f) => (
              <div key={f.domain} className="surface-card p-6">
                <h4 className="font-display text-lg text-maroon">{f.domain}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mandala-bg mx-auto mt-14 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">ஸ்ரீ ராஜசாஸ்திரிகள், நிர்வாக அறங்காவலர்</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            ஸ்ரீ ராஜசாஸ்திரிகள் வேதாஶ்ரமத்தின் நிர்வாக அறங்காவலராகப் பணியாற்றி, சபை மற்றும் வேத
            பாடசாலையின் ஆன்மீக மற்றும் நிர்வாக திசைகளை வழிநடத்துகிறார்.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
