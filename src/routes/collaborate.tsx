import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";

export const Route = createFileRoute("/collaborate")({
  head: () => ({
    meta: [
      { title: "Collaborate — Green Future Collective" },
      { name: "description", content: "Partner with Green Future Collective on CSR, government, education, NGO, and sustainability consulting programs." },
      { property: "og:title", content: "Collaborate — Green Future Collective" },
      { property: "og:description", content: "CSR, government, education, NGO, and consulting partnerships." },
    ],
  }),
  component: CollaboratePage,
});

const TRACKS = [
  {
    t: "CSR Partnerships",
    d: "Co-design measurable, women-led sustainability programs that meet your CSR mandate and outlast the reporting cycle.",
    list: ["Program design & co-branding", "Impact reporting & verification", "EPR-linked CSR pipelines"],
  },
  {
    t: "Government Partnerships",
    d: "Work with us on district-level waste systems, SHG mobilisation, and circular-economy pilots aligned with municipal and state mandates.",
    list: ["SBM-aligned waste programs", "SHG mobilisation & training", "Public infrastructure pilots"],
  },
  {
    t: "Educational Institutions",
    d: "Bring climate literacy and circular-economy practice into schools, colleges, and universities through co-developed curricula and field labs.",
    list: ["Sustainability curriculum", "Student-led waste audits", "Research & fellowship hosting"],
  },
  {
    t: "NGO Partnerships",
    d: "Pool field capacity with allied organisations on the ground — from collection networks to women's livelihoods and rural enterprise.",
    list: ["Joint field operations", "Shared training resources", "Coalition advocacy"],
  },
  {
    t: "Sustainability Consulting",
    d: "Advisory for producers, brands, and institutions on circular product design, EPR strategy, and sustainable rural sourcing.",
    list: ["EPR strategy & compliance", "Circular product & packaging design", "Sustainable sourcing audits"],
  },
];

function CollaboratePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Collaborate"
        title={<>Build with us. <span className="text-accent">Not just for us.</span></>}
        lede="We partner with governments, producers, schools, brands, and allied non-profits to design programs that put rural women and circular practice at the centre."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {TRACKS.map((p, i) => (
              <FadeUp key={p.t} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col bg-background p-10">
                  <p className="font-display text-3xl font-semibold text-accent">0{i + 1}</p>
                  <h3 className="mt-8 font-display text-2xl font-semibold text-primary">{p.t}</h3>
                  <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-muted-foreground">{p.d}</p>
                  <ul className="mt-8 space-y-2 border-t border-border pt-6 text-sm text-primary/85">
                    {p.list.map((l) => (
                      <li key={l} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="mt-20 flex flex-col items-start gap-6 rounded-sm bg-primary p-10 text-primary-foreground lg:flex-row lg:items-center lg:justify-between lg:p-14">
              <div>
                <p className="eyebrow text-accent">Ready to start</p>
                <h2 className="mt-4 display-lg max-w-[20ch]">Tell us what you want to change.</h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
              >
                Get in touch <span aria-hidden>→</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
