import type { Port } from "@/lib/ports/schema";

export const yuGiOhForbiddenMemoriesRecomp: Port = {
  schema: "port",
  id: "yu-gi-oh-forbidden-memories-recomp",
  title: "Yu-Gi-Oh! Forbidden Memories Recompiled",
  game: "Yu-Gi-Oh! Forbidden Memories",
  developers: ["Unchiga"],
  publisher: "Konami",
  originalYear: 1999,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Decompilation and recompilation of Yu-Gi-Oh! Forbidden Memories (PlayStation) to a native executable. It needs the original game.",
  notesEs:
    "Decompilación y recompilación de Yu-Gi-Oh! Forbidden Memories (PlayStation) a un ejecutable nativo. Necesita el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Yu-Gi-Oh!%20Forbidden%20Memories%20(Europe).png",
    alt: "Yu-Gi-Oh! Forbidden Memories (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Yu-Gi-Oh!%20Forbidden%20Memories%20(Europe).png",
      alt: "Yu-Gi-Oh! Forbidden Memories (screenshot)",
      credit: "Libretro",
    },
  ],
};
