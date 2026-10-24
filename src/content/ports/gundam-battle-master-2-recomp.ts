import type { Port } from "@/lib/ports/schema";

export const gundamBattleMaster2Recomp: Port = {
  schema: "port",
  id: "gundam-battle-master-2-recomp",
  title: "Gundam: The Battle Master 2 Recompiled",
  game: "Gundam: The Battle Master 2",
  developers: ["omegakatana92"],
  publisher: "Bandai",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-09-03" },
  sources: ["https://github.com/omegakatana92/GundamBattleMaster2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Gundam is a Japanese military science fiction media franchise. Created by Yoshiyuki Tomino and Sunrise, the franchise features giant robots, or mecha, with the name \"Gundam\". The franchise began on April 7, 1979, with Mobile Suit Gundam, a TV series that defined the \"real robot\" mecha anime genre by featuring giant robots called mobile suits in a militaristic setting.",
  summaryEs: "Gundam, también conocida como Serie Gundam , es una franquicia de series animadas de ciencia ficción creadas por Yoshiyuki Tomino para los estudios Sunrise. La temática de las series son los conflictos bélicos entre humanos. En la serie, los bandos en guerra utilizan armaduras de combate llamadas Mobile Suits (MS). Por lo general, el Mobile Suit del protagonista es el que lleva el nombre de Gundam.",
  notes:
    "Recompilation of Gundam: The Battle Master 2 (PS1) in progress with PSXRecomp. It requires your own disc and boots with OpenBIOS; the project is still under development.",
  notesEs:
    "Recompilación en progreso de Gundam: The Battle Master 2 (PS1) con PSXRecomp. Requiere tu propio disco y arranca con OpenBIOS; el proyecto sigue en desarrollo.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Gundam%20the%20Battle%20Master%202%20(Japan).png",
    alt: "Gundam: The Battle Master 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Gundam%20the%20Battle%20Master%202%20(Japan).png",
      alt: "Gundam: The Battle Master 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
