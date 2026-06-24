import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CollageHero } from "@/components/site/CollageHero";
import { Marquee } from "@/components/site/Marquee";
import { FocusRow } from "@/components/site/FocusRow";
import {
  VisualWaste,
  VisualWomen,
  VisualCircular,
  VisualEPR,
} from "@/components/site/FocusVisuals";
import { FadeUp } from "@/components/site/FadeUp";
import { Counter } from "@/components/site/Counter";
import { images } from "@/data/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Future Collective — Cleaner communities. Women-led futures." },
      { name: "description", content: "Green Future Collective is an eco-feminist grassroots non-profit building cleaner communities through waste segregation, plastic reduction, sustainability education, and women-led circular livelihoods across India." },
      { property: "og:title", content: "Green Future Collective" },
      { property: "og:description", content: "Reduce waste. Empower women. Create change. Grassroots environmental action from Uttar Pradesh." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-20 pt-14 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <FadeUp>
              <p className="eyebrow text-accent">Green Future Collective · Eco-feminist grassroots non-profit · Uttar Pradesh, India</p>
            </FadeUp>
            <FadeUp delay={120} as="h1">
              <span className="block display-xl text-primary leading-[0.86]">
                <span className="block">Reduce waste.</span>
                <span className="block text-accent italic font-medium">Empower women.</span>
                <span className="block">Create change.</span>
              </span>
            </FadeUp>
            <FadeUp delay={260}>
              <p className="mt-10 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
                We build cleaner communities through household waste
                segregation, plastic reduction drives, sustainability
                education, and women-led circular livelihoods — practical,
                grassroots action that turns environmental awareness into
                everyday habits.
              </p>
            </FadeUp>
            <FadeUp delay={340}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/collaborate"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Start a partnership
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-transparent px-7 py-4 text-sm font-semibold text-primary hover:bg-secondary"
                >
                  Explore our programs
                </Link>
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-3 px-2 py-4 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Support our work →
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={420}>
              <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-primary/15 pt-8">
                {[
                  { k: "Focus", v: "Clean communities" },
                  { k: "Approach", v: "Eco-feminist" },
                  { k: "Base", v: "Uttar Pradesh" },
                ].map((s) => (
                  <div key={s.k}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/55">{s.k}</p>
                    <p className="mt-2 font-display text-base font-semibold text-primary">{s.v}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="relative lg:col-span-5">
            <CollageHero />
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <FadeUp>
        <div className="mx-auto max-w-[1440px] px-6 pb-6 lg:px-12">
          <p className="eyebrow text-muted-foreground">Working alongside partners across sectors</p>
        </div>
      </FadeUp>
      <Marquee />

      {/* MISSION */}
      <section className="py-32 lg:py-48">
        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
          <FadeUp>
            <p className="eyebrow text-accent">Our mission</p>
          </FadeUp>
          <FadeUp delay={120}>
            <h2 className="mx-auto mt-10 display-lg max-w-[24ch] text-primary">
              Sustainable cities and communities,{" "}
              <span className="text-accent">built bottom-up</span> through
              participatory community-led action.
            </h2>
          </FadeUp>
          <FadeUp delay={220}>
            <p className="mx-auto mt-10 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              We are a group of community-driven individuals working towards
              building sustainable and inclusive communities through grassroots
              participation, innovation, and collective action — guided by a
              simple belief that every individual has unlimited potential when
              given access to the right resources.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <FocusRow
        index="01"
        title="Waste Segregation & Clean Communities"
        body={
          "Many communities face challenges such as littered public spaces, poor waste disposal habits, and limited awareness about waste segregation. These issues contribute to unhealthy surroundings and environmental pollution.\n\nGreen Future Collective addresses these challenges through community clean-up drives, door-to-door waste segregation awareness campaigns, and creative best-out-of-waste activities that encourage sustainable habits and responsible waste management."
        }
        bullets={[
          "Community clean-up and plog drives",
          "Door-to-door waste segregation awareness campaigns",
          "Best-out-of-waste and sustainability activities",
          "Community participation for cleaner public spaces",
        ]}
        visual={<VisualWaste />}
      />
      <FocusRow
        index="02"
        title="Women's Empowerment & Sustainable Livelihoods"
        body="Rural women lead every program we run. We build the green skills, micro-enterprise support, and market access that turn sustainability into a dignified livelihood — not charity."
        bullets={[
          "Self-help groups and green-skill training",
          "Micro-enterprise capital and shared workshop spaces",
          "Direct market linkages with brands and CSR partners",
        ]}
        reverse
        visual={<div className="absolute inset-0"><img src={images.programs.womenEmpowerment} alt="Women's Empowerment" className="absolute inset-0 h-full w-full object-cover"/></div>}
      />
      <FocusRow
        index="03"
        title="Plastic Reduction & Circular Economy"
        body="We replace single-use plastic with refill, reuse, and upcycling systems built for villages and small towns — and loop materials back into local production instead of landfills."
        bullets={[
          "Plastic-free drives and refill/reuse pilots",
          "Community composting and upcycling workshops",
          "Reverse logistics and reuse-repair networks",
        ]}
        visual={<VisualCircular />}
      />
      <FocusRow
        index="04"
        title="Sustainability Education & Environmental Awareness"
        body="We bring climate and circular-economy literacy into schools, colleges and panchayats — and back it up with EPR field operations that producers can actually verify."
        bullets={[
          "Sustainability curriculum for schools & colleges",
          "Community awareness drives and youth volunteer cohorts",
          "EPR plan design, verified collection & CPCB-aligned reporting",
        ]}
        reverse
        visual={<VisualEPR />}
      />

      {/* IMPACT */}
      <section className="border-y border-border bg-secondary/40 py-32 lg:py-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <FadeUp>
                <p className="eyebrow text-accent">Impact, in progress</p>
              </FadeUp>
              <FadeUp delay={100}>
                <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
                  Measured in <span className="text-accent">communities,</span> not press releases.
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={160}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-primary/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                A decade of grassroots action
              </span>
            </FadeUp>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 10, display: "10+", l: "Years" },
              { n: 12500, display: "12,500+", l: "Community Volunteers" },
              { n: 1100000, display: "1.1 Mn", l: "People Reached" },
              { n: 600000, display: "600K", l: "Lives Impacted" },
              { n: 1300000, display: "1.3 Mn", l: "Unique Interventions Delivered" },
              { n: 5, display: "5", l: "Districts" },
              { n: 17, display: "17", l: "Blocks" },
            ].map((s, i) => (
              <FadeUp key={s.l} delay={i * 100} className="h-full">
                <div className="flex h-full min-w-0 flex-col border-t border-primary/20 pt-6">
                  <p className="font-display text-[56px] font-semibold leading-none tracking-tight text-primary sm:text-[64px] lg:text-[72px] xl:text-[80px]">
                    <Counter to={s.n} display={s.display} duration={2200} />
                  </p>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-primary/70">
                    {s.l}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-32 lg:py-48">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <FadeUp className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary ring-1 ring-primary/10">
              <img
                src={images.founder.founderPhoto}
                alt="Sakshi Singh Sirari, Founder of Green Future Collective"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
              <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 rounded-full bg-accent/80 mix-blend-multiply" />
              <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                Sakshi Singh Sirari · Founder
              </span>
            </div>
          </FadeUp>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp>
              <p className="eyebrow text-accent">Founder's note</p>
            </FadeUp>
            <FadeUp delay={100}>
              <p className="mt-8 font-display text-[40px] font-medium leading-[1.05] text-primary lg:text-[64px]">
                "Sustainability is not a programme. It is a politics —{" "}
                <span className="text-accent">of land, of labour, and of women.</span>"
              </p>
            </FadeUp>
            <FadeUp delay={180}>
              <p className="mt-10 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
                I started Green Future Collective because the people closest to
                the climate crisis — rural women, waste workers, smallholder
                producers — are almost always the last to be consulted about
                solutions. We are building the opposite kind of organisation:
                one where they design the systems, run the facilities, and
                share in the value created.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div className="mt-12 flex flex-col gap-1">
                <p className="font-display text-2xl font-semibold text-primary">Sakshi Singh Sirari</p>
                <p className="text-sm text-muted-foreground">Founder · Green Future Collective</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-border py-32 lg:py-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <FadeUp><p className="eyebrow text-accent">Projects</p></FadeUp>
              <FadeUp delay={100}>
                <h2 className="mt-6 display-lg max-w-[20ch] text-primary">
                  Case studies, not photo galleries.
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={160}>
              <Link to="/projects" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                See all projects →
              </Link>
            </FadeUp>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 120}>
                <ProjectCard {...p} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <div className="grid gap-10 rounded-sm bg-primary p-10 text-primary-foreground lg:grid-cols-12 lg:gap-16 lg:p-16">
              <div className="lg:col-span-7">
                <p className="eyebrow text-accent">Get involved</p>
                <h2 className="mt-6 display-lg max-w-[18ch]">
                  Build the next system <span className="text-accent">with us.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end gap-4">
                <Link to="/volunteer" className="inline-flex items-center justify-between gap-6 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground hover:bg-accent/90">
                  Volunteer with us <span aria-hidden>→</span>
                </Link>
                <Link to="/donate" className="inline-flex items-center justify-between gap-6 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  Donate <span aria-hidden>→</span>
                </Link>
                <Link to="/collaborate" className="inline-flex items-center justify-between gap-6 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  Partner with us <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const PROJECTS = [
  {
    tag: "Community Clean-Up & Awareness",
    title: "Bada Mangal Plog Drive",
    date: "16 June 2026",
    location: "Kachiyani Kheda Mandir, Tilhar, Uttar Pradesh",
    image: images.projects.badaMangal,
    challenge: "Large public gatherings generated litter around the temple premises, creating cleanliness and waste management challenges.",
    solution: "Green Future Collective organized a community-led plog drive, combining waste collection with awareness on cleanliness and responsible disposal practices.",
    impact: "The initiative brought volunteers and community members together to create a cleaner public space while promoting environmental responsibility and civic participation.",
  },
  {
    tag: "Schools · Waste Awareness & Education",
    title: "Koodadhan Workshop at Maa Sharde Inter College",
    date: "June 2026",
    location: "Maa Sharde Inter College, Tilhar, Uttar Pradesh",
    image: images.projects.koodadhanWorkshop,
    challenge: "Students lacked practical understanding of waste segregation and the value of recyclable materials.",
    solution: "Conducted an interactive Koodadhan workshop with demonstrations, discussions, and waste-to-wealth learning activities in partnership with Nagar Palika Parishad Tilhar.",
    impact: "300+ students engaged, improved awareness of waste management practices, and committed to promoting sustainability within their communities.",
  },
  {
    tag: "Schools · Environmental Awareness",
    title: "Natural Holi Awareness Rally - Katra",
    date: "March 2026",
    location: "Katra Nagar, Shahjahanpur, Uttar Pradesh",
    image: images.projects.naturalHoliRally,
    challenge: "The widespread use of chemical colors and festival waste created environmental and public health concerns during Holi celebrations.",
    solution: "Green Future Collective organized a student-led awareness rally in partnership with Nagar Panchayat Katra, promoting natural colors, cleanliness, and sustainable celebrations.",
    impact: "Students and residents engaged in conversations around eco-friendly festival practices, helping increase awareness of safer and more sustainable Holi celebrations.",
  },
];

function ProjectCard({ tag, title, date, location, image, challenge, solution, impact }: typeof PROJECTS[number] & { date?: string; location?: string; image?: string }) {
  return (
    <article className="group relative flex h-full flex-col rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)]">
      {image ? (
        <div className="-mx-8 mb-8 overflow-hidden rounded-t-sm bg-muted sm:-mx-8 sm:rounded-sm">
          <img src={image} alt={`Project image for ${title}`} className="h-56 w-full object-cover" />
        </div>
      ) : null}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary/70">
          {tag}
        </span>
        <span className="text-xs text-muted-foreground">Case study</span>
      </div>
      <h3 className="mt-10 font-display text-3xl font-semibold leading-tight text-primary">
        {title}
      </h3>
      {(date || location) && (
        <div className="mt-3 space-y-1 text-sm text-primary/70">
          {date ? <p>{date}</p> : null}
          {location ? <p>{location}</p> : null}
        </div>
      )}

      <dl className="mt-10 space-y-6 border-t border-border pt-6 text-sm">
        <div>
          <dt className="eyebrow text-muted-foreground">Challenge</dt>
          <dd className="mt-2 leading-relaxed text-primary/85">{challenge}</dd>
        </div>
        <div>
          <dt className="eyebrow text-muted-foreground">Approach</dt>
          <dd className="mt-2 leading-relaxed text-primary/85">{solution}</dd>
        </div>
        <div>
          <dt className="eyebrow text-accent">Outcome</dt>
          <dd className="mt-2 font-display text-xl font-semibold leading-snug text-primary">{impact}</dd>
        </div>
      </dl>
    </article>
  );
}
