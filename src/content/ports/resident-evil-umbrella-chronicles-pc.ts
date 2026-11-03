import type { Port } from "@/lib/ports/schema";

export const residentEvilUmbrellaChroniclesPc: Port = {
  schema: "port",
  id: "resident-evil-umbrella-chronicles-pc",
  title: "Resident Evil: The Umbrella Chronicles (PC recomp)",
  game: "Resident Evil: The Umbrella Chronicles",
  developers: ["solleo95"],
  publisher: "Capcom",
  originalYear: 2007,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.1.1", date: "2026-11-03" },
  sources: ["https://github.com/solleo95/reuc-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["Wii"],
  summary:
    "Resident Evil: The Umbrella Chronicles is a 2007 rail shooter developed and published by Capcom for the Wii. It retells the events of Resident Evil 0, Resident Evil and Resident Evil 3 from the perspective of the Umbrella Corporation, with light-gun style aiming and destructible environments.",
  summaryEs:
    "Resident Evil: The Umbrella Chronicles es un shooter sobre raíles de 2007 desarrollado y publicado por Capcom para Wii. Recrea los sucesos de Resident Evil 0, Resident Evil y Resident Evil 3 desde la perspectiva de Umbrella Corporation, con puntería de pistola de luz y escenarios destructibles.",
  notes:
    "Static recompilation of the Wii rail shooter for Windows, Linux and Steam Deck. Version 0.1.1 is an early build with unlocked FPS, ultrawide support, mouse, gamepad, light-gun and Wii Remote aiming, DLSS and FSR 3.1 with frame generation, ray-traced shadows, HDR, mods and online co-op. Requires your own NTSC-U disc image (game ID RBUE08) in ISO, WBFS, CISO, WDF or WIA format; RVZ files must be converted in Dolphin first. PAL and Japanese versions are not supported. No game files are included.",
  notesEs:
    "Recompilación estática del shooter sobre raíles de Wii para Windows, Linux y Steam Deck. La versión 0.1.1 es una build temprana con FPS desbloqueados, ultrapanorámico, puntería con ratón, mando, pistola de luz y Wii Remote, DLSS y FSR 3.1 con generación de fotogramas, sombras trazadas, HDR, mods y cooperativo online. Requiere tu propia imagen de disco NTSC-U (ID RBUE08) en formato ISO, WBFS, CISO, WDF o WIA; los archivos RVZ deben convertirse antes en Dolphin. Las versiones PAL y japonesa no son compatibles. No incluye archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b5/Resident_Evil%2C_The_Umbrella_Chronicles_%282007_video_game%29.jpg",
    alt: "Resident Evil: The Umbrella Chronicles (box art)",
    credit: "Wikipedia",
  },
};
