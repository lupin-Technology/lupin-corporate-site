import { cn } from "@/lib/utils";

interface PageBodyProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function PageBody({
  children,
  className,
  containerClassName,
}: PageBodyProps) {
  const content = containerClassName ? (
    <div className={containerClassName}>{children}</div>
  ) : (
    children
  );

  return (
    <div className={cn("relative pt-[7.03125vw] pb-[8.7891vw]", className)}>
      {content}
    </div>
  );
}
