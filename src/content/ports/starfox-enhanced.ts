import type { Port } from "@/lib/ports/schema";

export const starfoxEnhanced: Port = {
  schema: "port",
  id: "starfox-enhanced",
  title: "Star Fox Enhanced",
  game: "Star Fox",
  developers: ["kandowontu"],
  publisher: "Nintendo",
  originalYear: 1993,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/kandowontu2/starfox-enhanced"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  warning: "The original repository was taken down and the link no longer resolves.",
  warningEs: "El repositorio original fue retirado y el enlace ya no responde.",
  originalSystems: ["Super Nintendo"],
  summary: "Star Fox, known as Starwing in PAL regions, is a 1993 rail shooter game developed by Nintendo EAD and Argonaut Software, and published by Nintendo for the Super Nintendo Entertainment System (SNES). The first entry in the Star Fox series, the story follows pilot Fox McCloud and his elite squadron of mercenaries known as the Star Fox team defending their homeworld of Corneria against the invading forces of the malevolent mad scientist Andross.",
  summaryEs: "Star Fox es un videojuego que se lanzó en 1993 para Super Nintendo e inició la saga del mismo nombre. El juego fue publicado como Starwing en Europa. Se caracteriza por ser unos de los mejores del género de disparos en naves espaciales, mostraba gráficos en tres dimensiones gracias a un chip especial llamado Super FX incluido en el cartucho de juego, llegando a vender 4 millones de copias en todo el mundo. Fue programado por el equipo inglés Argonaut Software para Nintendo.",
  notes:
    "Native C++/SDL3 port of the open-source UltraStarFox codebase, with high frame rates, widescreen and optional visual enhancements. It validates your own Star Fox ROM and runs on desktop and mobile.",
  notesEs:
    "Port nativo en C++/SDL3 del código abierto de UltraStarFox, con altas tasas de refresco, widescreen y mejoras visuales opcionales. Valida tu propia ROM de Star Fox y funciona en escritorio y móvil.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%20(Japan)%20(Rev%201).png",
    alt: "Star Fox (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Star%20Fox%20(Japan)%20(Rev%201).png",
      alt: "Star Fox (screenshot)",
      credit: "Libretro",
    },
  ],
};
