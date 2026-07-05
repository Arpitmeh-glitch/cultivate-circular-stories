import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FadeUp } from "@/components/site/FadeUp";

export const Route = createFileRoute("/fellowship")({
  head: () => ({
    meta: [
      { title: "Wastepreneurs Fellowship 2026 — Green Future Collective" },
      { name: "description", content: "Wastepreneurs Fellowship 2026 — hands-on fellowship in municipal waste management and circular economy." },
      { property: "og:title", content: "Wastepreneurs Fellowship 2026" },
    ],
  }),
  component: FellowshipPage,
});

function FellowshipPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border pb-20 pt-24 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <FadeUp>
            <p className="eyebrow text-accent">GREEN JOBS · CIRCULAR ECONOMY</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="mt-8 display-xl max-w-[40ch] text-primary">Wastepreneurs Fellowship 2026</h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg text-muted-foreground">January 2026 — Aligarh, Uttar Pradesh</p>
          </FadeUp>
        </div>
      </section>

      <main className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <FadeUp>
            <h2 className="font-display text-2xl text-primary">Case study</h2>
          </FadeUp>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <FadeUp>
              <article>
                <h3 className="font-display text-xl font-semibold text-primary">CHALLENGE</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  India's growing waste management sector requires skilled professionals and entrepreneurs who can transform waste into economic opportunities. However, young graduates and aspiring changemakers often lack practical industry experience, mentorship, and exposure to municipal waste management systems.
                </p>

                <h3 className="mt-8 font-display text-xl font-semibold text-primary">APPROACH</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Green Future Collective launched the <strong>Wastepreneurs Fellowship 2026</strong>, Uttar Pradesh's first fellowship dedicated to developing the next generation of waste management professionals and circular economy entrepreneurs.
                </p>
                <ul className="mt-4 list-inside list-disc text-sm text-muted-foreground">
                  <li>Hands-on municipal waste management experience</li>
                  <li>Material Recovery Facility (MRF) operations</li>
                  <li>Waste-to-value and circular economy practices</li>
                  <li>Entrepreneurship and enterprise development</li>
                  <li>Professional mentoring and capacity building</li>
                </ul>

                <h3 className="mt-8 font-display text-xl font-semibold text-primary">OUTCOME</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The fellowship created a pathway for aspiring environmental professionals to gain real-world experience while strengthening the green workforce. Participants developed technical, operational, and entrepreneurial skills that prepare them to lead innovative waste management solutions and contribute to India's growing circular economy.
                </p>

                <div className="mt-8">
                  <a
                    href="https://bit.ly/gfc_wastepreneurs2026?r=qr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    Sign up for the fellowship
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </FadeUp>

            <FadeUp>
              <aside className="rounded-sm border border-border bg-background p-6">
                <p className="eyebrow text-accent">Details</p>
                <dl className="mt-4 text-sm text-primary/80">
                  <div className="flex justify-between">
                    <dt className="font-medium">Duration</dt>
                    <dd>Full-time (starting Jan 2026)</dd>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <dt className="font-medium">Location</dt>
                    <dd>Aligarh, Uttar Pradesh</dd>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <dt className="font-medium">Focus areas</dt>
                    <dd>MRF operations · Waste-to-value · Enterprise development</dd>
                  </div>
                </dl>

                <p className="mt-6 text-sm text-muted-foreground">For queries contact: greenfuturecollective@gmail.com</p>
              </aside>
            </FadeUp>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
