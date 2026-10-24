import type { Port } from "@/lib/ports/schema";

export const megaMan8Recomp: Port = {
  schema: "port",
  id: "mega-man-8-recomp",
  title: "Mega Man 8 Recompiled",
  game: "Mega Man 8",
  developers: ["omegakatana92"],
  publisher: "Capcom",
  originalYear: 1996,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/Mega-Man-8-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mega Man 8 is a 1996 platform game developed and published by Capcom. It was directed by Hayato Kaji and produced by Keiji Inafune, both of whom had previously worked on the series as artists. It is the eighth installment in the original Mega Man series, and was initially released in Japan on the PlayStation in 1996. The following year, Mega Man 8 saw a release on the Sega Saturn and was localized for both consoles in North America and the PlayStation alone in PAL regions. Mega Man 8 is the first game in the series made available on 32-bit consoles.",
  summaryEs: "Mega Man 8, conocido en Japón como Rockman 8: Metal Heroes , es un videojuego de plataformas y acción publicado por Capcom. Es el octavo juego de la serie Mega Man, y fue originalmente publicado en Japón para PlayStation el 17 de diciembre de 1996. Al año siguiente, Mega Man 8 tuvo una versión para Sega Saturn y fue localizado para ambas consolas en Norteamérica y para PlayStation en territorios PAL. Con su lanzamiento, la franquicia cumplió su décimo aniversario. Mega Man 8 fue el primer juego de la serie que estuvo disponible para consolas de 32 bits.",
  notes:
    "Recompilation of Mega Man 8 (PlayStation) built with mstan's PSXRecomp tool. It includes no game assets and needs your own copy.",
  notesEs:
    "Recompilación de Mega Man 8 (PlayStation) construida con la herramienta PSXRecomp de mstan. No incluye recursos del juego y necesita tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%208%20(Europe).png",
    alt: "Mega Man 8 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mega%20Man%208%20(Europe).png",
      alt: "Mega Man 8 (screenshot)",
      credit: "Libretro",
    },
  ],
};
