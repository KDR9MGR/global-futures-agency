import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-ink">
      <div className="lg:col-span-2 flex items-baseline gap-3">
        <span className="font-mono text-xs text-slate">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="lg:col-span-7 font-serif text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight font-light text-balance">
        {title}
      </h2>
      {children && (
        <div className="lg:col-span-3 text-sm text-slate leading-relaxed">{children}</div>
      )}
    </div>
  );
}
