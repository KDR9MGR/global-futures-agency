import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/philosophy", label: "Philosophy" },
  { to: "/advisory", label: "Advisory" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Inquire" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-marble/85 backdrop-blur-md border-b border-hairline">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col gap-1 group">
            <span className="eyebrow">MMXXV · Est.</span>
            <span className="font-serif text-2xl tracking-tight leading-none text-ink group-hover:italic transition-all duration-500">
              Aurelius Advisory
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[11px] uppercase tracking-[0.22em] text-ink/70 hover:text-ink transition-colors duration-300"
                activeProps={{ className: "text-ink !font-medium" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-[11px] uppercase tracking-[0.22em] border border-ink px-5 py-3 hover:bg-ink hover:text-marble transition-all duration-500"
            >
              Private Mandate
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="lg:hidden text-[11px] uppercase tracking-[0.22em]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-hairline py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
