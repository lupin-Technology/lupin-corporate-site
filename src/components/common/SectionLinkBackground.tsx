import { cn } from "@/lib/utils";

type SectionLinkBackgroundLayer = {
  src: string;
  className?: string;
};

interface SectionLinkBackgroundProps {
  layers: SectionLinkBackgroundLayer[];
  className?: string;
  overlayClassName?: string;
}

export function SectionLinkBackground({
  layers,
  className,
  overlayClassName,
}: SectionLinkBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden after:absolute after:inset-0 after:content-['']",
        className,
        overlayClassName,
      )}
    >
      {layers.map((layer, index) => (
        <div
          key={`${layer.src}-${index}`}
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat",
            layer.className,
          )}
          style={{ backgroundImage: `url('${layer.src}')` }}
        />
      ))}
    </div>
  );
}
