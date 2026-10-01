import type { Port } from "@/lib/ports/schema";

export const openGothic: Port = {
  schema: "port",
  id: "open-gothic",
  title: "OpenGothic",
  game: "Gothic II",
  developers: ["Try Team"],
  publisher: "JoWooD Prod",
  originalYear: 2002,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Try/OpenGothic"],
  discord: "https://discord.gg/G9XvcFQnn6",
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Microsoft Windows",
  features: ["Modern renderer with dynamic lighting", "Cross-platform desktop builds"],
  notes:
    "Engine reimplementation for Gothic II. Published GitHub releases are prereleases only, so no stable version is recorded.",
};
