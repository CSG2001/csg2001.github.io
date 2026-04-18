import heroImg from "@/assets/hero-school.jpg";
import { ComicCard } from "@/components/ComicCard";

const cards: Array<{
  title: string;
  date?: string;
  description: string;
  emoji: string;
  accent: "primary" | "secondary" | "accent" | "orange" | "green";
}> = [
  { date: "20 Abr 2025", title: "Chompa de la Generación", description: "Nuestra identidad en una prenda conmemorativa.", emoji: "🧥", accent: "primary" },
  { title: "Misas de 20 y Becas", description: "USD 1.374,01 recaudados para el Proyecto Silla Roja (Becas Fe y Alegría).", emoji: "🙏", accent: "secondary" },
  { title: "Misa de Consagración", description: "Consagración de las familias en noviembre.", emoji: "✝️", accent: "accent" },
  { title: "Dolorosa en la Cumbre", description: "Llevando nuestra fe a lo más alto.", emoji: "⛰️", accent: "orange" },
  { title: "Dolorosa en el Hogar", description: "Recorrido del busto por 28 hogares de la promoción.", emoji: "🏠", accent: "green" },
  { title: "Prevención de Violencia", description: "14 charlas dictadas junto a Padres de Familia y el DECE.", emoji: "🛡️", accent: "primary" },
  { title: "Campaña de Navidad", description: "Donación de víveres, ropa y ayuda económica: Nací para Amar.", emoji: "🎁", accent: "secondary" },
  { title: "Brigada Médica Gabrielina 2026", description: "Atención de salud y provisión de medicinas.", emoji: "⚕️", accent: "accent" },
  { title: "Round 1", description: "Noche de música en vivo y reencuentro.", emoji: "🎸", accent: "orange" },
  { title: "Round 2", description: "Karaoke con banda y pura alegría.", emoji: "🎤", accent: "green" },
  { title: "Asado de Integración", description: "Uniendo a las familias en torno a la mesa.", emoji: "🔥", accent: "primary" },
  { title: "Hermandad Promo 2001", description: "25 años caminando juntos, hombres para los demás.", emoji: "🤝", accent: "secondary" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden bg-primary text-primary-foreground border-b-[4px] border-foreground">
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
                src={heroImg}
                alt="Ilustración estilo cómic del Colegio San Gabriel celebrando 25 años de la Promo 2001"
                width={1536}
                height={1024}
                className="w-full h-auto block"
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

      {/* INTRO */}
      <section id="intro" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="panel p-8 md:p-12 bg-card text-center -rotate-[0.5deg]">
            <span className="font-display text-secondary-foreground bg-secondary inline-block px-3 py-1 rounded-md border-[3px] border-foreground text-sm mb-4">
              120 años · Milagro de la Dolorosa
            </span>
            <h2 className="text-3xl md:text-4xl mb-5">
              Ser <span className="text-primary">Gabrielino</span> es una huella que no se borra.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A 120 años del Milagro de la Dolorosa, nuestra promoción honra una herencia
              de fe, servicio y hermandad. Veinticinco años después de cruzar las puertas del
              colegio, seguimos siendo <strong className="text-foreground">hombres para los demás</strong>:
              construyendo, acompañando y multiplicando el bien en cada rincón donde la vida nos llevó.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
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

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((card, i) => (
              <ComicCard key={card.title} index={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground border-t-[4px] border-foreground relative overflow-hidden">
        <div className="absolute inset-0 halftone opacity-20" />
        <div className="container relative mx-auto px-4 py-14 text-center space-y-6">
          <div className="mx-auto w-28 h-28 rounded-full bg-secondary text-secondary-foreground border-[4px] border-foreground comic-shadow flex items-center justify-center">
            <span className="font-display text-3xl">SG</span>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-80">Logo del Colegio · Placeholder</p>
          <h3 className="font-display text-3xl md:text-5xl text-secondary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
            Hombres para los demás.
          </h3>
          <p className="font-display text-2xl text-accent">— Promo 2001 —</p>
          <p className="text-sm opacity-75 pt-4">
            © {new Date().getFullYear()} · Colegio San Gabriel · Quito, Ecuador
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
