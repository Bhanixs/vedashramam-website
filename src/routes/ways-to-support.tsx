import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageBanner, SectionHeading, Sloka } from "@/components/site/PageShell";
import heroTemple from "@/assets/hero-temple.jpg";
import { ChevronDown, CreditCard, ShieldCheck, Heart, Building, Check, Gift, Mail, Phone, FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ways-to-support")({
  head: () => ({
    meta: [
      { title: "Ways to Support – Donate Now — Vedashramam" },
      {
        name: "description",
        content:
          "Sponsorship schemes, Corpus endowments, Samaradhana, Building fund, and donation methods for Veda Ashrama Gurukulam.",
      },
      { property: "og:title", content: "Ways to Support – Donate Now — Vedashramam" },
      {
        property: "og:description",
        content: "Explore corpus endowments, monthly samaradhana, and building fund sponsorship tiers.",
      },
    ],
  }),
  component: WaysToSupportPage,
});

function WaysToSupportPage() {
  const [openSection, setOpenSection] = useState<string | null>("corpus");

  const toggle = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <PageShell transparentHeader>
      <PageBanner
        title="Ways to Support – Donate Now"
        subtitle="Sponsorship Schemes, Corpus Endowments &amp; Building Funds"
        image={heroTemple}
      />

      <Sloka
        devanagari="सर्ववेदेषु यत्पुण्यं सर्वतीर्थेषु यत्फलम्। तत्फलं लभते मर्त्यः कृत्वा वेदसमर्पणम्॥"
        transliteration="Sarvavedeshu Yat Punyam Sarvatirtheshu Yat Phalam, Tat Phalam Labhate Martyah Kritva Veda Samarpanam."
        meaning="Whatever spiritual merit is attained through all Vedas and holy pilgrimages is gained by supporting and dedicating oneself to the protection of Vedic education."
      />

      <section className="container-page py-20">
        <SectionHeading title="Sponsorship &amp; Endowment Schemes" eyebrow="Ways to Give" />

        <div className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-foreground/85">
          We welcome your support! Below are the various ways to support and the Sponsorship Schemes available. We
          request Donors to contribute to our Corpus Fund to ensure lasting sustenance and maintenance of our Patasala.
          Donors willing to contribute <strong>₹10,000/- or more</strong> can contribute towards the Corpus Fund.
        </div>

        {/* Quick Donate CTA */}
        <div className="mx-auto mt-8 flex max-w-md justify-center">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-colors hover:bg-maroon"
          >
            <CreditCard className="h-4 w-4" />
            Donate Online Now (Zero Fees)
          </Link>
        </div>

        {/* Interactive Expandable / Accordion Box */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {/* 1. Building Fund Accordion */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all">
            <button
              type="button"
              onClick={() => toggle("building")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-gold" />
                <span className="font-display text-lg text-maroon">1. Building Fund</span>
              </div>
              <ChevronDown
                className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", {
                  "rotate-180 text-primary": openSection === "building",
                })}
              />
            </button>
            {openSection === "building" && (
              <div className="border-t border-border/70 bg-muted/20 p-6 text-sm leading-relaxed text-foreground/85">
                <p>
                  The Gurukulam continues to develop its facilities in Karuvadikuppam, Puducherry. Future development
                  may include improved classrooms, student accommodation, prayer and activity spaces, library
                  resources, medical facilities and Go Samrakshana infrastructure.
                </p>
                <p className="mt-3">
                  We request all devotees to contribute liberally for this project. For more details about the Project
                  and the various ways on how you can support:
                </p>
                <div className="mt-4">
                  <Link
                    to="/appeal-for-building-construction"
                    className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                  >
                    View Appeal for Building Construction Details →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. Corpus Donations Accordion */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all">
            <button
              type="button"
              onClick={() => toggle("corpus")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold" />
                <span className="font-display text-lg text-maroon">2. Corpus Donations</span>
              </div>
              <ChevronDown
                className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", {
                  "rotate-180 text-primary": openSection === "corpus",
                })}
              />
            </button>
            {openSection === "corpus" && (
              <div className="border-t border-border/70 bg-muted/20 p-6">
                <div className="space-y-3">
                  {[
                    { title: "Corpus General", amount: "Any Amount", desc: "Long-term institutional corpus fund" },
                    {
                      title: "Patasala Shaswata Nidhi Fund",
                      amount: "₹ 11,000 /-",
                      desc: "Perpetual seva for the patasala",
                    },
                    {
                      title: "Student Welfare Fund",
                      amount: "₹ 36,000 /-",
                      desc: "Supports student medical, books and boarding",
                    },
                    {
                      title: "Mid Day Samaradhana every year",
                      amount: "₹ 1,00,000 /-",
                      desc: "Annual lunch feast for all students on your chosen date",
                    },
                    {
                      title: "One Student’s expenses (Full)",
                      amount: "₹ 3,00,000 /-",
                      desc: "Comprehensive sponsorship of a Vidyarthi’s entire boarding and education",
                    },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex flex-col justify-between gap-2 rounded-lg border border-border/60 bg-card p-4 sm:flex-row sm:items-center"
                    >
                      <div>
                        <span className="text-xs text-muted-foreground">Scheme {idx + 1}</span>
                        <h5 className="font-semibold text-foreground">{item.title}</h5>
                        <p className="text-xs text-foreground/70">{item.desc}</p>
                      </div>
                      <div className="font-display text-lg font-bold text-maroon sm:text-right">{item.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. General Donations Accordion */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all">
            <button
              type="button"
              onClick={() => toggle("general")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-gold" />
                <span className="font-display text-lg text-maroon">3. General Donations</span>
              </div>
              <ChevronDown
                className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", {
                  "rotate-180 text-primary": openSection === "general",
                })}
              />
            </button>
            {openSection === "general" && (
              <div className="border-t border-border/70 bg-muted/20 p-6 space-y-3">
                <div className="flex flex-col justify-between gap-2 rounded-lg border border-border/60 bg-card p-4 sm:flex-row sm:items-center">
                  <div>
                    <h5 className="font-semibold text-foreground">Donations – General</h5>
                    <p className="text-xs text-foreground/70">Flexible contribution towards daily ashram maintenance</p>
                  </div>
                  <div className="font-display text-lg font-bold text-maroon">Any Amount</div>
                </div>

                <div className="flex flex-col justify-between gap-2 rounded-lg border border-border/60 bg-card p-4 sm:flex-row sm:items-center">
                  <div>
                    <h5 className="font-semibold text-foreground">Samaradhana (Mid Day Lunch)</h5>
                    <p className="text-xs text-foreground/70">One-time midday feast for all resident students and teachers</p>
                  </div>
                  <div className="font-display text-lg font-bold text-maroon">₹ 6,000 /-</div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Cheques / DDs Accordion */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all">
            <button
              type="button"
              onClick={() => toggle("cheques")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-gold" />
                <span className="font-display text-lg text-maroon">4. Contributions by Cheques / DDs</span>
              </div>
              <ChevronDown
                className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", {
                  "rotate-180 text-primary": openSection === "cheques",
                })}
              />
            </button>
            {openSection === "cheques" && (
              <div className="border-t border-border/70 bg-muted/20 p-6 text-sm leading-relaxed text-foreground/85">
                <p>If Donors wish to make contributions by Cheques/DD or direct bank transfer, please find the verified details below:</p>
                <div className="mt-3 space-y-2 rounded-lg border border-border bg-card p-4 text-xs">
                  <div>
                    <span className="text-muted-foreground">Account Name: </span>
                    <strong className="text-maroon">Sri sai Sankara baktha sabha</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Bank: </span>
                    <strong className="text-foreground">Indian Overseas Bank, Lawspet Branch, Puducherry - 605 008</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Account Number: </span>
                    <span className="font-mono font-bold text-foreground">212101000031000</span>
                    <span className="ml-3 text-muted-foreground">Branch Code: </span>
                    <span className="font-mono font-semibold text-foreground">2121</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">IFSC Code: </span>
                    <span className="font-mono font-bold text-foreground">IOBA0002121</span>
                    <span className="ml-3 text-muted-foreground">UPI ID: </span>
                    <span className="font-mono font-bold text-primary">9842327791@IOB</span>
                  </div>
                  <div className="border-t border-border/60 pt-2">
                    <span className="text-muted-foreground">Postal Address for Cheques / DD: </span>
                    <span className="font-medium text-foreground">
                      The Managing Trustee, 151, Edayanchavadi Road, OM Sakthi Nagar, Lawspet S.O, Puducherry, India - 605008
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. Contributions by Kind Accordion */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all">
            <button
              type="button"
              onClick={() => toggle("kind")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-3">
                <Gift className="h-5 w-5 text-gold" />
                <span className="font-display text-lg text-maroon">5. Contributions in Kind</span>
              </div>
              <ChevronDown
                className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", {
                  "rotate-180 text-primary": openSection === "kind",
                })}
              />
            </button>
            {openSection === "kind" && (
              <div className="border-t border-border/70 bg-muted/20 p-6 text-sm leading-relaxed text-foreground/85">
                <p>
                  Contributions in Kind like <strong>Vastram</strong> (Dhoties for Vidyarthis), <strong>Rice</strong>,
                  <strong> Toor Dal</strong>, <strong>Pure Ghee</strong>, <strong>Butter</strong>, and{" "}
                  <strong>Cooking Oil</strong> will be gratefully accepted at our ashram kitchen.
                </p>
              </div>
            )}
          </div>

          {/* 6. Foreign Contributors Accordion */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all">
            <button
              type="button"
              onClick={() => toggle("foreign")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/40"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="font-display text-lg text-maroon">6. Foreign Contributors</span>
              </div>
              <ChevronDown
                className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", {
                  "rotate-180 text-primary": openSection === "foreign",
                })}
              />
            </button>
            {openSection === "foreign" && (
              <div className="border-t border-border/70 bg-muted/20 p-6 text-sm leading-relaxed text-foreground/85">
                <p>
                  Foreign Donors are requested to kindly contact the Trust prior to remitting overseas funds to confirm
                  FCRA eligibility guidelines and authorized bank correspondent account details.
                </p>

                {/* Statutory Audit & Compliance Documents */}
                <div className="mt-5 rounded-lg border border-border bg-card p-4">
                  <h6 className="text-xs font-semibold uppercase tracking-wider text-gold">
                    Statutory &amp; Audit Compliance Documents
                  </h6>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Verified institutional audit certifications and financial reports for foreign and domestic contributors:
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <a
                      href="#ca-certificate-fy-2025-26"
                      className="group flex items-center justify-between rounded-md border border-border/80 bg-muted/40 p-3 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-accent/40"
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText className="h-4 w-4 text-primary group-hover:text-maroon" />
                        <span className="group-hover:text-primary">CA Certificate FY 2025-26</span>
                      </div>
                      <span className="flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                        PDF <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                    </a>

                    <a
                      href="#auditors-report"
                      className="group flex items-center justify-between rounded-md border border-border/80 bg-muted/40 p-3 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-accent/40"
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText className="h-4 w-4 text-primary group-hover:text-maroon" />
                        <span className="group-hover:text-primary">Auditor's Report</span>
                      </div>
                      <span className="flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                        PDF <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-maroon">
                    <Mail className="h-3.5 w-3.5 text-gold" /> Contact: Trustees Office
                  </span>
                  <span className="flex items-center gap-1.5 text-maroon">
                    <Phone className="h-3.5 w-3.5 text-gold" /> Karuvadikuppam, Puducherry
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Note to Donors & 80G Statutory Info */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h4 className="font-display text-xl text-maroon">Note to Donors</h4>
          <ul className="mt-4 space-y-3 text-xs leading-relaxed text-foreground/80">
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Occasion for Ubhayam:</strong> Donors may choose the occasion for performing the Ubhayam
                (Birthday, Wedding Anniversary, or Tithi of Ancestors) in either English Date or relevant Hindu Masam,
                Paksham, and Tithi/Nakshatram.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Donor Details:</strong> We request all donors to provide their full name, address, and PAN card
                number without fail, as anonymous remittances will incur tax scrutiny.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Corpus Protection:</strong> Corpus Fund contributions are invested in designated Bank Fixed
                Deposits and only the interest is utilized. The amount may be contributed in 2 to 3 installments.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Cash Purse for Graduating Vidyarthis:</strong> As per the divine direction of Paramacharyal, the
                Trust awards a substantial Cash Purse to every Vidyarthi on completion of the course to establish their
                livelihood comfortably. Donors may specifically sponsor this grant.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>80G Tax Exemption &amp; PAN:</strong> Income tax exemption under Section 80G is available under
                80G Unique Registration No.: <strong>AAMTS6931LF20221</strong> (PAN: <strong>AAMTS6931L</strong>),
                provisional approval date 03-08-2022 for the period 03-08-2022 to AY 2025-2026. Trust:{" "}
                <strong>Sri Sai Sankara Bhaktha Sabha Gomarsakshana Educational Seva Trust</strong>. Donations above ₹2,000/- must be made in non-cash modes to qualify.
              </span>
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
            <Link
              to="/donate"
              className="rounded-md bg-primary px-8 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-maroon"
            >
              Proceed to Online Donation Portal
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
