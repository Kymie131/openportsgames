import type { Port } from "@/lib/ports/schema";

export const shadowsOfTheEmpireRecomp: Port = {
  schema: "port",
  id: "shadows-of-the-empire-recomp",
  title: "Shadows of the Empire Recompiled",
  game: "Star Wars: Shadows of the Empire",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "shooter",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/SotE-Recomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Star Wars: Shadows of the Empire is a 1996 action video game developed by LucasArts and published by Nintendo for the Nintendo 64. It is primarily a third-person shooter, with multiple types of vehicular combat and third-person shooting sequences. A version for Windows was released by LucasArts in 1997.",
  summaryEs: "Star Wars: Shadows of the Empire es un videojuego de disparos en tercera persona desarrollado en 1996, por LucasArts. Fue uno de los primeros juegos disponibles para la consola Nintendo 64, con más de un millón de copias vendidas en 1997. Una versión para la plataforma Windows 95 fue lanzada un año más tarde. El juego fue relanzado para sistemas Windows el 3 de mayo de 2016, a través del servicio de venta de videojuegos GOG.com. Este relanzamiento permite que el videojuego se reproduzca correctamente en sistemas Windows de 64 bits.",
  notes: "Indexed by PortsDR. No official repository is available, and it needs your own copy.",
  notesEs: "Indexado en PortsDR. No hay repositorio oficial disponible y necesita tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Wars%20-%20Shadows%20of%20the%20Empire%20(Europe).png",
    alt: "Star Wars: Shadows of the Empire (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Star%20Wars%20-%20Shadows%20of%20the%20Empire%20(Europe).png",
      alt: "Star Wars: Shadows of the Empire (screenshot)",
      credit: "Libretro",
    },
  ],
};
