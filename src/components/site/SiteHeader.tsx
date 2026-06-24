import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { images } from "@/data/images";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/collaborate", label: "Collaborate" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={images.branding.logo}
            alt="Green Future Collective"
            className="h-10 w-10 rounded-full object-contain bg-background ring-1 ring-primary/10"
          />
          <span className="font-display text-[17px] font-semibold leading-tight tracking-tight text-primary">
            Green Future <span className="text-accent">Collective</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-sm font-medium text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            to="/donate"
            className="inline-flex items-center rounded-full border border-primary/25 px-5 py-2.5 text-sm font-medium text-primary hover:bg-secondary"
          >
            Donate
          </Link>
          <Link
            to="/collaborate"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Partner with us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-primary/20 xl:hidden"
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 top-0 h-px w-4 bg-primary transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-px w-4 bg-primary transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-lg font-medium text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
