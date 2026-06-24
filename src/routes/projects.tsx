import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { images } from "@/data/images";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Green Future Collective" },
      { name: "description", content: "Case studies in circular economy, waste management, women's livelihoods, and sustainability education." },
      { property: "og:title", content: "Projects — Green Future Collective" },
      { property: "og:description", content: "Case studies, not photo galleries." },
    ],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  {
    tag: "Community Clean-Up & Awareness",
    title: "Bada Mangal Plog Drive",
    date: "16 June 2026",
    location: "Kachiyani Kheda Mandir, Tilhar, Uttar Pradesh",
    challenge: "Large public gatherings generated litter around the temple premises, creating cleanliness and waste management challenges.",
    solution: "Green Future Collective organized a community-led plog drive, combining waste collection with awareness on cleanliness and responsible disposal practices.",
    impact: "The initiative brought volunteers and community members together to create a cleaner public space while promoting environmental responsibility and civic participation.",
    image: images.projects.badaMangal,
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
  {
    tag: "Women's Empowerment · Community Awareness",
    title: "International Women's Day Awareness & Recognition Program",
    date: "March 2026",
    location: "Nagar Palika Parishad Tilhar, Uttar Pradesh",
    image: images.projects.womensDayAwareness,
    challenge: "Limited awareness regarding women's rights, health, safety, education, and opportunities for self-reliance, along with insufficient recognition of women's contributions to community wellbeing.",
    solution: "Green Future Collective organized awareness sessions on rights, health, hygiene, safety, and education while recognizing and honoring women for their contributions to society.",
    impact: "100+ women engaged. Awareness on rights, health & education. Women recognized and honored. Promotion of clean, healthy communities. Partnership between local government and civil society.",
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Projects"
        title={<>Case studies, <span className="text-accent">not photo galleries.</span></>}
        lede="Each project is documented as challenge, solution, and measurable impact — so others can build on what we've learned."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <FadeUp key={p.title} delay={(i % 3) * 100}>
                <article className="group flex h-full flex-col rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)]">
                  {p.image && (
                    <div className="-mx-8 mb-8 overflow-hidden rounded-t-sm bg-muted sm:-mx-8 sm:rounded-sm">
                      <img src={p.image} alt={`Project image for ${p.title}`} className="h-56 w-full object-cover" />
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary/70">{p.tag}</span>
                    <span className="text-xs text-muted-foreground">Case study</span>
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-semibold leading-tight text-primary">{p.title}</h3>
                  {p.date && p.location && (
                    <div className="mt-3 space-y-1 text-sm text-primary/70">
                      <p>{p.date}</p>
                      <p>{p.location}</p>
                    </div>
                  )}
                  <dl className="mt-10 space-y-6 border-t border-border pt-6 text-sm">
                    <div>
                      <dt className="eyebrow text-muted-foreground">Challenge</dt>
                      <dd className="mt-2 leading-relaxed text-primary/85">{p.challenge}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-muted-foreground">Approach</dt>
                      <dd className="mt-2 leading-relaxed text-primary/85">{p.solution}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-accent">Outcome</dt>
                      <dd className="mt-2 font-display text-xl font-semibold leading-snug text-primary">{p.impact}</dd>
                    </div>
                  </dl>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
