import type { Port } from "@/lib/ports/schema";

export const madStalkerRecomp: Port = {
  schema: "port",
  id: "mad-stalker-recomp",
  title: "Mad Stalker: Full Metal Force Recompiled",
  game: "Mad Stalker: Full Metal Force",
  developers: ["omegakatana92"],
  publisher: "Family Soft",
  originalYear: 1994,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/MadStalkerRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mad Stalker: Full Metal Forth is a 1994 side-scrolling beat 'em up game developed by Fill-in-Cafe and published by Family Soft in Japan for the X68000. It is the fourth game to be created and released by both Fill-in-Cafe and Family Soft for the X68000 platform late into its commercial life span, after being discontinued in 1993.",
  summaryEs: "Mad Stalker: Full Metal Force es un videojuego de lucha publicado por Family Soft en 1994.",
  notes:
    "Fan-made recompilation of Mad Stalker: Full Metal Force (PlayStation), still in progress. It requires your own disc and ships no assets.",
  notesEs:
    "Recompilación hecha por fans de Mad Stalker: Full Metal Force (PlayStation), todavía en progreso. Requiere tu propio disco y no incluye recursos.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mad%20Stalker%20-%20Full%20Metal%20Force%20(Japan).png",
    alt: "Mad Stalker: Full Metal Force (box art)",
    credit: "Box art",
  },
};
