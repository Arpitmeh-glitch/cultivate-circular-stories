import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FadeUp } from "@/components/site/FadeUp";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Green Future Collective" },
      { name: "description", content: "Support Green Future Collective. Your donation funds women-led circular economy, waste, and sustainability education programs across India." },
      { property: "og:title", content: "Donate — Green Future Collective" },
      { property: "og:description", content: "Fund eco-feminist climate action. Every contribution becomes a system." },
    ],
  }),
  component: DonatePage,
});

const ALLOCATIONS = [
  { pct: "45%", t: "Women-led livelihoods", d: "Skill training, micro-enterprise capital, and shared workshop infrastructure." },
  { pct: "30%", t: "Field operations", d: "Collection routes, recovery facilities, and on-ground program teams." },
  { pct: "15%", t: "Education & outreach", d: "School curricula, workshops, and community sustainability labs." },
  { pct: "10%", t: "Research & reporting", d: "Verified measurement, audits, and open documentation of what works." },
];

function DonatePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pb-24 pt-32 lg:pb-40 lg:pt-44">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <div className="lg:col-span-7">
            <FadeUp><p className="eyebrow text-accent">Donate</p></FadeUp>
            <FadeUp delay={100}>
              <h1 className="mt-8 display-xl text-primary">
                Fund the women <span className="text-accent">building</span> the circular future.
              </h1>
            </FadeUp>
            <FadeUp delay={180}>
              <p className="mt-10 max-w-[58ch] text-xl leading-relaxed text-muted-foreground">
                Your contribution doesn't disappear into overhead. It pays for a
                week of segregation training, a shared workshop's electricity, a
                school's composting lab, an SHG member's first month of wages.
                Real systems, in real cities.
              </p>
            </FadeUp>
            <FadeUp delay={260}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["₹500", "₹1,500", "₹5,000", "₹25,000", "Custom"].map((a) => (
                  <span key={a} className="inline-flex items-center rounded-full border border-primary/25 px-5 py-3 text-sm font-semibold text-primary">
                    {a}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs italic text-muted-foreground">
                Online donation gateway integration coming soon. Use the UPI or bank details below to contribute today.
              </p>
            </FadeUp>
          </div>

          <FadeUp className="lg:col-span-5" delay={150}>
            <div className="overflow-hidden rounded-sm border border-primary/15 bg-background">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/donate/donate-note.png"
                  alt="Illustration of donation and community growth"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
                <p className="eyebrow text-accent">A note from us</p>
                <p className="mt-4 font-display text-2xl leading-snug text-primary">
                  Every rupee is allocated against a named program line. We publish where it went.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Two ways to give</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">Pick what's easiest. Both reach us directly.</h2>
          </FadeUp>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-2">
            {/* UPI */}
            <FadeUp>
              <div className="flex h-full flex-col bg-background p-10 lg:p-14">
                <p className="eyebrow text-accent">01 · UPI</p>
                <h3 className="mt-6 font-display text-3xl font-semibold text-primary">Scan to donate</h3>
                <div className="mt-10 grid place-items-center">
                  <div className="relative grid h-64 w-64 place-items-center rounded-sm border border-primary/20 bg-secondary">
                    {/* Placeholder QR pattern */}
                    <svg viewBox="0 0 100 100" className="h-48 w-48 text-primary">
                      {Array.from({ length: 144 }).map((_, i) => {
                        const x = (i % 12) * 8 + 2;
                        const y = Math.floor(i / 12) * 8 + 2;
                        const on = ((i * 7919) % 5) > 1;
                        return on ? <rect key={i} x={x} y={y} width="6" height="6" fill="currentColor" /> : null;
                      })}
                      {/* corner markers */}
                      {[[2,2],[78,2],[2,78]].map(([x,y], k) => (
                        <g key={k}>
                          <rect x={x} y={y} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" />
                          <rect x={x+6} y={y+6} width="8" height="8" fill="currentColor" />
                        </g>
                      ))}
                    </svg>
                    <span className="absolute bottom-2 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">QR placeholder</span>
                  </div>
                </div>
                <dl className="mt-10 grid gap-4 border-t border-border pt-6 text-sm">
                  <Row k="UPI ID" v="greenfuture@upi" />
                  <Row k="Account name" v="Green Future Collective" />
                </dl>
                <p className="mt-6 text-xs italic text-muted-foreground">
                  Replace with verified UPI ID & QR before launch.
                </p>
              </div>
            </FadeUp>

            {/* Bank */}
            <FadeUp delay={100}>
              <div className="flex h-full flex-col bg-background p-10 lg:p-14">
                <p className="eyebrow text-accent">02 · Bank transfer</p>
                <h3 className="mt-6 font-display text-3xl font-semibold text-primary">Direct deposit</h3>
                <dl className="mt-10 space-y-5 border-t border-border pt-6 text-sm">
                  <Row k="Account name" v="Green Future Collective" />
                  <Row k="Account number" v="XXXX XXXX XXXX" />
                  <Row k="IFSC" v="XXXX0000000" />
                  <Row k="Bank" v="Bank name · Branch" />
                  <Row k="Type" v="Current account" />
                </dl>
                <p className="mt-8 text-sm text-primary/85">
                  For international transfers, please email{" "}
                  <a className="text-accent underline-offset-4 hover:underline" href="mailto:donate@greenfuturecollective.org">donate@greenfuturecollective.org</a>{" "}
                  for SWIFT details.
                </p>
                <p className="mt-6 text-xs italic text-muted-foreground">
                  Replace with verified bank details and 80G receipt instructions before launch.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Allocation */}
      <section className="border-t border-border bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Where your money goes</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
              Allocated against named program lines. Reported every year.
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {ALLOCATIONS.map((a, i) => (
              <FadeUp key={a.t} delay={i * 80}>
                <div className="h-full bg-background p-8">
                  <p className="font-display text-5xl font-semibold text-accent">{a.pct}</p>
                  <h3 className="mt-8 font-display text-xl font-semibold text-primary">{a.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={300}>
            <p className="mt-12 max-w-[60ch] text-sm text-muted-foreground">
              Indicative allocation. Final program splits are published in our annual report and verified by an independent auditor.
              80G tax-exemption details available on request.
            </p>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
      <dt className="eyebrow text-muted-foreground">{k}</dt>
      <dd className="font-display text-base font-semibold text-primary">{v}</dd>
    </div>
  );
}
