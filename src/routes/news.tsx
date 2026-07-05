import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FadeUp } from "@/components/site/FadeUp";
import { useEffect, useRef, useState } from "react";
import { images } from "@/data/images";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Project Samagrah | Green Future Collective" },
      {
        name: "description",
        content:
          "The evolving story of Project Samagrah — a city-wide circular waste initiative in Shahjahanpur. Milestones, upcoming events, and press coverage from Green Future Collective.",
      },
      { property: "og:title", content: "News & Events — Project Samagrah" },
      {
        property: "og:description",
        content:
          "Building a circular future for Shahjahanpur — the journey, milestones, and momentum behind Project Samagrah.",
      },
    ],
  }),
  component: NewsPage,
});

// ------------------------------ DATA ------------------------------

const PILLARS = [
  {
    title: "Recover",
    body: "Collect recyclable waste before it reaches landfills.",
  },
  {
    title: "Strengthen",
    body: "Improve city-wide waste management infrastructure.",
  },
  {
    title: "Empower",
    body: "Create sustainable livelihoods and community ownership.",
  },
];

const PROCESS = [
  { label: "Households", icon: "home" },
  { label: "Collection", icon: "truck" },
  { label: "Segregation", icon: "sort" },
  { label: "Recovery", icon: "recover" },
  { label: "Recycling", icon: "recycle" },
  { label: "Circular Economy", icon: "loop" },
] as const;

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  image?: string;
};

const TIMELINE: TimelineItem[] = [
  {
    year: "June 2021",
    title: "World Environment Day 2021 Campaign",
    description:
      "A public awareness campaign around “Reimagine • Recreate • Restore” connected citizens, institutions, and environmental action around circular economy and urban greening.",
    image: images.projects.worldEnvironmentDay2021,
  },
  {
    year: "February 2022",
    title: "World Wetlands Day Campaign",
    description:
      "The campaign promoted affordable water-saving practices and everyday conservation habits while strengthening public understanding of wetlands.",
    image: images.projects.worldWetlandsDay2022,
  },
  {
    year: "6–8 March 2022",
    title: "Koodadhan 2022 – Sustainability Festival",
    description:
      "Uttar Pradesh’s first curated sustainability festival brought together workshops, films, art, and innovation to make circular economy engaging and accessible.",
    image: images.projects.koodadhan2022Festival,
  },
  {
    year: "March 2024",
    title: "Koodadhan Workshop at Maa Sharde Inter College",
    description:
      "Sustainability curriculum sessions with students across Shahjahanpur built the next generation of climate-literate citizens.",
    image: images.projects.koodadhanWorkshop,
  },
  {
    year: "July 2024",
    title: "Koodadhan App Pilot Launch",
    description:
      "The pilot launch with Nagar Nigam Shahjahanpur tested a digital citizen-participation model for waste reporting and community action.",
    image: images.projects.koodadhanAppPilotLaunch2024,
  },
  {
    year: "November 2025",
    title: "Swachhta Yoddha Campaign",
    description:
      "The first phase of the campaign mentored student leaders to champion waste segregation, clean-up efforts, and environmental action in their communities.",
    image: images.projects.swachhtaYoddhaCampaign2025,
  },
  {
    year: "3 December 2025",
    title: "Swachhata Sarathi Club Workshop",
    description:
      "A hands-on workshop on plogging, composting, and waste segregation helped establish the Swachhata Sarathi Club as a student-led sustainability platform.",
    image: images.projects.swachhataSarathiClubWorkshop2025,
  },
  {
    year: "March 2026",
    title: "Natural Holi Awareness Rally - Katra",
    description:
      "Student-led rally promoting natural colours, cleanliness, and sustainable festival practices.",
    image: images.projects.naturalHoliRally,
  },
  {
    year: "March 2026",
    title: "International Women's Day Awareness & Recognition Program",
    description:
      "Awareness sessions and recognition efforts helped connect women with rights, health, safety, education, and community participation.",
    image: images.projects.womensDayAwareness,
  },
  {
    year: "16 June 2026",
    title: "Bada Mangal Plog Drive",
    description:
      "Volunteer-led clean-up around the temple precinct, combined with awareness on responsible disposal.",
    image: images.projects.badaMangal,
  },
];

type UpcomingItem = {
  title: string;
  date: string;
  location: string;
  description: string;
};

