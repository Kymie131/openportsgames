import type { Port } from "@/lib/ports/schema";

export const ShortlineRailroad: Port = {
  schema: "port",
  id: "shortline-railroad",
  title: "Shortline railroad",
  game: "Shortline railroad",
  developers: ["konovalov-aleks"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/konovalov-aleks/reSL"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/67/DCP_0441kyle.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "Shortline railroad (cover)",
    credit: "Wikipedia",
  },
};
