import type { Port } from "@/lib/ports/schema";

export const earthwormJimHdRecomp: Port = {
  schema: "port",
  id: "earthworm-jim-hd-recomp",
  title: "Earthworm Jim HD Recompiled",
  game: "Earthworm Jim HD",
  developers: ["TekRantGaming"],
  publisher: "Interplay Entertainment",
  originalYear: 2010,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TekRantGaming/earthworm-jim-hd-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Earthworm Jim HD is a high definition remake of the original Earthworm Jim video game. While the original was released in 1994 for the Sega Genesis and then ported to many other platforms, the remake was released digitally through XBLA on Xbox 360 on June 9, 2010, through the PSN on the PlayStation 3 on August 3, 2010, and for Windows Phone 7 alongside its launch in October and November of 2010. While critics had mixed feelings with regard to how well the game had aged, they generally praised the new content, mainly the cooperative multiplayer mode.",
  summaryEs: "Earthworm Jim HD es un videojuego de plataformas publicado por Gameloft en 2010.",
  notes:
    "Static recompilation of Earthworm Jim HD for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Earthworm Jim HD para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6f/Earthworm_Jim_Neutral_Cover.jpg",
    alt: "Earthworm Jim (cover)",
    credit: "Wikipedia",
  },
};
