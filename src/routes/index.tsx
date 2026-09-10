import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Flame, Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroHomam from "@/assets/hero-homam.jpg";
import heroTemple from "@/assets/hero-temple.jpg";
import sankaraCover from "@/assets/Sankara Jayanthi/sankara_jayanthi04.jpeg";
import sankarantiCover from "@/assets/Sankaranti/sankaranti04.jpg";
import krishnaCover from "@/assets/Krishna_Jayanthi/krishna_jayanthi03.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedashrama Gurukulam — Veda Patasala & Spiritual Centre, Pondicherry" },
      {
        name: "description",
        content:
          "Welcome to Vedashrama Gurukulam: a charitable Sabha and a residential Veda Patasala in Pondicherry, training the next generation of Vedic scholars in the guru-shishya parampara.",
      },
      { property: "og:title", content: "Welcome to Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "Sanatana Dharma Prachara, Veda Patasala, Spiritual Centre — Pondicherry.",
      },
    ],
  }),
  component: Home,
});

const SLIDES = [
  {
    image: sankaraCover,
    title: "Sankara Jayanthi Mahotsavam",
    subtitle: "Veda Parayanam, Shankara Bhashya Pathanam, Rudrabhishekam & Sadas",
    cta: { label: "View Celebration", to: "/activities" },
  },
  {
    image: heroTemple,
    title: "Why Veda Samrakshanam",
    subtitle: "Vedas — The Eternal Glory of Our Sacred Tradition",
    cta: { label: "Read More", to: "/why-veda-samrakshanam" },
  },
  {
    image: heroHomam,
    title: "Appeal for Construction of Veda Patasala",
    subtitle: "Please support us in this noble endeavour for Vedic education",
    cta: { label: "Support Us", to: "/donate" },
  },
  {
    image: heroTemple,
    title: "Subscribe to Nithya Poojas Sankalpam",
    subtitle: "Loka Samastha Sukhino Bhavantu — Daily & Monthly Sevas",
    cta: { label: "View Sevas", to: "/donate" },
  },
  {
    image: sankarantiCover,
    title: "Makara Sankranti & Go Pooja",
    subtitle: "Surya Namaskara Mantram, Pongal Samaradhana & Goshala Seva",
    cta: { label: "View Celebration", to: "/activities" },
  },
] as const;

function Hero() {
  const [i, setI] = useState(0);
  const currentSlide = SLIDES[i] ?? SLIDES[0];

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[62vh] min-h-[420px] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover object-[center_35%] sm:object-center"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          {/* Subtle gradient veil for enhanced readability without drowning the photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
        </div>
      ))}

      <div className="container-page relative flex h-full items-center justify-center text-center px-4 sm:px-6">
        <div key={i} className="max-w-3xl animate-fade-up">
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-primary-foreground drop-shadow-sm">
            {currentSlide.title}
          </h1>
          <p className="mx-auto mt-3 sm:mt-5 max-w-xl text-xs sm:text-base md:text-lg text-primary-foreground/90 leading-relaxed">
            {currentSlide.subtitle}
          </p>
          <Link
            to={currentSlide.cta.to}
            className="mt-5 sm:mt-8 inline-flex rounded-md bg-primary px-6 py-2.5 sm:px-8 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-maroon shadow-md"
          >
            {currentSlide.cta.label}
          </Link>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/15 sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setI((v) => (v + 1) % SLIDES.length)}
        className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/15 sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, idx) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-8 bg-gold" : "w-3 bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: Flame,
    title: "Vedashrama Gurukulam Sabha",
    to: "/about-sabha",
    body: "A registered non-profitable charitable trust established for rendering yeoman service in religious and spiritual activities, and preserving the oral recitation of Vedas under the Guru-Sishya parampara.",
  },
  {
    icon: BookOpen,
    title: "Gurukula Veda Patasala",
    to: "/patasala-details",
    body: "A traditional Gurukula system training Vidyarthis in oral chanting, hearing, repeating and committing the sacred Vedas to memory under experienced Acharyas.",
  },
];

