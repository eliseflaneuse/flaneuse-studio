import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "muted";
}

export const Section = ({ id, className, children, background = "default" }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16 md:scroll-mt-20",
        "py-16 px-4 md:py-24 md:px-6",
        background === "muted" && "bg-muted/30",
        className
      )}
    >
      <div className="max-w-7xl min-[1600px]:max-w-[80vw] mx-auto">
        {children}
      </div>
    </section>
  );
};
