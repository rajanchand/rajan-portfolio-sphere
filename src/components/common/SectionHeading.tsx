
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2 mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl animate-fade-in", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-1", subtitleClassName)}>
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-20 bg-primary rounded-full mt-4", centered && "mx-auto")} />
    </div>
  );
}
