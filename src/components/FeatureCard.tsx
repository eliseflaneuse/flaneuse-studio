import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        // “ink plate” feel
        "relative rounded-2xl group",
        "border border-border/50 bg-card/30",
        "p-8 md:p-10",
        "transition-all duration-300",
        "hover:border-accent/40 hover:bg-card/40",
        "hover:-translate-y-0.5",
        className
      )}
    >
      {/* subtle double-frame like your exhibit */}
      <div className="pointer-events-none absolute inset-2 rounded-xl border border-border/30 transition-colors duration-300 group-hover:border-accent/30" />

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          {/* icon stamp */}
          <div className="w-12 h-12 rounded-full border border-border/60 bg-background/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>

      
        </div>

        <h3 className="text-xl md:text-2xl font-medium tracking-[-0.01em]">
          {title}
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