const UPCOMING: UpcomingItem[] = [
  {
    title: "Sustainability Educators' Roundtable",
    date: "Coming soon",
    location: "Lucknow, Uttar Pradesh",
    description:
      "A working session with teachers and program leads to shape our next sustainability curriculum module.",
  },
  {
    title: "Women-Led Enterprise Showcase",
    date: "Coming soon",
    location: "Shahjahanpur, Uttar Pradesh",
    description:
      "A community showcase featuring products, stories, and outcomes from our women-led enterprises.",
  },
  {
    title: "City-Scale Waste Systems Workshop",
    date: "Coming soon",
    location: "To be announced",
    description:
      "A convening on integrating informal workers into municipal waste systems under SDG 11.",
  },
];

type MediaItem = {
  publication: string;
  headline: string;
  date: string;
};

const MEDIA: MediaItem[] = [
  { publication: "The Hindu", headline: "Placeholder headline about a community-led waste initiative in Shahjahanpur", date: "2026" },
  { publication: "Times of India", headline: "Placeholder headline on women-led circular livelihoods in North India", date: "2026" },
  { publication: "Dainik Jagran", headline: "Placeholder headline covering a Samagrah partnership announcement", date: "2025" },
  { publication: "Publication Name", headline: "Placeholder headline on a school sustainability programme", date: "2025" },
];

// ------------------------------ ICONS ------------------------------

function ProcessIcon({ name }: { name: (typeof PROCESS)[number]["icon"] }) {
  const common = "h-7 w-7";
  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
          <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 9.5V20h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 20v-5h4v5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
          <path d="M3 7h11v9H3z" strokeLinejoin="round" />
          <path d="M14 10h4l3 3v3h-7" strokeLinejoin="round" />
          <circle cx="7" cy="18" r="1.8" />
          <circle cx="17" cy="18" r="1.8" />
        </svg>
      );
    case "sort":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
          <path d="M4 6h10M4 12h7M4 18h4" strokeLinecap="round" />
          <path d="m17 4 3 3-3 3M20 7h-6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m17 14 3 3-3 3M20 17h-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "recover":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
          <path d="M12 3v6m0 0 3-3m-3 3L9 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12h16v8H4z" strokeLinejoin="round" />
        </svg>
      );
    case "recycle":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
          <path d="M7 9 4 14l3 5h5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m14 5 3 5-4 2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 14h-6l3 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "loop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
          <path d="M20 12a8 8 0 1 1-3-6.24" strokeLinecap="round" />
          <path d="M20 4v4h-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

// ------------------------------ HERO ILLUSTRATION ------------------------------

function CircularEconomyIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* Outer slow rotating dashed ring */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[spin_60s_linear_infinite] text-primary/25"
      >
        <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
      </svg>

      {/* Mid rotating arrow ring (opposite direction) */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] animate-[spin_40s_linear_infinite] [animation-direction:reverse] text-primary/50"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M100 20 A80 80 0 0 1 173 60" />
          <path d="m168 52 6 10-11 3" />
          <path d="M180 100 A80 80 0 0 1 140 173" />
          <path d="m147 175 -10 2 -2 -11" />
          <path d="M100 180 A80 80 0 0 1 27 140" />
          <path d="m32 148 -6 -10 11 -3" />
          <path d="M20 100 A80 80 0 0 1 60 27" />
          <path d="m53 25 10 -2 2 11" />
        </g>
      </svg>

      {/* Static inner recycle emblem */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative grid h-[52%] w-[52%] place-items-center rounded-full border border-primary/20 bg-secondary/60 backdrop-blur-sm">
          <svg viewBox="0 0 64 64" className="h-16 w-16 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 26 14 40l9 15h15" />
            <path d="m38 12 9 15-12 6" />
            <path d="M56 40h-18l9 15" />
            <path d="m22 26 5-9h10l5 9" opacity=".35" />
          </svg>
          {/* Orbiting dots */}
          <span className="absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent animate-[pulse_3s_ease-in-out_infinite]" />
          <span className="absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/60 animate-[pulse_4s_ease-in-out_infinite]" />
          <span className="absolute top-1/2 -left-2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary/40 animate-[pulse_3.5s_ease-in-out_infinite]" />
          <span className="absolute top-1/2 -right-2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent/70 animate-[pulse_4.5s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Soft ambient gradient */}
      <div className="pointer-events-none absolute inset-8 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 blur-2xl" />
    </div>
  );
}

// ------------------------------ TIMELINE ------------------------------

