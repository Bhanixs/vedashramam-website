import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/sabha-patrons-trustees")({
  head: () => ({
    meta: [
      { title: "Sabha Patrons & Trustees — Vedashramam" },
      {
        name: "description",
        content:
          "Leadership, Guru Parampara, Trustees and Patrons of Sri Sai Shankara Bhakta Sabha Educational and Go Samrakshana Seva Trust.",
      },
      { property: "og:title", content: "Sabha Patrons & Trustees — Vedashramam" },
      {
        property: "og:description",
        content: "Our Guru, Managing Trustees, Trustees, Patrons and Auditors guiding our sacred mission.",
      },
    ],
  }),
  component: SabhaPatronsTrusteesPage,
});

export function SabhaPatronsTrusteesPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Sabha Patrons & Trustees"
        subtitle="Leadership & Guidance of Sri Sai Shankara Bhakta Sabha"
        image={heroTemple}
      />

      <Sloka
        devanagari="गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥"
        transliteration="Gurur Brahma Gurur Vishnuh Gurur Devo Maheshwarah, Guruh Sakshat Param Brahma Tasmai Shri Gurave Namah."
        meaning="The Guru is Brahma, Vishnu, and Shiva; the Guru is the Supreme Reality incarnate. Salutations to the Holy Guru."
      />

      <section className="container-page py-20">
        <SectionHeading title="Guiding Presence & Leadership" eyebrow="Patrons & Trustees" />

        <div className="mx-auto mt-14 max-w-4xl space-y-10">
          {/* Mentor & Guru */}
          <div className="surface-card rounded-xl border border-border p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Mentor & Guru</span>
            <h3 className="mt-2 font-display text-2xl text-maroon">
              Late Bhashya Ratna Sri R. Venkatraman, Salakshana Ghanapati
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              Revered mentor, scholar, and stalwart of Vedic recitation whose lifelong devotion and scholarly mastery
              remain an eternal beacon for the Sabha and Gurukulam.
            </p>
          </div>

          {/* Managing Trustees */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface-card rounded-xl border border-border p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Founder & Managing Trustee</span>
              <h3 className="mt-2 font-display text-2xl text-maroon">Veda Samrat Brahmashri Raja Sastrigal</h3>
              <p className="mt-2 text-sm text-primary font-medium">Managing Trustee: Smt. Kalyani</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                Founder of Veda Ashrama Gurukulam and Sri Sai Shankara Bhakta Sabha. Leading the daily spiritual activities,
                Vedic preservation, Agama traditions, and Go Samrakshanam in Karuvadikuppam, Puducherry.
              </p>
            </div>

            <div className="surface-card rounded-xl border border-border p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Managing Trustee</span>
              <h3 className="mt-2 font-display text-2xl text-maroon">Brahma Sri G. Rama Ghanapatigal</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                Eminent Salakshana Ghanapati and spiritual guide steering the educational curriculum, traditional Vedic
                disciplines, and administrative duties of the Trust.
              </p>
            </div>
          </div>

          {/* Trustees */}
          <div className="surface-card rounded-xl border border-border p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Board of Trustees</span>
            <h3 className="mt-2 font-display text-xl text-maroon">Trustees</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Sri M. Swaminatha Sarma",
                "Sri V. Sriram Ghanapatigal",
                "Sri N. S. Sugavanam",
                "Sri J. Balasubramanian",
                "Sri P. K. Rajaraman",
                "Sri Arunachalam (Trustee)",
                "Smt. Subbulakshmi (Trustee)",
              ].map((name) => (
                <div key={name} className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/40 p-4">
                  <span className="h-2 w-2 shrink-0 rotate-45 bg-gold" />
                  <span className="text-sm font-medium text-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Patrons & Auditors */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface-card rounded-xl border border-border p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Patrons</span>
              <h3 className="mt-2 font-display text-xl text-maroon">Distinguished Patrons</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-semibold text-foreground">Sri N. Panchapakesan FCA</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-semibold text-foreground">Sri K. R. Paramahamsa I.A.S (Retd.)</span>
                </li>
              </ul>
            </div>

            <div className="surface-card rounded-xl border border-border p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Auditors</span>
              <h3 className="mt-2 font-display text-xl text-maroon">Statutory Auditors</h3>
              <p className="mt-4 text-sm font-medium text-foreground">
                Sri Venkatraman, Mahalingam Associates &amp; Co.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Chartered Accountants ensuring financial transparency, legal compliance, and regular auditing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
