import type { Port } from "@/lib/ports/schema";

export const samuraiShodownWarriorsRageRecomp: Port = {
  schema: "port",
  id: "samurai-shodown-warriors-rage-recomp",
  title: "Samurai Shodown: Warriors Rage Recompiled",
  game: "Samurai Shodown: Warriors Rage",
  developers: ["PortsDR"],
  publisher: "SNK",
  originalYear: 1999,
  portType: "recompilation",
  genre: "fighting",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Samurai Shodown: Warriors Rage (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Samurai Shodown: Warriors Rage (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Samurai%20Shodown%20-%20Warriors%20Rage%20(USA).png",
    alt: "Samurai Shodown: Warriors Rage (box art)",
    credit: "Box art",
  },
};
