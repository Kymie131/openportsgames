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
  release: { version: "1.0.0", date: "2026-09-03" },
  sources: ["https://github.com/omegakatana92/GundamBattleMasterRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Gundam: The Battle Master is a fighting game published by Bandai in 1997.",
  summaryEs: "Gundam: The Battle Master es un videojuego de lucha publicado por Bandai en 1997.",
  notes:
    "Recompilation of Gundam: The Battle Master (PS1) in progress with PSXRecomp. It needs your own disc; it uses OpenBIOS by default and offers a desktop launcher. It is not finished yet.",
  notesEs:
    "Recompilación en progreso de Gundam: The Battle Master (PS1) con PSXRecomp. Necesita tu propio disco; usa OpenBIOS por defecto y ofrece un lanzador de escritorio. Todavía no está acabado.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/omegakatana92/GundamBattleMasterRecomp/releases/download/v1.0.0/GundamBattleMaster_Recomp_Windows.zip",
      size: "8.4 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/omegakatana92/GundamBattleMasterRecomp/releases/download/v1.0.0/Gundam_Battle_Master_Recompiled-v1.0.0-linux-x86_64.AppImage",
      size: "6.8 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Gundam%20the%20Battle%20Master%20(Japan).png",
    alt: "Gundam: The Battle Master (box art)",
    credit: "Box art",
  },
};
