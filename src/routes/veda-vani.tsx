import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import heroHomam from "@/assets/hero-homam.jpg";
import heroTemple from "@/assets/hero-temple.jpg";

export const Route = createFileRoute("/veda-vani")({
  head: () => ({
    meta: [
      { title: "Veda Vani — Journal of Vedashramam" },
      {
        name: "description",
        content:
          "Veda Vani: articles, event write-ups, stotrams and puja vidhanam guides from Vedashramam, Pondicherry.",
      },
      { property: "og:title", content: "Veda Vani — Journal of Vedashramam" },
      {
        property: "og:description",
        content: "Articles, stotrams, event write-ups and puja vidhanam guides.",
      },
    ],
  }),
  component: BlogPage,
});

const CATEGORIES = ["All", "Puja Vidhanams", "Activities & Events", "Articles & Stotrams"];

const POSTS = [
  {
    image: heroHomam,
    category: "Puja Vidhanams",
    title: "Vinayaka Chaturthi Vrata Puja Vidhanam",
    excerpt:
      "Ganesha or Ganapati is the Lord and destroyer of obstacles (Vighnaharta). Complete guide, sankalpam, and audio recitation for conducting the sacred vrata at home.",
  },
  {
    image: heroRecitation,
    category: "Activities & Events",
    title: "Samaveda & Yajur Upakarma (Avani Avittam)",
    excerpt:
      "Complete Upakarma procedure, Kamokarshit Japam, Brahma Yagnam, Yagnopaveetha Dharana mantras, and audio guidance for devotees observing the sacred rites.",
  },
  {
    image: heroTemple,
    category: "Puja Vidhanams",
    title: "Gokulashtami Puja Vidhanam",
    excerpt:
      "Celebrating the auspicious appearance of Bhagavan Sri Krishna with complete traditional puja vidhanam, aradhana rituals, stotrams and naivedyam instructions.",
  },
  {
    image: heroHomam,
    category: "Puja Vidhanams",
    title: "Varalakshmi Vrata Puja Vidhanam",
    excerpt:
      "Varalakshmi Vrata is observed to propitiate Goddess Lakshmi, the consort of Vishnu and bestower of auspicious boons (Varam), with traditional pooja vidhanam.",
  },
  {
    image: heroTemple,
    category: "Articles & Stotrams",
    title: "Why Veda Samrakshanam Matters",
    excerpt:
      "The eternal glory of the Vedas — cosmic vibrations preserved through oral recitation in the Guru-Sishya parampara, and our duty to sustain this sacred heritage.",
  },
  {
    image: heroRecitation,
    category: "Activities & Events",
    title: "Adi Sankara Jayanthi & Acharyal Jayanthi Observances",
    excerpt:
      "Multi-day celebration with Rig, Yajur and Sama Veda Parayanam, Kamyartha Homams, Maha Rudram, and Sata Chandi Yagams with senior Vedic scholars.",
  },
];

function BlogPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Veda Vani"
        subtitle="Articles, event write-ups, stotrams and puja vidhanam guides"
        image={heroRecitation}
      />

      <section className="container-page py-20">
        <SectionHeading title="From the Journal" eyebrow="Voice of the Vedas" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-accent px-4 py-1.5 text-xs uppercase tracking-[0.12em] text-accent-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="surface-card surface-card-hover overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1920}
                height={1088}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  {p.category}
                </p>
                <h3 className="mt-3 font-display text-lg leading-snug text-maroon">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
