
const Footer = () => {
  return (
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
        <h3 className="font-display text-3xl md:text-5xl text-secondary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
          Ser más para servir mejor.
        </h3>
        <p className="font-display text-2xl text-accent">— Promo 2001 —</p>
        <p className="text-sm opacity-75 pt-4">
          © {new Date().getFullYear()} · Promoción 2001 · Colegio San Gabriel · Quito, Ecuador
        </p>
      </div>
    </footer>
  );
};

export default Footer;
