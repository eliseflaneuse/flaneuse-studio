import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  title: string;
  tagline: string;
  features: string[];
  label: string;
  featured?: boolean;
}

export const PackageCard = ({ title, tagline, features, label, featured = false }: PackageCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card rounded-3xl p-8 shadow-soft-md hover-lift flex flex-col h-full",
        featured && "ring-2 ring-primary"
      )}
    >
      {featured && (
        <div className="mb-4 inline-flex self-start">
          <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{tagline}</p>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground italic">{label}</p>
      </div>
    </div>
  );
};
