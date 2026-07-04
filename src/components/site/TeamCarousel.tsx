import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
};

export function TeamCarousel({ members }: { members: TeamMember[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<number | null>(null);
  const dragState = useRef<{ active: boolean; startX: number; startScroll: number; moved: boolean }>({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const [halfWidth, setHalfWidth] = useState(0);
  const [active, setActive] = useState<TeamMember | null>(null);

  // Duplicate the list for a seamless loop
  const loop = [...members, ...members];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setHalfWidth(track.scrollWidth / 2);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [members.length]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || halfWidth === 0) return;

    const speed = 0.5;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      if (!pausedRef.current && !dragState.current.active && !active) {
        scroller.scrollLeft += speed * (dt / 16.6667);
      }
      if (scroller.scrollLeft >= halfWidth) {
        scroller.scrollLeft -= halfWidth;
      } else if (scroller.scrollLeft < 0) {
        scroller.scrollLeft += halfWidth;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [halfWidth, active]);

  const pauseTransient = (ms = 1200) => {
    pausedRef.current = true;
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, ms);
  };

  const openMember = (member: TeamMember) => {
    if (dragState.current.moved) return;
    setActive(member);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    dragState.current = {
      active: true,
      startX: e.clientX,
      startScroll: scroller.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.active) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 3 && !dragState.current.moved) {
      dragState.current.moved = true;
      try {
        scroller.setPointerCapture(e.pointerId);
      } catch {}
    }
    scroller.scrollLeft = dragState.current.startScroll - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const scroller = scrollerRef.current;
    dragState.current.active = false;
    if (scroller) {
      try {
        scroller.releasePointerCapture(e.pointerId);
      } catch {}
    }
    pauseTransient(800);
  };

  return (
    <div
      className="relative -mx-6 lg:-mx-12"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onWheel={() => pauseTransient(1200)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div
        ref={scrollerRef}
        className="overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          ref={trackRef}
          className="flex gap-6 px-6 lg:gap-8 lg:px-12 py-2"
          style={{ width: "max-content" }}
        >
          {loop.map((m, i) => (
            <TeamCard
              key={`${m.name}-${i}`}
              member={m}
              index={i % members.length}
              onOpen={() => openMember(m)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0 border-border bg-background">
          {active && (
            <div className="grid gap-0 sm:grid-cols-5 max-h-[85vh] overflow-y-auto">
              <div className="relative sm:col-span-2 bg-secondary">
                <div className="aspect-[4/5] w-full sm:h-full">
                  {active.photo ? (
                    <img
                      src={active.photo}
                      alt={active.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-muted">
                      <span className="font-display text-7xl font-semibold text-primary/30">
                        {active.name
                          .split(" ")
                          .map((p) => p[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3 p-8 lg:p-10">
                <p className="eyebrow text-accent">Team</p>
                <DialogTitle asChild>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-primary lg:text-3xl leading-tight">
                    {active.name}
                  </h3>
                </DialogTitle>
                <DialogDescription asChild>
                  <p className="mt-2 text-sm font-medium text-primary/70">{active.role}</p>
                </DialogDescription>
                {active.bio && (
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="text-[15px] leading-relaxed text-muted-foreground whitespace-pre-line">
                      {active.bio}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function TeamCard({
  member,
  index,
  onOpen,
}: {
  member: TeamMember;
  index: number;
  onOpen: () => void;
}) {
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <button
      type="button"
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="group relative shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] rounded-sm border border-border bg-background overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)] hover:border-primary/40 text-left"
      aria-label={`View profile of ${member.name}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <span className="font-display text-6xl font-semibold text-primary/30">{initials}</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-primary leading-tight">{member.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.role}</p>
      </div>
    </button>
  );
}
