
const NimblersoftFooter = () => {
  return (
    <footer className="bg-background text-foreground border-t-[4px] border-foreground py-5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <a 
          href="https://www.nimblersoft.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity animate-logo-highlight group"
        >
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
          <span className="font-display text-lg font-semibold">Nimblersoft</span>
        </a>
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
  );
};

export default NimblersoftFooter;
