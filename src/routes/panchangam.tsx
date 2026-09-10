import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { Calendar as CalendarIcon, Clock, Sparkles, Sun, Moon } from "lucide-react";

export const Route = createFileRoute("/panchangam")({
  head: () => ({
    meta: [
      { title: "Panchangam — Vedashrama Gurukulam, Puducherry" },
      {
        name: "description",
        content:
          "Daily Vedic Panchangam. Select a date to view Tithi, Nakshatram, Yogam, Karanam, Rahu Kalam, and auspicious timings.",
      },
      { property: "og:title", content: "Panchangam — Vedashrama Gurukulam" },
      {
        property: "og:description",
        content: "View Vedic calendar details, auspicious muhurthams and tithi timings.",
      },
    ],
  }),
  component: PanchangamPage,
});

function PanchangamPage() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  // Derive a simulated or date-based traditional panchangam view
  const d = new Date(selectedDate);
  const formattedDate = d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Panchangam"
        subtitle="Vedic Astronomical Calendar, Daily Tithi, Nakshatra & Muhurtham"
        image={heroTemple}
      />

      <Sloka
        devanagari="तिथिर्वारश्च नक्षत्रं योगः करणमेव च। पञ्चाङ्गस्य फलं श्रुत्वा गङ्गास्नानफलं लभेत्॥"
        transliteration="Tithir Varascha Nakshatram Yogah Karanam Eva Cha, Panchangasya Phalam Shrutva Ganga Snana Phalam Labhet."
        meaning="By contemplating the five limbs of Time — Tithi, Vara, Nakshatra, Yoga, and Karana — one attains the sacred merit of bathing in the Holy Ganga."
      />

      <section className="container-page py-20">
        <SectionHeading title="Daily Panchangam Viewer" eyebrow="Vedic Calendar" />

        <div className="mx-auto mt-6 max-w-xl text-center text-sm text-foreground/80">
          Please select the Date from the Date Picker to view the Panchangam and auspicious timings for that day.
        </div>

        {/* Date Selector Box */}
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
          <CalendarIcon className="h-5 w-5 text-gold" />
          <label htmlFor="panchangam-date" className="text-sm font-medium text-foreground">
            Select Date:
          </label>
          <input
            id="panchangam-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Panchangam Display Cards */}
        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          <div className="surface-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between border-b border-border/80 pb-6 text-center sm:flex-row sm:text-left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Selected Date</span>
                <h3 className="mt-1 font-display text-2xl text-maroon">{formattedDate}</h3>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary sm:mt-0">
                <Sparkles className="h-3.5 w-3.5" />
                Vakya &amp; Drik Ganitha
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border/70 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Moon className="h-4 w-4 text-gold" /> Tithi
                </div>
                <div className="mt-2 text-lg font-bold text-maroon">Shukla / Krishna Paksha</div>
                <div className="mt-1 text-xs text-foreground/70">Auspicious lunar day for rituals &amp; Sankalpam</div>
              </div>

              <div className="rounded-lg border border-border/70 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-gold" /> Nakshatram
                </div>
                <div className="mt-2 text-lg font-bold text-maroon">Daily Birth Star</div>
                <div className="mt-1 text-xs text-foreground/70">Governing constellation of the day</div>
              </div>

              <div className="rounded-lg border border-border/70 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Sun className="h-4 w-4 text-gold" /> Vasara (Day)
                </div>
                <div className="mt-2 text-lg font-bold text-maroon">
                  {d.toLocaleDateString("en-US", { weekday: "long" })}
                </div>
                <div className="mt-1 text-xs text-foreground/70">Solar day and planetary deity</div>
              </div>

              <div className="rounded-lg border border-border/70 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Clock className="h-4 w-4 text-gold" /> Yogam
                </div>
                <div className="mt-2 text-lg font-bold text-maroon">Siddha / Amrita Yogam</div>
                <div className="mt-1 text-xs text-foreground/70">Auspicious combination for new ventures</div>
              </div>

              <div className="rounded-lg border border-border/70 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Clock className="h-4 w-4 text-gold" /> Karanam
                </div>
                <div className="mt-2 text-lg font-bold text-maroon">Bava / Balava / Kaulava</div>
                <div className="mt-1 text-xs text-foreground/70">Half portion of the lunar day</div>
              </div>

              <div className="rounded-lg border border-border/70 bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Sun className="h-4 w-4 text-gold" /> Ayana &amp; Ruthu
                </div>
                <div className="mt-2 text-lg font-bold text-maroon">Uttarayana / Dakshinayana</div>
                <div className="mt-1 text-xs text-foreground/70">Solar transition &amp; season</div>
              </div>
            </div>

            {/* Kalam timings */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <h4 className="font-display text-base text-maroon">Inauspicious &amp; Auspicious Periods</h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs">
                <div className="rounded-md border border-destructive/20 bg-destructive/5 p-3">
                  <span className="font-bold text-destructive">Rahu Kalam:</span>
                  <p className="mt-1 text-foreground/80">Check local sunrise timing (approx 90 min block)</p>
                </div>
                <div className="rounded-md border border-destructive/20 bg-destructive/5 p-3">
                  <span className="font-bold text-destructive">Yamagandam:</span>
                  <p className="mt-1 text-foreground/80">Inauspicious planetary hour</p>
                </div>
                <div className="rounded-md border border-primary/30 bg-primary/5 p-3">
                  <span className="font-bold text-primary">Gulika Kalam / Abhijit:</span>
                  <p className="mt-1 text-foreground/80">Most auspicious period for auspicious undertakings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
