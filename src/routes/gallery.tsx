import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { images } from "@/data/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Green Future Collective" },
      { name: "description", content: "Field moments from Green Future Collective: community outreach, clean-up drives, sustainability workshops, women's livelihood initiatives, and campaigns." },
      { property: "og:title", content: "Gallery — Green Future Collective" },
      { property: "og:description", content: "Field moments from our community programs." },
    ],
  }),
  component: GalleryPage,
});

const ITEMS: { tag: string; caption: string; tone: "deep" | "sand" | "accent" | "ink"; size: "sm" | "md" | "lg" }[] = [
  { tag: "Community outreach", caption: "Door-to-door segregation outreach across partner villages", tone: "deep", size: "lg" },
  { tag: "Clean-up drive", caption: "Riverbank clean-up with volunteers and SHG members", tone: "sand", size: "md" },
  { tag: "Sustainability workshop", caption: "Composting workshop with school students", tone: "accent", size: "md" },
  { tag: "Women's livelihoods", caption: "Upcycling unit run by women artisans", tone: "ink", size: "lg" },
  { tag: "Workshop", caption: "EPR and circular-economy session with producers", tone: "deep", size: "md" },
  { tag: "Campaign", caption: "Plastic-free festival pledge drive", tone: "sand", size: "md" },
  { tag: "Outreach", caption: "Sustainability lab inauguration with community", tone: "accent", size: "lg" },
  { tag: "Clean-up drive", caption: "Urban market clean-up with municipal partners", tone: "deep", size: "md" },
  { tag: "Education", caption: "Curriculum rollout in partner school", tone: "ink", size: "md" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Gallery"
        title={<>Field moments. <span className="text-accent">Real work, real people.</span></>}
        lede="A growing visual record of our communities, our workshops, and the women who lead them. Imagery below is a placeholder grid — replace each tile with a real GFC photograph."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:auto-rows-[280px] lg:grid-cols-4 lg:gap-6">
            {ITEMS.map((it, i) => {
              const galleryImages = [
                images.gallery.item1,
                images.gallery.item2,
                images.gallery.item3,
                images.gallery.item4,
                images.gallery.item5,
                images.gallery.item6,
                images.gallery.item7,
              ];
              const img = galleryImages[i % galleryImages.length];
              return (
                <FadeUp
                  key={i}
                  delay={(i % 4) * 80}
                  className={
                    it.size === "lg"
                      ? "col-span-2 row-span-2"
                      : it.size === "md"
                      ? "col-span-1 row-span-1"
                      : "col-span-1 row-span-1"
                  }
                >
                  <Tile {...it} image={img} />
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={200}>
            <p className="mt-12 max-w-[60ch] text-sm italic text-muted-foreground">
              Photography placeholders shown. We're curating a verified gallery of program imagery — community outreach, clean-up drives, workshops, women's livelihood initiatives, and campaigns.
            </p>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Tile({ tag, caption, tone, image }: { tag: string; caption: string; tone: "deep" | "sand" | "accent" | "ink"; image?: string }) {
  const bg = {
    deep: "radial-gradient(circle at 30% 30%, #2f6e54 0%, #103B2D 60%, #07251b 100%)",
    sand: "radial-gradient(circle at 70% 20%, #efe7d6 0%, #E6E0D5 50%, #c9bfa7 100%)",
    accent: "radial-gradient(circle at 40% 60%, #5fd996 0%, #38C172 60%, #1d8950 100%)",
    ink: "radial-gradient(circle at 20% 80%, #1f2a26 0%, #0d1a14 60%, #07120e 100%)",
  }[tone];
  const fg = tone === "sand" ? "text-primary" : "text-primary-foreground";
  return (
    <figure className="group relative h-full w-full overflow-hidden rounded-sm">
      {image ? (
        <img src={image} alt={caption} className="absolute inset-0 h-full w-full object-contain transition-opacity duration-700" />
      ) : (
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]" style={{ background: bg }} />
      )}
      {/* abstract decoration */}
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.6">
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} cx="160" cy="40" r={10 + i * 14} className={fg} />
        ))}
      </svg>
      <figcaption className={`absolute inset-x-5 bottom-5 ${fg}`}>
        <span className="inline-flex rounded-full bg-background/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
          {tag}
        </span>
        <p className="mt-3 font-display text-base leading-snug">{caption}</p>
      </figcaption>
      <span className="absolute right-4 top-4 rounded-full bg-background/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur">
        Photo placeholder
      </span>
    </figure>
  );
}
