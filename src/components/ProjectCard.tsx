import { cn } from "@/lib/utils";

interface ProjectCardProps {
  name: string;
  description: string;
  model: string;
  accentClass: string;
}

export const ProjectCard = ({ name, description, model, accentClass }: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-soft-md hover-lift">
      <div className={cn("h-56 relative border-8 border-card", accentClass)}>
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <div className="text-center p-6">
            <span className="text-2xl font-bold text-foreground">{name}</span>
            <div className="mt-2 px-4 py-1 bg-white/80 rounded-full inline-block">
              <span className="text-sm text-muted-foreground">Based on {model}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
          Coming soon
        </span>
      </div>
    </div>
  );
};