const POSTS = [
  {
    image: sankaraCover,
    category: "Veda Parayanam & Sadas",
    title: "Sankara Jayanthi Mahotsavam",
    excerpt:
      "Grand celebrations dedicated to Jagadguru Sri Adi Shankaracharya with multi-day Veda Parayanam, Shankara Bhashya Pathanam, Mahanyasa Purvaka Rudrabhishekam, and Deeparadhana by resident vidyarthis and learned acharyas.",
    to: "/activities",
  },
  {
    image: sankarantiCover,
    category: "Festival & Go Pooja",
    title: "Makara Sankranti & Go Pooja",
    excerpt:
      "Auspicious Makara Sankranti and Pongal festival celebrated with Surya Namaskara mantram recitation, traditional Pongal naivedyam, special Veda Parayanam, and Go Pooja at the Gurukulam Goshala.",
    to: "/activities",
  },
  {
    image: krishnaCover,
    category: "Utsavam & Parayanam",
    title: "Sri Krishna Jayanthi Utsavam",
    excerpt:
      "Sri Krishna Jayanthi (Gokulashtami) celebrations featuring Srimad Bhagavatam recital, floral alankaram, midnight Sri Krishna Janma Pooja, special aradhana, and devotional chanting by our Vidyarthis.",
    to: "/activities",
  },
];

function Home() {
  return (
    <PageShell transparentHeader>
      <Hero />

      <Sloka
        devanagari="ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै। ॐ शान्तिः शान्तिः शान्तिः॥"
        transliteration="Om Saha Nau Avatu, Saha Nau Bhunaktu, Saha Viryam Karavavahai. Om Shantih Shantih Shantih."
        meaning="Taittiriya Upanishad — “May we be protected together, nourished together; may we strive together with vigour; may our learning be filled with brilliance; may there be no ill-will between us.”"
      />

      <section className="container-page py-20">
        <SectionHeading
          title="Welcome to Vedashrama Gurukulam"
          eyebrow="Sanatana Dharma Prachara · Veda Patasala · Spiritual Centre"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="surface-card surface-card-hover flex flex-col p-8 text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <p.icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-6 font-display text-xl text-maroon">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <span className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Read more
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl space-y-5 text-center text-[0.95rem] leading-relaxed text-foreground/85">
          <p>
            Vedashrama Gurukulam is home to two connected institutions: a Sabha dedicated to
            preserving and promoting Vedic and spiritual tradition, and a residential Veda Patasala
            (Gurukulam) training the next generation of Vedic scholars in the traditional
            guru-shishya system — from Pondicherry.
          </p>
          <p>
            The Sabha promotes Sanatana Dharma, supports the preservation of oral Vedic recitation,
            and sustains the Patasala’s residential education programme — covering student boarding,
            acharya support and facility upkeep.
          </p>
          <Link
            to="/patasala-details"
            className="inline-flex rounded-md border border-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Know more about the Veda Patasala
          </Link>
        </div>
      </section>

      <section className="mandala-bg border-y border-border py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Recent Activities"
            eyebrow="Sacred celebrations, homams and festival observances"
          />
          <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
            {POSTS.map((post) => (
              <Link
                key={post.title}
                to={post.to}
                className="surface-card surface-card-hover overflow-hidden group block rounded-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-black/65 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-white uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl leading-snug text-maroon group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold text-primary">
                    View Photos &amp; Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maroon py-20 text-maroon-foreground">
        <div className="container-page text-center">
          <p className="font-display text-2xl text-gold">सर्वे भवन्तु सुखिनः</p>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl">Support Vedashrama Gurukulam</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-maroon-foreground/80">
            As a trust, Vedashrama Gurukulam depends on the generosity of well-wishers to sustain
            the Sabha’s activities and the Veda Patasala’s residential education. Support can take
            the form of Vidyadanam (sponsoring a student’s education) or Annadanam (sponsoring
            meals).
          </p>
          <Link
            to="/donate"
            className="mt-9 inline-flex rounded-md bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
