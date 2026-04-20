import { createFileRoute, Link } from "@tanstack/react-router";
import boardingUk from "../assets/boarding-uk.jpg";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/advisory")({
  head: () => ({
    meta: [
      { title: "Advisory Mandates — Aurelius Advisory" },
      {
        name: "description",
        content:
          "Three tiers of engagement: Foundation (Grades 6–8), Strategic (Grades 9–10), and Apex (Grades 11–12). Each conducted under strict confidentiality.",
      },
      { property: "og:title", content: "Advisory Mandates — Aurelius Advisory" },
      {
        property: "og:description",
        content:
          "The structure of our private engagements, from foundational positioning to final placement.",
      },
      { property: "og:image", content: boardingUk },
      { name: "twitter:image", content: boardingUk },
    ],
  }),
  component: AdvisoryPage,
});

const mandates = [
  {
    code: "M·I",
    name: "Foundation",
    grades: "Grades 6 – 8",
    duration: "24 – 36 months",
    seats: "5",
    summary:
      "The earliest engagement, and the most consequential. We architect the academic, intellectual, and extracurricular foundation that will define your child's candidacy a decade later.",
    includes: [
      "Trajectory diagnostic & family alignment",
      "Curriculum & school-of-record review",
      "Intellectual signature development",
      "Quarterly strategy sessions",
      "Year-round informal counsel",
    ],
  },
  {
    code: "M·II",
    name: "Strategic",
    grades: "Grades 9 – 10",
    duration: "18 – 30 months",
    seats: "4",
    summary:
      "The middle window. Boarding placement decisions are made; profile is sharpened; signature activities, research, and global exposure take definitive form.",
    includes: [
      "Boarding school placement (UK / US / CH)",
      "Profile sharpening & activity curation",
      "Mentor & research placement network",
      "Standardised testing strategy",
      "Application architecture begins",
    ],
  },
  {
    code: "M·III",
    name: "Apex",
    grades: "Grades 11 – 12",
    duration: "12 – 18 months",
    seats: "3",
    summary:
      "The final mandate. University strategy, application craft, recommendation orchestration, interview preparation, and post-acceptance counsel — conducted by the founding partners directly.",
    includes: [
      "University list architecture",
      "Application & essay craftsmanship",
      "Recommendation orchestration",
      "Interview preparation",
      "Post-acceptance & matriculation counsel",
    ],
  },
];

function AdvisoryPage() {
  return (
    <div className="bg-marble text-ink">
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-20 lg:pt-28 pb-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow">§ Advisory</span>
              <h1 className="mt-8 font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight text-balance">
                Three mandates.{" "}
                <em className="italic text-slate">Twelve families. One cycle.</em>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-slate leading-[1.85]">
                Engagement is structured by the academic stage at which counsel
                begins. Each mandate is multi-year, hands-on, and limited to a
                fixed number of families.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col gap-px bg-hairline">
          {mandates.map((m, i) => (
            <article
              key={m.code}
              className="bg-marble grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-10 lg:p-14"
            >
              <div className="lg:col-span-3 flex flex-col gap-2">
                <span className="font-mono text-xs text-slate">{m.code}</span>
                <span className="font-serif text-5xl lg:text-6xl font-light tracking-tight">
                  {m.name}
                </span>
                <span className="eyebrow mt-2">{m.grades}</span>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <p className="text-base text-slate leading-[1.85]">{m.summary}</p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-hairline">
                  <div>
                    <span className="eyebrow">Duration</span>
                    <div className="mt-2 text-sm font-medium">{m.duration}</div>
                  </div>
                  <div>
                    <span className="eyebrow">Seats / Cycle</span>
                    <div className="mt-2 text-sm font-medium">{m.seats}</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col">
                <span className="eyebrow mb-4">Inclusions</span>
                <ul className="flex flex-col">
                  {m.includes.map((inc) => (
                    <li
                      key={inc}
                      className="grid grid-cols-[auto_1fr] gap-3 items-baseline py-3 border-b border-hairline text-sm last:border-0"
                    >
                      <span className="font-mono text-xs text-slate">
                        {String(i * 10 + m.includes.indexOf(inc) + 1).padStart(2, "0")}
                      </span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[oklch(0.97_0.003_80)] border-y border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-28 lg:py-36">
          <SectionHeading
            index="§ 02"
            eyebrow="The Sequence"
            title={
              <>
                How an engagement{" "}
                <em className="italic text-slate">unfolds.</em>
              </>
            }
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-px bg-hairline">
            {[
              { n: "01", t: "Confidential Introduction", b: "A brief written inquiry. Reviewed personally by the partners." },
              { n: "02", t: "Diagnostic Audience", b: "A 90-minute conversation. No fee. No commitment on either side." },
              { n: "03", t: "Mandate Proposal", b: "If aligned, we issue a structured engagement proposal within seven days." },
              { n: "04", t: "Engagement Begins", b: "Counsel commences. Quarterly reviews. Direct partner access throughout." },
            ].map((s) => (
              <div key={s.n} className="bg-marble p-10 flex flex-col gap-6">
                <span className="font-serif text-4xl text-slate font-light">{s.n}</span>
                <h3 className="font-serif text-2xl font-light tracking-tight">{s.t}</h3>
                <p className="text-sm text-slate leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-marble">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-24 lg:py-32 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight max-w-[20ch] text-balance">
            Seats remaining for the{" "}
            <em className="italic text-brass">2025 — 2026 cycle: 4.</em>
          </h2>
          <Link
            to="/contact"
            className="text-[11px] uppercase tracking-[0.22em] bg-marble text-ink px-10 py-5 hover:bg-brass hover:text-marble transition-all duration-500 shrink-0"
          >
            Submit Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
