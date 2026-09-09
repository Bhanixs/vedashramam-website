import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import rajaSastrigalImg from "@/assets/Raja Sastrigal/rajasastrigal_image.jpeg";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Heart,
  Users,
  Flame,
  Building,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/rajasastrigal")({
  head: () => ({
    meta: [
      { title: "Sri Raja Shastrigal — Veda Ashrama Gurukulam, Puducherry" },
      {
        name: "description",
        content:
          "Biography, Vedic lineage, Gurukulam establishment, and sacred missions of Sri Raja Shastrigal, Founder of Veda Ashrama Gurukulam.",
      },
      { property: "og:title", content: "Sri Raja Shastrigal — Veda Ashrama Gurukulam" },
      {
        property: "og:description",
        content:
          "Preserving the sacred Guru-Shishya tradition under Founder Veda Samrat Brahmashri Raja Sastrigal.",
      },
    ],
  }),
  component: RajaSastrigalPage,
});

function RajaSastrigalPage() {
  const ceremonies = [
    "Punyahavachanam",
    "Namakaranam",
    "Annaprashanam",
    "Upanayanam",
    "Seemantham",
    "Muhurtham ceremonies",
    "Shashtiyabdapoorthi",
    "Bhimaratha Shanti",
    "Sathabhishekam",
  ];

  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Sri Raja Shastrigal"
        subtitle="Founder – Veda Ashrama Gurukulam, Puducherry"
        image={heroRecitation}
      />

      <Sloka
        devanagari="लोकाः समस्ताः सुखिनो भवन्तु।"
        transliteration="Loka Samastha Sukhino Bhavantu."
        meaning="“May all beings everywhere in the world be happy, peaceful, and free from suffering.”"
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          title="A Living Tradition of Vedic Wisdom"
          eyebrow="Gurukulam Founder &amp; Acharya"
        />

        {/* Founder Hero Card with Image */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-shadow duration-300 hover:shadow-lg">
          <div className="relative aspect-[16/10] sm:aspect-[21/11] w-full overflow-hidden bg-muted">
            <img
              src={rajaSastrigalImg}
              alt="Sri Raja Shastrigal and Smt. Kalyani Raja Shastrigal"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                <Sparkles className="h-3.5 w-3.5" /> Founder &amp; Visionary
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl text-white drop-shadow">
                Sri Raja Shastrigal
              </h2>
              <p className="text-xs sm:text-sm text-white/90">
                Founder – Veda Ashrama Gurukulam, Puducherry
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              In Karuvadikuppam, Puducherry, Sri Raja Shastrigal and his family are dedicating their
              lives to the preservation and development of Vedic knowledge, Sanātana Dharma, Agama
              traditions, Go Samrakshana and traditional education.
            </p>

            {/* Core Biographical Details Grid */}
            <div className="mt-8 rounded-2xl border border-border/80 bg-muted/40 p-6 sm:p-8">
              <h3 className="font-display text-xl text-maroon">Personal &amp; Birth Details</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</span>
                    <p className="font-medium text-foreground">Sri Raja Shastrigal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date of Birth</span>
                    <p className="font-medium text-foreground">15-06-1972</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Place of Birth</span>
                    <p className="font-medium text-foreground">Panrutti, Cuddalore District</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Native Place</span>
                    <p className="font-medium text-foreground">Sangeethamangalam, Villupuram District</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Father</span>
                    <p className="font-medium text-foreground">Sri Arunachalam</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-maroon">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mother</span>
                    <p className="font-medium text-foreground">Smt. Subbulakshmi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Vedic Adhyayanam Section */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Guru-Shishya Parampara</span>
                <h3 className="font-display text-2xl text-maroon">Education &amp; Vedic Adhyayanam</h3>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-sm sm:text-base leading-relaxed text-foreground/85">
              <div className="rounded-xl border border-border/70 bg-muted/20 p-5">
                <h4 className="font-semibold text-foreground">General Schooling</h4>
                <p className="mt-1">
                  He pursued his schooling at Sri Maharishi Vidya Mandir, Chetpet, Chennai.
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-muted/20 p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-md bg-gold/20 px-2 py-0.5 text-xs font-bold text-maroon">Guru</span>
                  <h4 className="font-semibold text-foreground">Acharya Brahmasri Krishnamurthy Shastrigal, Villianur</h4>
                </div>
                <p className="mt-2">
                  Under his guidance, he studied Bodhayana and Vaidika Prayogas and was awarded the title of{" "}
                  <strong className="font-semibold text-maroon">Bodhayana Prayogar</strong>.
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-muted/20 p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-md bg-gold/20 px-2 py-0.5 text-xs font-bold text-maroon">Shrauta &amp; Samaveda Guru</span>
                  <h4 className="font-semibold text-foreground">Sri Balarama Shastrigal</h4>
                </div>
                <p className="mt-2">
                  He also studied Samaveda and Shrauta Prayogas under Sri Balarama Shastrigal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grihastha Dharma & Family */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Family &amp; Lineage</span>
                <h3 className="font-display text-2xl text-maroon">Grihastha Dharma &amp; Sons</h3>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border/70 bg-muted/20 p-5 text-sm sm:text-base text-foreground/85">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Married</span>
                  <p className="font-medium text-foreground">1992</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Wife</span>
                  <p className="font-medium text-foreground">Smt. Kalyani Raja Shastrigal</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Sons:</h4>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border/70 bg-muted/20 p-5">
                  <span className="text-xs font-bold text-gold">1. Elder Son</span>
                  <h5 className="mt-1 font-display text-lg text-maroon">Medha Dakshinamurthy Shastrigal</h5>
                  <div className="mt-2 flex items-center gap-2 text-sm text-foreground/80">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span>Date of Birth: 08-11-1993</span>
                  </div>
                </div>

                <div className="rounded-xl border border-border/70 bg-muted/20 p-5">
                  <span className="text-xs font-bold text-gold">2. Younger Son</span>
                  <h5 className="mt-1 font-display text-lg text-maroon">Sithambara Senathipathi Shastrigal</h5>
                  <div className="mt-2 flex items-center gap-2 text-sm text-foreground/80">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span>Date of Birth: 23-05-1995</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-4 text-sm font-medium text-foreground/90">
                Both sons studied the Vedas at Vedabhavan Veda Patashala, Hyderabad.
              </div>
            </div>
          </div>
        </div>

        {/* Institution Establishment & Gurukulam History */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Foundation &amp; Growth</span>
                <h3 className="font-display text-2xl text-maroon">Establishment of Patashalas &amp; Trust</h3>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-foreground/85">
              <p>
                After his marriage, Sri Raja Shastrigal established the{" "}
                <strong className="font-semibold text-foreground">
                  Sri Ananda Pranava Sakthi Amman Veda Agama Patashala
                </strong>{" "}
                and gradually expanded its activities.
              </p>
              <p>
                In 2011, he established the{" "}
                <strong className="font-semibold text-foreground">
                  Sri Sai Shankara Bhakta Sabha Trust
                </strong>
                . Under the Trust, he founded{" "}
                <strong className="font-semibold text-maroon">Vedashram Gurukulam</strong>, an
                institution dedicated to teaching the Vedas, Shivagama and Vaidika Prayogas, which has
                been functioning for more than 15 years.
              </p>
            </div>

            {/* Achievements & Student Strength Highlights */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-muted/30 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-display text-xl text-maroon">20+ Established Shastrigals</h5>
                  <p className="mt-1 text-xs sm:text-sm text-foreground/80">
                    So far, more than 20 Vidyarthis have established themselves as Shastrigals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-muted/30 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-display text-xl text-maroon">55 Active Resident Vidyarthis</h5>
                  <p className="mt-1 text-xs sm:text-sm text-foreground/80">
                    Currently pursuing Krishna Yajur Veda, Agama, and Prayoga alongside modern schooling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum & Ceremonies Conducted */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-maroon">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Vaidika Prayogas &amp; Samskaras</span>
                <h3 className="font-display text-2xl text-maroon">Vedic Training &amp; Ceremonies</h3>
              </div>
            </div>

            <div className="mt-6 text-sm sm:text-base leading-relaxed text-foreground/85">
              <p>
                At Vedashram Gurukulam, students study and complete their training in the Vedas and
                Agamas, along with Vaidika Prayogas such as{" "}
                <strong className="font-medium text-maroon">Bodhayana</strong>,{" "}
                <strong className="font-medium text-maroon">Ashvalayana</strong> and{" "}
                <strong className="font-medium text-maroon">Apastamba</strong>.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Vaidika Ceremonies Conducted:
              </h4>
              <p className="mt-1 text-sm text-foreground/80">
                Vaidika ceremonies such as Punyahavachanam, Namakaranam, Annaprashanam, Upanayanam,
                Seemantham, Muhurtham ceremonies, Shashtiyabdapoorthi, Bhimaratha Shanti and
                Sathabhishekam are conducted.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {ceremonies.map((ceremony) => (
                  <span
                    key={ceremony}
                    className="inline-flex items-center rounded-lg border border-border/80 bg-muted/40 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground transition-colors hover:border-gold/50 hover:bg-gold/10"
                  >
                    ✦ {ceremony}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-maroon/20 bg-maroon/5 p-5 text-sm sm:text-base text-foreground/90">
              <span className="font-display text-base font-semibold text-maroon">Sabha Trust Activity:</span>
              <p className="mt-1">
                Karma Kanda and Jnana Kanda are conducted under the Sri Vedapuri Sanatana Dharma Paripalana Sabha Trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

