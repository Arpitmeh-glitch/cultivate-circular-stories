const PHOTOS = [
  "/news/news1.jpg",
  "/news/news2.jpg",
  "/news/news3.jpg",
  "/news/news4.jpg",
  "/news/news5.jpg",
  "/news/news6.jpg",
  "/news/news7.jpg",
  "/news/news8.jpg",
];

function PhotoCard({ src }: { src: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card relative h-[320px] w-[480px] shrink-0 overflow-hidden rounded-sm border border-border bg-secondary transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)] sm:h-[380px] sm:w-[580px]"
    >
      <img
        src={src}
        alt="Press coverage"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-105"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
      <div className="pointer-events-none absolute right-3 top-3 h-10 w-10 rounded-full bg-accent/80 mix-blend-multiply" />
    </a>
  );
}

export function NewsMarquee() {
  const row = [...PHOTOS, ...PHOTOS];
  return (
    <section className="py-16 lg:py-24">
      <div className="group relative overflow-hidden border-y border-border/70 bg-secondary/40 py-10">
        <div className="flex w-max animate-marquee-slow gap-6 px-6">
          {row.map((src, i) => (
            <PhotoCard key={`${src}-${i}`} src={src} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
