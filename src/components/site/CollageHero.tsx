import { useEffect, useRef } from "react";
import { images } from "@/data/images";

/**
 * Editorial collage built around the real community photograph,
 * layered with on-brand SVG accents (rings, sun, leaf, arrows).
 */
export function CollageHero() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      ref.current.style.transform = `translate3d(0, ${y * -0.05}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="relative aspect-[4/5] w-full">
      {/* Backdrop disc — sand */}
      <div className="absolute right-[4%] top-[4%] h-[78%] w-[78%] rounded-full bg-secondary" />

      {/* Accent disc */}
      <div className="absolute right-0 top-[12%] h-32 w-32 rounded-full bg-accent/80 mix-blend-multiply animate-float" />

      {/* Real community photograph */}
      <div className="absolute left-[6%] top-[16%] h-[70%] w-[78%] overflow-hidden rounded-sm shadow-2xl ring-1 ring-primary/15">
        <img
          src={images.community.teamPhoto}
          alt="Green Future Collective community plog drive in Uttar Pradesh"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
      </div>

      {/* Topographic rings overlay */}
      <svg
        className="pointer-events-none absolute bottom-[2%] left-[2%] h-[34%] w-[55%] text-accent/70"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M ${20 + i * 6} 180 Q 100 ${120 - i * 8}, ${180 - i * 6} 180`}
          />
        ))}
      </svg>

      {/* Radial sun lines */}
      <svg
        className="pointer-events-none absolute -top-2 right-[8%] h-40 w-40 text-[#d96a3a]/70 animate-float"
        viewBox="0 0 100 100"
      >
        <g stroke="currentColor" strokeWidth="0.7">
          {Array.from({ length: 28 }).map((_, i) => {
            const a = (i / 28) * Math.PI * 2;
            const x1 = 50 + Math.cos(a) * 18;
            const y1 = 50 + Math.sin(a) * 18;
            const x2 = 50 + Math.cos(a) * 46;
            const y2 = 50 + Math.sin(a) * 46;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
      </svg>

      {/* Floating leaf shape */}
      <svg
        className="pointer-events-none absolute left-[-2%] top-[4%] h-20 w-20 text-primary animate-float"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 5 C 20 25, 20 75, 50 95 C 80 75, 80 25, 50 5 Z" />
        <path d="M50 10 L50 90" stroke="#F5F5F0" strokeWidth="1.2" />
      </svg>

      {/* Tiny accent square stack */}
      <div className="pointer-events-none absolute bottom-[14%] right-[6%] flex flex-col gap-1.5">
        <span className="block h-4 w-10 bg-accent" />
        <span className="block h-4 w-8 bg-accent/80" />
        <span className="block h-4 w-6 bg-accent/60" />
      </div>

      {/* Up-arrows cluster */}
      <div className="pointer-events-none absolute right-[2%] bottom-[36%] grid grid-cols-3 gap-1.5 text-accent">
        {Array.from({ length: 6 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 L17 7 M11 7 H17 V13" />
          </svg>
        ))}
      </div>
    </div>
  );
}
