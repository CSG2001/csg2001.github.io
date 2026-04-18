import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ComicCardProps {
  title: string;
  date?: string;
  description: string;
  emoji: string;
  accent: "primary" | "secondary" | "accent" | "orange" | "green" | "red";
  index: number;
}

const accentMap: Record<ComicCardProps["accent"], string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  orange: "bg-orange text-orange-foreground",
  green: "bg-green text-green-foreground",
  red: "bg-red text-red-foreground",
};

const tiltMap = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[0.5deg]"];

export const ComicCard = ({ title, date, description, emoji, accent, index }: ComicCardProps) => {
  const tilt = tiltMap[index % tiltMap.length];
  return (
    <article className={cn("panel overflow-hidden flex flex-col", tilt)}>
      {/* Illustration placeholder area with halftone */}
      <div className={cn("relative h-48 flex items-center justify-center border-b-[5px] border-ink", accentMap[accent])}>
        <div className="absolute inset-0 halftone opacity-30" />
        {/* Decorative corner stars */}
        <span className="absolute top-2 left-2 text-xl opacity-70">★</span>
        <span className="absolute top-2 right-2 text-xl opacity-70">★</span>

        <span className="text-7xl relative z-10 drop-shadow-[3px_3px_0_hsl(var(--ink))]" aria-hidden>
          {emoji}
        </span>

        <span className="absolute bottom-2 right-2 text-[10px] font-display tracking-widest bg-background text-foreground px-2 py-1 ink-border">
          FOTO AQUÍ
        </span>
      </div>

      {/* Number badge */}
      <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-secondary text-secondary-foreground ink-border flex items-center justify-center font-display text-lg comic-shadow-sm z-10">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="p-5 flex-1 flex flex-col gap-2 bg-card">
        {date && (
          <span className="self-start font-display text-xs bg-ink text-background px-2.5 py-1 tracking-wider">
            {date}
          </span>
        )}
        <h3 className="text-xl leading-tight font-display tracking-wide text-primary">{title}</h3>
        <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
      </div>
    </article>
  );
};
