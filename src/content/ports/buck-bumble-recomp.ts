import type { Port } from "@/lib/ports/schema";

export const buckBumbleRecomp: Port = {
  schema: "port",
  id: "buck-bumble-recomp",
  title: "Buck Bumble Recompiled",
  game: "Buck Bumble",
  developers: ["PortsDR"],
  publisher: "Ubisoft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "shooter",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceIsIndex: true,
  originalSystems: ["Nintendo 64"],
  summary: "Buck Bumble is a 3D third-person shooter video game developed by Argonaut Software, that was published in 1998 by UbiSoft for the Nintendo 64. The game's premise centers around a war of two factions of anthropomorphic insects, created as a result of a chemical spill in London. The game received lukewarm reviews at release, even positive ones mentioning technical shortcomings. However the soundtrack and its main theme, both composed by Justin Scharvona, were praised after release, and it's enjoyed a modern resurgence of popularity, despite the game's otherwise relative obscurity.",
  summaryEs: "Buck Bumble es un videojuego de acción para Nintendo 64 desarrollado por la compañía de videojuegos británica Argonaut Games y publicado por Ubisoft en 1998. Buck Bumble' es, asimismo, el nombre de la abeja ciborg que protagoniza este videojuego.",
  notes: "Tracked by PortsDR. No public repo is linked yet, and you supply the game files.",
  notesEs: "Seguido por PortsDR. Todavía no hay repo público, y tú aportas los archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Buck%20Bumble%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Buck Bumble (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Buck%20Bumble%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Buck Bumble (screenshot)",
      credit: "Libretro",
    },
  ],
};
