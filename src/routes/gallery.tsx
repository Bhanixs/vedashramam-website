import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell, PageBanner, SectionHeading } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { resolveMediaUrl, isTemporaryBlobUrl } from "@/lib/resolve-media";

// Gallery folder images
import img01 from "@/assets/Gallery/image01.jpg";
import img02 from "@/assets/Gallery/image02.jpg";
import img03 from "@/assets/Gallery/image03.jpg";
import img04 from "@/assets/Gallery/image04.jpg";
import img05 from "@/assets/Gallery/image05.jpg";
import img06 from "@/assets/Gallery/image06.jpg";
import img07 from "@/assets/Gallery/image07.jpg";
import img08 from "@/assets/Gallery/image08.jpg";
import img09 from "@/assets/Gallery/image09.jpg";
import img10 from "@/assets/Gallery/image10.jpg";
import img11 from "@/assets/Gallery/image11.jpg";
import img12 from "@/assets/Gallery/image12.jpg";
import img13 from "@/assets/Gallery/image13.jpg";
import img14 from "@/assets/Gallery/image14.jpg";
import img15 from "@/assets/Gallery/image15.jpg";
import img16 from "@/assets/Gallery/image16.jpg";
import img17 from "@/assets/Gallery/image17.jpg";
import img18 from "@/assets/Gallery/image18.jpg";
import img19 from "@/assets/Gallery/image19.jpg";
import img20 from "@/assets/Gallery/image20.jpg";
import img21 from "@/assets/Gallery/image21.jpg";
import img22 from "@/assets/Gallery/image22.jpg";
import img23 from "@/assets/Gallery/image23.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vedashrama Gurukulam" },
      {
        name: "description",
        content:
          "Photographs of celebrations, daily Patasala life, homams and community events at Vedashrama Gurukulam, Pondicherry.",
      },
      { property: "og:title", content: "Gallery — Vedashrama Gurukulam" },
      { property: "og:description", content: "Celebrations, daily Patasala life, homams and community events." },
    ],
  }),
  component: GalleryPage,
});

const GALLERY_IMAGES = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
];

const GALLERY_MAP: Record<string, string> = {
  "/src/assets/Gallery/image01.jpg": img01,
  "/src/assets/Gallery/image02.jpg": img02,
  "/src/assets/Gallery/image03.jpg": img03,
  "/src/assets/Gallery/image04.jpg": img04,
  "/src/assets/Gallery/image05.jpg": img05,
  "/src/assets/Gallery/image06.jpg": img06,
  "/src/assets/Gallery/image07.jpg": img07,
  "/src/assets/Gallery/image08.jpg": img08,
  "/src/assets/Gallery/image09.jpg": img09,
  "/src/assets/Gallery/image10.jpg": img10,
  "/src/assets/Gallery/image11.jpg": img11,
  "/src/assets/Gallery/image12.jpg": img12,
  "/src/assets/Gallery/image13.jpg": img13,
  "/src/assets/Gallery/image14.jpg": img14,
  "/src/assets/Gallery/image15.jpg": img15,
  "/src/assets/Gallery/image16.jpg": img16,
  "/src/assets/Gallery/image17.jpg": img17,
  "/src/assets/Gallery/image18.jpg": img18,
  "/src/assets/Gallery/image19.jpg": img19,
  "/src/assets/Gallery/image20.jpg": img20,
  "/src/assets/Gallery/image21.jpg": img21,
  "/src/assets/Gallery/image22.jpg": img22,
  "/src/assets/Gallery/image23.jpg": img23,
};
function resolveGalleryUrl(url: string): string {
  if (!url) return "";
  return resolveMediaUrl(url, url);
}

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [allImages, setAllImages] = useState<string[]>(GALLERY_IMAGES);

  useEffect(() => {
    fetch("/api/admin?action=gallery")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data
            .filter((item: any) => item.is_published !== false && Boolean(item.image_url) && !isTemporaryBlobUrl(item.image_url))
            .map((item: any) => resolveGalleryUrl(item.image_url))
            .filter(Boolean);
          if (mapped.length > 0) {
            setAllImages(mapped);
          }
        }
      })
      .catch(() => {});
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : allImages.length - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < allImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, allImages.length]);

  // Lock background scroll when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Gallery"
        subtitle="Celebrations, daily Patasala life, homams and community events"
        image={heroTemple}
      />

      <section className="container-page py-20">
        <SectionHeading title="Moments at Vedashrama Gurukulam" eyebrow="Photo Gallery" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="surface-card surface-card-hover group cursor-pointer overflow-hidden rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={img}
                  alt={`Vedashrama Gurukulam photo ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in-0 duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-5xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Counter */}
            <div className="absolute -top-10 left-0 text-xs font-semibold text-white/80">
              {lightboxIndex + 1} / {allImages.length}
            </div>

            {/* Previous button */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : allImages.length - 1))
              }
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition-all hover:bg-primary hover:scale-110"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Lightbox Image */}
            <img
              src={allImages[lightboxIndex]}
              alt={`Vedashrama Gurukulam photo ${lightboxIndex + 1}`}
              className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
            />

            {/* Next button */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null && prev < allImages.length - 1 ? prev + 1 : 0))
              }
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white backdrop-blur-md transition-all hover:bg-primary hover:scale-110"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </PageShell>
  );
}
