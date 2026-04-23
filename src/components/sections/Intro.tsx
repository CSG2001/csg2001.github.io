
const Intro = () => {
  return (
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
  );
};

export default Intro;
