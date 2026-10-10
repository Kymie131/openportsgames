import type { Port } from "@/lib/ports/schema";

export const mobileSuitGundamSeedBattleAssaultRecomp: Port = {
  schema: "port",
  id: "mobile-suit-gundam-seed-battle-assault-recomp",
  title: "Gundam SEED: Battle Assault Recompiled",
  game: "Mobile Suit Gundam SEED: Battle Assault",
  developers: ["PortsDR"],
  publisher: "Bandai",
  originalYear: 2004,
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
  originalSystem: "Game Boy Advance",
  notes:
    "Recompilation of Mobile Suit Gundam SEED: Battle Assault (Game Boy Advance) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Mobile Suit Gundam SEED: Battle Assault (Game Boy Advance) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Mobile%20Suit%20Gundam%20Seed%20-%20Battle%20Assault%20(USA).png",
    alt: "Mobile Suit Gundam SEED: Battle Assault (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Mobile%20Suit%20Gundam%20Seed%20-%20Battle%20Assault%20(USA).png",
      alt: "Mobile Suit Gundam SEED: Battle Assault (screenshot)",
      credit: "Libretro",
    },
  ],
};
