import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import heroHomam from "@/assets/hero-homam.jpg";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vedashramam" },
      {
        name: "description",
        content:
          "Photographs of celebrations, daily Patasala life, homams and community events at Vedashramam, Pondicherry.",
      },
      { property: "og:title", content: "Gallery — Vedashramam" },
      { property: "og:description", content: "Celebrations, daily Patasala life, homams and community events." },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { image: heroRecitation, caption: "Daily Veda Adhyayanam in Gurukula tradition", category: "Patasala Life" },
  { image: heroHomam, caption: "Vaastu Shanti & Kamyartha Homams", category: "Rituals & Yagnas" },
  { image: heroTemple, caption: "H.H. Kanchi MahaPeriyaval Aradhanai & Deeparadhana", category: "Celebrations" },
  { image: heroHomam, caption: "Navavarana Pooja & Ramanavami Homa Vidhi", category: "Festivals" },
  { image: heroRecitation, caption: "Vidyarthis in Swara recitation with the Acharya", category: "Patasala Life" },
  { image: heroTemple, caption: "Visits of Revered Acharyals & Namasankeertanam", category: "Visits & Sadas" },
];

function GalleryPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Gallery"
        subtitle="Celebrations, daily Patasala life, homams and community events"
        image={heroTemple}
      />

      <section className="container-page py-20">
        <SectionHeading title="Moments at Vedashramam" eyebrow="Organised by event and category" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <figure key={i} className="surface-card surface-card-hover group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  width={1920}
                  height={1088}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.category}
                </p>
                <p className="mt-2 font-display text-lg text-maroon">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Photographs from recent celebrations will be added here as they are taken.
        </p>
      </section>
    </PageShell>
  );
}
