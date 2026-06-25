import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { useState } from "react";
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

const GALLERY = [
  { src: images.gallery.item1, span: "col-span-1 row-span-2" },     // portrait
  { src: images.gallery.item2, span: "col-span-2 row-span-1" },     // landscape
  { src: images.gallery.item3, span: "col-span-1 row-span-2" },     // portrait
  { src: images.gallery.item4, span: "col-span-2 row-span-1" },     // landscape
  { src: images.gallery.item5, span: "col-span-2 row-span-1" },     // landscape
  { src: images.gallery.item6, span: "col-span-1 row-span-1" },     // landscape
  { src: images.gallery.item7, span: "col-span-2 row-span-1" },     // landscape
  { src: images.gallery.item8, span: "col-span-2 row-span-1" },     // landscape
  { src: images.gallery.item9, span: "col-span-3 row-span-1" },     // landscape
];

function GalleryPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Gallery"
        title={<>Field moments. <span className="text-accent">Real work, real people.</span></>}
        lede="A growing visual record of our communities, our workshops, and the women who lead them."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8">
          <div className="grid auto-rows-[200px] grid-cols-3 gap-3 sm:auto-rows-[240px] sm:gap-4 md:grid-cols-4 md:auto-rows-[260px] lg:auto-rows-[300px] lg:gap-5 xl:grid-cols-5 xl:auto-rows-[320px]">
            {GALLERY.map((it, i) => (
              <FadeUp
                key={i}
                delay={(i % 5) * 60}
                className={it.span}
              >
                <Tile src={it.src} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Tile({ src }: { src: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [fallbackCount, setFallbackCount] = useState(0);

  function handleError() {
    if (fallbackCount > 1) return;
    const fallback = imgSrc.endsWith(".jpeg")
      ? imgSrc.replace(/\.jpeg$/, ".jpg")
      : imgSrc.endsWith(".jpg")
      ? imgSrc.replace(/\.jpg$/, ".png")
      : imgSrc;

    if (fallback === imgSrc) return;
    setFallbackCount(fallbackCount + 1);
    setImgSrc(fallback);
  }

  return (
    <figure className="group relative h-full w-full overflow-hidden rounded-sm bg-muted">
      <img
        src={imgSrc}
        alt="Gallery photo"
        loading="lazy"
        onError={handleError}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </figure>
  );
}
