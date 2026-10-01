import type { Port } from "@/lib/ports/schema";

export const odamexPort: Port = {
  schema: "port",
  id: "odamex",
  title: "Odamex",
  game: "Doom",
  developers: ["Odamex Development Team"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "12.3.0", date: "2026-08-06" },
  sources: ["https://github.com/odamex/odamex"],
  discord: "https://discord.gg/aMUzcZE",
  website: "https://odamex.net",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Client-server multiplayer",
    "High dynamic range lighting",
    "Model and sprite rendering improvements",
  ],
  notes: "Doom source port with a strong focus on multiplayer and modern rendering.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/odamex/odamex/stable/media/logo_128.png?raw=true",
      alt: "Odamex",
      credit: "odamex",
    },
  ],
};
