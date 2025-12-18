import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FieldCardProps {
  number?: string;
  title: string;
  description: string;
  caption?: string;
  className?: string;
  accent?: boolean;
}

export const FieldCard = ({
  number,
  title,
  description,
  caption,
  className,
  accent = false,
}: FieldCardProps) => {
  return (
    <div 
      className={cn(
        "field-card group cursor-default",
        "transition-all duration-500 ease-out",
        "hover:translate-y-[-4px] hover:shadow-lg",
        accent && "border-accent/50 hover:border-accent",
        className
      )}
    >
      {/* Accent corner decoration */}
      <div 
        className={cn(
          "absolute top-0 left-0 w-0 h-0.5 bg-accent transition-all duration-500",
          "group-hover:w-full"
        )} 
      />
      
      {number && (
        <span 
          className={cn(
            "font-mono text-xs uppercase tracking-wider mb-4 flex items-center gap-2 transition-colors duration-300",
            accent ? "text-accent" : "text-muted-foreground group-hover:text-primary"
          )}
        >
          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
          {number}
        </span>
      )}
      
      <h3 className="text-xl md:text-2xl mb-3 transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {caption && (
        <p className={cn(
          "caption mt-4 transition-colors duration-300",
          accent && "text-accent"
        )}>
          {caption}
        </p>
      )}
    </div>
  );
};
