
import { ComicCard } from "@/components/ComicCard";
import { HighlightedComicCard } from "@/components/HighlightedComicCard";
import { projects } from "@/data/projects";

const Gallery = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="galeria" className="py-12 md:py-20 bg-muted/40 border-y-[4px] border-foreground relative">
      <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <span className="font-display text-sm bg-orange text-orange-foreground inline-block px-3 py-1.5 rounded-md border-[3px] border-foreground comic-shadow-sm rotate-1">
            Nuestros Logros
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-primary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
            25 Años en Acción
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada panel es una historia. Cada historia, un acto de amor por los demás.
          </p>
        </div>

        {/* Feature project */}
        {featuredProject && (
          <div className="max-w-6xl mx-auto">
            <HighlightedComicCard {...featuredProject} />
          </div>
        )}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {otherProjects.map((card, i) => (
            <ComicCard key={card.slug} index={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
