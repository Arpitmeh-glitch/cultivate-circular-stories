import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FocusRow } from "@/components/site/FocusRow";
import {
  VisualWaste,
  VisualCircular,
  VisualEPR,
} from "@/components/site/FocusVisuals";
import { images } from "@/data/images";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Green Future Collective" },
      { name: "description", content: "Waste management, women's empowerment, circular economy, and EPR services — designed as systems, not events." },
      { property: "og:title", content: "Programs — Green Future Collective" },
      { property: "og:description", content: "Four interlocking programs that translate sustainability into lasting community systems." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="Programs"
        title={<>Four programs. <span className="text-accent">One system.</span></>}
        lede="Each program is a building block of a community-scale circular economy — designed to run independently, measured rigorously, and woven together in the field."
      />

      <FocusRow index="01" title="Waste Management"
        body={"Many communities face challenges such as littered public spaces, poor waste disposal habits, and limited awareness about waste segregation. These issues contribute to unhealthy surroundings and environmental pollution.\n\nGreen Future Collective addresses these challenges through community clean-up drives, door-to-door waste segregation awareness campaigns, and creative best-out-of-waste activities that encourage sustainable habits and responsible waste management."}
        bullets={["Community clean-up and plog drives", "Door-to-door waste segregation awareness campaigns", "Best-out-of-waste and sustainability activities", "Community participation for cleaner public spaces"]}
        visual={<VisualWaste />} />
      <FocusRow index="02" title="Women's Empowerment"
        body="Green livelihoods built around real markets: certified skills, micro-enterprise support, and direct linkages with CSR partners and brands."
        bullets={["Green-skill certifications", "Micro-enterprise capital", "Market linkages"]}
        reverse
        visual={<div className="absolute inset-0"><img src={images.programs.womenEmpowerment} alt="Women's Empowerment" className="absolute inset-0 h-full w-full object-cover"/></div>} />
      <FocusRow index="03" title="Circular Economy"
        body="Reuse, repair, and reverse logistics designed for villages and small towns where centralized infrastructure doesn't exist yet."
        bullets={["Reuse & repair pilots", "Composting at scale", "Reverse logistics"]}
        visual={<VisualCircular />} />
      <FocusRow index="04" title="EPR Services"
        body="Audit-ready Extended Producer Responsibility programs backed by our own ground operations — not paper credits."
        bullets={["EPR plan design", "Verified collection", "CPCB-aligned reporting"]}
        reverse visual={<VisualEPR />} />

      <SiteFooter />
    </div>
  );
}
