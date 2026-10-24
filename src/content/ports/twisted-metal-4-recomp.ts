import type { Port } from "@/lib/ports/schema";

export const twistedMetal4Recomp: Port = {
  schema: "port",
  id: "twisted-metal-4-recomp",
  title: "Twisted Metal 4 Recompiled",
  game: "Twisted Metal 4",
  developers: ["PortsDR"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "racing",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TechnicallyComputers/TwistedMetal4Recomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Twisted Metal 4 is a 1999 vehicular combat game developed and published by 989 Studios and released exclusively in North America for the PlayStation. It is the fourth game in the Twisted Metal series and the second and last developed by 989 Studios.",
  summaryEs: "Twisted Metal 4 es un videojuego de combate en vehículos desarrollado por 989 Studios y publicado por Sony Computer Entertainment. Es el cuarto juego de la saga Twisted Metal. Este juego fue lanzado en el año 1999 para la plataforma PlayStation y re-lanzado en los Sony PlayStation Greatest Hits en el 2000. 989 Studios fue la compañía que creó el juego, ésta es la segunda exitosa creación -y la última- de 989 Studios en Twisted Metal, siendo la primera Twisted Metal III.",
  notes: "Community entry from PortsDR. No repository is public; the game is not included.",
  notesEs: "Entrada comunitaria de PortsDR. No hay repositorio público; el juego no se incluye.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Twisted%20Metal%204%20(USA)%20(Rev%201).png",
    alt: "Twisted Metal 4 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Twisted%20Metal%204%20(USA)%20(Rev%201).png",
      alt: "Twisted Metal 4 (screenshot)",
      credit: "Libretro",
    },
  ],
};
