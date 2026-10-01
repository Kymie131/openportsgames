import type { Port } from "@/lib/ports/schema";

export const doukutsuRs: Port = {
  schema: "port",
  id: "doukutsu-rs",
  title: "doukutsu-rs",
  game: "Cave Story",
  developers: ["doukutsu-rs contributors"],
  publisher: "Pixel",
  originalYear: 2004,
  genre: "platformer",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "1.0.0", date: "2026-06-03" },
  sources: ["https://github.com/doukutsu-rs/doukutsu-rs"],
  website: "https://doukutsu.rs",
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Microsoft Windows",
  features: ["Cross-platform desktop builds", "Android build", "Multiple unofficial translations"],
  notes:
    "Unofficial open source port of Cave Story. The original freeware game data is required and is not distributed with the repository.",
};
