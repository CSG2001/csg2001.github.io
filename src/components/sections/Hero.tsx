
const Hero = () => {
  return (
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
  );
};

export default Hero;
