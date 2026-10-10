import type { Port } from "@/lib/ports/schema";

export const cod4Ios: Port = {
  schema: "port",
  id: "cod4-ios",
  title: "Call of Duty 4 (iOS)",
  game: "Call of Duty 4: Modern Warfare",
  developers: ["DevZer0D4Y"],
  publisher: "Activision",
  originalYear: 2007,
  portType: "runtime-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["ios"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DevZer0D4Y/COD4iOS-COD4NS"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Community port of Call of Duty 4: Modern Warfare for iOS, with an additional build for Nintendo Switch. It needs your own copy of the game.",
  notesEs:
    "Port comunitario de Call of Duty 4: Modern Warfare para iOS, con una build adicional para Nintendo Switch. Necesita tu propia copia del juego.",
};
