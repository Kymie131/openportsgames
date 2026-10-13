import type { Port } from "@/lib/ports/schema";

export const Black: Port = {
  schema: "port",
  id: "black",
  title: "Black",
  game: "Black",
  developers: ["squiddonaut"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/squiddonaut/pokeblack"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Tutankhamun_jackal_%28blacked%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "Black (cover)",
    credit: "Wikipedia",
  },
};
