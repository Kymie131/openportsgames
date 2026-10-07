import type { Port } from "@/lib/ports/schema";

export const sonic1GenesisRecomp: Port = {
  schema: "port",
  id: "sonic-1-genesis-recomp",
  title: "Sonic the Hedgehog Recompiled",
  game: "Sonic the Hedgehog",
  developers: ["mstan"],
  publisher: "Sega",
  originalYear: 1991,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SonicTheHedgehogRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Sega Mega Drive / Genesis",
  notes:
    "Native recompilation of Sonic the Hedgehog (Sega Mega Drive / Genesis). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Sonic the Hedgehog (Sega Mega Drive / Genesis). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Mega%20Drive%20-%20Genesis/Named_Boxarts/Sonic%20The%20Hedgehog%20(USA).png",
    alt: "Sonic the Hedgehog (box art)",
    credit: "Box art",
  },
};
