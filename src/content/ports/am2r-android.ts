import type { Port } from "@/lib/ports/schema";

export const am2rAndroid: Port = {
  schema: "port",
  id: "am2r-android",
  title: "AM2R (Android)",
  game: "Another Metroid 2 Remake",
  developers: ["am2r-android"],
  publisher: "Nintendo",
  originalYear: 1991,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/am2r-android/AM2R-Autopatcher-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy",
  notes:
    "Android tool that patches the fan remake AM2R 1.1 into a modern Android build. It works with your own copy of the AM2R files.",
  notesEs:
    "Herramienta para Android que aplica un parche al remake AM2R 1.1 para convertirlo en una build moderna. Funciona con tu propia copia de los archivos de AM2R.",
};
