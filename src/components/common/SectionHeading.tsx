
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={headingRef}
      className={cn(
        "space-y-2 mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl transition-all duration-700",
          isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            "text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-300",
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      <div 
        className={cn(
          "h-1 w-20 bg-primary rounded-full mt-4 transition-all duration-700 delay-500",
          centered && "mx-auto",
          isVisible ? "opacity-100 w-20" : "opacity-0 w-0"
        )} 
      />
    </div>
  );
}
