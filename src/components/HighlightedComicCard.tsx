import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Accent } from "@/data/projects";

interface HighlightedComicCardProps {
  slug: string;
  title: string;
  date?: string;
  description: string;
  emoji: string;
  accent: Accent;
  images: string[];
}

const accentMap: Record<Accent, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  orange: "bg-orange text-orange-foreground",
  green: "bg-green text-green-foreground",
};

export const HighlightedComicCard = ({
  slug,
  title,
  date,
  description,
  emoji,
  accent,
  images,
}: HighlightedComicCardProps) => {
  const displayImage = images[0];

  return (
    <Link
      to={`/proyecto/${slug}`}
      className="group relative block w-full mb-12 focus:outline-none"
    >
      <div className={cn(
        "panel overflow-hidden bg-card flex flex-col md:flex-row border-[4px] border-foreground transition-transform duration-300 group-hover:-translate-y-1",
        "relative z-10"
      )}>
        {/* Image Section */}
        <div className="md:w-3/5 relative h-64 md:h-96 border-b-[4px] md:border-b-0 md:border-r-[4px] border-foreground overflow-hidden">
          <div className="absolute inset-0 halftone opacity-30 z-10 pointer-events-none" />
          <img
            src={displayImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 contrast-110"
          />
          
          {/* Badge corner */}
          <div className="absolute top-4 left-4 z-20">
            <span className="font-display text-sm bg-secondary text-secondary-foreground px-4 py-2 rounded-md border-[3px] border-foreground comic-shadow-sm -rotate-3 block">
              ¡DESTACADO!
            </span>
          </div>
          
          {/* Floating Emoji */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-background border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-full flex items-center justify-center text-5xl z-20 transform rotate-12 group-hover:rotate-0 transition-transform">
            {emoji}
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center gap-4 bg-muted/30 relative">
          <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
          
          {date && (
            <span className="self-start font-display text-sm bg-foreground text-background px-3 py-1.5 rounded-md border-[2px] border-foreground">
              {date}
            </span>
          )}
          
          <h2 className="font-display text-4xl md:text-5xl leading-[0.9] text-primary drop-shadow-[2px_2px_0_hsl(var(--ink))] group-hover:text-accent transition-colors">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
            {description}
          </p>
          
          <div className="mt-4 flex items-center gap-2">
            <span className={cn(
              "font-display text-lg px-6 py-2 rounded-xl border-[3px] border-foreground comic-shadow transition-all group-hover:bg-primary group-hover:text-primary-foreground",
              accentMap[accent]
            )}>
              VER HISTORIA COMPLETA
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative background explosion effect (simulated with absolute elements) */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange border-[3px] border-black rotate-45 z-0 group-hover:scale-125 transition-transform" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent border-[3px] border-black -rotate-12 z-0 group-hover:scale-110 transition-transform" />
      <div className="absolute top-1/2 -right-8 w-8 h-8 bg-secondary border-[3px] border-black rounded-full z-0 group-hover:translate-x-2 transition-transform" />
    </Link>
  );
};
