import type { Port } from "@/lib/ports/schema";

export const jillOfTheJungleAndroid: Port = {
  schema: "port",
  id: "jill-of-the-jungle-android",
  title: "Jill of the Jungle (Android)",
  game: "Jill of the Jungle",
  developers: ["wootbeer"],
  publisher: "Epic MegaGames",
  originalYear: 1992,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/jillandroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "MS-DOS",
  notes:
    "Source port of Jill of the Jungle (MS-DOS) for Android with quality-of-life features and on-screen touch controls, built on the Descore framework. It needs the player's own copy of the game files.",
  notesEs:
    "Port del código fuente de Jill of the Jungle (MS-DOS) para Android con funciones de comodidad y controles táctiles en pantalla, basado en el framework Descore. Necesita los archivos del juego original del jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Jill%20of%20the%20Jungle%20(1992).png",
    alt: "Jill of the Jungle (box art)",
    credit: "Box art",
  },
};
