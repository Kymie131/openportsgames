import type { Port } from "@/lib/ports/schema";

export const SyndicateWars: Port = {
  schema: "port",
  id: "syndicate-wars",
  title: "Syndicate Wars",
  game: "Syndicate Wars",
  developers: ["swfans"],
  publisher: "Electronic Arts",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3.8.3283", date: "2025-10-13" },
  sources: ["https://github.com/swfans/syndwarsfx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  downloads: [
    {
      label: "swars-0_3_8_3283-ubuntu-patch",
      url: "https://github.com/swfans/syndwarsfx/releases/download/0.3.8.3283/swars-0_3_8_3283-ubuntu-patch.zip",
      size: "2.8 MB",
    },
    {
      label: "swars-0_3_8_3283-ubuntu-sdl1-patch",
      url: "https://github.com/swfans/syndwarsfx/releases/download/0.3.8.3283/swars-0_3_8_3283-ubuntu-sdl1-patch.zip",
      size: "2.8 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/swfans/syndwarsfx/releases/download/0.3.8.3283/swars-0_3_8_3283-win32-patch.zip",
      size: "6.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/swfans/syndwarsfx/releases/download/0.3.8.3283/swars-0_3_8_3283-win32-sdl1-patch.zip",
      size: "5.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/swfans/syndwarsfx/releases/download/0.3.8.3283/swars-0_3_8_3283-win32-sdl1-setup.zip",
      size: "6.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/swfans/syndwarsfx/releases/download/0.3.8.3283/swars-0_3_8_3283-win32-setup.zip",
      size: "6.9 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/ec/Syndicate_Wars_Coverart.png",
    alt: "Syndicate Wars (box art)",
    credit: "Wikipedia",
  },
  summary: "Syndicate Wars is an isometric real-time tactical and strategic game, developed by Bullfrog Productions and published by Electronic Arts. It was released for DOS in 1996 and for the PlayStation in 1997. It is the second video game title in the Syndicate series, retaining the core gameplay and perspective of the original Syndicate, but with a setting 95 years further into the future.",
  summaryEs: "Syndicate Wars es un videojuego de acción y aventura publicado por Electronic Arts en 1996.",
  notes: "Syndicate Wars Fan Expansion, Open Source remake of the classic Bullfrog game.",
  notesEs: "Expansión de fans de Syndicate Wars, remake de código abierto del clásico de Bullfrog.",
};
