import type { Port } from "@/lib/ports/schema";

export const alephOne: Port = {
  schema: "port",
  id: "aleph-one",
  title: "Aleph One",
  game: "Marathon 2",
  developers: ["Bungie"],
  publisher: "Bungie",
  originalYear: 1996,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.11.1", date: "2026-10-01" },
  sources: ["https://github.com/Aleph-One-Marathon/alephone"],
  discord: "https://discord.gg/NvF3pdV",
  website: "https://alephone.lhowon.org/",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Xbox",
  features: [
    "Ready-to-run packages for Marathon, Marathon 2 and Marathon Infinity",
    "macOS, Windows and Linux Flatpak builds published together",
  ],
  notes:
    "Open source continuation of Bungie's Marathon 2 engine, played with the original game data. Upstream tags releases by date instead of semantic versioning, so the version mirrors the 20250829 build.",
};
