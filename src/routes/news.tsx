import { createFileRoute, Link } from "@tanstack/react-router";
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
  shortDate: string;
  title: string;
  description: string;
  tag: string;
  location?: string;
  kind: "milestone" | "event";
  image?: string;
};

const TIMELINE: TimelineItem[] = [
  {
    year: "June 2021",
    shortDate: "JUN 2021",
    title: "World Environment Day 2021 Campaign",
    description:
      "A public awareness campaign around “Reimagine • Recreate • Restore” connected citizens, institutions, and environmental action around circular economy and urban greening.",
    tag: "Thought Leadership",
    location: "Shahjahanpur, Uttar Pradesh",
    kind: "milestone",
    image: images.projects.worldEnvironmentDay2021,
  },
  {
    year: "February 2022",
    shortDate: "FEB 2022",
    title: "World Wetlands Day Campaign",
    description:
      "The campaign promoted affordable water-saving practices and everyday conservation habits while strengthening public understanding of wetlands.",
    tag: "Water Conservation",
    location: "India",
    kind: "event",
    image: images.projects.worldWetlandsDay2022,
  },
  {
    year: "6–8 March 2022",
    shortDate: "6–8 MAR 2022",
    title: "Koodadhan 2022 – Sustainability Festival",
    description:
      "Uttar Pradesh’s first curated sustainability festival brought together workshops, films, art, and innovation to make circular economy engaging and accessible.",
    tag: "Public Engagement",
    location: "Shaheed Park, Shahjahanpur, U.P.",
    kind: "milestone",
    image: images.projects.koodadhan2022Festival,
  },
  {
    year: "March 2024",
    shortDate: "MAR 2024",
    title: "Koodadhan Workshop at Maa Sharde Inter College",
    description:
      "Sustainability curriculum sessions with students across Shahjahanpur built the next generation of climate-literate citizens.",
    tag: "Schools",
    location: "Tilhar, Uttar Pradesh",
    kind: "event",
    image: images.projects.koodadhanWorkshop,
  },
  {
    year: "July 2024",
    shortDate: "JUL 2024",
    title: "Koodadhan App Pilot Launch",
    description:
      "The pilot launch with Nagar Nigam Shahjahanpur tested a digital citizen-participation model for waste reporting and community action.",
    tag: "Technology",
    location: "City Park, Shahjahanpur, U.P.",
    kind: "milestone",
    image: images.projects.koodadhanAppPilotLaunch2024,
  },
  {
    year: "November 2025",
    shortDate: "NOV 2025",
    title: "Swachhta Yoddha Campaign",
    description:
      "The first phase of the campaign mentored student leaders to champion waste segregation, clean-up efforts, and environmental action in their communities.",
    tag: "Youth Leadership",
    location: "Tilhar, Uttar Pradesh",
    kind: "event",
    image: images.projects.swachhtaYoddhaCampaign2025,
  },
  {
    year: "3 December 2025",
    shortDate: "3 DEC 2025",
    title: "Swachhata Sarathi Club Workshop",
    description:
      "A hands-on workshop on plogging, composting, and waste segregation helped establish the Swachhata Sarathi Club as a student-led sustainability platform.",
    tag: "Schools",
    location: "Rajkiya Balika Inter College, Kaiserganj, U.P.",
    kind: "milestone",
    image: images.projects.swachhataSarathiClubWorkshop2025,
  },
  {
    year: "March 2026",
    shortDate: "MAR 2026",
    title: "Natural Holi Awareness Rally - Katra",
    description:
      "Student-led rally promoting natural colours, cleanliness, and sustainable festival practices.",
    tag: "Public Awareness",
    location: "Katra Nagar, Shahjahanpur, U.P.",
    kind: "event",
    image: images.projects.naturalHoliRally,
  },
  {
    year: "March 2026",
    shortDate: "MAR 2026",
    title: "International Women's Day Awareness & Recognition Program",
    description:
      "Awareness sessions and recognition efforts helped connect women with rights, health, safety, education, and community participation.",
    tag: "Women Empowerment",
    location: "Tilhar, Uttar Pradesh",
    kind: "milestone",
    image: images.projects.womensDayAwareness,
  },
  {
    year: "16 June 2026",
    shortDate: "16 JUN 2026",
    title: "Bada Mangal Plog Drive",
    description:
      "Volunteer-led clean-up around the temple precinct, combined with awareness on responsible disposal.",
    tag: "Community Action",
    location: "Kachiyani Kheda Mandir, Tilhar, U.P.",
    kind: "event",
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
    title: "Sustainability Swap & Exchange Fair",
    date: "9–10 July 2026",
    location: "City Park, Shahjahanpur, Uttar Pradesh",
    description:
      "A community swap fair encouraging reuse, exchange, and donation of everyday items to reduce unnecessary waste and strengthen circular economy participation.",
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

function Leaf({
  side,
  reached,
  delay = 0,
  size = 44,
}: {
  side: "left" | "right";
  reached: boolean;
  delay?: number;
  size?: number;
}) {
  // Leaf pointing outward from vine. Base of leaf at (0,0), tip toward side.
  const flip = side === "left" ? -1 : 1;
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        width: size,
        height: size * 0.7,
        transform: `translate(-50%, -50%) scaleX(${flip})`,
        transformOrigin: "center",
      }}
    >
      <svg
        viewBox="0 0 100 70"
        className={[
          "h-full w-full transition-all duration-[900ms] ease-out",
          reached ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-12",
        ].join(" ")}
        style={{ transitionDelay: `${delay}ms`, transformOrigin: "0% 50%" }}
      >
        <defs>
          <linearGradient id={`leaf-g-${side}-${delay}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7fbf7a" />
            <stop offset="55%" stopColor="#3f8f4a" />
            <stop offset="100%" stopColor="#1f5a2e" />
          </linearGradient>
        </defs>
        <path
          d="M2 35 C 20 5, 60 0, 96 22 C 78 40, 46 60, 12 55 C 6 50, 2 42, 2 35 Z"
          fill={`url(#leaf-g-${side}-${delay})`}
          stroke="rgba(16,59,45,0.35)"
          strokeWidth="0.8"
        />
        <path
          d="M4 36 C 30 30, 60 26, 92 22"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function VineTuft() {
  return (
    <div className="pointer-events-none absolute left-6 -bottom-6 -translate-x-1/2 md:left-1/2">
      <svg viewBox="0 0 120 80" className="h-16 w-24">
        <defs>
          <linearGradient id="tuft-g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#5aa15f" />
            <stop offset="100%" stopColor="#1f5a2e" />
          </linearGradient>
        </defs>
        <path d="M60 0 C56 20 46 34 32 40 C22 44 14 46 6 44 C 22 60 44 66 60 60 C 76 66 98 60 114 44 C 106 46 98 44 88 40 C 74 34 64 20 60 0 Z" fill="url(#tuft-g)" opacity="0.85" />
        <path d="M60 10 C 58 26 52 40 44 50" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none" />
        <path d="M60 10 C 62 26 68 40 76 50" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none" />
      </svg>
    </div>
  );
}

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
    <div ref={wrapRef} className="relative mt-16 pb-16">
      {/* Vine trunk (grows with scroll) */}
      <div className="pointer-events-none absolute left-6 top-0 h-full w-16 -translate-x-1/2 md:left-1/2">
        <svg viewBox="0 0 80 1000" className="h-full w-full overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id="trunk-g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#8b5a3c" />
              <stop offset="100%" stopColor="#3f2a1a" />
            </linearGradient>
          </defs>
          {/* Faint background trunk */}
          <path
            d="M40 0 C36 120 46 220 38 340 C30 460 46 560 34 680 C24 800 42 900 40 1000"
            fill="none"
            stroke="rgba(63,42,26,0.14)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Growing trunk */}
          <path
            d="M40 0 C36 120 46 220 38 340 C30 460 46 560 34 680 C24 800 42 900 40 1000"
            fill="none"
            stroke="url(#trunk-g)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1200,
              strokeDashoffset: 1200 * (1 - growthProgress),
              transition: "stroke-dashoffset 600ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </svg>
      </div>

      <ol className="space-y-14 md:space-y-24">
        {TIMELINE.map((item, i) => {
          const isRight = i % 2 === 1;
          const threshold = thresholds[i] ?? (i + 0.35) / TIMELINE.length;
          const reached = progress >= Math.min(0.99, Math.max(0, threshold - 0.015));
          return (
            <li
              key={`${item.year}-${item.title}`}
              className="relative md:grid md:grid-cols-[1fr_120px_1fr] md:items-start md:gap-0"
            >
              {/* Node */}
              <span
                data-timeline-node
                className={[
                  "absolute left-6 top-3 z-20 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border-2 bg-background transition-all duration-500 md:left-1/2",
                  reached
                    ? "border-primary bg-background shadow-[0_0_0_5px_rgba(16,59,45,0.1),0_0_18px_2px_rgba(63,143,74,0.45)] scale-110"
                    : "border-border/70 scale-100",
                ].join(" ")}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className={["h-3.5 w-3.5 transition-colors duration-500", reached ? "text-primary" : "text-muted-foreground/60"].join(" ")} fill="currentColor">
                  <path d="M12 2 C 8 6 6 10 8 14 C 5 15 3 18 4 21 C 8 20 11 18 12 15 C 13 18 16 20 20 21 C 21 18 19 15 16 14 C 18 10 16 6 12 2 Z" />
                </svg>
              </span>

              {/* Decorative leaves flanking the node */}
              <span
                className="pointer-events-none absolute left-6 top-3 z-10 hidden md:block md:left-1/2"
                style={{ transform: "translate(-50%, -50%)" }}
                aria-hidden
              >
                <span className="relative block">
                  <span style={{ position: "absolute", left: -18, top: 0 }}>
                    <Leaf side="left" reached={reached} delay={120} size={54} />
                  </span>
                  <span style={{ position: "absolute", left: 18, top: 0 }}>
                    <Leaf side="right" reached={reached} delay={220} size={54} />
                  </span>
                </span>
              </span>

              {/* Date label (in the vine gutter) */}
              <span
                className={[
                  "absolute top-3 z-10 ml-16 text-[11px] font-bold uppercase tracking-[0.18em] text-accent transition-all duration-500 md:ml-0 md:top-3",
                  isRight
                    ? "md:left-[calc(50%+34px)]"
                    : "md:right-[calc(50%+34px)]",
                  reached ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
                ].join(" ")}
              >
                {item.shortDate.split(" ").map((part, idx) => (
                  <span key={idx} className="block leading-tight">{part}</span>
                ))}
              </span>

              {/* Card */}
              <div
                className={[
                  "relative",
                  isRight ? "md:col-start-3 md:pl-12" : "md:col-start-1 md:pr-12",
                ].join(" ")}
              >
                <FadeUp active={reached}>
                  <article
                    className={[
                      "group relative ml-14 rounded-lg border border-border bg-background p-5 shadow-[0_10px_30px_-20px_rgba(16,59,45,0.25)] transition-all duration-700 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.4)] md:ml-0 md:flex md:gap-5",
                      reached
                        ? "opacity-100 translate-x-0 border-primary/30"
                        : `opacity-70 ${isRight ? "md:translate-x-6" : "md:-translate-x-6"}`,
                    ].join(" ")}
                  >
                    {item.image && (
                      <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-md bg-muted md:order-2 md:mb-0 md:aspect-square md:h-28 md:w-28 md:flex-none">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                        />
                      </div>
                    )}
                    <div className="md:order-1 md:min-w-0 md:flex-1">
                      <h3 className="font-display text-base font-semibold leading-tight text-primary md:text-[15px]">
                        {item.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center rounded-full bg-secondary/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary/75">
                        {item.tag}
                      </span>
                      {item.location && (
                        <p className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <svg viewBox="0 0 24 24" className="h-3 w-3 flex-none text-primary/60" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" strokeLinejoin="round" />
                            <circle cx="12" cy="9" r="2.5" />
                          </svg>
                          {item.location}
                        </p>
                      )}
                    </div>
                  </article>
                </FadeUp>
              </div>
            </li>
          );
        })}
      </ol>

      <VineTuft />
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
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <FadeUp>
                <p className="eyebrow text-accent">Our journey</p>
              </FadeUp>
              <FadeUp delay={100}>
                <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
                  Project Samagrah <span className="text-accent">Timeline.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={180}>
                <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
                  A journey of collective action, innovation, and community participation
                  towards building a cleaner, circular and sustainable Shahjahanpur.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={220}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent" fill="currentColor">
                    <path d="M12 2 C 8 6 6 10 8 14 C 5 15 3 18 4 21 C 8 20 11 18 12 15 C 13 18 16 20 20 21 C 21 18 19 15 16 14 C 18 10 16 6 12 2 Z" />
                  </svg>
                  Milestone
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-primary/70" fill="currentColor">
                    <path d="M12 2 C 8 6 6 10 8 14 C 5 15 3 18 4 21 C 8 20 11 18 12 15 C 13 18 16 20 20 21 C 21 18 19 15 16 14 C 18 10 16 6 12 2 Z" />
                  </svg>
                  Event
                </span>
              </div>
            </FadeUp>
          </div>


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
                    <Link
                      to="/collaborate"
                      className="inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      Partner with us
                      <span aria-hidden>→</span>
                    </Link>
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
