import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { FocusRow } from "@/components/site/FocusRow";
import {
  VisualWaste,
  VisualWomen,
  VisualCircular,
  VisualEPR,
} from "@/components/site/FocusVisuals";
import { TeamCarousel } from "@/components/site/TeamCarousel";
import { images } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Green Future Collective" },
      { name: "description", content: "A grassroots eco-feminist non-profit building cleaner communities, sustainable habits, and women-led environmental action across India." },
      { property: "og:title", content: "About — Green Future Collective" },
      { property: "og:description", content: "Who we are, what we do, and how we work — on the ground in Uttar Pradesh." },
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
            <p className="eyebrow text-accent">About us</p>
            <h2 className="mt-6 display-lg text-primary">Community-driven. Collective by design.</h2>
          </FadeUp>
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
            <FadeUp><p>We are a group of community-driven individuals working towards building sustainable and inclusive communities through grassroots participation, innovation, and collective action.</p></FadeUp>
            <FadeUp delay={100}><p>Every program is co-designed with the community it serves, led by local women, and measured against outcomes the community itself cares about — cleaner streets, dignified livelihoods, and durable public systems.</p></FadeUp>
          </div>
        </div>
      </section>

      <section id="who-we-are" className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Who we are</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">Mission, vision, and the belief beneath both.</h2>
          </FadeUp>
          <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
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

      {/* WHAT WE DO — merged from former Programs page */}
      <section id="what-we-do" className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">What we do</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[24ch] text-primary">
              Six programs. <span className="text-accent">One system.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              Each program is a building block of a community-scale, self-sustaining system — designed to run independently, measured rigorously, and woven together in the field.
            </p>
          </FadeUp>
        </div>

        <FocusRow index="01" title="Raised Education"
          body="We strengthen learning ecosystems in under-served schools — from sustainability labs and teacher training to scholarships, library setups, and solar-enabled classrooms."
          bullets={["Sustainability curriculum and teacher training", "Scholarships and learning support", "School library and solar infrastructure"]}
          visual={<VisualWaste />} />

        <FocusRow index="02" title="Raised Women"
          body="Women lead every program we run. We invest in self-help groups, green-skill training, micro-enterprise capital, and direct market linkages so that women aren't just included — they own the systems."
          bullets={["Self-help groups and women-led enterprises", "Green-skill training and certifications", "Direct market and CSR linkages"]}
          reverse
          visual={<div className="absolute inset-0"><img src={images.programs.womenEmpowerment} alt="Raised Women" className="absolute inset-0 h-full w-full object-cover"/></div>} />

        <FocusRow index="03" title="Raised Health"
          body="Community-rooted health systems built around vision care, cataract surgeries, household-level WASH, and a trained cadre of village health volunteers."
          bullets={["Vision care screenings and spectacle distribution", "Cataract surgeries and village health camps", "Training of community health volunteers"]}
          visual={<VisualCircular />} />

        <FocusRow index="04" title="Raised Livelihoods"
          body="We believe that economic empowerment is the foundation of all forms of liberation. We build the skills, capital, and market access that turn sustainability into dignified work — for farmers, youth, women, and rural entrepreneurs."
          bullets={["Entrepreneurship development and capital support", "Youth skilling and capacity building", "Farmer training and producer organisations"]}
          reverse
          visual={<VisualEPR />} />

        <FocusRow index="05" title="Raised Communities"
          body="Self-sustaining communities built from the bottom up — through Village Development Committees, household-level WASH, plastic-free drives, and clean public systems that outlast any single project."
          bullets={["Village Development Committees and ecosystem builders", "Household sanitation and clean drinking water", "Open Defecation Free hamlets and clean public spaces"]}
          visual={<div className="absolute inset-0"><img src={images.programs.womenEmpowerment} alt="Raised Communities" className="absolute inset-0 h-full w-full object-cover"/></div>} />

        <FocusRow index="06" title="Raised Aspirations"
          body="Beyond services and statistics, we work on the inner architecture of change — confidence, leadership, and the everyday belief that people closest to a problem can design its solution."
          bullets={["Leadership development for women and youth", "Mentorship and aspirational role-modelling", "Community storytelling and recognition"]}
          reverse
          visual={<VisualWomen />} />
      </section>

      <section className="border-t border-border py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Team</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">The people behind the collective.</h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground">
              Meet the trustees, program leads, and coordinators who design and run the collective day to day.
            </p>
          </FadeUp>
        </div>

        <div className="mt-16">
          <TeamCarousel members={TEAM} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const PRINCIPLES = [
  { t: "Mission", d: "To help build sustainable cities and communities through participatory community-led action." },
  { t: "Vision", d: "To build self-sustaining systems from the bottom up." },
  { t: "Philosophy", d: "Every individual has unlimited potential if they have access to the right resources." },
];

const TEAM = [
  { name: "Sakshi Singh Sirari", role: "Founder and Managing Trustee", photo: images.founder.founderPhoto },
  { name: "Poorvi Gupta", role: "Vice President" },
  { name: "Pramila Singh", role: "Secretary" },
  { name: "Shreyansh Saxena", role: "Treasurer" },
  { name: "Ishan Jain", role: "Legal Advisory" },
  { name: "Rachit Tiwari", role: "Lead, Research and Strategic Partnerships" },
  { name: "Kajal Yadav", role: "Program Officer, Samagrah" },
  { name: "Vikrant Sikarwar", role: "Regional Program Coordinator" },
  { name: "Pragati Tripathi", role: "Content Strategist" },
];
