import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";
import { ChevronLeft, ChevronRight, X, Play, Images } from "lucide-react";
import { cn } from "@/lib/utils";

// Ammavasai Tharpanam
import ammavasai01 from "@/assets/Ammavasai Tharpanam/ammavasai_tharpanam01.jpeg";

// Annadanam
import annadanam01 from "@/assets/Annadanam/annadanam01.jpeg";
import annadanam02 from "@/assets/Annadanam/annadanam02.jpeg";
import annadanam03 from "@/assets/Annadanam/annadanam03.jpeg";

// Krishna Jayanthi
import krishna01 from "@/assets/Krishna_Jayanthi/krishna_jayanthi01.jpeg";
import krishna02 from "@/assets/Krishna_Jayanthi/krishna_jayanthi02.jpeg";
import krishna03 from "@/assets/Krishna_Jayanthi/krishna_jayanthi03.jpeg";

// Sankara Jayanthi
import sankara01 from "@/assets/Sankara Jayanthi/sankara_jayanthi01.jpeg";
import sankara02 from "@/assets/Sankara Jayanthi/sankara_jayanthi02.jpeg";
import sankara03 from "@/assets/Sankara Jayanthi/sankara_jayanthi03.jpeg";
import sankara04 from "@/assets/Sankara Jayanthi/sankara_jayanthi04.jpeg";
import sankara05 from "@/assets/Sankara Jayanthi/sankara_jayanthi05.jpeg";
import sankara06 from "@/assets/Sankara Jayanthi/sankara_jayanthi06.jpeg";
import sankara07 from "@/assets/Sankara Jayanthi/sankara_jayanthi07.jpeg";
import sankara08 from "@/assets/Sankara Jayanthi/sankara_jayanthi08.jpeg";
import sankaraVideo from "@/assets/Sankara Jayanthi/sankara_jayanthi_video.mp4";

// Sankaranti
import sankaranti01 from "@/assets/Sankaranti/sankaranti01.jpg";
import sankaranti02 from "@/assets/Sankaranti/sankaranti02.jpg";
import sankaranti03 from "@/assets/Sankaranti/sankaranti03.jpg";
import sankaranti04 from "@/assets/Sankaranti/sankaranti04.jpg";
import sankaranti05 from "@/assets/Sankaranti/sankaranti05.jpg";
import sankaranti06 from "@/assets/Sankaranti/sankaranti06.jpg";
import sankaranti07 from "@/assets/Sankaranti/sankaranti07.jpg";
import sankaranti08 from "@/assets/Sankaranti/sankaranti08.jpg";
import sankaranti09 from "@/assets/Sankaranti/sankaranti09.jpg";

// Singeri Madam Swamigal
import singeriThumb from "@/assets/Singeri Madam Swamigal/singeri_swamigal01.jpeg";
import singeriVideo from "@/assets/Singeri Madam Swamigal/Singeri Swamigal video01.mp4";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities & Events — Vedashramam" },
      {
        name: "description",
        content:
          "Named celebrations and activities at Vedashramam: Sankara Jayanthi, Sankaranti, Krishna Jayanthi, Annadanam, Ammavasai Tharpanam, and Guru Sevas.",
      },
      { property: "og:title", content: "Activities & Events — Vedashramam" },
      {
        property: "og:description",
        content: "Veda Parayanam, homams, Navavarana Pooja, Deeparadhana, Annadanam and festival observances.",
      },
    ],
  }),
  component: ActivitiesPage,
});

type MediaItem = {
  type: "image" | "video";
  url: string;
  title?: string;
  poster?: string;
};

type EventItem = {
  id: string;
  title: string;
  cover: string;
  body: string;
  note: string;
  media: MediaItem[];
};

const PROGRAMME = [
  {
    time: "Fridays",
    activity: "Go Poojai & Aswa Poojai",
  },
  {
    time: "On Ammavasai",
    activity: "Ammavasai Tharpanam",
  }
];

