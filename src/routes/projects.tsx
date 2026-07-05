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
    tag: "Thought Leadership · Environmental Advocacy",
    title: "World Environment Day 2021 Campaign",
    date: "June 2021",
    location: "Shahjahanpur, Uttar Pradesh",
    challenge: "Building sustainable cities requires stronger collaboration between citizens, institutions, and environmental initiatives.",
    solution: "Curated a public awareness campaign around the theme “Reimagine • Recreate • Restore,” highlighting circular economy principles, ecosystem restoration, urban forestry, and citizen-led waste management through expert insights and public engagement.",
    impact: "Encouraged environmental stewardship by connecting public policy with practical actions that citizens can adopt to create cleaner, greener communities.",
    image: images.projects.worldEnvironmentDay2021,
  },
  {
    tag: "Water Conservation · Public Awareness",
    title: "World Wetlands Day Campaign",
    date: "February 2022",
    location: "India",
    challenge: "Growing pressure on freshwater resources and declining awareness of wetlands called for practical solutions that households could easily adopt.",
    solution: "Launched a public awareness campaign promoting affordable water-saving technologies and everyday conservation practices while educating citizens about the ecological importance of wetlands.",
    impact: "Inspired individuals and families to adopt water-efficient habits and strengthened awareness of wetland conservation through simple, actionable solutions.",
    image: images.projects.worldWetlandsDay2022,
  },
  {
    tag: "Public Engagement · Circular Economy",
    title: "Koodadhan 2022 – Sustainability Festival",
    date: "6–8 March 2022",
    location: "Shaheed Park, Shahjahanpur, Uttar Pradesh",
    challenge: "Public awareness around sustainability and circular economy practices remained limited, requiring an engaging platform that could inspire participation beyond traditional awareness campaigns.",
    solution: "Organized Uttar Pradesh's first curated sustainability festival featuring DIY workshops, upcycling demonstrations, environmental films, startup showcases, immersive art installations, and circular economy experiences.",
    impact: "Created a vibrant public platform that connected citizens with sustainability through hands-on learning, innovation, and creative engagement while promoting environmental responsibility.",
    image: images.projects.koodadhan2022Festival,
  },
  {
    tag: "Schools · Waste Awareness & Education",
    title: "Koodadhan Workshop at Maa Sharde Inter College",
    date: "March 2024",
    location: "Maa Sharde Inter College, Tilhar, Uttar Pradesh",
    image: images.projects.koodadhanWorkshop,
    challenge: "Students lacked practical understanding of waste segregation and the value of recyclable materials.",
    solution: "Conducted an interactive Koodadhan workshop with demonstrations, discussions, and waste-to-wealth learning activities in partnership with Nagar Palika Parishad Tilhar.",
    impact: "300+ students engaged, improved awareness of waste management practices, and committed to promoting sustainability within their communities.",
  },
  {
    tag: "Technology · Community Engagement",
    title: "Koodadhan App Pilot Launch",
    date: "July 2024",
    location: "City Park, Shahjahanpur, Uttar Pradesh",
    challenge: "Limited citizen participation and the absence of accessible digital tools made community waste management and reporting less effective.",
    solution: "Launched the Koodadhan App pilot in partnership with Nagar Nigam Shahjahanpur, combining a community clean-up drive with citizen testing and feedback to develop a scalable digital waste management solution.",
    impact: "Successfully demonstrated a technology-enabled model for citizen participation and laid the foundation for expanding the Koodadhan App to more communities.",
    image: images.projects.koodadhanAppPilotLaunch2024,
  },
  {
    tag: "Youth Leadership · Sustainability",
    title: "Swachhta Yoddha Campaign",
    date: "November 2025",
    location: "Tilhar, Uttar Pradesh",
    challenge: "Young people lacked structured opportunities to develop leadership skills while addressing community waste management and environmental challenges.",
    solution: "Launched the first phase of the Swachhta Yoddha Campaign, recruiting and mentoring student leaders to champion waste segregation, community beautification, and sustainable environmental action.",
    impact: "Created a platform for youth leadership in sustainability, inspiring students and schools to lead environmental initiatives and promote long-term community participation.",
    image: images.projects.swachhtaYoddhaCampaign2025,
  },
  {
    tag: "Schools · Youth Leadership & Waste Management",
    title: "Swachhata Sarathi Club Workshop",
    date: "3 December 2025",
    location: "Rajkiya Balika Inter College, Kaiserganj, Uttar Pradesh",
    challenge: "Students lacked practical waste management skills and structured opportunities to lead sustainability initiatives within their schools.",
    solution: "Conducted a hands-on workshop featuring plogging, composting, waste segregation, dry waste innovation activities, and established the Swachhata Sarathi Club to drive long-term student engagement.",
    impact: "Students gained practical sustainability skills, and the newly established Swachhata Sarathi Club became a platform for ongoing environmental awareness, peer education, and community participation.",
    image: images.projects.swachhataSarathiClubWorkshop2025,
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
                  <h3 className="mt-10 font-display text-xl font-semibold leading-tight text-primary">{p.title}</h3>
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
