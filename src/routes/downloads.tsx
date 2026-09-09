import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { FileText, Music, Download, BookOpen, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads & Publications — Vedashramam" },
      {
        name: "description",
        content:
          "Download sacred Stotras, Puja Vidhanams, MP3 chanting, and publications produced by Vedashramam for devotees.",
      },
      { property: "og:title", content: "Downloads & Publications — Vedashramam" },
      {
        property: "og:description",
        content: "Stotras, Puja Vidhanams, and educational publications for chanting and daily worship.",
      },
    ],
  }),
  component: DownloadsPage,
});

const DOWNLOAD_ITEMS = [
  {
    title: "Sri Ganesa Pancharatnam",
    category: "Stotra & Chanting",
    desc: "Composed by Sri Adi Shankaracharya. Complete text in multiple scripts with authentic Vedic intonation audio.",
    formats: [
      { label: "MP3 Audio", icon: Music, type: "audio" },
      { label: "Sanskrit PDF", icon: FileText, type: "pdf" },
      { label: "Tamil PDF", icon: FileText, type: "pdf" },
      { label: "Telugu PDF", icon: FileText, type: "pdf" },
    ],
  },
  {
    title: "Vrata Pooja Vidhanam",
    category: "Ritual Guide",
    desc: "Step-by-step procedures for domestic vratas including Vinayaka Chaturthi, Varalakshmi Vratam, and Upakarma.",
    formats: [{ label: "Upcoming Release", icon: BookOpen, type: "status" }],
  },
  {
    title: "Sri Rudram & Chamakam Chanting Guide",
    category: "Veda Recitation",
    desc: "Text with authentic Swara markers for Krishna Yajur Veda Taittiriya Samhita Namakam and Chamakam.",
    formats: [
      { label: "Text with Swaras", icon: FileText, type: "pdf" },
      { label: "Adhyayanam Audio", icon: Music, type: "audio" },
    ],
  },
  {
    title: "Building Construction Appeal Brochure",
    category: "Patasala Appeal",
    desc: "Comprehensive 8-page brochure detailing the expansion of Veda Ashrama Gurukulam, building architectural plans, and sponsorship slabs.",
    formats: [{ label: "Download Brochure (PDF)", icon: Download, type: "pdf" }],
  },
];

function DownloadsPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Downloads"
        subtitle="Stotras, Puja Vidhanams, Audio Recordings &amp; Publications"
        image={heroTemple}
      />

      <Sloka
        devanagari="श्रोत्रं श्रुतेनैव न कुण्डलेन दानेन पाणिर्न तु कङ्कणेन। विभाति कायः करुणापराणां परोपकारैर्न तु चन्दनेन॥"
        transliteration="Shrotram Shrutenaiva Na Kundalena Danena Panirna Tu Kankanena, Vibhati Kayah Karunaparanaam Paropakarairna Tu Chandanena."
        meaning="Ears are truly adorned by listening to sacred scriptures, not earrings; hands by charitable giving, not bracelets; and the body by compassionate service to others, not sandalwood paste."
      />

      <section className="container-page py-20">
        <SectionHeading title="Publications &amp; Chanting Resources" eyebrow="Downloads" />

        <div className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-foreground/80">
          Below are select Stotras, Puja Vidhanams and other spiritual publications which the Sabha has prepared and
          recorded for the benefit of devotees. We warmly invite all devotees to make use of these sacred resources.
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {DOWNLOAD_ITEMS.map((item) => (
            <div key={item.title} className="surface-card flex flex-col justify-between rounded-xl border border-border p-6 shadow-sm">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{item.category}</span>
                <h3 className="mt-1 font-display text-xl text-maroon">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground/75">{item.desc}</p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="flex flex-wrap gap-2">
                  {item.formats.map((fmt) => {
                    const Icon = fmt.icon;
                    return (
                      <button
                        key={fmt.label}
                        type="button"
                        onClick={() => alert(`Downloading/Opening: ${fmt.label}`)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-gold hover:bg-gold/10 hover:text-maroon"
                      >
                        <Icon className="h-3.5 w-3.5 text-gold" />
                        <span>{fmt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-border bg-card p-6 text-center text-xs text-muted-foreground">
          <p>
            All publications and audio chanting recordings are provided free of cost for non-commercial spiritual and
            educational study. For physical copies or specialized ritual texts, please contact our Karuvadikuppam office.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
