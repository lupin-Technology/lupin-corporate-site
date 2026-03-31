import Image from "next/image";

import type { Professional } from "@/data/professionals";

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <div className="w-full shrink-0 pb-[70px] md:w-1/2 lg:w-1/4">
      <div>
        <div className="relative aspect-[7/8] overflow-hidden bg-[#f6f7f7]">
          <Image
            src={professional.imageUrl}
            alt={professional.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-[30px]">
          <h4 className="text-xs leading-[1.8] font-medium tracking-[0.04em] text-[#8e8e8e]">
            {professional.role}
          </h4>
          <h3 className="mt-2 font-medium">
            <span className="block text-[26px] leading-[1.4] tracking-[0.04em] text-[#333]">
              {professional.name}
            </span>
            <span className="mt-1 block text-[13px] leading-[1.4] tracking-[0.06em] text-[#8e8e8e]">
              {professional.nameEn}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
