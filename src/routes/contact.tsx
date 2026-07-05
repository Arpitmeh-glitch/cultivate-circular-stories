import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Green Future Collective" },
      { name: "description", content: "Get in touch with Green Future Collective for partnerships, programs, and press." },
      { property: "og:title", content: "Contact — Green Future Collective" },
      { property: "og:description", content: "Partnerships, programs, and press inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Contact"
        title={<>Start a <span className="text-accent">conversation.</span></>}
        lede="Tell us about the community, the producer obligation, the school district, or the partnership you're imagining."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <FadeUp className="lg:col-span-5">
            <p className="eyebrow text-accent">Reach us</p>
            <div className="mt-8 space-y-10">
              <div>
                <p className="eyebrow text-muted-foreground">General & Partnerships</p>
                <a href="mailto:greenfuturecollective@gmail.com" className="mt-3 block font-display text-2xl font-semibold text-primary hover:text-accent">
                  greenfuturecollective@gmail.com
                </a>
              </div>
              <div>
                <p className="eyebrow text-muted-foreground">Press</p>
                <a href="mailto:greenfuturecollective@gmail.com" className="mt-3 block font-display text-2xl font-semibold text-primary hover:text-accent">
                  greenfuturecollective@gmail.com
                </a>
              </div>
              <div>
                <p className="eyebrow text-muted-foreground">Based in</p>
                <p className="mt-3 text-lg text-primary">Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/collaborate"
                className="inline-flex items-center rounded-full border border-primary/25 px-5 py-2.5 text-sm font-medium text-primary hover:bg-secondary"
              >
                Collaborate
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center rounded-full border border-primary/25 px-5 py-2.5 text-sm font-medium text-primary hover:bg-secondary"
              >
                Volunteer
              </Link>
              <Link
                to="/fellowship"
                className="inline-flex items-center rounded-full border border-primary/25 px-5 py-2.5 text-sm font-medium text-primary hover:bg-secondary"
              >
                Fellowship
              </Link>
              <a
                href="#contact-form"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Get in touch
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-7">
            <form
              id="contact-form"
              className="rounded-sm border border-border bg-background p-8 lg:p-12"
              action="mailto:greenfuturecollective@gmail.com"
              method="post"
              encType="text/plain"
            >
              <p className="eyebrow text-accent">Send a note</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field label="Your name" name="name" />
                <Field label="Organization" name="org" />
                <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                <Field label="What would you like to explore?" name="message" textarea className="sm:col-span-2" />
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Send message <span aria-hidden>→</span>
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label, name, type = "text", textarea = false, className = "",
}: { label: string; name: string; type?: string; textarea?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="eyebrow text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className="mt-3 w-full border-b border-border bg-transparent py-3 text-base text-primary outline-none transition-colors focus:border-accent" />
      ) : (
        <input name={name} type={type} className="mt-3 w-full border-b border-border bg-transparent py-3 text-base text-primary outline-none transition-colors focus:border-accent" />
      )}
    </label>
  );
}
