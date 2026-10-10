import type { Port } from "@/lib/ports/schema";

export const gundamBattleMasterRecomp: Port = {
  schema: "port",
  id: "gundam-battle-master-recomp",
  title: "Gundam: The Battle Master Recompiled",
  game: "Gundam: The Battle Master",
  developers: ["omegakatana92"],
  publisher: "Bandai",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/GundamBattleMasterRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Gundam: The Battle Master (PS1) in progress with PSXRecomp. It needs your own disc; it uses OpenBIOS by default and offers a desktop launcher. It is not finished yet.",
  notesEs:
    "Recompilación en progreso de Gundam: The Battle Master (PS1) con PSXRecomp. Necesita tu propio disco; usa OpenBIOS por defecto y ofrece un lanzador de escritorio. Todavía no está acabado.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Gundam%20the%20Battle%20Master%20(Japan).png",
    alt: "Gundam: The Battle Master (box art)",
    credit: "Box art",
  },
};
