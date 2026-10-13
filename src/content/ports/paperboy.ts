import type { Port } from "@/lib/ports/schema";

export const Paperboy: Port = {
  schema: "port",
  id: "paperboy",
  title: "Paperboy",
  game: "Paperboy",
  developers: ["marijnvdwerf"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/marijnvdwerf/paperboy-n64"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Toronto_Star_paperboy_Whitby.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "Paperboy (cover)",
    credit: "Wikipedia",
  },
};
