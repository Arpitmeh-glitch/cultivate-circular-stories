import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FadeUp } from "@/components/site/FadeUp";

export const Route = createFileRoute("/creator")({
  head: () => ({
    meta: [
      { title: "Creator — Green Future Collective" },
      { name: "description", content: "A hidden page. Built with love by Arpit Mehrotra." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CreatorPage,
});

const SKILLS = [
  "Cybersecurity",
  "Python",
  "Web Security",
  "AI",
  "Network Analysis",
  "Git",
  "Linux",
  "HTTP Analysis",
  "Ethical Hacking",
  "Security Research",
];

const PROJECTS = [
  {
    name: "Web Recon CLI",
    tag: "Python · Security",
    desc: "Python-based HTTP reconnaissance and security inspection tool for probing endpoints, headers, and surface risks.",
  },
  {
    name: "PhishGuard AI",
    tag: "AI · FastAPI · Docker",
    desc: "AI-powered phishing detection platform with JWT auth, AES-256 encryption, PostgreSQL, Redis, FastAPI, and Docker.",
  },
];

const TIMELINE = [
  { year: "2026", title: "India Innovates Hackathon — Finalist" },
  { year: "2025", title: "TryHackMe — Pre-Security Certified" },
  { year: "2025", title: "Top 15% on TryHackMe" },
];

const FUN_FACTS = [
  "I love building things that people actually use.",
  "Security and sustainability can coexist.",
  "Probably debugging something right now.",
  "Powered by coffee ☕ and curiosity.",
];

function CreatorPage() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onMove = (e: PointerEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Faint animated grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] motion-reduce:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--primary) / 0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary) / 0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 40%, transparent 80%)",
        }}
      />
      {/* Gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl motion-safe:animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-32 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl motion-safe:animate-pulse"
      />
      {/* Glowing cursor highlight */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-10 h-64 w-64 rounded-full transition-opacity duration-300 motion-reduce:hidden"
        style={{
          left: cursor.x - 128,
          top: cursor.y - 128,
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.18), transparent 70%)",
        }}
      />

      <div className="relative z-20">
        <SiteHeader />

        <main className="mx-auto max-w-[1440px] px-6 pb-24 pt-16 lg:px-12 lg:pt-24">
          {/* Hero */}
          <section>
            <FadeUp>
              <p className="eyebrow text-accent font-mono">
                <span className="opacity-70">$</span> whoami — easter egg unlocked
              </p>
            </FadeUp>
            <FadeUp delay={80}>
              <p className="mt-8 text-lg text-muted-foreground">Built with love by</p>
            </FadeUp>
            <FadeUp delay={140}>
              <h1 className="mt-2 display-xl text-primary">
                Arpit <span className="text-accent">Mehrotra</span>
              </h1>
            </FadeUp>
            <FadeUp delay={220}>
              <p className="mt-8 max-w-[62ch] text-xl leading-relaxed text-muted-foreground">
                Cybersecurity enthusiast, full-stack developer, and AI builder passionate about
                creating products that combine technology with meaningful social impact. I enjoy
                building secure applications, beautiful user experiences, and scalable solutions
                that solve real-world problems.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <a
                href="https://arpitmehrotra.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Visit My Portfolio
                <span aria-hidden>↗</span>
              </a>
            </FadeUp>
          </section>

          {/* About / Education */}
          <section className="mt-28 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <FadeUp>
                <p className="eyebrow text-accent">About</p>
                <h2 className="mt-6 display-lg text-primary">Education</h2>
              </FadeUp>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-6">
                {[
                  {
                    t: "Bachelor's Degree (Pursuing)",
                    s: "University of Petroleum and Energy Studies (UPES), Dehradun",
                  },
                  { t: "Class XII", s: "Higher Secondary" },
                  { t: "Class X", s: "Secondary" },
                ].map((e, i) => (
                  <FadeUp key={e.t} delay={i * 80}>
                    <li className="rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lg">
                      <p className="text-lg font-semibold text-primary">{e.t}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{e.s}</p>
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mt-28">
            <FadeUp>
              <p className="eyebrow text-accent font-mono">// skills.map</p>
              <h2 className="mt-6 display-lg text-primary">Skills</h2>
            </FadeUp>
            <div className="mt-10 flex flex-wrap gap-3">
              {SKILLS.map((s, i) => (
                <FadeUp key={s} delay={i * 40}>
                  <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10">
                    {s}
                  </span>
                </FadeUp>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mt-28">
            <FadeUp>
              <p className="eyebrow text-accent font-mono">~/projects</p>
              <h2 className="mt-6 display-lg text-primary">Selected Projects</h2>
            </FadeUp>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((p, i) => (
                <FadeUp key={p.name} delay={i * 100}>
                  <article className="group h-full rounded-3xl border border-border bg-card/60 p-8 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">
                      {p.tag}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-primary">{p.name}</h3>
                    <p className="mt-4 text-muted-foreground">{p.desc}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mt-28">
            <FadeUp>
              <p className="eyebrow text-accent">Experience & Achievements</p>
              <h2 className="mt-6 display-lg text-primary">Milestones</h2>
            </FadeUp>
            <ol className="mt-10 relative border-l-2 border-border pl-8">
              {TIMELINE.map((t, i) => (
                <FadeUp key={t.title} delay={i * 100}>
                  <li className="relative mb-8 last:mb-0">
                    <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_hsl(var(--accent)/0.15)]" />
                    <p className="font-mono text-xs text-accent">{t.year}</p>
                    <p className="mt-1 text-lg font-semibold text-primary">{t.title}</p>
                  </li>
                </FadeUp>
              ))}
            </ol>
          </section>

          {/* Fun facts */}
          <section className="mt-28">
            <FadeUp>
              <p className="eyebrow text-accent font-mono">/* fun-facts */</p>
              <h2 className="mt-6 display-lg text-primary">Odds & Ends</h2>
            </FadeUp>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FUN_FACTS.map((f, i) => (
                <FadeUp key={f} delay={i * 80}>
                  <div className="rounded-2xl border border-dashed border-border bg-card/40 p-6 text-primary transition-all hover:border-accent hover:bg-accent/5">
                    <p className="text-base leading-relaxed">{f}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-28">
            <FadeUp>
              <div className="rounded-3xl border border-border bg-primary p-10 text-center text-primary-foreground lg:p-14">
                <p className="eyebrow text-accent">Say hi</p>
                <h2 className="mt-6 display-lg">Let's build something meaningful.</h2>
                <a
                  href="https://arpitmehrotra.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
                >
                  Visit My Portfolio
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </FadeUp>
          </section>

          <p className="mt-16 text-center font-mono text-xs text-muted-foreground/70">
            &gt; You found the secret page. Nice.
          </p>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
