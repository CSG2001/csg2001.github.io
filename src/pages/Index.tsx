import mascot from "@/assets/mascot-fox.png";
import church from "@/assets/church-bg.jpg";
import { ComicCard } from "@/components/ComicCard";

const cards: Array<{
  title: string;
  date?: string;
  description: string;
  emoji: string;
  accent: "primary" | "secondary" | "accent" | "orange" | "green" | "red";
}> = [
  { date: "20 ABR 2025", title: "Chompa de la Generación", description: "Nuestra identidad en una prenda conmemorativa.", emoji: "🧥", accent: "primary" },
  { title: "Misas de 20 y Becas", description: "USD 1.374,01 recaudados para el Proyecto Silla Roja (Becas Fe y Alegría).", emoji: "🙏", accent: "secondary" },
  { title: "Misa de Consagración", description: "Consagración de las familias en noviembre.", emoji: "✝️", accent: "accent" },
  { title: "Dolorosa en la Cumbre", description: "Llevando nuestra fe a lo más alto.", emoji: "⛰️", accent: "orange" },
  { title: "Dolorosa en el Hogar", description: "Recorrido del busto por 28 hogares de la promoción.", emoji: "🏠", accent: "green" },
  { title: "Prevención de Violencia", description: "14 charlas dictadas junto a Padres de Familia y el DECE.", emoji: "🛡️", accent: "red" },
  { title: "Campaña de Navidad", description: "Donación de víveres, ropa y ayuda económica: Nací para Amar.", emoji: "🎁", accent: "primary" },
  { title: "Brigada Médica 2026", description: "Atención de salud y provisión de medicinas.", emoji: "⚕️", accent: "accent" },
  { title: "Round 1", description: "Noche de música en vivo y reencuentro.", emoji: "🎸", accent: "orange" },
  { title: "Round 2", description: "Karaoke con banda y pura alegría.", emoji: "🎤", accent: "secondary" },
  { title: "Asado de Integración", description: "Uniendo a las familias en torno a la mesa.", emoji: "🔥", accent: "red" },
  { title: "Hermandad Promo 2001", description: "25 años caminando juntos, hombres para los demás.", emoji: "🤝", accent: "green" },
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ============ HERO TIPO PÓSTER VINTAGE ============ */}
      <header className="relative paper-vintage border-b-[6px] border-ink">
        <div className="container mx-auto px-3 sm:px-6 py-5 max-w-6xl">
          <div className="ink-border-thick bg-card relative overflow-hidden">
            {/* TOP BANNER — 120 AÑOS DEL MILAGRO */}
            <div className="bg-secondary border-b-[5px] border-ink relative">
              <div className="halftone absolute inset-0 opacity-20" />
              <div className="relative flex items-stretch">
                <div className="bg-card border-r-[5px] border-ink p-2 sm:p-3 flex items-center justify-center w-16 sm:w-24">
                  <div className="w-full aspect-square rounded-full ink-border bg-primary flex items-center justify-center">
                    <span className="font-display text-secondary text-lg sm:text-2xl">SG</span>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3">
                  <h1 className="font-display text-xl sm:text-3xl md:text-5xl text-ink text-stroke text-center leading-none">
                    ¡120 AÑOS DEL MILAGRO!
                  </h1>
                </div>
                <div className="bg-card border-l-[5px] border-ink p-2 sm:p-3 flex items-center justify-center w-20 sm:w-28">
                  <div className="w-full aspect-square rounded-full ink-border bg-secondary flex flex-col items-center justify-center leading-tight">
                    <span className="font-display text-[10px] sm:text-sm text-ink">1906</span>
                    <span className="font-display text-[10px] sm:text-sm text-ink">2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SUBTITLE BAR */}
            <div className="bg-ink text-background text-center py-2 sm:py-3 border-b-[5px] border-ink">
              <h2 className="font-display tracking-widest text-base sm:text-2xl md:text-3xl">
                25 AÑOS · PROMOCIÓN 2001
              </h2>
            </div>

            {/* MAIN HERO PANEL */}
            <div className="relative bg-cover bg-center min-h-[480px] sm:min-h-[560px]" style={{ backgroundImage: `url(${church})` }}>
              <div className="absolute inset-0 bg-background/30" />
              <div className="halftone absolute inset-0 opacity-15" />

              {/* Speech bubble - top left */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 max-w-[160px] sm:max-w-[220px] z-20">
                <div className="bg-card ink-border p-3 sm:p-4 comic-shadow rotate-[-3deg] relative">
                  <p className="font-display text-green text-sm sm:text-lg leading-tight">CELEBRANDO:</p>
                  <p className="font-display text-orange text-lg sm:text-2xl leading-tight text-stroke text-secondary mt-1">
                    25 AÑOS DE LA PROMO 2001
                  </p>
                  {/* Tail */}
                  <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-ink" />
                  <div className="absolute -bottom-[10px] left-[34px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-card" />
                </div>
              </div>

              {/* HUGE TITLE */}
              <div className="absolute top-4 right-3 sm:top-10 sm:right-10 text-right z-10 max-w-[60%]">
                <h3 className="font-display text-orange text-stroke text-5xl sm:text-7xl md:text-8xl leading-[0.85] tracking-wider">
                  IMPACTO
                </h3>
                <h3 className="font-display text-secondary text-stroke text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-wider mt-1">
                  2026
                </h3>
              </div>

              {/* Mascot */}
              <img
                src={mascot}
                alt="Mascota Gabrielino Promo 2001"
                width={1024}
                height={1024}
                className="absolute bottom-0 left-1/2 -translate-x-[60%] sm:left-12 sm:translate-x-0 h-[300px] sm:h-[420px] w-auto object-contain z-10 drop-shadow-[6px_6px_0_hsl(var(--ink))]"
              />

              {/* Burst right */}
              <div className="absolute bottom-32 sm:bottom-44 right-4 sm:right-12 z-20">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-red text-red-foreground burst flex items-center justify-center rotate-[12deg]">
                  <div className="text-center font-display leading-tight px-2">
                    <p className="text-xs sm:text-sm">¡NO TE LO</p>
                    <p className="text-base sm:text-xl">PIERDAS!</p>
                  </div>
                </div>
              </div>

              {/* Info card bottom */}
              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 left-3 sm:left-auto sm:max-w-md z-20">
                <div className="bg-card ink-border p-3 sm:p-4 comic-shadow">
                  <ul className="font-display text-ink space-y-1 text-sm sm:text-lg leading-tight">
                    <li><span className="text-orange">FECHA:</span> SÁBADO, 25 ABRIL 2026</li>
                    <li><span className="text-orange">HORA:</span> 8:00 a.m. <span className="text-xs opacity-70">(misa 7:00)</span></li>
                    <li><span className="text-orange">LUGAR:</span> PATIO DE BANDERAS</li>
                    <li className="text-xs sm:text-sm pl-2">Colegio San Gabriel · Quito</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BOTTOM ORNAMENT */}
            <div className="bg-secondary border-t-[5px] border-ink py-2 px-4 flex items-center justify-center gap-4">
              <span className="text-ink text-xl">✦</span>
              <span className="font-display tracking-widest text-ink text-sm sm:text-lg">HOMBRES PARA LOS DEMÁS</span>
              <span className="text-ink text-xl">✦</span>
            </div>
          </div>
        </div>
      </header>

      {/* ============ INTRODUCCIÓN ============ */}
      <section id="intro" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="panel p-8 md:p-12 -rotate-[0.4deg]">
            <div className="halftone-light absolute inset-0 opacity-30 pointer-events-none" />
            <div className="relative">
              <span className="font-display tracking-wider text-base bg-secondary text-secondary-foreground inline-block px-3 py-1 ink-border mb-5 -rotate-1">
                ✦ DESDE 1906 ✦
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-primary text-stroke text-secondary mb-6 leading-none">
                SER GABRIELINO
              </h2>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
                A <strong className="text-primary">120 años</strong> del Milagro de la Dolorosa, nuestra promoción
                honra una herencia de fe, servicio y hermandad. Veinticinco años después de cruzar
                las puertas del colegio, seguimos construyendo, acompañando y multiplicando el bien
                en cada rincón donde la vida nos llevó.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="font-display bg-orange text-orange-foreground px-3 py-1 ink-border tracking-wider">FE</span>
                <span className="font-display bg-accent text-accent-foreground px-3 py-1 ink-border tracking-wider">SERVICIO</span>
                <span className="font-display bg-green text-green-foreground px-3 py-1 ink-border tracking-wider">HERMANDAD</span>
                <span className="font-display bg-red text-red-foreground px-3 py-1 ink-border tracking-wider">IDENTIDAD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GALERÍA DE LOGROS ============ */}
      <section id="galeria" className="py-12 md:py-20 bg-primary border-y-[6px] border-ink relative overflow-hidden">
        <div className="halftone absolute inset-0 opacity-15 pointer-events-none" />
        <div className="container relative mx-auto px-4">
          <div className="text-center mb-14 space-y-4">
            <span className="font-display text-sm bg-orange text-orange-foreground inline-block px-4 py-1.5 ink-border comic-shadow-sm rotate-1 tracking-widest">
              ★ NUESTROS LOGROS ★
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-secondary text-stroke leading-none">
              25 AÑOS<br />EN ACCIÓN
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              Cada panel, una historia. Cada historia, un acto de amor por los demás.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4">
            {cards.map((card, i) => (
              <ComicCard key={card.title} index={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-ink text-background border-t-[6px] border-ink relative overflow-hidden">
        <div className="halftone absolute inset-0 opacity-20" />
        <div className="container relative mx-auto px-4 py-16 text-center space-y-6">
          <div className="mx-auto w-32 h-32 rounded-full bg-secondary text-secondary-foreground ink-border-thick comic-shadow flex items-center justify-center -rotate-3">
            <span className="font-display text-4xl">SG</span>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-60">[ Logo del Colegio · Placeholder ]</p>
          <h3 className="font-display text-4xl md:text-6xl text-secondary text-stroke leading-none mt-4">
            HOMBRES PARA LOS DEMÁS
          </h3>
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-secondary text-2xl">✦</span>
            <p className="font-display text-2xl md:text-3xl text-orange tracking-widest">PROMO 2001</p>
            <span className="text-secondary text-2xl">✦</span>
          </div>
          <p className="text-sm opacity-60 pt-6">
            © {new Date().getFullYear()} · Colegio San Gabriel · Quito, Ecuador
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
