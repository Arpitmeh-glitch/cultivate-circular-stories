import { FadeUp } from "./FadeUp";

type NewsItem = {
  outlet: string;
  date: string;
  headline: string;
  image: string;
};

// Drop news snippet images into /public/news/ (news1.jpg ... news8.jpg)
// then update the `image` paths below. Placeholders shown until then.
const NEWS: NewsItem[] = [
  {
    outlet: "The Hindu",
    date: "Jun 2026",
    headline: "Women-led waste collective transforms Tilhar's plastic problem",
    image: "/news/news1.jpg",
  },
  {
    outlet: "Times of India",
    date: "May 2026",
    headline: "Grassroots eco-feminism takes root across Uttar Pradesh",
    image: "/news/news2.jpg",
  },
  {
    outlet: "Hindustan Times",
    date: "Apr 2026",
    headline: "Koodadhan: turning household waste into village wealth",
    image: "/news/news3.jpg",
  },
  {
    outlet: "Down To Earth",
    date: "Mar 2026",
    headline: "Natural Holi rally inspires a chemical-free festival movement",
    image: "/news/news4.jpg",
  },
  {
    outlet: "Mongabay India",
    date: "Feb 2026",
    headline: "Circular livelihoods: rural women rewrite the waste economy",
    image: "/news/news5.jpg",
  },
  {
    outlet: "Dainik Jagran",
    date: "Jan 2026",
    headline: "Green Future Collective leads district-wide segregation drive",
    image: "/news/news6.jpg",
  },
  {
    outlet: "The Wire",
    date: "Dec 2025",
    headline: "Bottom-up climate action: lessons from Shahjahanpur",
    image: "/news/news7.jpg",
  },
  {
    outlet: "Indian Express",
    date: "Nov 2025",
    headline: "A decade of cleaner communities, built one block at a time",
    image: "/news/news8.jpg",
  },
];

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group/card relative flex w-[420px] shrink-0 overflow-hidden rounded-sm border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)] sm:w-[480px]">
      <div className="relative h-44 w-44 shrink-0 overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={`${item.outlet} — ${item.headline}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute right-2 top-2 h-8 w-8 rounded-full bg-accent/80 mix-blend-multiply" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{item.outlet}</span>
            <span className="text-primary/30">·</span>
            <span>{item.date}</span>
          </div>
          <p className="mt-4 font-display text-lg font-semibold leading-snug text-primary line-clamp-3">
            {item.headline}
          </p>
        </div>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-accent">
          Read coverage →
        </p>
      </div>
    </article>
  );
}

export function NewsMarquee() {
  const row = [...NEWS, ...NEWS];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <FadeUp>
              <p className="eyebrow text-accent">In the press</p>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
                When grassroots action <span className="text-accent">makes headlines.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={160}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-primary/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Featured coverage
            </span>
          </FadeUp>
        </div>
      </div>

      <FadeUp delay={200}>
        <div className="group relative mt-14 overflow-hidden border-y border-border/70 bg-secondary/40 py-10">
          <div className="flex w-max animate-marquee-slow gap-6 px-6">
            {row.map((item, i) => (
              <NewsCard key={`${item.outlet}-${i}`} item={item} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
        </div>
      </FadeUp>
    </section>
  );
}
