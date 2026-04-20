import { createFileRoute, Link } from "@tanstack/react-router";
import heroCampus from "../assets/hero-campus.jpg";
import library from "../assets/library.jpg";
import boardingUk from "../assets/boarding-uk.jpg";
import boardingUs from "../assets/boarding-us.jpg";
import ledger from "../assets/ledger.jpg";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelius Advisory — Architects of an Unassailable Academic Legacy" },
      {
        name: "description",
        content:
          "Generational counsel for families pursuing Ivy League universities and the world's elite boarding schools. By selective engagement only.",
      },
      { property: "og:title", content: "Aurelius Advisory — Generational Academic Counsel" },
      {
        property: "og:description",
        content:
          "Strategy, profile architecture, and placement for the world's most fiercely guarded institutions.",
      },
      { property: "og:image", content: heroCampus },
      { name: "twitter:image", content: heroCampus },
    ],
  }),
  component: HomePage,
});

const placements = [
  { ref: "REF-092", school: "Harvard College", program: "Economics", year: "'25" },
  { ref: "REF-114", school: "University of Oxford", program: "PPE", year: "'25" },
  { ref: "REF-148", school: "Phillips Exeter Academy", program: "Upper School", year: "'25" },
  { ref: "REF-156", school: "Eton College", program: "Sixth Form", year: "'25" },
  { ref: "REF-171", school: "Stanford University", program: "Computer Science", year: "'24" },
  { ref: "REF-189", school: "MIT", program: "Mathematics", year: "'24" },
  { ref: "REF-203", school: "University of Cambridge", program: "Natural Sciences", year: "'24" },
  { ref: "REF-217", school: "Choate Rosemary Hall", program: "Form V", year: "'24" },
];

const journal = [
  {
    chapter: "I",
    eyebrow: "Strategy",
    title: "What Top 1% Parents Do Differently",
    excerpt:
      "The decisions that separate generationally placed students from the merely accomplished are rarely the ones discussed publicly.",
  },
  {
    chapter: "II",
    eyebrow: "Roadmap",
    title: "The Grade 6–12 Roadmap to Top Universities",
    excerpt:
      "A multi-year framework: from foundational positioning in middle school to the final year of bespoke applications.",
  },
  {
    chapter: "III",
    eyebrow: "Comparison",
    title: "UK vs US Boarding — A Frank Assessment",
    excerpt:
      "Two parallel traditions of elite education, examined without sentiment. The right choice is rarely the obvious one.",
  },
  {
    chapter: "IV",
    eyebrow: "Position",
    title: "Why We Don't Work With Everyone",
    excerpt:
      "Our practice accepts twelve mandates per cycle. The reasoning is structural, not promotional.",
  },
];

