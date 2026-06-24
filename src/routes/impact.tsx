import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Green Future Collective" },
      { name: "description", content: "Communities served, volunteers mobilized, workshops delivered, and women supported across India." },
      { property: "og:title", content: "Impact — Green Future Collective" },
      { property: "og:description", content: "Work measured in communities, not press releases." },
    ],
  }),
  component: ImpactPage,
});

const STATS = [
  { n: 20, l: "Communities" },
  { n: 500, l: "Volunteers" },
  { n: 100, l: "Workshops" },
  { n: 50, l: "Women supported" },
];

const STORIES = [
  { y: "2023", t: "First village pilot launched", d: "Door-to-door segregation network across 6 hamlets." },
  { y: "2024", t: "Schools curriculum scaled", d: "Sustainability labs in 30+ schools across two districts." },
  { y: "2024", t: "Women's enterprise opened", d: "Shared workshop space + CSR linkages for 50+ artisans." },
  { y: "2025", t: "EPR operations formalized", d: "Verified collection network serving multiple producers." },
];

function ImpactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Impact"
        title={<>Measured in <span className="text-accent">communities,</span> not press releases.</>}
        lede="Every program ties to a material outcome — diversion rates, livelihoods supported, students engaged. Here is the picture so far."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeUp key={s.l} delay={i * 100}>
                <div className="border-t border-primary/20 pt-6">
                  <p className="font-display text-[80px] font-semibold leading-none tracking-tight text-primary lg:text-[120px]">
                    <Counter to={s.n} />
                  </p>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-primary/70">{s.l}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Timeline</p></FadeUp>
          <FadeUp delay={100}><h2 className="mt-6 display-lg max-w-[20ch] text-primary">From first pilot to formal operations.</h2></FadeUp>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {STORIES.map((s, i) => (
              <FadeUp key={s.t} delay={i * 100}>
                <div className="border-t border-primary/20 pt-6">
                  <p className="font-display text-3xl font-semibold text-accent">{s.y}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-primary">{s.t}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
