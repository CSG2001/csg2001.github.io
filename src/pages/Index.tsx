import heroImg from "@/assets/hero-school.jpg";
import { ComicCard } from "@/components/ComicCard";
import { HighlightedComicCard } from "@/components/HighlightedComicCard";
import { projects } from "@/data/projects";

const Index = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div className="min-h-screen">
      {/* HERO section (lines 8-53) */}
      <header className="relative overflow-hidden bg-primary text-primary-foreground border-b-[4px] border-foreground">
        <img src="/images/logo-2001.png" alt="Promo 2001 Logo" className="absolute top-4 right-4 md:top-8 md:right-8 z-20 w-16 md:w-24" />
        <div className="absolute inset-0 halftone opacity-20" />
        <div className="container relative mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-block font-display text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md border-[3px] border-foreground comic-shadow-sm -rotate-2">
              ★ 1901 — 2026 · 25 Años ★
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-secondary drop-shadow-[4px_4px_0_hsl(var(--ink))]">
              San Gabriel<br />
              <span className="text-accent">Promo 2001</span><br />
              25 Años de Impacto
            </h1>
            <p className="text-lg md:text-xl max-w-xl font-medium">
              Celebrando nuestra hermandad y compromiso con los demás.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#galeria" className="font-display tracking-wider bg-secondary text-secondary-foreground px-6 py-3 rounded-xl border-[3px] border-foreground comic-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                Ver Logros
              </a>
              <a href="#intro" className="font-display tracking-wider bg-background text-foreground px-6 py-3 rounded-xl border-[3px] border-foreground comic-shadow-sm">
                Nuestra Historia
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="panel overflow-hidden rotate-2">
              <img
                src="/images/hero.jpg"
                alt="San Gabriel Promo 2001 - 25 Años de Impacto"
                width={1536}
                height={1024}
                className="w-full h-auto block border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] contrast-125 sepia-10"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-orange text-orange-foreground font-display text-2xl px-4 py-2 rounded-xl border-[3px] border-foreground comic-shadow -rotate-12">
              ¡PUM!
            </div>
            <div className="absolute -bottom-5 -right-3 bg-accent text-accent-foreground font-display text-xl px-4 py-2 rounded-xl border-[3px] border-foreground comic-shadow rotate-6">
              ★ Gabrielinos ★
            </div>
          </div>
        </div>
      </header>

      {/* INTRO section (lines 55-85) */}
      <section id="intro" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container relative mx-auto px-4 max-w-4xl z-10">
          <div className="panel relative overflow-hidden p-8 md:p-12 bg-card text-center -rotate-[0.5deg]">
            <img 
              src="/images/logo-2001.png" 
              alt="Logo 2001 Espejado" 
              className="absolute left-[-2rem] md:left-[-1rem] top-1/2 -translate-y-1/2 w-48 -scale-x-100 opacity-20 z-0 pointer-events-none" 
            />
            <img 
              src="/images/dolorosa.jpg" 
              alt="La Dolorosa" 
              className="absolute right-[-2rem] md:right-[-1rem] top-1/2 -translate-y-1/2 w-48 opacity-20 z-0 pointer-events-none" 
            />
            <div className="relative z-10">
              <span className="font-display text-secondary-foreground bg-secondary inline-block px-3 py-1 rounded-md border-[3px] border-foreground text-sm mb-4">
                120 años · Milagro de la Dolorosa
              </span>
            <h2 className="text-3xl md:text-4xl mb-5">
              Ser <span className="text-primary">Gabrielino</span> es una huella que no se borra.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A 120 años del Milagro de la Dolorosa, nuestra promoción honra una herencia
              de fe, servicio y hermandad. Veinticinco años después de cruzar las puertas del
              colegio, seguimos el llamado a <strong className="text-foreground">ser más para servir mejor</strong>:
              construyendo, acompañando y multiplicando el bien en cada rincón donde la vida nos llevó.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA section */}
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

       {/* FOOTER */}
       <footer className="bg-primary text-primary-foreground border-t-[4px] border-foreground relative overflow-hidden">
         <div className="absolute inset-0 halftone opacity-20" />
         <div className="container relative mx-auto px-4 py-14 text-center space-y-6">
            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[4px] border-foreground comic-shadow overflow-hidden bg-background">
                <img
                  src="/images/logo-2001.png"
                  alt="Logo Promo 2001"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[4px] border-foreground comic-shadow overflow-hidden bg-background">
                <img
                  src="https://www.csgabriel.edu.ec/wp-content/uploads/2026/01/lobito.png"
                  alt="Logo Colegio San Gabriel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
           <p className="text-xs uppercase tracking-widest opacity-80"></p>
           <h3 className="font-display text-3xl md:text-5xl text-secondary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
             Ser más para servir mejor.
           </h3>
           <p className="font-display text-2xl text-accent">— Promo 2001 —</p>
           <p className="text-sm opacity-75 pt-4">
             © {new Date().getFullYear()} · Promoción 2001 · Colegio San Gabriel · Quito, Ecuador
           </p>
         </div>
       </footer>

       {/* NIMBLERSOFT FOOTER */}
       <footer className="bg-background text-foreground border-t-[4px] border-foreground py-8">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
              <a href="https://www.nimblersoft.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg viewBox="0 0 32 32" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                  <mask id="n-mask">
                    <rect width="32" height="32" fill="white" />
                    <polygon points="10,13 16,13 13,9" fill="black" />
                    <polygon points="22,19 16,19 19,23" fill="black" />
                  </mask>
                </defs>
                <path
                  d="M16 2 C16 10 22 16 30 16 C22 16 16 22 16 30 C16 22 10 16 2 16 C10 16 16 10 16 2 Z"
                  fill="url(#logo-grad)"
                  mask="url(#n-mask)"
/>
              </svg>
              </a>
              <a href="https://www.nimblersoft.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity font-display text-lg font-semibold">
                <span className="font-display text-lg font-semibold">Nimblersoft</span>
              </a>
           </div>
           <p className="text-sm text-muted-foreground text-center md:text-right">
             Desarrollado con Inteligencia Artificial por{" "}
             <a
               href="https://www.nimblersoft.com"
               target="_blank"
               rel="noopener noreferrer"
               className="font-semibold underline underline-offset-2 hover:text-primary transition-colors"
             >
               Nimblersoft
             </a>
           </p>
         </div>
       </footer>
    </div>
  );
};

export default Index;