const EVENTS: EventItem[] = [
  {
    id: "sankara-jayanthi",
    title: "Sankara Jayanthi",
    cover: sankara01,
    body: "Grand celebrations dedicated to Jagadguru Sri Adi Shankaracharya with multi-day Veda Parayanam, Shankara Bhashya Pathanam, Mahanyasa Purvaka Rudrabhishekam, and Deeparadhana by resident vidyarthis and learned acharyas.",
    note: "Observed annually in Vaisakha Masam with special homams and Annadanam.",
    media: [
      { type: "image", url: sankara01, title: "Sankara Jayanthi Alankaram & Deeparadhana" },
      { type: "image", url: sankara02, title: "Special Rudrabhishekam & Pooja" },
      { type: "image", url: sankara03, title: "Resident Vidyarthis during Chanting" },
      { type: "image", url: sankara04, title: "Acharyas and Sastrigals conducting rituals" },
      { type: "image", url: sankara05, title: "Maha Deeparadhana & Harathi" },
      { type: "image", url: sankara06, title: "Prasada Viniyogam & Devotee Gathering" },
      { type: "image", url: sankara07, title: "Sacred Homam & Purnahuti" },
      { type: "image", url: sankara08, title: "Veda Parayana Sadas" },
      { type: "video", url: sankaraVideo, title: "Sankara Jayanthi Celebration Video Highlights", poster: sankara01 },
    ],
  },
  {
    id: "sankaranti",
    title: "Sankaranti",
    cover: sankaranti01,
    body: "Auspicious Makara Sankranti and Pongal festival celebrated with Surya Namaskara mantram recitation, traditional Pongal naivedyam, special Veda Parayanam, and Go Pooja at the Gurukulam Goshala.",
    note: "Observed on Makara Sankranti / Thai Pongal with worship of cows and nature.",
    media: [
      { type: "image", url: sankaranti01, title: "Brahmashri Raja Sastrigal & Vidyarthis reciting Surya Mantras" },
      { type: "image", url: sankaranti02, title: "Traditional Pongal Preparation & Naivedyam" },
      { type: "image", url: sankaranti03, title: "Goshala Go-Pooja Ceremony" },
      { type: "image", url: sankaranti04, title: "Vidyarthis offering Arghyam & Prayers" },
      { type: "image", url: sankaranti05, title: "Veda Parayanam in Traditional Attire" },
      { type: "image", url: sankaranti06, title: "Pongal Celebrations with Devotees" },
      { type: "image", url: sankaranti07, title: "Sacred Rituals for Uttarayana Punyakalam" },
      { type: "image", url: sankaranti08, title: "Blessings & Sweet Pongal Prasadam" },
      { type: "image", url: sankaranti09, title: "Gurukulam Campus Festivities" },
    ],
  },
  {
    id: "krishna-jayanthi",
    title: "Krishna Jayanthi",
    cover: krishna01,
    body: "Sri Krishna Jayanthi (Gokulashtami) celebrations featuring Srimad Bhagavatam recital, floral alankaram, midnight Sri Krishna Janma Pooja, special aradhana, and devotional chanting by our Vidyarthis.",
    note: "Celebrated in Sravana/Bhadrapada on Rohini Nakshatram with sacred prasadam distribution.",
    media: [
      { type: "image", url: krishna01, title: "Sri Krishna Kalasa Alankaram & Sacred Floral Decor" },
      { type: "image", url: krishna02, title: "Special Gokulashtami Pooja & Deeparadhana" },
      { type: "image", url: krishna03, title: "Vidyarthis Reciting Krishna Jananam from Bhagavatam" },
    ],
  },
  {
    id: "annadanam",
    title: "Annadanam",
    cover: annadanam01,
    body: "The sacred practice of Nithya Annadanam, offering wholesome satvik meals daily to resident Vidyarthis, adhyapakas, visiting sadhus, and devotees across all festivals, ceremonies, and Samaradhana occasions.",
    note: "Conducted daily at the Gurukulam; devotees can sponsor for birthdays and special tithis.",
    media: [
      { type: "image", url: annadanam01, title: "Resident Vidyarthis partaking in traditional Annadanam with prayer" },
      { type: "image", url: annadanam02, title: "Freshly prepared Satvik feast served on banana leaves" },
      { type: "image", url: annadanam03, title: "Devotee Samaradhana & Prasada Seva" },
    ],
  },
  {
    id: "ammavasai-tharpanam",
    title: "Ammavasai Tharpanam",
    cover: ammavasai01,
    body: "Monthly Amavasya sacred rituals, Pitru Tharpanam guidance, and Tila Homam conducted by Patasala Sastrigals for pitru preethi and ancestral blessings for devotees and their families.",
    note: "Observed on every Amavasya (New Moon Day) in traditional sastraic accordance.",
    media: [
      { type: "image", url: ammavasai01, title: "Devotees and Sastrigals gathered for Amavasya Tharpanam" },
    ],
  },
  {
    id: "singeri-madam-swamigal",
    title: "Singeri Madam Swamigal",
    cover: singeriThumb,
    body: "Reverent observances, Paduka Poojas, and benedictions associated with the Jagadgurus of Dakshinamnaya Sri Sringeri Sharada Peetham, inspiring the students through sacred Anugraha Bhashanam and spiritual guidance.",
    note: "Sacred Guru Krupa events and Sri Sharada Peetham blessings.",
    media: [
      { type: "image", url: singeriThumb, title: "Sri Sharada Peetham Sacred Paduka Pooja & Devotee Gathering" },
      { type: "video", url: singeriVideo, title: "Sri Sringeri Swamigal Vijaya Yatra & Anugraha Bhashanam Video", poster: singeriThumb },
    ],
  },
];

