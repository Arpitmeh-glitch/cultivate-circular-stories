import { images } from "@/data/images";

const partners = [
  { name: "Nagar Nigam Aligarh", logo: images.partners.nagarNigamAligarh, type: "logo" },
  { name: "Nagar Palika Parishad Tilhar", logo: images.partners.nagarPalikaParishadTilhar, type: "logo" },
  { name: "Swachh Bharat Abhiyan", logo: images.partners.swachhBharatAbhiyan, type: "logo" },
  { name: "Government of Uttar Pradesh", logo: images.partners.upGovernment, type: "logo" },
  { name: "Nagar Panchayat Katra", type: "text" },
  { name: "Nagar Panchayat Khutar", type: "text" },
];

export function Marquee() {
  const row = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden border-y border-border/70 bg-secondary/40 py-10">
      <div className="flex w-max animate-marquee gap-12 px-8">
        {row.map((p, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            {p.type === "logo" ? (
              <div className="flex h-16 items-center justify-center">
                <img src={p.logo} alt={p.name} className="h-full max-w-[120px] object-contain" />
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-sm border border-border/60 bg-background px-4 py-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-display text-sm font-semibold tracking-tight text-primary/80">
                  {p.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
