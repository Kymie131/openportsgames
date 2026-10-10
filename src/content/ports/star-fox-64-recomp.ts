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
  originalSystem: "Nintendo 64",
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
