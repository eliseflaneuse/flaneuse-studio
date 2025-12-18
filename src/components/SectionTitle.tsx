import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  marker?: string;
  className?: string;
}

export const SectionTitle = ({ children, subtitle, marker, className }: SectionTitleProps) => {
  return (
    <div className={cn("mb-16", className)}>
      {marker && (
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4 block">
          {marker}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="w-full h-px bg-border mt-8 relative">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-border text-sm">
          ◇
        </span>
      </div>
    </div>
  );
};