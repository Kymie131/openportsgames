import type { Port } from "@/lib/ports/schema";

export const chameleonTwist2Recomp: Port = {
  schema: "port",
  id: "chameleon-twist-2-recomp",
  title: "Chameleon Twist 2: Recompiled",
  game: "Chameleon Twist 2",
  developers: ["Rainchus"],
  publisher: "Sunsoft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rainchus/ChameleonTwist2-JP-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Chameleon Twist 2 is a 1998 platform game developed by Japan System Supply, published by Japan System Supply in Japan, and published by Sunsoft in North America and Europe for the Nintendo 64. It is the sequel to Chameleon Twist.",
  summaryEs: "Chameleon Twist 2 es un juego de plataformas de corte clásico realizado para Nintendo 64 lanzado en 1998, secuela de Chameleon Twist lanzado por la misma compañía, Sunsoft, y para la misma consola. De nuevo, nuestro amigo el conejo, mientras estamos jugando con el resto de nuestros amigos camaleones nos traslada de nuevo a un mundo increíble donde adoptaremos de nuevo una forma humana.",
  notes:
    "Static recompilation of Chameleon Twist 2 (N64, Japanese release) with N64Recomp and RT64. It adds widescreen, unlocked framerate, an optional dual-analog camera and Linux and Steam Deck support.",
  notesEs:
    "Recompilación estática de Chameleon Twist 2 (N64, versión japonesa) con N64Recomp y RT64. Añade widescreen, framerate libre, cámara analógica dual opcional y soporte de Linux y Steam Deck.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Chameleon%20Twist%202%20(USA).png",
    alt: "Chameleon Twist 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Chameleon%20Twist%202%20(USA).png",
      alt: "Chameleon Twist 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
