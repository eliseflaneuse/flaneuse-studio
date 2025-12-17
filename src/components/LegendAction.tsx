import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, MoveRight } from "lucide-react";

interface LegendActionProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "filled" | "accent";
  arrow?: "right" | "diagonal" | "move";
  className?: string;
  type?: "button" | "submit";
}

export const LegendAction = ({
  children,
  onClick,
  variant = "default",
  arrow = "right",
  className,
  type = "button",
}: LegendActionProps) => {
  const ArrowIcon = arrow === "diagonal" ? ArrowUpRight : arrow === "move" ? MoveRight : ArrowRight;

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider",
        "transition-all duration-300 group",
        variant === "accent" 
          ? "text-accent hover:text-accent/80" 
          : "text-foreground/70 hover:text-primary",
        className
      )}
    >
      {/* Animated dot/arrow container */}
      <span
        className={cn(
          "relative w-6 h-6 flex items-center justify-center",
          "border rounded-full transition-all duration-300",
          variant === "accent" 
            ? "border-accent bg-accent/10 group-hover:bg-accent group-hover:scale-110" 
            : "border-current group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110"
        )}
      >
        <ArrowIcon 
          className={cn(
            "w-3 h-3 transition-all duration-300",
            "group-hover:translate-x-0.5 group-hover:rotate-12",
            variant === "accent" && "group-hover:text-accent-foreground"
          )} 
        />
      </span>
      
      {/* Text with underline animation */}
      <span className="relative">
        {children}
        <span 
          className={cn(
            "absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
            variant === "accent" ? "bg-accent" : "bg-primary"
          )} 
        />
      </span>
    </button>
  );
};
