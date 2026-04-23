
import { useState, useMemo } from "react";
import { Lightbox, LightboxTrigger, type LightboxImage } from "@/components/Lightbox";

const Sponsors = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sponsorImagesList = [
    "sponsor-1.jpg",
    "sponsor-2.jpg",
    "sponsor-3.jpg",
    "sponsor-4.jpg",
    "sponsor-5.jpg",
    "sponsor-6.jpg",
  ];

  const sponsorLightboxImages = useMemo<LightboxImage[]>(() =>
    sponsorImagesList.map((img, idx) => ({
      src: `/images/sponsors/${img}`,
      alt: `Auspiciante ${idx + 1}`,
      caption: `Gracias por apoyar a la Promo 2001`
    }))
    , []);

  return (
    <section className="py-16 md:py-24 bg-secondary/5 relative overflow-hidden border-b-[4px] border-foreground">
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <div className="inline-block font-display text-xl bg-orange text-orange-foreground px-6 py-2 rounded-xl border-[4px] border-foreground comic-shadow-sm -rotate-2 mb-2">
              ¡TE ESPERAMOS! 🥐☕
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-primary leading-[0.85] drop-shadow-[4px_4px_0_white]">
              Desayuno de <br />
              <span className="text-orange">Reencuentro</span> <br />
              <span className="text-accent">Promo 2001</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Una mañana para volver a casa, compartir el pan y renovar la hermandad que nos une desde hace 25 años. ¡Ven a vivir este momento histórico!
            </p>

            <div className="panel bg-background p-8 border-[4px] border-foreground rotate-1 relative">
              <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground font-display text-lg px-4 py-1 border-[3px] border-foreground comic-shadow rotate-12">
                AUSPICIANTES
              </div>
              <div className="grid grid-cols-3 gap-6">
                {sponsorImagesList.map((img, idx) => (
                  <LightboxTrigger
                    key={idx}
                    onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                    className="aspect-square bg-white border-[3px] border-foreground rounded-xl overflow-hidden flex items-center justify-center p-3 hover:scale-110 hover:-rotate-3 transition-all cursor-pointer comic-shadow-sm group"
                  >
                    <img
                      src={`/images/sponsors/${img}`}
                      alt={`Sponsor ${idx + 1}`}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </LightboxTrigger>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative order-1 lg:order-2">
            <div className="relative z-10 panel overflow-hidden -rotate-2 border-[8px] border-foreground comic-shadow-lg group">
              <img
                src="/sources/invitation/desayuno-1.jpeg"
                alt="Invitación al Desayuno"
                className="w-full h-auto contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="absolute -bottom-10 -right-6 w-32 h-32 bg-orange border-[4px] border-foreground rounded-full z-0 comic-shadow flex items-center justify-center font-display text-white text-4xl rotate-12 animate-bounce">
              ¡PUM!
            </div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent border-[4px] border-foreground rotate-45 z-0 comic-shadow" />
          </div>
        </div>
      </div>
      <Lightbox
        images={sponsorLightboxImages}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        initialIndex={lightboxIndex}
      />
    </section>
  );
};

export default Sponsors;
