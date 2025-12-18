import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  withGrid?: boolean;
}

export const Section = ({ id, className, children, withGrid = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 px-6 relative",
        withGrid && "grid-pattern",
        className
      )}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};