const ASSET_MAP: Record<string, string> = {
  "/src/assets/Sankara Jayanthi/sankara_jayanthi01.jpeg": sankara01,
  "/src/assets/Sankara Jayanthi/sankara_jayanthi02.jpeg": sankara02,
  "/src/assets/Sankara Jayanthi/sankara_jayanthi03.jpeg": sankara03,
  "/src/assets/Sankara Jayanthi/sankara_jayanthi04.jpeg": sankara04,
  "/src/assets/Sankara Jayanthi/sankara_jayanthi05.jpeg": sankara05,
  "/src/assets/Sankara Jayanthi/sankara_jayanthi06.jpeg": sankara06,
  "/src/assets/Sankara Jayanthi/sankara_jayanthi07.jpeg": sankara07,
  "/src/assets/Sankara Jayanthi/sankara_jayanthi08.jpeg": sankara08,
  "/src/assets/Sankara Jayanthi/sankara_jayanthi_video.mp4": sankaraVideo,

  "/src/assets/Sankaranti/sankaranti01.jpg": sankaranti01,
  "/src/assets/Sankaranti/sankaranti02.jpg": sankaranti02,
  "/src/assets/Sankaranti/sankaranti03.jpg": sankaranti03,
  "/src/assets/Sankaranti/sankaranti04.jpg": sankaranti04,
  "/src/assets/Sankaranti/sankaranti05.jpg": sankaranti05,
  "/src/assets/Sankaranti/sankaranti06.jpg": sankaranti06,
  "/src/assets/Sankaranti/sankaranti07.jpg": sankaranti07,
  "/src/assets/Sankaranti/sankaranti08.jpg": sankaranti08,
  "/src/assets/Sankaranti/sankaranti09.jpg": sankaranti09,

  "/src/assets/Krishna_Jayanthi/krishna_jayanthi01.jpeg": krishna01,
  "/src/assets/Krishna_Jayanthi/krishna_jayanthi02.jpeg": krishna02,
  "/src/assets/Krishna_Jayanthi/krishna_jayanthi03.jpeg": krishna03,

  "/src/assets/Annadanam/annadanam01.jpeg": annadanam01,
  "/src/assets/Annadanam/annadanam02.jpeg": annadanam02,
  "/src/assets/Annadanam/annadanam03.jpeg": annadanam03,

  "/src/assets/Ammavasai Tharpanam/ammavasai_tharpanam01.jpeg": ammavasai01,

  "/src/assets/Singeri Madam Swamigal/singeri_swamigal01.jpeg": singeriThumb,
};

