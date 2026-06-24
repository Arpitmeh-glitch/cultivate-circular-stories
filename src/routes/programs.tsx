import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHero } from "@/components/site/SectionHero";
import { FocusRow } from "@/components/site/FocusRow";
import {
  VisualWaste,
  VisualWomen,
  VisualCircular,
  VisualEPR,
} from "@/components/site/FocusVisuals";
import { images } from "@/data/images";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "What We Do — Green Future Collective" },
      { name: "description", content: "Raised Education, Women, Health, Livelihoods, Communities, and Aspirations — six interlocking programs of participatory community-led action." },
      { property: "og:title", content: "What We Do — Green Future Collective" },
      { property: "og:description", content: "Six programs that translate sustainability into lasting community systems." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <SectionHero
        eyebrow="What we do"
        title={<>Six programs. <span className="text-accent">One system.</span></>}
        lede="Each program is a building block of a community-scale, self-sustaining system — designed to run independently, measured rigorously, and woven together in the field."
      />

      <FocusRow index="01" title="Raised Education"
        body="We strengthen learning ecosystems in under-served schools — from sustainability labs and teacher training to scholarships, library setups, and solar-enabled classrooms."
        bullets={["Sustainability curriculum and teacher training", "Scholarships and learning support", "School library and solar infrastructure"]}
        visual={<VisualWaste />} />

      <FocusRow index="02" title="Raised Women"
        body="Women lead every program we run. We invest in self-help groups, green-skill training, micro-enterprise capital, and direct market linkages so that women aren't just included — they own the systems."
        bullets={["Self-help groups and women-led enterprises", "Green-skill training and certifications", "Direct market and CSR linkages"]}
        reverse
        visual={<div className="absolute inset-0"><img src={images.programs.womenEmpowerment} alt="Raised Women" className="absolute inset-0 h-full w-full object-cover"/></div>} />

      <FocusRow index="03" title="Raised Health"
        body="Community-rooted health systems built around vision care, cataract surgeries, household-level WASH, and a trained cadre of village health volunteers."
        bullets={["Vision care screenings and spectacle distribution", "Cataract surgeries and village health camps", "Training of community health volunteers"]}
        visual={<VisualCircular />} />

      <FocusRow index="04" title="Raised Livelihoods"
        body="We believe that economic empowerment is the foundation of all forms of liberation. We build the skills, capital, and market access that turn sustainability into dignified work — for farmers, youth, women, and rural entrepreneurs."
        bullets={["Entrepreneurship development and capital support", "Youth skilling and capacity building", "Farmer training and producer organisations"]}
        reverse
        visual={<VisualEPR />} />

      <FocusRow index="05" title="Raised Communities"
        body="Self-sustaining communities built from the bottom up — through Village Development Committees, household-level WASH, plastic-free drives, and clean public systems that outlast any single project."
        bullets={["Village Development Committees and ecosystem builders", "Household sanitation and clean drinking water", "Open Defecation Free hamlets and clean public spaces"]}
        visual={<div className="absolute inset-0"><img src={images.programs.womenEmpowerment} alt="Raised Communities" className="absolute inset-0 h-full w-full object-cover"/></div>} />

      <FocusRow index="06" title="Raised Aspirations"
        body="Beyond services and statistics, we work on the inner architecture of change — confidence, leadership, and the everyday belief that people closest to a problem can design its solution."
        bullets={["Leadership development for women and youth", "Mentorship and aspirational role-modelling", "Community storytelling and recognition"]}
        reverse
        visual={<VisualWomen />} />

      <SiteFooter />
    </div>
  );
}
