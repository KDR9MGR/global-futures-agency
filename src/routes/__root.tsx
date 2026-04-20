import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

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
