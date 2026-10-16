import type { Port } from "@/lib/ports/schema";

export const icoPc: Port = {
  schema: "port",
  id: "ico-pc",
  title: "ICO PC",
  game: "Ico",
  developers: ["nathanialf"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nathanialf/ico-pc"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  notes:
    "Native port of Ico built from the PlayStation 2 decompilation, for Windows, Linux, macOS and Android. It needs your own copy of the game.",
  notesEs:
    "Port nativo de Ico construido a partir de la decompilación de PlayStation 2, para Windows, Linux, macOS y Android. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Ico%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Ico (box art)",
    credit: "Box art",
  },
};
