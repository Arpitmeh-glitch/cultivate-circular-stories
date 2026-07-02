import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { useState } from "react";
import { images } from "@/data/images";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Green Future Collective" },
      { name: "description", content: "Updates from the field: completed events, upcoming workshops, campaigns, and media coverage of Green Future Collective's community-led sustainability work." },
      { property: "og:title", content: "News & Events — Green Future Collective" },
      { property: "og:description", content: "What's been happening, what's coming up, and where we've been in the press." },
    ],
  }),
  component: NewsPage,
});

type PastItem = {
  title: string;
  description: string;
  date: string;
  image: string;
};

type UpcomingItem = {
  title: string;
  date: string;
  location: string;
  description: string;
};

type MediaItem = {
  publication: string;
  headline: string;
  date: string;
};

const PAST: PastItem[] = [
  {
    title: "Bada Mangal Plog Drive",
    description: "Volunteer-led clean-up around the temple precinct, combined with awareness on responsible disposal.",
    date: "16 June 2026",
    image: images.projects.badaMangal,
  },
  {
    title: "Koodadhan Workshop",
    description: "Interactive waste-to-wealth workshop with 300+ students, in partnership with Nagar Palika Parishad Tilhar.",
    date: "June 2026",
    image: images.projects.koodadhanWorkshop,
  },
  {
    title: "Natural Holi Awareness Rally",
    description: "Student-led rally promoting natural colours, cleanliness, and sustainable festival practices.",
    date: "March 2026",
    image: images.projects.naturalHoliRally,
  },
  {
    title: "Women's Day Awareness Program",
    description: "Community programme centring women-led environmental leadership across our field sites.",
    date: "March 2026",
    image: images.projects.womensDayAwareness,
  },
  {
    title: "Household Segregation Drive",
    description: "Placeholder — recap of a neighbourhood segregation drive with participation numbers and impact.",
    date: "February 2026",
    image: images.programs.wasteManagement,
  },
  {
    title: "Circular Economy Field Note",
    description: "Placeholder — reflections from our closed-loop resource recovery pilot with informal workers.",
    date: "January 2026",
    image: images.programs.circularEconomy,
  },
];

const UPCOMING: UpcomingItem[] = [
  {
    title: "Sustainability Educators' Roundtable",
    date: "Coming soon",
    location: "Lucknow, Uttar Pradesh",
    description: "A working session with teachers and program leads to shape our next sustainability curriculum module.",
  },
  {
    title: "Women-Led Enterprise Showcase",
    date: "Coming soon",
    location: "Shahjahanpur, Uttar Pradesh",
    description: "A community showcase featuring products, stories, and outcomes from our women-led enterprises.",
  },
  {
    title: "City-Scale Waste Systems Workshop",
    date: "Coming soon",
    location: "To be announced",
    description: "A convening on integrating informal workers into municipal waste systems under SDG 11.",
  },
];

const MEDIA: MediaItem[] = [
  { publication: "Publication Name", headline: "Placeholder headline about a community-led waste initiative", date: "2026" },
  { publication: "Publication Name", headline: "Placeholder headline on women-led circular livelihoods in North India", date: "2026" },
  { publication: "Publication Name", headline: "Placeholder headline covering a partnership announcement", date: "2025" },
  { publication: "Publication Name", headline: "Placeholder headline on a school sustainability programme", date: "2025" },
];

function NewsPage() {
  const [visiblePast, setVisiblePast] = useState(6);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="News & Events"
        title={<>What's happening at the <span className="text-accent">collective.</span></>}
        lede="A running log of our field work, upcoming programmes, and where our work has been covered in the press."
      />

      {/* WHAT'S BEEN HAPPENING */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Recent</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">
              What's been <span className="text-accent">happening.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              Completed events, workshops, campaigns, and announcements from across our field sites.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PAST.slice(0, visiblePast).map((item, i) => (
              <FadeUp key={item.title} delay={(i % 3) * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)]">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/60">
                      {item.date}
                    </p>
                    <h3 className="mt-4 font-display text-xl font-semibold text-primary leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border">
                      <button
                        type="button"
                        className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Read more →
                      </button>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>

          {visiblePast < PAST.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisiblePast((n) => n + 3)}
                className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-transparent px-7 py-4 text-sm font-semibold text-primary hover:bg-secondary"
              >
                Load more
                <span aria-hidden>→</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* UPCOMING */}
      <section className="border-t border-border bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Coming up</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">Upcoming.</h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              Future programmes and events. Dates and locations are confirmed closer to each event.
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
                  <h3 className="mt-6 font-display text-xl font-semibold text-primary leading-tight">
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

      {/* MEDIA COVERAGE */}
      <section className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="eyebrow text-accent">Press</p></FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 display-lg max-w-[22ch] text-primary">Media coverage.</h2>
          </FadeUp>
          <FadeUp delay={180}>
            <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              A selection of press mentions and articles about our work. Real coverage will replace these placeholders as it's published.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
                  <h3 className="mt-6 font-display text-xl font-semibold text-primary leading-snug">
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
