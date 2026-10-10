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
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/GundamBattleAssault2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Gundam: Battle Assault 2 (PS1) in progress with PSXRecomp. You bring your own disc and it uses OpenBIOS; it is still under development.",
  notesEs:
    "Recompilación en progreso de Gundam: Battle Assault 2 (PS1) con PSXRecomp. Aportas tu propio disco y usa OpenBIOS; todavía está en desarrollo.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Gundam%20Battle%20Assault%202%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Gundam: Battle Assault 2 (box art)",
    credit: "Box art",
  },
};
