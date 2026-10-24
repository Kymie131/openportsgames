import type { Port } from "@/lib/ports/schema";

export const gundamBattleAssault2Recomp: Port = {
  schema: "port",
  id: "gundam-battle-assault-2-recomp",
  title: "Gundam: Battle Assault 2 Recompiled",
  game: "Gundam: Battle Assault 2",
  developers: ["omegakatana92"],
  publisher: "Bandai",
  originalYear: 2002,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-09-03" },
  sources: ["https://github.com/omegakatana92/GundamBattleAssault2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Gundam: Battle Assault 2 is a 2002 fighting video game developed by Natsume Co., Ltd. for the PlayStation. Based on the Gundam franchise, it is a follow-up to Gundam: Battle Assault (1998). The story is divided into three storylines following a pilot from Mobile Fighter G Gundam, Mobile Suit Gundam Wing and Mobile Suit Gundam. Its gameplay consists of one-on-one fights, with a main six-button configuration, featuring special moves and two playable modes, while players can select any available mech to battle against enemies in story mode.",
  summaryEs: "Gundam: Battle Assault 2 es un videojuego de lucha publicado por Bandai en 2002.",
  notes:
    "Recompilation of Gundam: Battle Assault 2 (PS1) in progress with PSXRecomp. You bring your own disc and it uses OpenBIOS; it is still under development.",
  notesEs:
    "Recompilación en progreso de Gundam: Battle Assault 2 (PS1) con PSXRecomp. Aportas tu propio disco y usa OpenBIOS; todavía está en desarrollo.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Gundam%20Battle%20Assault%202%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Gundam: Battle Assault 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Gundam%20Battle%20Assault%202%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Gundam: Battle Assault 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
