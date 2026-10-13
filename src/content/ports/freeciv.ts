import type { Port } from "@/lib/ports/schema";

export const Freeciv: Port = {
  schema: "port",
  id: "freeciv",
  title: "Freeciv",
  game: "freeciv",
  developers: ["freeciv"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/freeciv/freeciv"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Freeciv_Web_Logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "freeciv (cover)",
    credit: "Wikipedia",
  },
};
