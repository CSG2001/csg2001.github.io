import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ComicCardProps {
  title: string;
  date?: string;
  description: string;
  emoji: string;
  accent: "primary" | "secondary" | "accent" | "orange" | "green";
  index: number;
}

const accentMap: Record<ComicCardProps["accent"], string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  orange: "bg-orange text-orange-foreground",
  green: "bg-green text-green-foreground",
};

const tiltMap = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[0.5deg]"];

export const ComicCard = ({ title, date, description, emoji, accent, index }: ComicCardProps) => {
  const tilt = tiltMap[index % tiltMap.length];
  return (
    <article className={cn("panel overflow-hidden flex flex-col", tilt)}>
      {/* Illustration placeholder */}
      <div className={cn("relative h-44 flex items-center justify-center border-b-[3px] border-foreground", accentMap[accent])}>
        <div className="absolute inset-0 halftone opacity-40" />
        <span className="text-7xl drop-shadow-[3px_3px_0_hsl(var(--ink))] relative z-10" aria-hidden>
          {emoji}
        </span>
        <span className="absolute bottom-2 right-3 text-[10px] font-bold uppercase tracking-wider bg-background/90 text-foreground px-2 py-1 rounded-md border-2 border-foreground">
          Foto / Ilustración
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col gap-2">
        {date && (
          <span className="self-start font-display text-xs bg-foreground text-background px-2.5 py-1 rounded-md">
            {date}
          </span>
        )}
        <h3 className="text-xl leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
};
