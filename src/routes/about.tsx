import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { images } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Green Future Collective" },
      { name: "description", content: "A grassroots eco-feminist non-profit building cleaner communities, sustainable habits, and women-led environmental action across India." },
      { property: "og:title", content: "About — Green Future Collective" },
      { property: "og:description", content: "Who we are, what we believe, and how we work — on the ground in Uttar Pradesh." },
      { property: "og:image", content: images.projects.badaMangal },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="About"
        title={<>Grassroots action for a <span className="text-accent">cleaner</span> India.</>}
        lede="Green Future Collective is an eco-feminist non-profit turning environmental awareness into everyday practice — through waste segregation, plastic reduction, sustainability education, and women-led circular livelihoods."
      />

      <section className="border-b border-border pb-4">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <figure className="relative overflow-hidden rounded-sm ring-1 ring-primary/10">
              <img
                src={images.projects.badaMangal}
                alt="Green Future Collective team and volunteers at Bada Mangal plog drive"
                className="h-[60vh] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                On the ground · Plog drive, Tilhar, Uttar Pradesh
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <FadeUp className="lg:col-span-5">
            <p className="eyebrow text-accent">What we believe</p>
            <h2 className="mt-6 display-lg text-primary">Habits, not headlines.</h2>
          </FadeUp>
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
            <FadeUp><p>Real environmental change shows up in everyday habits — a segregated bin, a refused plastic bag, a clean lane, a woman running her own composting enterprise. We build the systems that make those habits ordinary, not exceptional.</p></FadeUp>
            <FadeUp delay={100}><p>Every program is co-designed with the community it serves, led by local women, and measured against outcomes the community itself cares about — cleaner streets, less plastic, dignified livelihoods.</p></FadeUp>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Principles</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">Four ideas that shape every program.</h2>
          </FadeUp>
          <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <FadeUp key={p.t} delay={i * 80}>
                <div className="h-full bg-background p-8">
                  <p className="font-display text-3xl font-semibold text-accent">0{i + 1}</p>
                  <h3 className="mt-8 font-display text-xl font-semibold text-primary">{p.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
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

const PRINCIPLES = [
  { t: "Community-led", d: "Programs co-designed with the people who run them every day." },
  { t: "Measurable", d: "Every initiative ties to a material, reportable outcome." },
  { t: "Circular", d: "Materials, money, and skills loop back into the community." },
  { t: "Equitable", d: "Women's leadership is built in, never bolted on." },
];
