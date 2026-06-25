import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FadeUp } from "@/components/site/FadeUp";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { geocodeCity } from "@/lib/geocode.functions";

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



const INDIAN_CITIES = [
  "agra", "ahmedabad", "ajmer", "aligarh", "allahabad", "amritsar", "aurangabad", "bareilly", "bhopal", "bhubaneswar",
  "chandigarh", "chennai", "coimbatore", "dehradun", "delhi", "dharamshala", "erode", "faridabad", "ghaziabad", "gurugram",
  "gwalior", "hubli", "hyderabad", "indore", "jaipur", "jalandhar", "jammu", "jodhpur", "kanpur", "kannur",
  "karnal", "kochi", "kolkata", "kozhikode", "lucknow", "ludhiana", "madurai", "mumbai", "mumbai", "nagpur", "nashik",
  "patna", "pune", "rajkot", "ranchi", "shillong", "surat", "thane", "tiruchirappalli", "vadodara", "varanasi", "vellore",
  "visakhapatnam", "warangal"
];

const COMMON_SKILLS = [
  "research", "photography", "writing", "data", "legal", "finance", "design", "education", "community",
  "logistics", "coordination", "training", "facilitation", "communications", "marketing", "documentation",
  "outreach", "policy", "analysis", "management", "sustainability", "operations", "monitoring", "evaluation",
  "program", "project", "field", "social", "digital"
];

function validateCity(city: string) {
  const normalized = city.trim().toLowerCase();
  if (!normalized) return false;
  return INDIAN_CITIES.some((cityName) => normalized === cityName || normalized.includes(cityName));
}

function validateSkills(skills: string) {
  const normalized = skills.trim().toLowerCase();
  if (!normalized) return false;
  if (/([a-z]{3,})\s+\1/.test(normalized)) return false;
  const words = normalized.split(/[^a-z]+/).filter((word) => word.length >= 3);
  const distinctWords = Array.from(new Set(words));
  const matchedSkillCount = distinctWords.filter((word) => COMMON_SKILLS.includes(word)).length;
  return matchedSkillCount >= 1 || distinctWords.length >= 3;
}

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().regex(/^[+0-9][0-9\s-]{9,19}$/, "Enter a valid phone number, e.g. +91 98765 43210").refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 12;
  }, { message: "Phone number must contain 10–12 digits" }),
  city: z.string().trim().min(2, "Enter a city name").max(80).refine(validateCity, { message: "Enter a valid city or town in India" }),
  cityVerified: z.enum(["true", "false"]).refine((value) => value === "true", { message: "Please select your city from the autocomplete suggestions" }),
  skills: z.string().trim().min(8, "Tell us your skills or experience").max(400).refine(validateSkills, { message: "Please describe real skills or strengths rather than gibberish" }),
  availability: z.string().trim().min(2).max(120),
});

const MAIL_TO = "po.gfcindia@gmail.com,greenfuturecollective@gmail.com";

type VolunteerFormData = z.infer<typeof schema>;

function buildVolunteerMailto(data: Omit<VolunteerFormData, "cityVerified">) {
  const subject = `Volunteer inquiry from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `City: ${data.city}`,
    `Skills: ${data.skills}`,
    `Availability: ${data.availability}`,
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
  const [cityQuery, setCityQuery] = useState("");
  const [cityVerified, setCityVerified] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);
  const [cityLoading, setCityLoading] = useState(false);
  const [cityHint, setCityHint] = useState("Start typing your city and choose a suggestion.");

  useEffect(() => {
    if (!MAPTILER_KEY || cityQuery.length < 2) {
      setCitySuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      setCityLoading(true);
      try {
        const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(cityQuery)}.json?key=${MAPTILER_KEY}&autocomplete=true&country=in&limit=5&types=place,locality,neighbourhood,municipality`;
        const response = await fetch(url, { signal: controller.signal });
        const json = await response.json();
        if (!response.ok || !Array.isArray(json.features)) {
          setCitySuggestions([]);
          setCityHint("No autocomplete suggestions found. Type a known Indian city and select it.");
          return;
        }
        const suggestions = json.features.map((feature: any) => feature.place_name as string);
        setCitySuggestions(suggestions);
        if (!suggestions.length) {
          setCityHint("No autocomplete suggestions found. Type a known Indian city and select it.");
        } else {
          setCityHint("Choose a suggestion from the list to verify your location.");
        }
      } catch {
        setCitySuggestions([]);
      } finally {
        setCityLoading(false);
      }
    }, 350);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [cityQuery]);

  function onCitySelect(city: string) {
    setCityQuery(city);
    setCityVerified(true);
    setCitySuggestions([]);
    setCityHint("Selected city accepted.");
  }

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
    const { cityVerified: _, ...emailData } = parsed.data;
    const href = buildVolunteerMailto(emailData);
    setSubmitted(true);
    window.location.href = href;
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Volunteer"
        title={<>Bring your <span className="text-accent">skills,</span> not just your time.</>}
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
                      <BigField label="Your name" name="name" placeholder="Sakshi Singh" error={errors.name} />
                      <BigField label="Email" name="email" type="email" placeholder="you@example.com" error={errors.email} />
                      <BigField label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" error={errors.phone} />
                      <LocationField
                        label="City"
                        name="city"
                        value={cityQuery}
                        onChange={(value) => {
                          setCityQuery(value);
                          setCityVerified(validateCity(value));
                          if (validateCity(value)) {
                            setCityHint("This city looks valid. Select a suggestion to verify.");
                          } else {
                            setCityHint("Choose a location from the autocomplete list.");
                          }
                        }}
                        suggestions={citySuggestions}
                        loading={cityLoading}
                        error={errors.city}
                        hint={cityHint}
                        onSelect={onCitySelect}
                      />
                      <input type="hidden" name="cityVerified" value={cityVerified ? "true" : "false"} />
                      <BigField label="Skills you bring" name="skills" textarea placeholder="e.g. social research, photography, finance, field coordination..." error={errors.skills} className="sm:col-span-2" hint="Use real skill names or experience areas, not random text." />
                      <BigField label="Availability" name="availability" placeholder="Weekends · 4 hrs/week · or specific dates" error={errors.availability} className="sm:col-span-2" />
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

function LocationField({
  label,
  name,
  value,
  onChange,
  suggestions,
  loading,
  onSelect,
  error,
  hint,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  suggestions: string[];
  loading: boolean;
  onSelect: (value: string) => void;
  error?: string;
  hint?: string;
}) {
  return (
    <div className="relative block">
      <label className="block">
        <span className="flex items-baseline justify-between">
          <span className="eyebrow text-primary/60">{label}</span>
          {error && <span className="text-[11px] font-medium text-destructive">{error}</span>}
        </span>
        <input
          name={name}
          type="text"
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          placeholder="Lucknow"
          className="mt-3 w-full border-b border-border bg-transparent py-3 font-display text-xl text-primary placeholder:text-primary/30 outline-none transition-colors focus:border-accent"
          autoComplete="off"
        />
      </label>
      {loading ? (
        <p className="mt-2 text-xs text-muted-foreground">Looking up matching cities...</p>
      ) : null}
      {suggestions.length > 0 ? (
        <div className="absolute z-10 mt-2 max-h-56 w-full overflow-auto rounded-sm border border-border bg-background shadow-lg">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onSelect(suggestion)}
              className="block w-full text-left px-4 py-3 text-sm text-primary hover:bg-accent/5"
            >
              {suggestion}
            </button>
          ))}
        </div>
      ) : null}
      {hint ? <p className="mt-2 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
