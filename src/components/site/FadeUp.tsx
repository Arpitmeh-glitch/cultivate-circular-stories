import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export function FadeUp({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("in-view");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Comp = Tag as any;
  return (
    <Comp ref={ref as any} className={`fade-up ${className}`}>
      {children}
    </Comp>
  );
}
