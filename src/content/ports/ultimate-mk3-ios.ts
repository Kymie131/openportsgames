import type { Port } from "@/lib/ports/schema";

export const UltimateMk3Ios: Port = {
  schema: "port",
  id: "ultimate-mk3-ios",
  title: "Ultimate MK3 iOS",  game: "Ultimate Mortal Kombat 3",
  developers: ["MaryNCRT"],  publisher: "Midway",  originalYear: 1995,
  portType: "decompilation",  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/MaryNCRT/Ultimate-Mortal-Kombat-3-iOS-Decompiled"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Arcade"],  summary: "Ultimate Mortal Kombat 3 is a 1995 arcade fighting game developed and published by Midway. It expands Mortal Kombat 3 with more characters, stages, finishing moves and the return of classic fighters.",  summaryEs: "Ultimate Mortal Kombat 3 es un juego de lucha de arcade de 1995 desarrollado y publicado por Midway. Amplía Mortal Kombat 3 con más personajes, escenarios, remates y el regreso de luchadores clásicos.",  cover: {
    src: "https://openportsgames.com/covers/generated/ultimate-mk3-ios.svg",
    alt: "Ultimate MK3 iOS (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Ultimate Mortal Kombat 3 (iOS, EA Mobile 2011), fully decompiled: all 2,572 game functions are readable C, checked against a static ARM-to-C recompiler. Native port in progress: menus, sound and saves run; fight data tables extracted from your copy and verified; not playable yet. No game assets - bring your own copy.",
  notesEs:
    "Ultimate Mortal Kombat 3 (iOS, EA Mobile 2011), totalmente decompilado: las 2.572 funciones del juego en C legible, verificadas contra un recompilador estático de ARM a C. Port nativo en progreso: menús, sonido y guardados funcionan; aún no jugable. Sin recursos del juego: aporta tu propia copia.",
};
