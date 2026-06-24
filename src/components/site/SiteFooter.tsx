import { Link } from "@tanstack/react-router";
import { images } from "@/data/images";

const INSTAGRAM_URL = "https://www.instagram.com/greenfuturecollective";
const LINKEDIN_URL = "https://in.linkedin.com/company/green-future-collective";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <img
                src={images.branding.logo}
                alt="Green Future Collective"
                className="h-12 w-12 rounded-full object-contain bg-background"
              />
              <p className="eyebrow text-accent">Green Future Collective</p>
            </div>
            <h2 className="mt-8 display-lg max-w-[18ch]">
              Cleaner communities. <span className="text-accent">Women-led futures.</span>
            </h2>
            <Link
              to="/collaborate"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Start a partnership
              <span aria-hidden>→</span>
            </Link>

            <div className="mt-10 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Green Future Collective on Instagram"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-primary-foreground/25 px-4 text-xs font-medium text-primary-foreground/85 hover:bg-primary-foreground/10"
              >
                Instagram <span aria-hidden>↗</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Green Future Collective on LinkedIn"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-primary-foreground/25 px-4 text-xs font-medium text-primary-foreground/85 hover:bg-primary-foreground/10"
              >
                LinkedIn <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-6 lg:grid-cols-3">
            <FooterCol title="Explore" links={[
              { to: "/about", label: "About" },
              { to: "/programs", label: "Programs" },
              { to: "/impact", label: "Impact" },
              { to: "/projects", label: "Projects" },
              { to: "/gallery", label: "Gallery" },
            ]} />
            <FooterCol title="Engage" links={[
              { to: "/collaborate", label: "Collaborate" },
              { to: "/volunteer", label: "Volunteer" },
              { to: "/donate", label: "Donate" },
              { to: "/contact", label: "Contact" },
            ]} />
            <div>
              <p className="eyebrow text-primary-foreground/60">Based in</p>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                Uttar Pradesh, India<br />
                Grassroots action across rural & urban communities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Green Future Collective. All rights reserved.</p>
          <p>Clean communities · Circular economy · Women-led change</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow text-primary-foreground/60">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-primary-foreground/85 hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