function Timeline() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [thresholds, setThresholds] = useState<number[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = () => setReducedMotion(mediaQuery.matches);
    updateReducedMotion();

    let frameId = 0;

    const updateThresholds = () => {
      const wrapRect = el.getBoundingClientRect();
      const wrapHeight = el.offsetHeight || el.clientHeight;
      const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-timeline-node]"));
      const nextThresholds = nodes.map((node) => {
        const rect = node.getBoundingClientRect();
        const centerY = rect.top - wrapRect.top + rect.height / 2;
        const threshold = centerY / wrapHeight;
        return Math.min(0.99, Math.max(0, threshold));
      });
      setThresholds(nextThresholds);
    };

    const updateProgress = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.6;
      const scrolled = Math.min(Math.max(vh * 0.6 - rect.top, 0), total);
      setProgress(Math.min(1, scrolled / total));
      frameId = 0;
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        updateProgress();
        updateThresholds();
      });
    };

    updateThresholds();
    updateProgress();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateReducedMotion);
    } else {
      mediaQuery.addListener(updateReducedMotion);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateReducedMotion);
      } else {
        mediaQuery.removeListener(updateReducedMotion);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const growthProgress = reducedMotion ? 1 : progress;

  return (
    <div ref={wrapRef} className="relative mt-16">
      <div className="pointer-events-none absolute left-6 top-0 h-full w-10 -translate-x-1/2 md:left-1/2">
        <svg viewBox="0 0 80 1000" className="h-full w-full overflow-visible" preserveAspectRatio="none">
          <path
            d="M40 0 C34 84 28 138 34 198 C39 252 44 306 34 356 C24 408 16 452 24 510 C33 574 46 630 38 686 C30 742 18 794 24 854 C31 922 44 976 40 1000"
            fill="none"
            stroke="rgba(16,59,45,0.16)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 0 C34 84 28 138 34 198 C39 252 44 306 34 356 C24 408 16 452 24 510 C33 574 46 630 38 686 C30 742 18 794 24 854 C31 922 44 976 40 1000"
            fill="none"
            stroke="rgba(16,59,45,0.95)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000 * (1 - growthProgress),
              transition: "stroke-dashoffset 500ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </svg>
      </div>

      <ol className="space-y-16 md:space-y-24">
        {TIMELINE.map((item, i) => {
          const isRight = i % 2 === 1;
          const threshold = thresholds[i] ?? (i + 0.35) / TIMELINE.length;
          const reached = progress >= Math.min(0.99, Math.max(0, threshold - 0.015));
          return (
            <li key={`${item.year}-${item.title}`} className="relative">
              {/* Node */}
              <span
                data-timeline-node
                className={[
                  "absolute left-6 top-2 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full border-2 bg-background transition-all duration-500 md:left-1/2",
                  reached
                    ? "border-primary bg-primary shadow-[0_0_0_6px_rgba(16,59,45,0.12),0_0_20px_4px_rgba(16,59,45,0.35)] scale-110"
                    : "border-border scale-100",
                ].join(" ")}
                aria-hidden
              >
                <span
                  className={[
                    "h-1.5 w-1.5 rounded-full transition-colors duration-500",
                    reached ? "bg-background" : "bg-border",
                  ].join(" ")}
                />
                <span
                  className={[
                    "pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-background/70 bg-accent/90 transition-all duration-500",
                    reached ? "scale-100 opacity-100" : "scale-75 opacity-0",
                  ].join(" ")}
                />
              </span>

              <div
                className={[
                  "md:grid md:grid-cols-2 md:gap-12",
                  isRight ? "md:[&>*:first-child]:col-start-2" : "",
                ].join(" ")}
              >
                <FadeUp active={reached}>
                  <article
                    className={[
                      "group relative ml-14 rounded-sm border border-border bg-background p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)] md:ml-0",
                      isRight ? "md:mr-0 md:ml-8" : "md:ml-0 md:mr-8",
                      reached
                        ? "opacity-100 translate-x-0 border-primary/30 shadow-[0_20px_50px_-30px_rgba(16,59,45,0.4)]"
                        : `opacity-70 ${isRight ? "md:translate-x-6" : "md:-translate-x-6"}`,
                    ].join(" ")}
                  >
                    {/* Connector dash from card to rail (desktop) */}
                    <span
                      className={[
                        "pointer-events-none absolute top-4 hidden h-px transition-all duration-500 md:block",
                        reached ? "bg-primary/50 w-8" : "bg-border w-6",
                        isRight ? "-left-8" : "-right-8",
                      ].join(" ")}
                    />
                    {item.image && (
                      <div className="mb-5 aspect-[16/10] w-full overflow-hidden rounded-sm bg-muted">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                        />
                      </div>
                    )}
                    <p
                      className={[
                        "text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-500",
                        reached ? "text-accent opacity-100 translate-y-0" : "text-primary/40 opacity-0 -translate-y-1",
                      ].join(" ")}
                    >
                      {item.year}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </FadeUp>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}


// ------------------------------ PAGE ------------------------------

function NewsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* SECTION 1 — HERO */}
      <section className="border-b border-border pb-20 pt-32 lg:pb-32 lg:pt-40">
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <FadeUp>
              <p className="eyebrow text-accent text-lg md:text-xl">Project Samagrah</p>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="mt-8 display-xl max-w-[18ch] text-primary">
                Building a circular future for{" "}
                <span className="text-accent">Shahjahanpur.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={220}>
              <p className="mt-10 max-w-[58ch] text-xl leading-relaxed text-muted-foreground">
                A city-wide waste management initiative by Green Future Collective in
                partnership with the Municipal Corporation, working to transform waste
                into opportunity through infrastructure, awareness, and community action.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={300} className="flex justify-center lg:justify-end">
            <CircularEconomyIllustration />
          </FadeUp>
        </div>
      </section>

      {/* SECTION 2 — WHY SAMAGRAH EXISTS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="eyebrow text-accent">Why Samagrah exists</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
              Three pillars, one <span className="text-accent">circular vision.</span>
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 120}>
                <article className="group flex h-full flex-col rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)]">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/60">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-primary">
                    {p.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-accent transition-all duration-500 group-hover:w-20" />
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW SAMAGRAH WORKS */}
      <section className="border-t border-border bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="eyebrow text-accent">How it works</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
              From doorstep to <span className="text-accent">circular economy.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              Every stage is designed to keep material in use — recovering value that
              would otherwise be lost to landfills.
            </p>
          </FadeUp>

          <div className="relative mt-16">
            {/* Connecting line (desktop) */}
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />



            <ol className="grid gap-8 sm:grid-cols-2 md:grid-cols-6 md:gap-4">
              {PROCESS.map((step, i) => (
                <FadeUp key={step.label} delay={i * 100}>
                  <li className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-primary/25 bg-background text-primary shadow-[0_10px_30px_-15px_rgba(16,59,45,0.35)] transition-colors">
                      <ProcessIcon name={step.icon} />
                    </span>
                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/60">
                      Step 0{i + 1}
                    </p>
                    <p className="mt-2 font-display text-base font-semibold text-primary">
                      {step.label}
                    </p>
                  </li>
                </FadeUp>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR JOURNEY */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="eyebrow text-accent">Our journey</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
              A timeline of <span className="text-accent">milestones.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              Every date on this line represents infrastructure built, awareness raised,
              or a community moment that moved Shahjahanpur closer to a circular future.
            </p>
          </FadeUp>

          <Timeline />
        </div>
      </section>

      {/* SECTION 5 — UPCOMING */}
      <section className="border-t border-border bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="eyebrow text-accent">Coming up</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
              Upcoming initiatives.
            </h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              Future programmes and events. Dates and locations are confirmed closer to
              each event.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {UPCOMING.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <article className="flex h-full flex-col rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)]">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Upcoming
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-primary">
                    {item.title}
                  </h3>
                  <dl className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                    <div className="flex gap-2">
                      <dt className="font-medium text-primary/70">Date</dt>
                      <dd>{item.date}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium text-primary/70">Location</dt>
                      <dd>{item.location}</dd>
                    </div>
                  </dl>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-8">
                    <button
                      type="button"
                      className="inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      Register interest
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — MEDIA COVERAGE */}
      <section className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="eyebrow text-accent">Press</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">Media coverage.</h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              A selection of press mentions and articles about our work. Real coverage
              will replace these placeholders as it's published.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {MEDIA.map((item, i) => (
              <FadeUp key={i} delay={(i % 2) * 100}>
                <article className="flex h-full flex-col rounded-sm border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)]">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-sm border border-border bg-secondary text-[10px] font-semibold uppercase tracking-widest text-primary/50">
                      Logo
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/60">
                        {item.date}
                      </p>
                      <p className="mt-1 font-display text-base font-semibold text-primary">
                        {item.publication}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-primary">
                    {item.headline}
                  </h3>
                  <div className="mt-auto pt-8">
                    <button
                      type="button"
                      className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-transparent px-5 py-3 text-sm font-semibold text-primary hover:bg-secondary"
                    >
                      Read article
                      <span aria-hidden>→</span>
                    </button>
                  </div>
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
