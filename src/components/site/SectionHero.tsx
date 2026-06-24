import { FadeUp } from "./FadeUp";

export function SectionHero({ eyebrow, title, lede }: { eyebrow: string; title: React.ReactNode; lede?: string }) {
  return (
    <section className="border-b border-border pb-20 pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <FadeUp>
          <p className="eyebrow text-accent">{eyebrow}</p>
        </FadeUp>
        <FadeUp delay={80}>
          <h1 className="mt-8 display-xl max-w-[16ch] text-primary">{title}</h1>
        </FadeUp>
        {lede && (
          <FadeUp delay={160}>
            <p className="mt-10 max-w-[58ch] text-xl leading-relaxed text-muted-foreground">{lede}</p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
