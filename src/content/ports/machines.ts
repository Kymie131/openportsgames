import type { Port } from "@/lib/ports/schema";

export const Machines: Port = {
  schema: "port",
  id: "machines",
  title: "Machines",
  game: "machines",
  developers: ["WiredForWar"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/WiredForWar/machines"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Woman_operator_operating_milling_machine_-_DPLA_-_34dc4b36bfa1d73f44c4d6983b12f77c_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "machines (cover)",
    credit: "Wikipedia",
  },
};
