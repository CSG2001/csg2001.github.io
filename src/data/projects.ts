export type Accent = "primary" | "secondary" | "accent" | "orange" | "green";

export interface Project {
  slug: string;
  title: string;
  date?: string;
  description: string;
  emoji: string;
  accent: Accent;
  story: string;
  gallery: { caption: string; accent: Accent }[];
}

export const projects: Project[] = [
  {
    slug: "chompa-de-la-generacion",
    date: "20 Abr 2025",
    title: "Chompa de la Generación",
    description: "Nuestra identidad en una prenda conmemorativa.",
    emoji: "🧥",
    accent: "primary",
    story:
      "Quisimos llevar puesto el orgullo gabrielino. La chompa nació de largas conversaciones entre compañeros que querían un símbolo tangible de estos 25 años: bordados, colores institucionales y un diseño pensado en hermandad. Cada prenda entregada fue un abrazo entre promociones, padres e hijos.",
    gallery: [
      { caption: "Diseño final", accent: "secondary" },
      { caption: "Entrega oficial", accent: "accent" },
      { caption: "Familias unidas", accent: "orange" },
      { caption: "Detalle bordado", accent: "green" },
    ],
  },
  {
    slug: "misas-de-20-y-becas",
    title: "Misas de 20 y Becas",
    description: "USD 1.374,01 recaudados para el Proyecto Silla Roja (Becas Fe y Alegría).",
    emoji: "🙏",
    accent: "secondary",
    story:
      "Cada mes 20 nos reunimos a celebrar la Eucaristía. De esos encuentros nació la voluntad de aportar al Proyecto Silla Roja: becas para niños y jóvenes de Fe y Alegría que comparten nuestro sueño de educación con sentido. Recaudamos USD 1.374,01 que se transforman en oportunidades reales.",
    gallery: [
      { caption: "Misa del día 20", accent: "primary" },
      { caption: "Entrega simbólica", accent: "orange" },
      { caption: "Niños becados", accent: "green" },
      { caption: "Hermandad en oración", accent: "accent" },
    ],
  },
  {
    slug: "misa-de-consagracion",
    title: "Misa de Consagración",
    description: "Consagración de las familias en noviembre.",
    emoji: "✝️",
    accent: "accent",
    story:
      "En noviembre consagramos a nuestras familias al cuidado de la Dolorosa. Una celebración íntima, profundamente espiritual, que reunió a esposas, hijos y padres de la promo en torno a la fe que nos formó.",
    gallery: [
      { caption: "Altar preparado", accent: "secondary" },
      { caption: "Familias reunidas", accent: "primary" },
      { caption: "Bendición final", accent: "orange" },
      { caption: "Gratitud", accent: "green" },
    ],
  },
  {
    slug: "dolorosa-en-la-cumbre",
    title: "Dolorosa en la Cumbre",
    description: "Llevando nuestra fe a lo más alto.",
    emoji: "⛰️",
    accent: "orange",
    story:
      "Subimos juntos para entregar a la Virgen el esfuerzo, las luchas y los sueños de la promoción. La Dolorosa coronó la cumbre como símbolo de que la fe nos sostiene incluso en las pendientes más duras.",
    gallery: [
      { caption: "Inicio del ascenso", accent: "primary" },
      { caption: "Camino y oración", accent: "secondary" },
      { caption: "Cumbre alcanzada", accent: "accent" },
      { caption: "Foto de promo", accent: "green" },
    ],
  },
  {
    slug: "dolorosa-en-el-hogar",
    title: "Dolorosa en el Hogar",
    description: "Recorrido del busto por 28 hogares de la promoción.",
    emoji: "🏠",
    accent: "green",
    story:
      "El busto de la Dolorosa visitó 28 hogares de la promoción. Una semana en cada casa, oraciones en familia, anécdotas compartidas y la certeza de que ningún gabrielino camina solo.",
    gallery: [
      { caption: "Primera casa", accent: "primary" },
      { caption: "Oración en familia", accent: "secondary" },
      { caption: "Niños participando", accent: "orange" },
      { caption: "Despedida emotiva", accent: "accent" },
    ],
  },
  {
    slug: "prevencion-de-violencia",
    title: "Prevención de Violencia",
    description: "14 charlas dictadas junto a Padres de Familia y el DECE.",
    emoji: "🛡️",
    accent: "primary",
    story:
      "Junto al DECE y los Padres de Familia organizamos 14 charlas para prevenir violencia en entornos escolares y familiares. Profesionales de la promo aportaron su tiempo y conocimiento para cuidar a las nuevas generaciones gabrielinas.",
    gallery: [
      { caption: "Charla inaugural", accent: "secondary" },
      { caption: "Padres participando", accent: "accent" },
      { caption: "Trabajo con jóvenes", accent: "orange" },
      { caption: "Equipo DECE", accent: "green" },
    ],
  },
  {
    slug: "campana-de-navidad",
    title: "Campaña de Navidad",
    description: "Donación de víveres, ropa y ayuda económica: Nací para Amar.",
    emoji: "🎁",
    accent: "secondary",
    story:
      "Bajo el lema 'Nací para Amar' organizamos la campaña navideña: víveres, ropa y aportes económicos para familias que más lo necesitan. La promo entera se movilizó para que nadie se quedara sin Navidad.",
    gallery: [
      { caption: "Empaque de fundas", accent: "primary" },
      { caption: "Entrega comunitaria", accent: "accent" },
      { caption: "Sonrisas reales", accent: "orange" },
      { caption: "Equipo voluntario", accent: "green" },
    ],
  },
  {
    slug: "brigada-medica-gabrielina-2026",
    title: "Brigada Médica Gabrielina 2026",
    description: "Atención de salud y provisión de medicinas.",
    emoji: "⚕️",
    accent: "accent",
    story:
      "Médicos, odontólogos y profesionales de la salud de la promoción se unieron para llevar atención y medicinas a comunidades vulnerables. Una jornada que recordó por qué fuimos formados como hombres para los demás.",
    gallery: [
      { caption: "Consulta médica", accent: "primary" },
      { caption: "Farmacia gratuita", accent: "secondary" },
      { caption: "Atención infantil", accent: "orange" },
      { caption: "Equipo brigadista", accent: "green" },
    ],
  },
  {
    slug: "round-1",
    title: "Round 1",
    description: "Noche de música en vivo y reencuentro.",
    emoji: "🎸",
    accent: "orange",
    story:
      "El primer Round fue puro reencuentro: música en vivo, anécdotas del colegio y abrazos largos. La banda de la promo demostró que el talento gabrielino sigue intacto después de 25 años.",
    gallery: [
      { caption: "Banda en vivo", accent: "primary" },
      { caption: "Pista llena", accent: "secondary" },
      { caption: "Coros de promo", accent: "accent" },
      { caption: "Foto grupal", accent: "green" },
    ],
  },
  {
    slug: "round-2",
    title: "Round 2",
    description: "Karaoke con banda y pura alegría.",
    emoji: "🎤",
    accent: "green",
    story:
      "El Round 2 elevó la energía: karaoke con banda en vivo, clásicos de los 90 y voces que creían dormidas. Una noche para reírnos de nosotros mismos y celebrar lo que somos.",
    gallery: [
      { caption: "Cantantes estrella", accent: "primary" },
      { caption: "Banda acompañando", accent: "secondary" },
      { caption: "Risas garantizadas", accent: "orange" },
      { caption: "Brindis final", accent: "accent" },
    ],
  },
  {
    slug: "asado-de-integracion",
    title: "Asado de Integración",
    description: "Uniendo a las familias en torno a la mesa.",
    emoji: "🔥",
    accent: "primary",
    story:
      "Un asado para que las familias se conozcan, los hijos jueguen y la promo siga tejiendo lazos. Porque ser gabrielino también es compartir el pan —y la parrilla— con los nuestros.",
    gallery: [
      { caption: "Parrilla encendida", accent: "orange" },
      { caption: "Niños jugando", accent: "green" },
      { caption: "Mesa larga", accent: "secondary" },
      { caption: "Brindis de hermanos", accent: "accent" },
    ],
  },
  {
    slug: "hermandad-promo-2001",
    title: "Hermandad Promo 2001",
    description: "25 años caminando juntos, hombres para los demás.",
    emoji: "🤝",
    accent: "secondary",
    story:
      "25 años después, seguimos siendo promoción. Hemos celebrado bodas, acompañado pérdidas, festejado logros y sostenido caídas. Esta hermandad es la herencia más valiosa que San Gabriel nos dejó.",
    gallery: [
      { caption: "Foto histórica", accent: "primary" },
      { caption: "Reencuentro 25 años", accent: "accent" },
      { caption: "Familias unidas", accent: "orange" },
      { caption: "Compromiso vivo", accent: "green" },
    ],
  },
];

export const accentBg: Record<Accent, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  orange: "bg-orange text-orange-foreground",
  green: "bg-green text-green-foreground",
};
