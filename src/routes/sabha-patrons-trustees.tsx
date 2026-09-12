import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import arunachalamPhoto from "@/assets/sabha-patrons-trustees/sri-g-arunachalam.jpg";
import rajaSastrigalPhoto from "@/assets/sabha-patrons-trustees/brahmashri-raja-sastrigal.jpeg";
import guruPrasadBhattPhoto from "@/assets/sabha-patrons-trustees/guru-prasa-bhatt.jpeg";
import gouriShankaraSharma from "@/assets/sabha-patrons-trustees/gouri-shankara-sharma.jpeg";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/sabha-patrons-trustees")({
  head: () => ({
    meta: [
      { title: "Patrons & Trustees — Veda Ashrama Gurukulam & Sabha" },
      {
        name: "description",
        content:
          "Founder & Managing Trustee G Arunachalam, Managing Trustee Smt. Kalyani, Trustees, and Vedic Teachers & Scholars.",
      },
      { property: "og:title", content: "Patrons & Trustees — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content:
          "Our Founder, Managing Trustees, Trustees, and dedicated Vedic Teachers & Scholars.",
      },
    ],
  }),
  component: SabhaPatronsTrusteesPage,
});

const TEACHERS = [
  {
    name: "Guru Prasad Bhatt",
    role: "Vedic Teacher",
    img: guruPrasadBhattPhoto,
  },
  {
    name: "Gouri Shankara Sharma",
    role: "Agama Teacher",
    img: gouriShankaraSharma,
  },
  { name: "Mehta Sastrigal", role: "Prayoga Teacher" },
  { name: "Chidambaram Sena Sastrigal", role: "Prayoga Teacher" },
];

function SabhaPatronsTrusteesPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Patrons & Trustees"
        subtitle="Veda Ashrama Gurukulam & Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust"
        image={heroTemple}
      />

      <Sloka
        devanagari="लोकाः समस्ताः सुखिनो भवन्तु।"
        transliteration="Loka Samastha Sukhino Bhavantu."
        meaning="“May all beings in the world be happy and peaceful.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Patrons & Trustees" eyebrow="Leadership & Governance" />

        <div className="mx-auto mt-14 max-w-4xl space-y-10">
          {/* Managing Trustees */}
          <div className="surface-card rounded-2xl border-2 border-border/80 p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Leadership &amp; Governance
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl text-maroon">
              Founder &amp; Managing Trustees
            </h3>

            {/* Top Image */}
            <div className="mt-6 overflow-hidden rounded-xl border border-border/60 bg-muted/20 shadow-sm">
              <img
                src={arunachalamPhoto}
                alt="Sri G Arunachalam and Smt. Subbulakshmi — Founder & Managing Trustees"
                className="w-full h-72 sm:h-96 md:h-[420px] object-cover object-center"
              />
            </div>

            {/* Below Image: Two Managing Trustees Cards */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    Founder &amp; Managing Trustee
                  </span>
                  <h4 className="mt-1 font-display text-2xl text-maroon">Sri G Arunachalam</h4>
                  <p className="text-xs font-semibold text-primary mt-0.5">
                    Founder – Veda Ashrama Gurukulam, Puducherry
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    Founder of Veda Ashrama Gurukulam and Sri Sai Sankara Bhaktha Sabha
                    Gomarsakshana Educational Seva Trust. Dedicated to the preservation and
                    development of Vedic knowledge, Sanātana Dharma, Agama traditions, Go
                    Samrakshana and traditional education.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    Managing Trustee
                  </span>
                  <h4 className="mt-1 font-display text-2xl text-maroon">Smt. Subbulakshmi</h4>
                  <p className="text-xs font-semibold text-primary mt-0.5">
                    Managing Trustee – Veda Ashrama Gurukulam
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    Serves as Managing Trustee and works alongside Sri G Arunachalam in guiding and
                    developing the Gurukulam's educational, spiritual and service-oriented
                    activities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trustees */}
          <div className="surface-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Trustees
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl text-maroon">Trustees</h3>

            {/* Top Image */}
            <div className="mt-6 overflow-hidden rounded-xl border border-border/60 bg-muted/20 shadow-sm">
              <img
                src={rajaSastrigalPhoto}
                alt="Brahmashri Raja Sastrigal — Trustee"
                className="w-full h-72 sm:h-96 md:h-[420px] object-cover object-top"
              />
            </div>

            {/* Below Image: Two Trustees Cards */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-6">
                <h4 className="font-display text-xl sm:text-2xl text-maroon">
                  Brahmashri Raja Sastrigal
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                  Trustee
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  Distinguished Vedic scholar and Trustee guiding the Patasala's spiritual rituals,
                  Adhyayana, and daily Vedic practices.
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-xl sm:text-2xl text-maroon">Smt. Kalyani</h4>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                    Trustee
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    Dedicated Trustee supporting the institution's welfare, educational mission, and
                    community service endeavors.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground/85">
              Sri Arunachalam and Smt. Subbulakshmi have played an important role in supporting the
              Vedic institution and its educational mission.
            </p>
          </div>

          {/* Vedic Teachers & Scholars */}
          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Scholars &amp; Adhyapakas
                </span>
                <h3 className="font-display text-2xl text-maroon">Vedic Teachers &amp; Scholars</h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              The Gurukulam is supported by dedicated teachers and scholars who contribute to the
              traditional education and training of its students:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-1">
              {TEACHERS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col items-center justify-between rounded-xl border border-border/60 bg-card p-4 shadow-2xs"
                >
                  {t.img && (
                    <img
                      src={t.img}
                      alt={`${t.name} Image`}
                      className="w-xs h-xs sm:h-md md:h-md object-cover object-center rounded-full my-4"
                    />
                  )}
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="text-xs font-medium text-primary">{t.role}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground/85">
              Together, the trustees, teachers and scholars work towards preserving a living Vedic
              tradition and passing Vedic wisdom, discipline, values, culture and spiritual
              knowledge to the next generation.
            </p>
          </div>

          {/* Closing Universal Prayer */}
          <div className="mandala-bg rounded-2xl border border-border p-8 text-center">
            <h4 className="font-display text-2xl font-bold text-maroon">
              Loka Samastha Sukhino Bhavantu
            </h4>
            <p className="mt-2 text-sm italic text-foreground/80">
              May all beings in the world be happy and peaceful.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
