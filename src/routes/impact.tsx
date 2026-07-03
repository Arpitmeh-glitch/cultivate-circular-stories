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
      { name: "description", content: "A decade of community-led action: districts reached, volunteers mobilised, women empowered, and lives impacted across India." },
      { property: "og:title", content: "Impact — Green Future Collective" },
      { property: "og:description", content: "Work measured in communities, not press releases." },
    ],
  }),
  component: ImpactPage,
});

const STATS: { n: number; display: string; l: string }[] = [
  { n: 6, display: "6", l: "Years" },
  { n: 5000, display: "5,000", l: "Community Volunteers" },
  { n: 1500, display: "1,500 MT+", l: "Waste Diverted from Landfills" },
  { n: 1500000, display: "1.5M+", l: "People Reached" },
  { n: 210000, display: "210K", l: "Lives Impacted" },
  { n: 9, display: "9", l: "Districts" },
  { n: 17, display: "17", l: "Urban Local Bodies" },
];

const IMPACT_CARDS: { t: string; items: string[] }[] = [
  {
    t: "Community Mobilisation",
    items: [
      "12,500+ Community Volunteers",
      "1,360+ Village Development Committees",
      "2,372 Specialised Ecosystem Builders",
      "14,135+ Women Empowered",
      "6 Farmer Producer Organisations",
    ],
  },
  {
    t: "Water, Sanitation & Hygiene (WASH)",
    items: [
      "240,000+ Lives received access to clean drinking water",
      "116,000+ Lives received access to safe individual toilets",
      "35,000+ Household toilets built in rural homes",
      "390+ Schools supported with WASH facilities",
      "1,503+ Hamlets declared Open Defecation Free (ODF)",
    ],
  },
  {
    t: "Health",
    items: [
      "415,000+ People screened for vision care",
      "2,700+ Health Volunteers trained",
      "130,000+ Spectacles distributed",
      "22,000+ Cataract surgeries conducted",
      "170+ Village Health Camps organised",
    ],
  },
  {
    t: "Education",
    items: [
      "155,000+ Students impacted",
      "9,500+ Students supported through scholarships",
      "4,500+ Teachers trained",
      "659+ Schools supported with library setup",
      "18,800+ Students impacted through solar infrastructure",
    ],
  },
  {
    t: "Livelihoods & Women Empowerment",
    items: [
      "₹1260 Million added to annual GDP through community livelihood initiatives",
      "50,800+ Entrepreneurs empowered",
      "10,500+ Youth skilled through training programmes",
      "103,000+ Farmers trained through capacity-building programmes",
      "21,352 Women empowered across livelihood programmes",
    ],
  },
];

function ImpactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Impact"
        title={<>Measured in <span className="text-accent">communities,</span> not press releases.</>}
        lede="A decade of grassroots work across districts, blocks and hamlets — translated into livelihoods, schools, health camps, and cleaner public systems."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeUp key={s.l} delay={i * 80}>
                <div className="group relative border-t border-primary/20 pt-6 transition-all duration-500 hover:border-accent">
                  <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full" />
                  <p className="font-display text-[64px] font-semibold leading-none tracking-tight text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-accent lg:text-[88px]">
                    <Counter to={s.n} display={s.display} />
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
          <FadeUp><p className="eyebrow text-accent">Impact areas</p></FadeUp>
          <FadeUp delay={100}><h2 className="mt-6 display-lg max-w-[20ch] text-primary">Numbers that translate into systems.</h2></FadeUp>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {IMPACT_CARDS.map((s, i) => (
              <FadeUp key={s.t} delay={i * 100}>
                <div className="border-t border-primary/20 pt-6">
                  <p className="font-display text-3xl font-semibold text-accent">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-primary">{s.t}</h3>
                  <ul className="mt-6 space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-base leading-relaxed text-primary/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
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
