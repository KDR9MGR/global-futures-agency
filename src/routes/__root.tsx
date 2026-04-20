import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-marble px-6">
      <div className="max-w-xl text-center">
        <span className="eyebrow">Error · 404</span>
        <h1 className="mt-6 font-serif text-7xl md:text-8xl font-light tracking-tight text-ink">
          Not in the <em className="text-slate">archive.</em>
        </h1>
        <p className="mt-6 text-sm text-slate">
          The page you're seeking doesn't exist or has been retired.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center text-[11px] uppercase tracking-[0.22em] border border-ink px-6 py-3 hover:bg-ink hover:text-marble transition-all duration-500"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aurelius Advisory — Generational Counsel for Elite Academic Admissions" },
      {
        name: "description",
        content:
          "Discreet, rigorous advisory for families pursuing the world's most exacting boarding schools and Ivy League universities. By selective engagement.",
      },
      { name: "author", content: "Aurelius Advisory" },
      { property: "og:title", content: "Aurelius Advisory — Generational Counsel" },
      {
        property: "og:description",
        content:
          "Strategy, placement, and curation for the world's most fiercely guarded academic institutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@AureliusAdvisory" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex flex-col min-h-dvh bg-marble text-ink">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
