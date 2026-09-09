import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { Building2, Trees, Sun, HeartHandshake, CheckCircle2, ShieldCheck, Download, Sparkles } from "lucide-react";

export const Route = createFileRoute("/appeal-for-building-construction")({
  head: () => ({
    meta: [
      { title: "Appeal for Building Construction — Vedashramam" },
      {
        name: "description",
        content:
          "Help us build a state-of-the-art residential Veda Gurukulam & Gaushala on 3+ acres. Sponsor construction per sq ft or major project blocks.",
      },
      { property: "og:title", content: "Appeal for Building Construction — Vedashramam" },
      {
        property: "og:description",
        content: "Expansion project to accommodate 300 students with Gaushala, solar energy, and Vedic research facilities.",
      },
    ],
  }),
  component: AppealBuildingConstructionPage,
});

const HIGHLIGHTS = [
  "Accommodate 300 students at a single point of time with comprehensive residential facilities.",
  "Modern Gau Shala with ample indigenous cows and calves, organic vegetable garden, and fruiting trees.",
  "Modern hygienic kitchen to provide fresh, nutritious and traditional Satvik food daily.",
  "Comprehensive on-campus Medical and Health facilities for the Vidyarthis and resident Adhyapakas.",
  "Plenty of open space, unpolluted natural air, and herbal groves for physical well-being and play.",
  "Yoga and Meditation centre, digital manuscript library, and video conferencing technology for global discourses.",
  "Laboratory for hands-on ritual practice, Yajnas, and an Auditorium for scholarly assemblies.",
  "Living quarters for 20 Adhyapakas to observe their ritual duties like Aupasana and Agnihotra.",
  "Guest accommodation facilities for visiting Peethadhipatis, Jagadgurus, and Mahapurushas.",
];

const SPONSORSHIP_SLABS = [
  { desc: "Donation for Building Construction", amount: "Any Amount" },
  { desc: "Donation for Construction per Sq Ft", amount: "₹ 2,000 /-" },
  { desc: "Sponsorship for 16 Sq Ft", amount: "₹ 32,000 /-" },
  { desc: "Sponsorship for 32 Sq Ft", amount: "₹ 64,000 /-" },
  { desc: "Sponsorship for 54 Sq Ft", amount: "₹ 1,08,000 /-" },
  { desc: "Sponsorship for 64 Sq Ft", amount: "₹ 1,28,000 /-" },
  { desc: "Sponsorship for 108 Sq Ft", amount: "₹ 2,16,000 /-" },
  { desc: "Staff Quarters Block", amount: "₹ 13,05,000 /-" },
  { desc: "Veda Paripalaka", amount: "₹ 15,00,000 /-" },
  { desc: "Student Dormitory Block", amount: "₹ 20,00,000 /-" },
  { desc: "Gaushala Facility", amount: "₹ 20,00,000 /-" },
  { desc: "Veda Samrakshaka", amount: "₹ 25,00,000 /-" },
  { desc: "Veda Poshaka", amount: "₹ 50,00,000 /-" },
  { desc: "Veda Maha Poshaka", amount: "₹ 1,00,00,000 /-" },
  { desc: "Temple / Prayer Hall / Auditorium", amount: "₹ 2,62,84,333 /-" },
];

function AppealBuildingConstructionPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Appeal for Building Construction"
        subtitle="A Sacred Invitation to Build the Future Home of Vedic Wisdom &amp; Gau Samrakshanam"
        image={heroTemple}
      />

      <Sloka
        devanagari="हविर्गन्धो गवां रेणुः वेदानां ध्वनिरेव च। अपिगोदोहमात्रेण सर्व पापैः प्रमुच्यते॥"
        transliteration="Havir Gandho Gavang Renuh Vedanam Dhvanireva Cha, Api Godoha Matrena Sarva Papaih Pramuchyate."
        meaning="Wherever the sacred aroma of Homa oblations, the holy dust from cows' hooves, and the celestial resonance of Veda mantras permeate, all sins are purified in an instant."
      />

      <section className="container-page py-20">
        <SectionHeading title="A Vision for Generations" eyebrow="Sacred Appeal" />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Namaste. We appeal earnestly to support us in the construction of the new building for our Patasala and
            fervently hope that you will participate in our endeavours of Veda Samrakshanam. The Vedas are the origin of
            all Dharma (<em>Vedaha Akhila Dharma Moolam</em>). The great sages were able to codify the Almighty’s
            vibrations by their severe penance and keen perception to ensure humanity leads a peaceful, contented life.
            It is paramount that we nurture the roots of Dharma so that civilization bears flowers and fruits for all.
          </p>

          <h3 className="font-display text-2xl text-maroon pt-4">Why a New Campus?</h3>
          <p>
            With the Almighty’s blessings and Guru’s grace, our Patasala has attained the status of being a highly
            sought-after Veda Pathashala. Parents from across the nation seek admission for their sons, causing the
            student strength to rapidly outgrow the existing premises.
          </p>
          <p>
            To provide the most serene environment conducive to intensive Vedic study, a new location has been planned
            on <strong>more than 3 acres of fertile land</strong> donated generously by Sri Suri and family. The site
            benefits from ample groundwater, planned rainwater harvesting, and solar power infrastructure to sustain
            cooking, hot water, and lighting. The campus will re-establish a spacious, modern Gau Shala honoring the
            fundamental Vedic duty of Cow Protection.
          </p>
        </div>

        {/* Scriptural Injunctions */}
        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          <div className="surface-card rounded-2xl border-l-4 border-gold p-8 shadow-sm">
            <h4 className="font-display text-lg text-maroon">What Our Scriptures Say</h4>
            <div className="mt-4 space-y-4 text-sm text-foreground/85 leading-relaxed">
              <div>
                <p className="font-serif text-base font-semibold text-primary">
                  अग्नौ प्रास्ताहुतिः सम्यक् आदित्यमुपतिष्ठते । आदित्याज्जायते वृष्टिः वृष्टेरन्नं ततः प्रजाः ।।
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">
                  The Sun God is pleased when propitiated by offering Samidha (twigs) to Agni, transforming into holy
                  clouds that cause rains, nourishing all life on Earth.
                </p>
              </div>

              <div>
                <p className="font-serif text-base font-semibold text-primary">
                  कुक्षौ तिष्ठति यस्यान्नं वेदाभ्यासेन जीर्यते । कुलं तारयते तेषां दशपूर्वं दशापरं ।।
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">
                  Food digested in the body of one reciting the Vedas benefits the donor's 10 preceding and 10
                  succeeding generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Highlights Grid */}
        <div className="mx-auto mt-20 max-w-4xl">
          <SectionHeading title="Highlights of the New Campus" eyebrow="Architectural Plan" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="surface-card rounded-xl border border-border p-5 shadow-2xs">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-xs leading-relaxed text-foreground/80">{h}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Slabs Table */}
        <div className="mx-auto mt-20 max-w-3xl">
          <SectionHeading title="How / What You Can Sponsor" eyebrow="Contribution Slabs" />
          <p className="mt-4 text-center text-sm text-foreground/75">
            Sponsor by square feet or support an entire operational wing:
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-sm">
            <div className="bg-maroon px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-maroon-foreground flex justify-between">
              <span>Description / Component</span>
              <span>Amount</span>
            </div>
            <div className="divide-y divide-border bg-card">
              {SPONSORSHIP_SLABS.map((slab) => (
                <div key={slab.desc} className="flex items-center justify-between px-6 py-3.5 text-sm transition-colors hover:bg-muted/30">
                  <span className="font-medium text-foreground">{slab.desc}</span>
                  <span className="font-display font-bold text-primary">{slab.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className="rounded-md bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-maroon"
            >
              Donate Online for Building Fund
            </Link>
            <Link
              to="/downloads"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent"
            >
              <Download className="h-4 w-4 text-gold" />
              Download Construction Brochure
            </Link>
          </div>
        </div>

        {/* Note to Donors */}
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-border bg-muted/40 p-6 text-center text-xs text-foreground/80 leading-relaxed">
          <p>
            Contributions may be made by Cheque/DD or direct bank transfer in favour of{" "}
            <strong className="text-maroon">Sri sai Sankara baktha sabha</strong> or{" "}
            <strong className="text-maroon">Veda Ashrama Gurukulam</strong> (Bank: <strong>Indian Overseas Bank, Lawspet Branch</strong>, A/c: <strong>212101000031000</strong>, IFSC: <strong>IOBA0002121</strong>, UPI: <strong>9842327791@IOB</strong>). Registered Address: <strong>151, Edayanchavadi Road, OM Sakthi Nagar, Lawspet S.O, Puducherry, India - 605008</strong>. 80G tax exemption certificates (80G Unique Registration No.: <strong>AAMTS6931LF20221</strong>, PAN: <strong>AAMTS6931L</strong>) will be promptly issued.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
