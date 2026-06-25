import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Green Future Collective" },
      { name: "description", content: "Join Green Future Collective as a volunteer — contribute your skills to circular economy, waste, education, and women's livelihood programs across India." },
      { property: "og:title", content: "Volunteer — Green Future Collective" },
      { property: "og:description", content: "Lend your time and skills to community-led climate work." },
    ],
  }),
  component: VolunteerPage,
});



const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  contact: z.string().trim().min(8, "Please share your contact details").max(240),
  profile: z.string().trim().min(4, "Please describe whether you are a student, working professional, or passionate environmentalist").max(120),
  mode: z.string().trim().min(4, "Choose online, offline, or hybrid").refine((value) => ["online", "offline", "hybrid"].includes(value.toLowerCase()), { message: "Choose online, offline, or hybrid" }),
  hours: z.string().trim().min(1, "Please share how many hours you are willing to give").max(80),
});

const MAIL_TO = "partnerships.gfcindia@gmail.com";

type VolunteerFormData = z.infer<typeof schema>;

function buildVolunteerMailto(data: VolunteerFormData) {
  const subject = `Volunteer inquiry from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Contact details: ${data.contact}`,
    `Profile: ${data.profile}`,
    `Preferred mode: ${data.mode}`,
    `Hours available: ${data.hours}`,
  ].join("\n");

  return `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const TRACKS = [
  { t: "Field operations", d: "Be present in the villages, schools, and facilities where the work actually happens." },
  { t: "Skilled volunteering", d: "Design, research, writing, data, legal, finance, photography — pro-bono in 4–8 week sprints." },
  { t: "Student fellowships", d: "Semester-long fellowships embedded with a program team. Mentored, structured, real work." },
];

function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { map[i.path[0] as string] = i.message; });
      setErrors(map);
      return;
    }
    setErrors({});
    const emailData = parsed.data;
    const href = buildVolunteerMailto(emailData);
    setSubmitted(true);
    window.location.href = href;
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Volunteer"
        title={<>Be the change you wish to see in the world. Signup for our volunteer program today!</>}
        lede="We onboard volunteers into real teams with real outcomes — not photo opportunities. Tell us about you and we'll point you to the program that fits."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          {/* Left: tracks + quote */}
          <div className="lg:col-span-5">
            <FadeUp><p className="eyebrow text-accent">Three ways in</p></FadeUp>
            <div className="mt-10 space-y-8">
              {TRACKS.map((t, i) => (
                <FadeUp key={t.t} delay={i * 80}>
                  <div className="border-t border-primary/15 pt-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-2xl font-semibold text-primary">{t.t}</h3>
                      <span className="font-display text-sm font-semibold text-accent">0{i + 1}</span>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={300}>
              <blockquote className="mt-14 rounded-sm bg-secondary/60 p-8">
                <p className="font-display text-2xl font-medium leading-snug text-primary">
                  "The goal of this internship  isnt just content creation for social media , but to grow and learn new things"
                </p>
                <footer className="mt-4 text-sm text-muted-foreground">— Sakshi Singh Sirari, Founder</footer>
              </blockquote>
            </FadeUp>
          </div>

          {/* Right: editorial form */}
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="rounded-sm border border-primary/15 bg-background">
                <div className="flex items-center justify-between border-b border-border px-8 py-5 lg:px-12">
                  <p className="eyebrow text-accent">Volunteer intake</p>
                  <span className="text-xs text-muted-foreground">Takes ~2 minutes</span>
                </div>

                {submitted ? (
                  <div className="px-8 py-16 lg:px-12">
                    <p className="font-display text-3xl font-semibold text-primary">Thank you.</p>
                    <p className="mt-4 max-w-[50ch] text-base text-muted-foreground">
                      We've received your details. A team member will reach out within 7 working days with a fit conversation and a program brief.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="px-8 py-10 lg:px-12 lg:py-12">
                    <div className="grid gap-10 sm:grid-cols-2">
                      <BigField label="Name" name="name" placeholder="Sakshi Singh" error={errors.name} />
                      <BigField label="Contact details" name="contact" placeholder="Email, phone, or WhatsApp" className="sm:col-span-2" error={errors.contact} />
                      <BigField
                        label="What do you do?"
                        name="profile"
                        placeholder="Student / working professional / passionate environmentalist"
                        className="sm:col-span-2"
                        error={errors.profile}
                      />
                      <BigField label="Which mode would you prefer" name="mode" placeholder="Online / Offline / Hybrid" className="sm:col-span-2" error={errors.mode} />
                      <BigField label="How many hours are you willing to give?" name="hours" placeholder="e.g. 4 hours per week" className="sm:col-span-2" error={errors.hours} />
                    </div>
                    <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-8">
                      <button type="submit" className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                        Submit application <span aria-hidden>→</span>
                      </button>
                      <p className="text-xs text-muted-foreground">By submitting, you agree we may contact you about volunteering opportunities.</p>
                    </div>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function BigField({
  label, name, type = "text", placeholder, textarea = false, className = "", error, hint,
}: {
  label: string; name: string; type?: string; placeholder?: string;
  textarea?: boolean; className?: string; error?: string; hint?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="flex items-baseline justify-between">
        <span className="eyebrow text-primary/60">{label}</span>
        {error && <span className="text-[11px] font-medium text-destructive">{error}</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          maxLength={400}
          className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 font-display text-xl text-primary placeholder:text-primary/30 outline-none transition-colors focus:border-accent"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          maxLength={160}
          className="mt-3 w-full border-b border-border bg-transparent py-3 font-display text-xl text-primary placeholder:text-primary/30 outline-none transition-colors focus:border-accent"
        />
      )}
      {hint ? <p className="mt-2 text-xs text-muted-foreground">{hint}</p> : null}
    </label>
  );
}

