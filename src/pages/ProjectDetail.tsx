import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { projects, accentBg } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Lightbox, LightboxTrigger, type LightboxImage } from "@/components/Lightbox";

const tiltMap = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-[1.5deg]", "rotate-[1.5deg]"];

// Comic-style image classes
const comicImageClasses = "w-full h-full object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] contrast-125 sepia-10";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = useMemo<LightboxImage[]>(() => {
    if (!project) return [];
    const images: LightboxImage[] = [];
    if (project.images?.[0]) {
      images.push({ src: project.images[0], alt: project.title, caption: project.imageCaption || "Foto principal" });
    }
    if (project.images?.[1]) {
      images.push({ src: project.images[1], alt: `${project.title} - imagen secundaria` });
    }
    if (project.gallery) {
      project.gallery.forEach((item, i) => {
        const imgIndex = i + 2;
        if (project.images?.[imgIndex]) {
          images.push({ src: project.images[imgIndex], alt: item.caption, caption: item.caption });
        }
      });
    }
    return images;
  }, [project]);

   useEffect(() => {
     window.scrollTo({ top: 0 });
     if (project) document.title = `${project.title} · Promo 2001 San Gabriel`;
   }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="panel p-8 text-center max-w-md">
          <h1 className="text-3xl mb-3">Proyecto no encontrado</h1>
          <p className="text-muted-foreground mb-6">
            El proyecto que buscas no existe o fue movido.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display bg-secondary text-secondary-foreground px-5 py-2.5 rounded-xl border-[3px] border-foreground comic-shadow"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

   return (
     <div className="min-h-screen">
      {/* HERO DE IMPACTO */}
      <header className={cn("relative overflow-hidden border-b-[4px] border-foreground", accentBg[project.accent])}>
        <img src="/images/logo-2001.png" alt="Promo 2001 Logo" className="absolute top-4 right-4 md:top-8 md:right-8 z-20 w-16 md:w-24" />
        <div className="absolute inset-0 halftone opacity-25" />
        <div className="container relative mx-auto px-4 py-10 md:py-16">
          {/* Botón Volver - burbuja de cómic */}
          <Link
            to="/"
            className="relative inline-flex items-center gap-2 font-display bg-background text-foreground px-5 py-2.5 rounded-2xl border-[3px] border-foreground comic-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform mb-8 -rotate-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
            {/* cola de la burbuja */}
            <span
              className="absolute -bottom-2 left-8 w-4 h-4 bg-background border-b-[3px] border-r-[3px] border-foreground rotate-45"
              aria-hidden
            />
          </Link>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              {project.date && (
                <span className="inline-block font-display text-sm bg-background text-foreground px-3 py-1.5 rounded-md border-[3px] border-foreground comic-shadow-sm rotate-1">
                  ★ {project.date} ★
                </span>
              )}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] drop-shadow-[4px_4px_0_hsl(var(--ink))]">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl max-w-xl font-medium">
                {project.description}
              </p>
            </div>

            <div className="relative">
              <div className="panel overflow-hidden rotate-2 bg-background">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <LightboxTrigger
                      onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
                    >
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className={comicImageClasses}
                      />
                    </LightboxTrigger>
                  ) : (
                    <>
                      <div className="absolute inset-0 halftone opacity-40" />
                      <span className="text-[10rem] drop-shadow-[5px_5px_0_hsl(var(--ink))] relative z-10 flex items-center justify-center h-full" aria-hidden>
                        {project.emoji}
                      </span>
                    </>
                  )}
                  <span className="absolute bottom-3 right-3 text-xs font-bold uppercase tracking-wider bg-background text-foreground px-2.5 py-1.5 rounded-md border-2 border-foreground z-10">
                    {project.imageCaption || (project.images && project.images.length > 0 ? "Foto principal" : "Ilustración principal")}
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground font-display text-2xl px-4 py-2 rounded-xl border-[3px] border-foreground comic-shadow -rotate-12">
                ¡WOW!
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* NARRATIVA - EL CHISME */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <span className="font-display text-sm bg-orange text-orange-foreground inline-block px-3 py-1.5 rounded-md border-[3px] border-foreground comic-shadow-sm -rotate-1">
              El Chisme
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
              La Historia Detrás
            </h2>
          </div>

