import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroRecitation from "@/assets/hero-recitation.jpg";
import { Database, FileCheck, Lock, CreditCard } from "lucide-react";

export function PrivacyPage() {
  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Privacy Policy"
        subtitle="தனியுரிமைக் கொள்கை — Data Protection & Donor Privacy Guidelines"
        image={heroRecitation}
      />

      <Sloka
        devanagari="ॐ भद्रं कर्णेभिः शृणुयाम देवाः। भद्रं पश्येमाक्षभिर्यजत्राः॥"
        transliteration="Om Bhadram Karnebhih Shrinuyama Devah, Bhadram Pashyemakshabhir Yajatrah."
        meaning="Rig Veda — “O Devas, may we hear with our ears what is auspicious; may we see with our eyes what is holy.”"
      />

      <section className="container-page py-20">
        <SectionHeading title="Privacy Policy" eyebrow="தனியுரிமைக் கொள்கை" />

        <div className="mx-auto mt-12 max-w-4xl space-y-10">
          {/* Section 1: Information Collected */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">1. Information Collected</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  சேகரிக்கப்படும் தகவல்கள்
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                Vedashrama Gurukulam (Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust) collects personal information submitted voluntarily by donors, prospective students, guardians, and visitors through our online forms, donation channels, and admission applications.
              </p>
              <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                <li className="rounded-md border border-border/80 bg-card p-4 text-sm">
                  <strong>Donation Forms:</strong> Full name, contact phone number, email address, postal address, and Permanent Account Number (PAN) required for statutory 80G receipts.
                </li>
                <li className="rounded-md border border-border/80 bg-card p-4 text-sm">
                  <strong>Admissions &amp; Contact Forms:</strong> Student and guardian names, contact details, Vedic background details, and specific inquiry messages.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Use of Data */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <FileCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">2. Use of Collected Data</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  தகவல்களின் பயன்பாடு
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                We use collected information solely for institutional operations and statutory compliance:
              </p>
              <ul className="space-y-2.5 pl-4 text-sm text-foreground/85">
                <li className="list-disc">
                  Issuing official charitable donation receipts and 80G tax exemption certificates under 80G Unique Registration No. <strong>AAMTS6931LF20221</strong> (PAN: <strong>AAMTS6931L</strong>).
                </li>
                <li className="list-disc">
                  Communicating updates on Patasala activities, annual celebrations (Navarathri, Ramanavami, Acharya Jayanthi), and trust news.
                </li>
                <li className="list-disc">
                  Processing student admission inquiries and managing resident Gurukulam records.
                </li>
                <li className="list-disc">
                  Responding to questions and guidance requests sent via our contact form.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Data Protection */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">3. Data Protection &amp; Confidentiality</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  தரவு பாதுகாப்பு மற்றும் ரகசியம்
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                Vedashrama Gurukulam is committed to ensuring the security of your data. We do not sell, rent, lease, trade, or share personal information with any third party for commercial or marketing purposes.
              </p>
              <p className="rounded-lg bg-muted/50 p-4 text-sm text-foreground/80 italic">
                உங்கள் தனிப்பட்ட தகவல்கள் எக்காரணத்தைக் கொண்டும் விளம்பரத்திற்கோ அல்லது வணிக நோக்கங்களுக்காகவோ மூன்றாம் தரப்பினருக்குப் பகிரப்படாது.
              </p>
            </div>
          </div>

          {/* Section 4: Secure Payment Handling */}
          <div className="surface-card p-8 sm:p-10">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-maroon">4. Secure Payment Handling (RBI Compliance)</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  பாதுகாப்பான கட்டண முறைப்பாடு
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
              <p>
                Online contributions are processed through RBI-compliant, PCI-DSS certified secure payment gateways operating with 256-bit SSL encryption.
              </p>
              <p>
                Vedashrama Gurukulam does <strong>not</strong> record, collect, or store any sensitive payment credentials, credit/debit card numbers, CVVs, or Net Banking passwords on our website servers. All transactions are securely handled directly by authorized banking partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default PrivacyPage;
