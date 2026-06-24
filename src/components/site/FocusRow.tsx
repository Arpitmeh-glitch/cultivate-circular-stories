import { FadeUp } from "./FadeUp";

type Props = {
  index: string;
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
  visual: React.ReactNode;
};

export function FocusRow({ index, title, body, bullets, reverse, visual }: Props) {
  return (
    <section className="border-t border-border/70 py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <FadeUp className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-sm bg-secondary">
            {visual}
          </div>
        </FadeUp>

        <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
          <FadeUp>
            <p className="eyebrow text-accent">{index} / Focus</p>
          </FadeUp>
          <FadeUp delay={80}>
            <h3 className="mt-6 display-lg text-primary">{title}</h3>
          </FadeUp>
          <FadeUp delay={160}>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
              {body}
            </p>
          </FadeUp>
          <FadeUp delay={240}>
            <ul className="mt-10 space-y-3 border-t border-border pt-6">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base text-primary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