<div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="panel overflow-hidden -rotate-1">
              <div className={cn("relative aspect-square overflow-hidden", accentBg[project.accent])}>
                {project.images && project.images.length > 1 ? (
                  <LightboxTrigger
                    onClick={() => { setLightboxIndex(1); setLightboxOpen(true); }}
                  >
                    <img
                      src={project.images[1]}
                      alt={`${project.title} - imagen secundaria`}
                      className={comicImageClasses}
                    />
                  </LightboxTrigger>
                ) : (
                  <>
                    <div className="absolute inset-0 halftone opacity-40" />
                    <span className="text-9xl drop-shadow-[4px_4px_0_hsl(var(--ink))] relative z-10 flex items-center justify-center h-full" aria-hidden>
                      {project.emoji}
                    </span>
                  </>
                )}
                <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider bg-background text-foreground px-2.5 py-1.5 rounded-md border-2 border-foreground z-10">
                   
                </span>
              </div>
            </div>

            <div className="panel p-7 md:p-9 bg-card rotate-[0.5deg]">
              <h3 className="text-2xl md:text-3xl mb-4">
                ¿Cómo <span className="text-primary">nació</span> esta idea?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.story}
              </p>
              <div className="mt-6 inline-block font-display text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md border-[3px] border-foreground comic-shadow-sm">
                Promo 2001 · 25 años
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA DE EVIDENCIAS */}
      <section className="py-12 md:py-20 bg-muted/40 border-y-[4px] border-foreground relative">
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
        <div className="container relative mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <span className="font-display text-sm bg-accent text-accent-foreground inline-block px-3 py-1.5 rounded-md border-[3px] border-foreground comic-shadow-sm rotate-1">
              Evidencias
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
              Galería de Momentos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada foto cuenta lo que vivimos. Pop, color y memoria.
            </p>
          </div>

{(() => {
              const galleryItems = project.gallery.slice(0, 12).filter((_, i) => project.images.length > i + 2);
              if (galleryItems.length === 0) return null;

              return (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
                  {galleryItems.map((item, i) => {
                    const imageIndex = i + 2;
                    const imageUrl = project.images[imageIndex];
                    const originalIndex = project.gallery.findIndex((g) => g === item);

                    return (
                      <figure
                        key={originalIndex}
                        className={cn(
                          "panel overflow-hidden relative",
                          tiltMap[originalIndex % tiltMap.length]
                        )}
                      >
                        <div className={cn("relative aspect-[4/3] overflow-hidden", accentBg[item.accent])}>
                          <LightboxTrigger
                            onClick={() => { setLightboxIndex(imageIndex); setLightboxOpen(true); }}
                          >
                            <img
                              src={imageUrl}
                              alt={item.caption}
                              className={comicImageClasses}
                            />
                          </LightboxTrigger>
                        </div>
                        <figcaption
                          className={cn(
                            "absolute -bottom-3 left-4 right-4 bg-background text-foreground font-display text-base px-3 py-2 rounded-lg border-[3px] border-foreground comic-shadow-sm text-center",
                            originalIndex % 2 === 0 ? "-rotate-2" : "rotate-2"
                          )}
                        >
                          {item.caption}
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              );
            })()}

          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display tracking-wider bg-secondary text-secondary-foreground px-6 py-3 rounded-xl border-[3px] border-foreground comic-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
            >
              <ArrowLeft className="w-5 h-5" /> Volver a todos los proyectos
            </Link>
          </div>
        </div>
      </section>
      
      {allImages.length > 0 && (
        <Lightbox
          images={allImages}
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          initialIndex={lightboxIndex}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
