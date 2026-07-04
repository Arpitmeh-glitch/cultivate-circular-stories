import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { TeamCarousel } from "@/components/site/TeamCarousel";
import { images } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Green Future Collective" },
      { name: "description", content: "An eco-feminist sustainability organization building circular, community-owned waste systems that transform cities into resilient, equitable hubs under SDG 11." },
      { property: "og:title", content: "About — Green Future Collective" },
      { property: "og:description", content: "Who we are, what we do, and the philosophy that shapes our work." },
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
        title={<>Circular cities. <span className="text-accent">Community-owned</span> systems.</>}
        lede="Green Future Collective is an eco-feminist sustainability organization building circular, community-owned waste systems that transform cities into resilient, equitable hubs under SDG 11."
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

      {/* WHO WE ARE */}
      <section id="who-we-are" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <FadeUp className="lg:col-span-5">
            <p className="eyebrow text-accent">Who we are</p>
            <h2 className="mt-6 display-lg text-primary">Community-owned. Circular by design.</h2>
          </FadeUp>
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
            <FadeUp>
              <p>
                Green Future Collective is an eco-feminist sustainability organization building circular, community-owned waste systems that transform cities into resilient, equitable hubs under SDG 11.
              </p>
            </FadeUp>
            <FadeUp delay={100}>
              <p>
                We partner with municipal governments to redesign waste management from the ground up — centering informal workers, empowering neighbourhoods, and turning linear disposal into closed-loop resource recovery.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — Mission / Vision / Philosophy */}
      <section id="what-we-do" className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">What we do</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[24ch] text-primary">
              Mission, vision, and the <span className="text-accent">philosophy</span> beneath both.
            </h2>
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

          {/* FEATURED PROGRAMS */}
          <div className="mt-24">
            <FadeUp>
              <p className="eyebrow text-accent">Featured programs</p>
            </FadeUp>
            <FadeUp delay={100}>
              <h3 className="mt-6 display-lg max-w-[24ch] text-primary">
                Two programs, one <span className="text-accent">circular</span> approach.
              </h3>
            </FadeUp>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {PROGRAMS.map((p, i) => {
                const inner = (
                  <article className="group relative flex h-full flex-col rounded-sm border border-border bg-background p-10 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)]">
                    <p className="font-display text-3xl font-semibold text-accent">0{i + 1}</p>
                    <h4 className="mt-6 font-display text-2xl font-semibold text-primary lg:text-3xl">{p.title}</h4>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground whitespace-pre-line">{p.body}</p>
                    {p.bullets.length > 0 && (
                      <ul className="mt-8 space-y-3 border-t border-border pt-6">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-base leading-relaxed text-primary/85">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {p.closing && (
                      <p className="mt-8 text-base leading-relaxed text-muted-foreground">{p.closing}</p>
                    )}
                    {p.link && (
                      <span className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                        Learn more <span aria-hidden>→</span>
                      </span>
                    )}
                  </article>
                );
                return (
                  <FadeUp key={p.title} delay={i * 120} className="h-full">
                    {p.link ? (
                      <Link to={p.link} className="block h-full">{inner}</Link>
                    ) : (
                      inner
                    )}
                  </FadeUp>
                );
              })}
            </div>
          </div>



          {/* Philosophy detail + convictions */}
          <div className="mt-24 grid gap-16 lg:grid-cols-12">
            <FadeUp className="lg:col-span-5">
              <p className="eyebrow text-accent">Our philosophy, in depth</p>
              <h3 className="mt-6 display-lg text-primary">Sustainable cities are built from the bottom up.</h3>
            </FadeUp>
            <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <FadeUp>
                <p>
                  Sustainable cities emerge from the bottom up — not through top-down mandates, but by unlocking the knowledge, labor, and innovation already present in communities. Waste is not a problem to be managed away; it is a design flaw in our urban metabolism.
                </p>
              </FadeUp>
              <FadeUp delay={100}>
                <p>
                  By treating residents as partners and municipalities as enablers, we turn exclusionary systems into shared infrastructure.
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-1 lg:grid-cols-3">
            {CONVICTIONS.map((c, i) => (
              <FadeUp key={c.t} delay={i * 80}>
                <div className="h-full bg-background p-8">
                  <p className="font-display text-3xl font-semibold text-accent">0{i + 1}</p>
                  <h3 className="mt-8 font-display text-xl font-semibold text-primary">{c.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Team</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">The people behind the collective.</h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground">
              Meet the trustees, program leads, and coordinators who design and run the collective day to day. Tap any card to read their full profile.
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
  {
    t: "Mission",
    d: "To co-create inclusive, zero-waste urban ecosystems by bridging participatory community action with scalable government implementation — ensuring sustainable cities are built with communities, not just for them.",
  },
  {
    t: "Vision",
    d: "Cities where waste is obsolete, resources circulate locally, and every neighbourhood operates as a self-sustaining node in a regenerative urban economy.",
  },
  {
    t: "Philosophy",
    d: "Sustainable cities emerge from the bottom up — by unlocking the knowledge, labor, and innovation already present in communities, and by treating waste as a design flaw in our urban metabolism.",
  },
];

const PROGRAMS: {
  title: string;
  body: string;
  bullets: string[];
  closing?: string;
  link?: string;
}[] = [
  {
    title: "Project Samagrah",
    body: "The word Samagrah literally translates to \"whole\" or \"holistic\", and that is exactly what the program represents.\n\nBorn out of the belief that the waste crisis cannot be solved through fragmented interventions, Project Samagrah addresses waste management through:",
    bullets: [
      "A systemic, people-first strategy.",
      "Empowerment of Urban Local Bodies to engineer optimized waste management infrastructure.",
      "Strengthening market linkages to ensure economic viability for recycled materials.",
    ],
    closing: "By closing the loop on waste, the project advances a circular economy that addresses the interconnected triple planetary crises of climate change, biodiversity loss, and pollution, while creating cleaner cities, resilient local institutions, and sustainable livelihoods for women.",
    link: "/news",
  },
  {
    title: "Project Prakriti",
    body: "Project Prakriti is the mad scientist in our backyard.\n\nThrough the project, we help rural women build niche sustainability businesses and empower them to lead their own journeys through:",
    bullets: [
      "Skill training",
      "Entrepreneurship development",
      "Mentorship",
    ],
    closing: "Our products are not only beautiful and intricate but are also created with mindfulness and care.",
  },
];


const CONVICTIONS = [
  {
    t: "Justice precedes efficiency",
    d: "Equitable waste systems must formally integrate informal waste pickers, ensure safe working conditions, and distribute economic benefits fairly.",
  },
  {
    t: "Participation is non-negotiable",
    d: "Communities hold contextual knowledge that no consultant can replicate. Co-design ensures solutions are adopted, maintained, and scaled organically.",
  },
  {
    t: "Systems change requires dual leverage",
    d: "Lasting impact happens when grassroots momentum meets policy architecture. We operate at this intersection — translating community proof-points into replicable municipal frameworks.",
  },
];

const TEAM = [
  {
    name: "Sakshi Singh Sirari",
    role: "Founder and Managing Trustee",
    photo: images.founder.founderPhoto,
    bio: "A gender-informed social development practitioner, Sakshi graduated from Tata Institute of Social Sciences before navigating through varied platforms of social work for over a decade. After a two-year stint as a consultant for the Ministry of Women & Child Development, Government of India, Sakshi started Green Future Collective with a vision to build sustainability across new, rapidly urbanising towns and cities across India.",
  },
  {
    name: "Poorvi Gupta",
    role: "Vice President | Independent Journalist | TEDx Speaker",
    photo: "/images/members/member2.png",
    bio: "Gender-focused journalist with a decade-long experience working with globally acclaimed publications including Al Jazeera, Nikkei Asia, Devex, The Polis Project, The Hindu, Article-14, BBC India, and Media Action Against Rape led by Bournemouth University and UNESCO, among others.",
  },
  {
    name: "Pramila Singh",
    role: "Secretary | Lifelong Educator",
    photo: "/images/members/member3.png",
    bio: "An English Master's graduate from Lucknow University, Pramila has spent over 35 years educating children across India. She has educated more than 100,000 students and currently serves as a senior teacher at City Montessori School, Lucknow.",
  },
  {
    name: "Ishan Jain",
    role: "Principal Legal Advisor",
    photo: "/images/members/member4.png",
    bio: "A Campus Law Centre (Delhi University) graduate, Ishan has been practicing as a civil and corporate lawyer at the Supreme Court of India since 2008. He supports the mission and serves as the principal legal advisor to the Board of Trustees.",
  },
  {
    name: "Rachit Tiwari",
    role: "Lead, Research and Strategic Partnerships",
    photo: "/images/members/member5.png",
    bio: "An MSc graduate in Environment and Sustainable Development, Rachit heads collaborations and program design. He also occasionally dabbles in ethnography and political ecology research. To interns and fellows, he is the one you need to impress!",
  },
  {
    name: "Kajal Yadav",
    role: "Program Officer, Samagrah",
    photo: "/images/members/member6.png",
    bio: "Kajal Yadav is a passionate social activist, environmental advocate, and dedicated community leader associated with global initiatives such as Art of Giving and Blue Orb Foundation. Kajal works on the efficient implementation of Green Future Collective's program initiatives.",
  },
  {
    name: "Vikrant Sikarwar",
    role: "Regional Program Coordinator",
    photo: "/images/members/member7.png",
    bio: "Vikrant Sikarwar holds over 12 years of experience in the logistics sector and is our Man Friday. He manages daily operational complexities and government liaison. With exceptional regional insight and team management skills, Vikrant drives strength within the core team.",
  },
  {
    name: "Pragati Tripathi",
    role: "Content Strategist",
    photo: "/images/members/member8.png",
    bio: "Pragati combines data expertise with social impact. With experience in data management and community engagement, she works to transform insights into meaningful change.",
  },
  {
    name: "Aquib Hasan",
    role: "Community Supervisor",
    photo: "/images/members/member9.png",
    bio: "A B.Tech graduate in Biotechnology with seven years of experience in the Food and Quality sector, Aquib ensures team participation and motivation at all times through his meticulous attention to detail.",
  },
];
