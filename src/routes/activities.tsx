import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities & Events — Vedashramam" },
      {
        name: "description",
        content:
          "Named celebrations at Vedashramam with detailed daily programmes: Navarathri, Ramanavami, Annual Day of the Patasala, and Jayanthi observances.",
      },
      { property: "og:title", content: "Activities & Events — Vedashramam" },
      {
        property: "og:description",
        content: "Veda Parayanam, homams, Navavarana Pooja, Deeparadhana and Mantrapushpam.",
      },
    ],
  }),
  component: ActivitiesPage,
});

const PROGRAMME = [
  {
    time: "7:00 AM – 11:00 AM",
    activity: "Srimad Ramayana Moola Parayanam, Navavarana Pooja, daily Poojas & Homams",
  },
  { time: "Evening", activity: "Deeparadhana & Mantrapushpam" },
];

const EVENTS = [
  {
    title: "Adi Sankara Jayanthi & Acharyal Jayanthi Celebrations",
    body: "Multi-day celebrations featuring Rig, Yajur, and Sama Veda Parayanam, Kamyartha Homams, Maha Rudram, and Sata Chandi Yagams with senior Vedic scholars and Matha representatives.",
    note: "Observed annually in Vaisakha Masam with special homams and Annadanam.",
  },
  {
    title: "Vasanta Navarathri & Sri Ramanavami Celebrations",
    body: "The grand annual festival observed with daily Srimad Ramayana Moola Parayanam, Navavarana Pooja, and Homa rituals throughout the morning, followed by evening Deeparadhana.",
    note: "Daily 7:00 AM – 11:00 AM and 6:00 PM – 8:00 PM during Navarathri.",
  },
  {
    title: "Annual Day of the Veda Patasala",
    body: "A comprehensive gathering showcasing student progress, public recitation demonstrations, awards and purses for graduating Vidyarthis, and a Sanskrit drama enacted by the students.",
    note: "Celebrated annually in the presence of eminent scholars and devotees.",
  },
  {
    title: "Mahasivarathri Akhanda Rudrabhishekam",
    body: "Continuous four-kala worship throughout the holy night, beginning with Mahanyasa Purvaka Ekadasa Rudrabhishekam (4:30 PM – 9:00 PM) and progressing through the 2nd, 3rd, and 4th Kalas until dawn.",
    note: "All four kalas open to devotee participation and sankalpam.",
  },
  {
    title: "Yajur & Samaveda Upakarma (Avani Avittam)",
    body: "Annual renewal of Yagnopaveetham, Kamokarshit Japam, and Veda Aarambham for resident students and community householders, with complete mantras and audio guidance.",
    note: "Observed in Sravana and Bhadrapada months as per sastraic dates.",
  },
  {
    title: "Monthly Sevas: Pradosham, Anusham & Chaturthi",
    body: "Dedicated monthly observances including Pradosha Puja on Trayodashi, Ganapathi Homam on Sankatahara Chaturthi, Avahanti Homam on Shukla Panchami, and Anusham Star Puja.",
    note: "Devotees can subscribe for sankalpam across all monthly sevas.",
  },
];

function ActivitiesPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Activities & Events"
        subtitle="Celebrations observed at Vedashramam through the year"
        image={heroHomam}
      />

      <Sloka
        devanagari="सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।"
        transliteration="Sarve Bhavantu Sukhinah, Sarve Santu Niramayah."
        meaning="Traditional peace verse — “May all be happy, may all be free from illness, may all see auspiciousness, may none suffer.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Our Celebrations" eyebrow="Named observances with a daily programme" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENTS.map((e) => (
            <article key={e.title} className="surface-card surface-card-hover flex flex-col p-7">
              <h3 className="font-display text-xl text-maroon">{e.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              <p className="mt-5 border-t border-border pt-4 text-xs text-primary">{e.note}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="font-display text-2xl text-maroon">Navarathri & Ramanavami — daily programme</h3>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            {PROGRAMME.map((p, i) => (
              <div
                key={p.time}
                className={`grid grid-cols-1 gap-1 p-5 sm:grid-cols-[220px_1fr] ${
                  i % 2 === 0 ? "bg-card" : "bg-muted"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{p.time}</span>
                <span className="text-sm text-foreground/85">{p.activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">நடவடிக்கைகளும் நிகழ்வுகளும்</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            காலை 7:00 – 11:00: ஸ்ரீமத் ராமாயண மூல பாராயணம், நவாவரண பூஜை, தினசரி பூஜைகள் &amp;
            ஹோமங்கள். மாலை: தீபாராதனை &amp; மந்திரபுஷ்பம்.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
