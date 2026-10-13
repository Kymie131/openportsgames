import type { Port } from "@/lib/ports/schema";

export const AncientEmpires: Port = {
  schema: "port",
  id: "ancient-empires",
  title: "Ancient Empires",
  game: "Ancient Empires",
  developers: ["Atomk"],
  publisher: "Unknown",
  originalYear: 2004,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Atomk/ancient-empires-1-decompilation"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/81/Modern_Empires.svg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "Ancient Empires (cover)",
    credit: "Wikipedia",
  },
};
