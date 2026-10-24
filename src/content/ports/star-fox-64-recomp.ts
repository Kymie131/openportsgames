import type { Port } from "@/lib/ports/schema";

export const starFox64Recomp: Port = {
  schema: "port",
  id: "star-fox-64-recomp",
  title: "Starfox 64: Recompiled",
  game: "Star Fox 64",
  developers: ["sonicdcer"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicdcer/Starfox64Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Star Fox 64, known as Lylat Wars in PAL regions, is a 1997 rail shooter game developed and published by Nintendo for the Nintendo 64. It is the second Star Fox game, following Star Fox (1993) for the Super Nintendo Entertainment System (SNES). It was the first Nintendo 64 game to support the Rumble Pak, which initially came bundled with retail copies.",
  summaryEs: "Star Fox 64 es un rail shooter de combates aéreos para la consola Nintendo 64. Es un reboot del juego Star Fox para Super Nintendo y es el único juego de la serie de Star Fox desarrollado para Nintendo 64. Apareció en 1997, formando parte del grupo de juegos que salieron junto al Nintendo 64. Se comercializó acompañado del accesorio \"Rumble Pak\", el cual hacía vibrar al mando, lo cual fue toda una novedad. El juego vendió 4 millones de copias desde su lanzamiento, convirtiéndolo en uno de los mejores juegos vendidos para la consola.",
  notes:
    "Static recompilation of Star Fox 64 (N64, USA v1.1 Rev A) with N64Recomp and RT64. It adds widescreen, unlocked framerate, mods (with a Thunderstore page) and instant load times.",
  notesEs:
    "Recompilación estática de Star Fox 64 (N64, USA v1.1 Rev A) con N64Recomp y RT64. Añade widescreen, framerate libre, mods (con página en Thunderstore) y cargas instantáneas.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Fox%2064%20(USA).png",
    alt: "Star Fox 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Star%20Fox%2064%20(USA).png",
      alt: "Star Fox 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