function HomePage() {
  return (
    <div className="bg-marble text-ink">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-16 lg:pt-24 pb-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-10 fade-up">
                <div className="w-10 h-px bg-ink" />
                <span className="eyebrow">Bespoke Academic Counsel · MMXXV</span>
              </div>

              <h1
                className="font-serif text-[12vw] sm:text-[9vw] lg:text-[6.4vw] xl:text-[5.5rem] leading-[1.02] tracking-[-0.015em] font-light text-balance fade-up"
                style={{ animationDelay: "80ms" }}
              >
                Architects of an{" "}
                <em className="text-slate font-light italic">unassailable</em>{" "}
                academic legacy.
              </h1>

              <div
                className="mt-12 lg:mt-16 max-w-[52ch] grid grid-cols-[auto_1fr] gap-6 fade-up"
                style={{ animationDelay: "180ms" }}
              >
                <span className="font-mono text-xs text-slate pt-1">[01]</span>
                <p className="text-base text-slate leading-[1.85]">
                  For the world's most discerning families, admittance to the great
                  institutions is not a matter of chance. It is the product of
                  multi-year curation, conducted with the rigor of a portfolio and
                  the discretion of private counsel.
                </p>
              </div>

              <div
                className="mt-14 flex flex-wrap items-center gap-6 fade-up"
                style={{ animationDelay: "260ms" }}
              >
                <Link
                  to="/contact"
                  className="text-[11px] uppercase tracking-[0.22em] bg-ink text-marble px-8 py-4 hover:bg-ink/90 transition-all duration-500"
                >
                  Request Private Audience
                </Link>
                <Link
                  to="/philosophy"
                  className="text-[11px] uppercase tracking-[0.22em] text-ink hover:text-slate transition-colors"
                >
                  The Philosophy →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="relative w-full aspect-[4/5] bg-[#e8eaeb] overflow-hidden fade-up" style={{ animationDelay: "120ms" }}>
                <img
                  src={heroCampus}
                  alt="Historic university campus with gothic architecture"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-4 border border-marble/30 pointer-events-none" />
                <div className="absolute top-4 right-4 bg-marble text-ink px-3 py-1 text-[10px] uppercase tracking-widest">
                  Plate I
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-marble/95 backdrop-blur-sm px-5 py-4 flex justify-between items-center">
                  <span className="text-xs font-medium tracking-tight">Campus Archives</span>
                  <span className="text-[10px] text-slate uppercase tracking-widest">
                    Oxon, England
                  </span>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 fade-up" style={{ animationDelay: "300ms" }}>
                <div>
                  <span className="eyebrow">Acceptance Rate</span>
                  <div className="font-serif text-3xl mt-2">3.4%</div>
                </div>
                <div className="text-right">
                  <span className="eyebrow">Active Mandates</span>
                  <div className="font-serif text-3xl mt-2">12 / yr</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee statistic strip */}
        <div className="border-y border-ink overflow-hidden">
          <div className="mx-auto max-w-[1480px] px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-hairline">
            {[
              ["80%+", "into Top 50 universities"],
              ["43", "Ivy League placements"],
              ["18", "years of practice"],
              ["4", "global offices"],
            ].map(([big, small]) => (
              <div key={small} className="px-6 lg:px-10 py-8 flex flex-col gap-2">
                <span className="font-serif text-4xl lg:text-5xl font-light tracking-tight">
                  {big}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-slate">{small}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="mx-auto max-w-[1480px] px-6 lg:px-12 py-32 lg:py-44">
        <SectionHeading
          index="§ 01"
          eyebrow="The Thesis"
          title={
            <>
              We approach elite admissions as a{" "}
              <em className="italic text-slate">multi-generational</em> asset
              allocation.
            </>
          }
        >
          Discretion, unparalleled strategy, and exacting execution. Nothing else.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline mt-20">
          {[
            {
              n: "I.",
              title: "Profile Architecture",
              body: "Each student profile is engineered from Grade 6 onward — academics, activities, intellectual signature, and global exposure designed to the contour of specific institutions.",
            },
            {
              n: "II.",
              title: "Placement Strategy",
              body: "We do not chase rankings. We match families to the institutions whose culture, pedagogy, and trajectory will compound their child's future for decades.",
            },
            {
              n: "III.",
              title: "Quiet Execution",
              body: "Applications, interviews, recommendations, and post-acceptance counsel are conducted with the precision and confidentiality of a private wealth office.",
            },
          ].map((p) => (
            <div key={p.n} className="bg-marble p-10 lg:p-12 flex flex-col gap-6">
              <span className="font-serif text-3xl text-slate">{p.n}</span>
              <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-tight">
                {p.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLACEMENTS LEDGER */}
      <section className="bg-[oklch(0.97_0.003_80)] border-y border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-32 lg:py-44">
          <SectionHeading
            index="§ 02"
            eyebrow="The Ledger"
            title={
              <>
                Recent <em className="italic text-slate">placements.</em>
              </>
            }
          >
            A redacted extract from the firm's confidential placement record.
          </SectionHeading>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-12 gap-4 pb-3 border-b border-ink eyebrow">
                <span className="col-span-2">Ref.</span>
                <span className="col-span-5">Institution</span>
                <span className="col-span-3">Program</span>
                <span className="col-span-2 text-right">Cycle</span>
              </div>
              {placements.map((p, i) => (
                <div
                  key={p.ref}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-hairline text-sm items-center hover:bg-marble/60 transition-colors"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="col-span-2 font-mono text-xs text-slate">{p.ref}</span>
                  <span className="col-span-5 font-medium tracking-tight">{p.school}</span>
                  <span className="col-span-3 text-slate">{p.program}</span>
                  <span className="col-span-2 text-right font-mono text-xs text-slate">
                    {p.year}
                  </span>
                </div>
              ))}
              <div className="pt-6 text-xs text-slate italic">
                Further references available upon engagement, under non-disclosure.
              </div>
            </div>

            <aside className="lg:col-span-4 flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={ledger}
                  alt="Leather-bound ledger and fountain pen on marble"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-4 border border-marble/40 pointer-events-none" />
              </div>
              <p className="mt-6 text-sm text-slate leading-relaxed">
                Every mandate is logged in our private placement ledger — a
                living record of eighteen years of practice across four
                continents.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* COMPARISON: UK vs US */}
      <section className="mx-auto max-w-[1480px] px-6 lg:px-12 py-32 lg:py-44">
        <SectionHeading
          index="§ 03"
          eyebrow="Studied Comparison"
          title={
            <>
              Two parallel traditions of{" "}
              <em className="italic text-slate">elite secondary education.</em>
            </>
          }
        >
          UK vs US boarding schools — a question of culture, not prestige.
        </SectionHeading>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-hairline">
          {[
            {
              flag: "United Kingdom",
              img: boardingUk,
              alt: "UK boarding school chapel and quadrangle",
              h: "Eton · Harrow · Winchester · Westminster · Charterhouse",
              body: "A tradition of intellectual rigour, house systems, and centuries of institutional memory. The English boarding school remains unrivaled for the cultivation of measured, articulate, durably confident young adults.",
              points: [
                "A-Levels & IB pathway",
                "Oxbridge feeder culture",
                "Sixth Form entry — 16+",
              ],
            },
            {
              flag: "United States",
              img: boardingUs,
              alt: "New England US prep school with brick Georgian buildings",
              h: "Exeter · Andover · Choate · Deerfield · Lawrenceville",
              body: "The American prep tradition rewards intellectual breadth, self-direction, and ambition. Ideal for families positioning toward Ivy League and STEM-led trajectories.",
              points: [
                "Honors / AP curriculum",
                "Ivy League pipeline",
                "Form II–IV entry — 14+",
              ],
            },
          ].map((s) => (
            <article key={s.flag} className="bg-marble p-8 lg:p-12 flex flex-col gap-8">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-3xl lg:text-4xl font-light tracking-tight">
                  {s.flag}
                </h3>
                <span className="eyebrow">Tier I</span>
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate">{s.h}</p>
              <p className="text-sm text-slate leading-relaxed">{s.body}</p>
              <ul className="border-t border-hairline pt-6 flex flex-col gap-3">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-baseline gap-3 text-sm">
                    <span className="font-mono text-xs text-slate">·</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* JOURNAL */}
      <section className="bg-ink text-marble">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-32 lg:py-44">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-marble/20">
            <div className="lg:col-span-2 flex items-baseline gap-3">
              <span className="font-mono text-xs text-marble/50">§ 04</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-marble/50">
                The Journal
              </span>
            </div>
            <h2 className="lg:col-span-7 font-serif text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight font-light text-balance">
              Notes from the <em className="italic text-marble/60">practice.</em>
            </h2>
            <div className="lg:col-span-3 text-sm text-marble/60 leading-relaxed">
              Essays on strategy, position, and the long game of elite education.
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-marble/10">
            {journal.map((j) => (
              <Link
                key={j.title}
                to="/journal"
                className="group bg-ink p-10 lg:p-14 flex flex-col gap-6 hover:bg-[oklch(0.2_0.005_260)] transition-colors duration-500"
              >
                <div className="flex items-baseline justify-between border-b border-marble/15 pb-4">
                  <span className="font-serif text-2xl text-brass">Ch. {j.chapter}</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-marble/50">
                    {j.eyebrow}
                  </span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-tight text-balance">
                  {j.title}
                </h3>
                <p className="text-sm text-marble/60 leading-relaxed">{j.excerpt}</p>
                <span className="mt-4 text-[11px] uppercase tracking-[0.22em] text-marble/80 group-hover:text-brass transition-colors">
                  Read essay →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / EDITORIAL */}
      <section className="relative bg-marble">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-32 lg:py-44 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={library}
                alt="University library reading room with banker's lamps"
                width={1280}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-4 border border-marble/30 pointer-events-none" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-7 flex flex-col justify-center">
            <span className="eyebrow mb-6">§ 05 · The Position</span>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight font-light text-balance">
              "We accept twelve family mandates per cycle. The constraint is not
              promotional —{" "}
              <em className="italic text-slate">
                it is the only honest way to do this work.
              </em>
              "
            </blockquote>
            <div className="mt-12 flex items-center gap-6">
              <div className="w-10 h-px bg-ink" />
              <div className="flex flex-col">
                <span className="text-sm font-medium tracking-tight">
                  The Founding Partners
                </span>
                <span className="text-xs text-slate">Aurelius Advisory · MMXXV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-marble">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.22em] text-brass">
                § 06 · The Inquiry
              </span>
              <h2 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-balance">
                If your child is between Grade 6 and Grade 11, the moment to begin{" "}
                <em className="italic text-marble/60">is now.</em>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
              <p className="text-sm text-marble/60 leading-relaxed lg:text-right max-w-[36ch]">
                Submit a confidential introduction. A founding partner will reply
                personally within two business days.
              </p>
              <Link
                to="/contact"
                className="text-[11px] uppercase tracking-[0.22em] bg-marble text-ink px-10 py-5 hover:bg-brass hover:text-marble transition-all duration-500"
              >
                Request Private Audience
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
