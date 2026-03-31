import { professionals } from "@/data/professionals";
import { revealClassName } from "@/lib/reveal";

import { ProfessionalCard } from "./ProfessionalCard";

export function ProfessionalGrid() {
  return (
    <div className={revealClassName("flex flex-wrap")} data-observe="">
      {professionals.map((professional) => (
        <ProfessionalCard key={professional.id} professional={professional} />
      ))}
    </div>
  );
}
