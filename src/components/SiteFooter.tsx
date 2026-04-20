import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-marble">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="font-serif text-4xl tracking-tight leading-none">
              Aurelius <em className="text-slate">Advisory</em>
            </span>
            <p className="text-sm text-slate max-w-[42ch] leading-relaxed">
              Generational counsel for families pursuing the world's most fiercely
              guarded academic institutions. By selective engagement only.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.22em] text-slate">
              <span>London</span>
              <span>Geneva</span>
              <span>New York</span>
              <span>Mumbai</span>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="eyebrow mb-2">Practice</span>
            <Link to="/philosophy" className="text-sm hover:italic">Philosophy</Link>
            <Link to="/advisory" className="text-sm hover:italic">Advisory Mandates</Link>
            <Link to="/journal" className="text-sm hover:italic">Journal</Link>
            <Link to="/contact" className="text-sm hover:italic">Private Inquiry</Link>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="eyebrow mb-2">Correspondence</span>
            <a href="mailto:office@aurelius.advisory" className="text-sm hover:italic">
              office@aurelius.advisory
            </a>
            <span className="text-sm text-slate">+44 20 7000 0000</span>
            <p className="text-xs text-slate mt-4 max-w-[36ch] leading-relaxed">
              Replies are issued personally within two business days. Engagement
              follows a confidential intake.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-hairline flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-slate">
          <span>© MMXXV Aurelius Advisory · All Rights Reserved</span>
          <span>By invitation · Confidential by design</span>
        </div>
      </div>
    </footer>
  );
}
