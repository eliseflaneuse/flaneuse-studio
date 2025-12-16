import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModelCardProps {
  name: string;
  vibe: string;
  colors: string;
  description: string;
  accentClass: string;
}

export const ModelCard = ({ name, vibe, colors, description, accentClass }: ModelCardProps) => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-soft-md hover-lift">
      <div className={cn("h-48 relative", accentClass)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white/90">{name}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-1">
          <span className="font-semibold">Vibe:</span> {vibe}
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          <span className="font-semibold">Colors:</span> {colors}
        </p>
        <p className="text-foreground mb-6 leading-relaxed">{description}</p>
        
        <Button variant="outline" className="w-full">
          See example
        </Button>
      </div>
    </div>
  );
};