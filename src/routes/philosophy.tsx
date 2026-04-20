import { createFileRoute, Link } from "@tanstack/react-router";
import library from "../assets/library.jpg";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Philosophy — Aurelius Advisory" },
      {
        name: "description",
        content:
          "Our practice rests on three convictions: profile architecture, deliberate placement, and quiet execution. The reasoning, in full.",
      },
      { property: "og:title", content: "The Philosophy — Aurelius Advisory" },
      {
        property: "og:description",
        content:
          "Why elite admissions is best approached as a multi-generational discipline, not a transactional service.",
      },
      { property: "og:image", content: library },
      { name: "twitter:image", content: library },
    ],
  }),
  component: PhilosophyPage,
});

const tenets = [
  {
    n: "I",
    title: "Right strategy precedes right school",
    body: "The wrong school chosen brilliantly will outperform the right school chosen accidentally. We begin every mandate with a clear-eyed assessment of trajectory, temperament, and family ambition — long before we discuss institutions by name.",
  },
  {
    n: "II",
    title: "Profile is engineered, not assembled",
    body: "A compelling student profile is not a collection of activities. It is an intellectual signature — a coherent through-line that distinguishes a candidate to admissions officers reading their two-thousandth file.",
  },
  {
    n: "III",
    title: "Early counsel compounds",
    body: "The families who place at the highest tier almost always engaged counsel between Grades 6 and 8. By Grade 11, structural choices have already been made; we can only optimize what remains.",
  },
  {
    n: "IV",
    title: "Discretion is non-negotiable",
    body: "Every interaction, document, and decision passes through a single confidential channel. Our client list is not published, ever. Engagement is most often by referral from existing families.",
  },
  {
    n: "V",
    title: "We decline more than we accept",
    body: "Mandates are limited to twelve families per cycle. The constraint is not scarcity marketing — it is the precondition for the depth of personal attention that produces our outcomes.",
  },
];

function PhilosophyPage() {
  return (
    <div className="bg-marble text-ink">
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-20 lg:pt-28 pb-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">§ Philosophy</span>
              <h1 className="mt-8 font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-light leading-[1.02] tracking-tight text-balance">
                The work is{" "}
                <em className="italic text-slate">slow, exacting, and largely invisible.</em>{" "}
                That is the point.
              </h1>
              <p className="mt-12 max-w-[55ch] text-base text-slate leading-[1.85]">
                Aurelius Advisory was founded on a simple conviction: the
                placement of a child at one of the world's great institutions
                is too consequential to be entrusted to a transactional
                service. It is, properly understood, a multi-year discipline —
                closer to private wealth advisory than to coaching.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={library}
                  alt="University library reading room"
                  width={1280}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-4 border border-marble/30 pointer-events-none" />
                <div className="absolute top-4 right-4 bg-marble text-ink px-3 py-1 text-[10px] uppercase tracking-widest">
                  Plate II
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenets */}
      <section className="mx-auto max-w-[1480px] px-6 lg:px-12 py-32 lg:py-40">
        <SectionHeading
          index="§ 01"
          eyebrow="Five Tenets"
          title={
            <>
              The convictions that{" "}
              <em className="italic text-slate">discipline our practice.</em>
            </>
          }
        />

        <div className="mt-20 flex flex-col">
          {tenets.map((t) => (
            <article
              key={t.n}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-b border-hairline first:border-t first:border-ink"
            >
              <div className="lg:col-span-2">
                <span className="font-serif text-6xl text-slate font-light">{t.n}.</span>
              </div>
              <h3 className="lg:col-span-5 font-serif text-3xl lg:text-4xl font-light tracking-tight leading-[1.1] text-balance">
                {t.title}
              </h3>
              <p className="lg:col-span-5 text-base text-slate leading-[1.85]">{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="bg-ink text-marble">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-28 lg:py-36 flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.22em] text-brass">
            Coda
          </span>
          <p className="mt-8 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] max-w-[28ch] text-balance">
            We do not work with everyone.{" "}
            <em className="italic text-marble/60">Here is why.</em>
          </p>
          <Link
            to="/contact"
            className="mt-12 text-[11px] uppercase tracking-[0.22em] border border-marble px-10 py-5 hover:bg-marble hover:text-ink transition-all duration-500"
          >
            Begin a Confidential Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
