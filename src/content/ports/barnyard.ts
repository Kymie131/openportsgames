import type { Port } from "@/lib/ports/schema";

export const Barnyard: Port = {
  schema: "port",
  id: "barnyard",
  title: "Barnyard",
  game: "Barnyard",
  developers: ["InfiniteC0re"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/InfiniteC0re/OpenBarnyard"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/52/Traditional_Nottinghamshire_farmyard%2C_Lincoln_Rd%2C_Tuxford_-_geograph.org.uk_-_167753.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "Barnyard (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Decompilation of Barnyard the video game and TOSHI 2.0 game engine developed by Blue Tongue Entertainment.",
  notesEs:
    "Decompilación del videojuego Barnyard y del motor TOSHI 2.0 de Blue Tongue Entertainment.",
};
