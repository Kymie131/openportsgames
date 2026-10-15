import type { Port } from "@/lib/ports/schema";

export const Ares: Port = {
  schema: "port",
  id: "ares",
  title: "Ares",
  game: "ares",
  developers: ["ares-emulator"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  type: "tool",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ares-emulator/ares"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/%CE%9F_%CE%86%CF%81%CE%B7%CF%82_%28Borghese-%CE%9B%CE%BF%CF%8D%CE%B2%CF%81%CE%BF%CF%85%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "ares (cover)",
    credit: "Wikipedia",
  },
  notes:
    "ares is a cross-platform, open source, multi-system emulator, focusing on accuracy and preservation.",
  notesEs:
    "ares es un emulador multi-sistema de código abierto y multiplataforma, centrado en la precisión y la preservación.",
};
