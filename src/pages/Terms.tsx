import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { ShieldCheck, Target, HeartHandshake, ScrollText, Gavel } from "lucide-react";

export function TermsPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Terms & Conditions"
        subtitle="விதிகளும் நிபந்தனைகளும் — Legal Terms & Institutional Directives"
        image={heroTemple}
      />

      <Sloka
        devanagari="सत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः॥"
        transliteration="Satyam Vada, Dharmam Chara, Svadhyayan Ma Pramadah."
        meaning="Taittiriya Upanishad — “Speak the truth. Practice righteousness. Never neglect self-study and recitation of the Vedas.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Terms & Conditions" eyebrow="விதிகளும் நிபந்தனைகளும்" />

        <div className="mx-auto mt-12 max-w-4xl space-y-10">
          {/* Section 1: Acceptance of Terms */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">1. Acceptance of Terms</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  நிபந்தனைகளை ஏற்றுக்கொள்ளுதல்
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                By accessing, browsing, or using the website of <strong>Vedashramam</strong> (operating the Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust and residential Veda Ashrama Gurukulam in Puducherry), you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions.
              </p>
              <p className="rounded-lg bg-muted/50 p-4 text-sm text-foreground/80 italic">
                வேதாஶ்ரமம் இணையதளத்தை அணுகுவதன் மூலம் மற்றும் பயன்படுத்துவதன் மூலம், இந்த விதிகளையும் நிபந்தனைகளையும் முழுமையாகப் படித்து, புரிந்து கொண்டு, ஏற்றுக்கொள்கிறீர்கள் என்பதை உறுதிப்படுத்துகிறீர்கள்.
              </p>
            </div>
          </div>

          {/* Section 2: Trust Objectives */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">2. Trust Objectives</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  அறக்கட்டளையின் நோக்கங்கள்
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                <strong>Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust</strong> is a registered non-profit public charitable trust (PAN: <strong>AAMTS6931L</strong>, 80G Unique Registration No.: <strong>AAMTS6931LF20221</strong>, Registered Address: 151, Edayanchavadi Road, OM Sakthi Nagar, Lawspet S.O, Puducherry, India - 605008) established for the promotion of Sanatana Dharma, support of religious and spiritual activities, and preservation of oral Vedic recitation in the traditional <em>Guru-Shishya Parampara</em>.
              </p>
              <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                <li className="flex items-start gap-3 rounded-md border border-border/80 bg-card p-4 text-sm">
                  <span className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                  <span><strong>Sanatana Dharma Prachara:</strong> Organizing Veda Parayanams, Homams, and spiritual discourses.</span>
                </li>
                <li className="flex items-start gap-3 rounded-md border border-border/80 bg-card p-4 text-sm">
                  <span className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                  <span><strong>Patasala Maintenance:</strong> Providing free lodging, boarding, and traditional education to resident Vedic students.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Donations / Contributions */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">3. Donations &amp; Contributions</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  கொடை மற்றும் நன்கொடைகள்
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                All financial contributions received through <em>Vidyadanam</em>, <em>Annadanam</em>, or <em>General Corpus</em> are voluntary donations made to support the charitable goals of Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust.
              </p>
              <p>
                Donations are utilized solely for the maintenance of the Gurukulam, student welfare, acharya honorariums, ritual observances, and trust administrative upkeep. Tax exemption receipts under Section 80G (80G Unique Registration No.: <strong>AAMTS6931LF20221</strong>, PAN: <strong>AAMTS6931L</strong>, approval period 03-08-2022 to AY 2025-2026) are issued upon verification of donor details and PAN information.
              </p>
            </div>
          </div>

          {/* Section 4: Intellectual Property (Veda Vani & Puja Vidhanams) */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <ScrollText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">4. Intellectual Property &amp; Publications</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  அறிவுசார் சொத்துரிமை (Veda Vani &amp; பூஜை விதானங்கள்)
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                All written articles, stotram compilations, audio/video recitations, logo emblems, and Puja Vidhanam guides published under <strong>Veda Vani</strong> or Vedashramam digital platforms are sacred resources preserved and owned by the trust.
              </p>
              <p>
                Content may be downloaded or shared for personal, non-commercial, and devotional purposes, provided credit is explicitly attributed to Vedashramam. Commercial reproduction, redistribution, or modification without written permission is strictly prohibited.
              </p>
            </div>
          </div>

          {/* Section 5: Legal Jurisdiction */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Gavel className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">5. Legal Jurisdiction</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  சட்ட எல்லை (Puducherry, India)
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes, legal claims, or proceedings arising out of or relating to the trust or website operations shall be subject to the exclusive jurisdiction of the competent courts in <strong>Puducherry (Pondicherry), Union Territory of Puducherry, India</strong>.
              </p>
              <div className="mandala-bg mt-4 rounded-lg border border-border p-6 text-center">
                <h4 className="font-display text-lg text-maroon">சட்ட அதிகார வரம்பு</h4>
                <p className="mt-2 text-sm text-foreground/80">
                  இந்த விதிகளும் நிபந்தனைகளும் இந்திய சட்டங்களின்படி நிர்வகிக்கப்படுகின்றன. ஏதேனும் சட்ட தகராறுகள் ஏற்படும் பட்சத்தில், புதுச்சேரி (Puducherry, India) நீதிமன்றங்களின் அதிகார வரம்பிற்கு மட்டுமே உட்பட்டது.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default TermsPage;
