import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import library from "../assets/library.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Aurelius Advisory" },
      {
        name: "description",
        content:
          "Essays on strategy, position, and the long game of elite academic admissions. Notes from an active practice.",
      },
      { property: "og:title", content: "The Journal — Aurelius Advisory" },
      {
        property: "og:description",
        content:
          "Essays from an active advisory practice on profile architecture, school selection, and admissions strategy.",
      },
      { property: "og:image", content: library },
      { name: "twitter:image", content: library },
    ],
  }),
  component: JournalPage,
});

const articles = [
  { ch: "I", cat: "Authority", date: "Mar 2025", read: "9 min", title: "What Top 1% Parents Do Differently", excerpt: "The decisions that separate generationally placed students from the merely accomplished are rarely the ones discussed publicly." },
  { ch: "II", cat: "Roadmap", date: "Mar 2025", read: "12 min", title: "The Grade 6–12 Roadmap to Top Universities", excerpt: "A multi-year framework: from foundational positioning in middle school to bespoke applications in the final year." },
  { ch: "III", cat: "Comparison", date: "Feb 2025", read: "11 min", title: "UK vs US Boarding — A Frank Assessment", excerpt: "Two parallel traditions of elite secondary education, examined without sentiment. The right choice is rarely the obvious one." },
  { ch: "IV", cat: "Curriculum", date: "Feb 2025", read: "8 min", title: "IB vs A-Levels vs AP — Choosing the Pathway", excerpt: "Curricular choice is the most under-considered decision in international education. It need not be." },
  { ch: "V", cat: "Strategy", date: "Jan 2025", read: "7 min", title: "Activities Top Universities Actually Care About", excerpt: "Most of what is sold as 'extracurricular development' is, candidly, irrelevant to admissions officers. Here is what is not." },
  { ch: "VI", cat: "Position", date: "Jan 2025", read: "6 min", title: "Why We Don't Work With Everyone", excerpt: "Our practice accepts twelve mandates per cycle. The reasoning is structural, not promotional." },
  { ch: "VII", cat: "Outcomes", date: "Dec 2024", read: "10 min", title: "From Local Student to Global Leader", excerpt: "A composite case study, drawn from three of our placements. Names changed; trajectories real." },
  { ch: "VIII", cat: "Authority", date: "Dec 2024", read: "8 min", title: "How Elite Families Plan a Child's Future", excerpt: "Twenty-year horizons. Five-year reviews. Annual recalibrations. The rhythm of multi-generational thinking." },
  { ch: "IX", cat: "Common Errors", date: "Nov 2024", read: "9 min", title: "Mistakes Parents Make in Study Abroad Planning", excerpt: "Eighteen years of practice. The five errors we see in nearly every late-stage intake." },
  { ch: "X", cat: "Hidden Gap", date: "Nov 2024", read: "7 min", title: "The Hidden Gap in Indian Secondary Education", excerpt: "On the structural reasons academically excellent Indian students under-place at elite global universities — and what closes it." },
];

function JournalPage() {
  const featured = articles[0];

  return (
    <div className="bg-marble text-ink">
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-20 lg:pt-28 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="eyebrow">§ Journal</span>
              <h1 className="mt-8 font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
                Notes from <em className="italic text-slate">the practice.</em>
              </h1>
            </div>
            <p className="text-sm text-slate max-w-[36ch] leading-[1.85]">
              Essays issued periodically by the founding partners. Read by
              clients, prospective families, and fellow advisors.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-[1480px] px-6 lg:px-12 py-20 lg:py-28">
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-3xl text-slate">Ch. {featured.ch}</span>
              <div className="w-10 h-px bg-ink" />
              <span className="eyebrow">{featured.cat} · Featured</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-balance">
              {featured.title}
            </h2>
            <p className="mt-8 text-base text-slate leading-[1.85] max-w-[55ch]">
              {featured.excerpt}
            </p>
            <div className="mt-10 flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-slate">
              <span>{featured.date}</span>
              <span>{featured.read} read</span>
              <Link to="/journal" className="text-ink hover:italic">
                Read essay →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={library}
                alt="University library reading room"
                width={1280}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-4 border border-marble/30 pointer-events-none" />
            </div>
          </div>
        </article>
      </section>

      {/* Index */}
      <section className="bg-[oklch(0.97_0.003_80)] border-y border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-24 lg:py-32">
          <SectionHeading
            index="§ Index"
            eyebrow="Recent Essays"
            title={
              <>
                The full <em className="italic text-slate">register.</em>
              </>
            }
          />

          <div className="mt-12 grid grid-cols-12 gap-4 pb-3 border-b border-ink eyebrow">
            <span className="col-span-1">Ch.</span>
            <span className="col-span-7 lg:col-span-6">Title</span>
            <span className="hidden lg:block lg:col-span-2">Category</span>
            <span className="col-span-2 lg:col-span-2">Date</span>
            <span className="col-span-2 lg:col-span-1 text-right">Read</span>
          </div>

          {articles.map((a) => (
            <Link
              key={a.title}
              to="/journal"
              className="group grid grid-cols-12 gap-4 py-6 border-b border-hairline items-baseline hover:bg-marble/60 transition-colors"
            >
              <span className="col-span-1 font-serif text-xl text-slate">{a.ch}</span>
              <div className="col-span-7 lg:col-span-6 flex flex-col gap-1">
                <span className="font-serif text-xl lg:text-2xl font-normal tracking-tight group-hover:italic transition-all leading-tight">
                  {a.title}
                </span>
                <span className="text-xs text-slate hidden lg:block">{a.excerpt}</span>
              </div>
              <span className="hidden lg:block lg:col-span-2 text-[11px] uppercase tracking-[0.18em] text-slate">
                {a.cat}
              </span>
              <span className="col-span-2 lg:col-span-2 text-xs text-slate font-mono">
                {a.date}
              </span>
              <span className="col-span-2 lg:col-span-1 text-xs text-slate font-mono text-right">
                {a.read}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