import { resolveMediaUrl as resolveMedia, isTemporaryBlobUrl } from "@/lib/resolve-media";

function resolveMediaUrl(url: string): string {
  if (!url) return "";
  return resolveMedia(url, ASSET_MAP[url] || url);
}

function ActivitiesPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dynamic activities from API/admin, falling back to static EVENTS
  const [allEvents, setAllEvents] = useState<EventItem[]>(EVENTS);

  useEffect(() => {
    fetch("/api/admin?action=activities")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped: EventItem[] = data
            .filter((d: any) => d.is_published !== false)
            .map((d: any) => {
              const defaultEvent = EVENTS.find(
                (e) => e.id === d.id || e.title.toLowerCase() === d.title.toLowerCase()
              );
              const photos: string[] = (Array.isArray(d.photos) ? d.photos : []).filter((p) => !isTemporaryBlobUrl(p));
              const videos: string[] = (Array.isArray(d.videos) ? d.videos : []).filter((v) => !isTemporaryBlobUrl(v));

              let mediaList: MediaItem[] = [
                ...photos.map((p, idx) => ({
                  type: "image" as const,
                  url: resolveMediaUrl(p),
                  title: `${d.title} Photo ${idx + 1}`,
                })),
                ...videos.map((v, idx) => ({
                  type: "video" as const,
                  url: resolveMediaUrl(v),
                  title: `${d.title} Video ${idx + 1}`,
                  poster: photos[0] ? resolveMediaUrl(photos[0]) : defaultEvent?.cover,
                })),
              ];

              if (mediaList.length === 0 && defaultEvent) {
                mediaList = defaultEvent.media;
              }

              const cover = photos[0]
                ? resolveMediaUrl(photos[0])
                : (defaultEvent?.cover || heroHomam);

              return {
                id: d.id,
                title: d.title,
                cover,
                body: d.description || defaultEvent?.body || "",
                note: d.event_date || d.category || defaultEvent?.note || "",
                media: mediaList,
              };
            });

          if (mapped.length > 0) {
            setAllEvents(mapped);
          }
        }
      })
      .catch(() => {});
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

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
        <SectionHeading title="Our Celebrations" eyebrow="Named observances with photo & video galleries" />

        <p className="mx-auto mt-4 max-w-2xl text-center text-xs sm:text-sm text-muted-foreground">
          Click on any celebration card below to view the complete photo gallery and video recordings from that event.
        </p>

        {/* Celebrations Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allEvents.map((e) => {
            const photoCount = e.media.filter((m) => m.type === "image").length;
            const videoCount = e.media.filter((m) => m.type === "video").length;

            return (
              <article
                key={e.title}
                onClick={() => {
                  setSelectedEvent(e);
                  setCurrentIndex(0);
                }}
                className="surface-card surface-card-hover group flex cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={e.cover}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Hover Action Overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/95 px-3.5 py-1 text-xs font-semibold text-primary-foreground shadow-md backdrop-blur-sm">
                      <Play className="h-3 w-3 fill-primary-foreground" /> View Photos &amp; Videos ({e.media.length})
                    </span>
                  </div>
                  {/* Media Counter Badge */}
                  <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white shadow backdrop-blur-md">
                    <Images className="h-3.5 w-3.5 text-gold" />
                    <span>
                      {photoCount > 0 && `${photoCount} ${photoCount === 1 ? "Photo" : "Photos"}`}
                      {videoCount > 0 && ` • ${videoCount} Video`}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl text-maroon transition-colors group-hover:text-primary">
                      {e.title}
                    </h3>
                    <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      View Gallery →
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                  <p className="mt-5 border-t border-border pt-4 text-xs font-medium text-primary">{e.note}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Daily Programme Section */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="font-display text-2xl text-maroon">Daily programme</h3>
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

        {/* Tamil Summary Note */}
        <div className="mandala-bg mx-auto mt-16 max-w-3xl rounded-lg border border-border p-8 text-center">
          <h3 className="font-display text-xl text-maroon">நடவடிக்கைகளும் நிகழ்வுகளும்</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            வெள்ளிக்கிழமைகளில்: கோ பூஜை & அஸ்வ பூஜை &amp;
            அமாவாசை நாட்களில்: அமாவாசை தர்ப்பணம்.
          </p>
        </div>
      </section>

      {/* Interactive Media Carousel Lightbox Modal */}
      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-sm animate-in fade-in-0 duration-200"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative flex max-h-[96vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border/40 bg-card text-card-foreground shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4 bg-muted/40">
              <div className="flex items-center gap-3">
                <h4 className="font-display text-xl sm:text-2xl text-maroon">{selectedEvent.title}</h4>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {currentIndex + 1} of {selectedEvent.media.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Stage (Photo or Video Player) */}
            <div className="relative flex flex-1 items-center justify-center bg-black/95 p-3 sm:p-6 min-h-[300px] sm:min-h-[480px]">
              {/* Previous Arrow */}
              {selectedEvent.media.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : selectedEvent.media.length - 1))
                  }
                  className="absolute left-3 sm:left-6 z-20 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition-all hover:bg-primary hover:scale-110"
                  aria-label="Previous item"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Active Media Container */}
              <div className="flex max-h-[60vh] sm:max-h-[66vh] w-full items-center justify-center overflow-hidden">
                {selectedEvent.media[currentIndex].type === "video" ? (
                  <video
                    key={selectedEvent.media[currentIndex].url}
                    src={selectedEvent.media[currentIndex].url}
                    poster={selectedEvent.media[currentIndex].poster}
                    controls
                    playsInline
                    autoPlay
                    className="max-h-[60vh] sm:max-h-[66vh] max-w-full rounded-lg object-contain shadow-2xl bg-black"
                  />
                ) : (
                  <img
                    key={selectedEvent.media[currentIndex].url}
                    src={selectedEvent.media[currentIndex].url}
                    alt={selectedEvent.media[currentIndex].title || selectedEvent.title}
                    className="max-h-[60vh] sm:max-h-[66vh] max-w-full rounded-lg object-contain select-none shadow-2xl"
                  />
                )}
              </div>

              {/* Next Arrow */}
              {selectedEvent.media.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) => (prev < selectedEvent.media.length - 1 ? prev + 1 : 0))
                  }
                  className="absolute right-3 sm:right-6 z-20 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition-all hover:bg-primary hover:scale-110"
                  aria-label="Next item"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Media Caption / Title */}
            {selectedEvent.media[currentIndex].title && (
              <div className="border-t border-border/60 bg-muted/40 px-6 py-2.5 text-center">
                <p className="text-xs sm:text-sm font-medium text-foreground/90">
                  {selectedEvent.media[currentIndex].title}
                </p>
              </div>
            )}

            {/* Carousel Thumbnails Strip */}
            {selectedEvent.media.length > 1 && (
              <div className="flex gap-2 overflow-x-auto p-3.5 border-t border-border bg-card">
                {selectedEvent.media.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      "relative h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all",
                      currentIndex === idx
                        ? "border-primary ring-2 ring-primary/40 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img
                      src={item.poster || item.url}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="h-4 w-4 text-white fill-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </PageShell>
  );
}
