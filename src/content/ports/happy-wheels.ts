import type { Port } from "@/lib/ports/schema";

export const HappyWheels: Port = {
  schema: "port",
  id: "happy-wheels",
  title: "Happy Wheels",
  game: "Happy Wheels",
  developers: ["Afterflash"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Afterflash/HappyWheels"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Happy_Wheels_Logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "Happy Wheels (cover)",
    credit: "Wikipedia",
  },
};
