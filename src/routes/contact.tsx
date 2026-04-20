import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ledger from "../assets/ledger.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Private Inquiry — Aurelius Advisory" },
      {
        name: "description",
        content:
          "Submit a confidential introduction. A founding partner will reply personally within two business days.",
      },
      { property: "og:title", content: "Private Inquiry — Aurelius Advisory" },
      {
        property: "og:description",
        content:
          "Begin a confidential conversation. By selective engagement only — twelve mandates per cycle.",
      },
      { property: "og:image", content: ledger },
      { name: "twitter:image", content: ledger },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-marble text-ink">
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-20 lg:pt-28 pb-12">
          <span className="eyebrow">§ Inquiry</span>
          <h1 className="mt-8 font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight max-w-[18ch] text-balance">
            A confidential <em className="italic text-slate">introduction.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-ink p-10 lg:p-14 fade-up">
                <span className="eyebrow">Received</span>
                <h2 className="mt-6 font-serif text-3xl lg:text-4xl font-light tracking-tight">
                  Thank you. Your inquiry has been logged.
                </h2>
                <p className="mt-6 text-sm text-slate leading-relaxed max-w-[50ch]">
                  A founding partner will respond personally within two business
                  days from a private address. All correspondence is held in
                  strict confidence.
                </p>
                <div className="mt-10 flex items-center gap-3 font-mono text-xs text-slate">
                  <span>REF · {Math.random().toString(36).slice(2, 8).toUpperCase()}</span>
                  <span>·</span>
                  <span>{new Date().toLocaleDateString("en-GB")}</span>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col"
              >
                <Field label="Family Name" name="name" required />
                <Field label="Correspondence Email" name="email" type="email" required />
                <Field label="City of Residence" name="city" />
                <Field label="Child's Current Grade" name="grade" placeholder="e.g. Grade 8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px md:bg-hairline">
                  <Select
                    label="Mandate of Interest"
                    name="mandate"
                    options={[
                      "Foundation (Grades 6–8)",
                      "Strategic (Grades 9–10)",
                      "Apex (Grades 11–12)",
                      "Undecided — counsel needed",
                    ]}
                  />
                  <Select
                    label="Geographic Aspiration"
                    name="region"
                    options={[
                      "United Kingdom",
                      "United States",
                      "Switzerland / Europe",
                      "Open — to be advised",
                    ]}
                  />
                </div>
                <TextArea label="A brief note on your family's aspirations" name="note" />

                <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-ink">
                  <p className="text-xs text-slate max-w-[40ch] leading-relaxed">
                    By submitting, you authorise us to retain your details
                    confidentially for the purpose of this inquiry. No third
                    parties.
                  </p>
                  <button
                    type="submit"
                    className="text-[11px] uppercase tracking-[0.22em] bg-ink text-marble px-10 py-5 hover:bg-brass transition-all duration-500 shrink-0"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Side */}
          <aside className="lg:col-span-5 lg:col-start-8 flex flex-col gap-10">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={ledger}
                alt="Leather-bound ledger and fountain pen"
                width={1280}
                height={960}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-4 border border-marble/30 pointer-events-none" />
            </div>

            <div className="border-t border-ink pt-8">
              <span className="eyebrow">Direct Correspondence</span>
              <div className="mt-6 flex flex-col gap-4">
                <a href="mailto:office@aurelius.advisory" className="font-serif text-2xl hover:italic">
                  office@aurelius.advisory
                </a>
                <span className="text-sm text-slate">+44 20 7000 0000</span>
              </div>
            </div>

            <div className="border-t border-hairline pt-8 grid grid-cols-2 gap-6">
              <div>
                <span className="eyebrow">London</span>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  12 St James's Square<br />London SW1Y 4LB
                </p>
              </div>
              <div>
                <span className="eyebrow">Geneva</span>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  Quai du Mont-Blanc 19<br />1201 Genève
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="group flex flex-col gap-3 py-6 border-b border-hairline">
      <span className="eyebrow">
        {label}
        {required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-transparent font-serif text-2xl lg:text-3xl font-light tracking-tight outline-none placeholder:text-slate/40 focus:placeholder:text-transparent"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="bg-marble flex flex-col gap-3 py-6">
      <span className="eyebrow">{label}</span>
      <select
        name={name}
        className="bg-transparent font-serif text-xl lg:text-2xl font-light tracking-tight outline-none appearance-none cursor-pointer"
      >
        <option value="">— Select —</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="flex flex-col gap-3 py-6 border-b border-hairline">
      <span className="eyebrow">{label}</span>
      <textarea
        name={name}
        rows={4}
        className="bg-transparent font-serif text-xl lg:text-2xl font-light tracking-tight outline-none resize-none placeholder:text-slate/40"
        placeholder="A few sentences is sufficient. We will follow up directly."
      />
    </label>
  );
}
