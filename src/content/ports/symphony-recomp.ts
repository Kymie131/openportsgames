import type { Port } from "@/lib/ports/schema";

export const symphonyRecomp: Port = {
  schema: "port",
  id: "symphony-recomp",
  title: "SymphonyRecomp",
  game: "Castlevania: Symphony of the Night",
  developers: ["Konami"],
  publisher: "Konami",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.5.1-b", date: "2026-08-19" },
  sources: ["https://github.com/BlackLabelHQ/SymphonyRecomp"],
  discord: "https://discord.gg/65g8ZEPnbR",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license in the repository",
  },
  verified: false,
  originalSystem: "PlayStation",
  features: [
    "Widescreen and resolution scaling",
    "Built-in modding and asset replacement system",
    "Multiple UI languages and a themed interface",
    "Randomizer support with save metadata",
  ],
  featuresEs: [
    "Panorámico y escalado de resolución",
    "Sistema integrado de modding y reemplazo de recursos",
    "Interfaz en varios idiomas y una interfaz temática",
    "Soporte de randomizer con metadatos de guardado",
  ],
  notes:
    "Recompilation of Castlevania: Symphony of the Night (PS1) that runs natively on Windows, Linux and macOS. Open beta releases (v0.5.1b) and active development; the maintainers explicitly state the port does not use AI. Requires the game dump from a disc copy you own, .NET 10 runtime and OpenAL.",
  notesEs:
    "Recompilación de Castlevania: Symphony of the Night (PS1) que corre nativa en Windows, Linux y macOS. Releases beta abiertas (v0.5.1b) y desarrollo activo; los mantenedores afirman explícitamente que el port no usa IA. Requiere el volcado del juego de una copia en disco que poseas, el runtime .NET 10 y OpenAL.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Castlevania%20-%20Symphony%20of%20the%20Night%20(USA).png",
    alt: "Castlevania: Symphony of the Night (box art)",
    credit: "Box art",
  },
};
