import type { Port } from "@/lib/ports/schema";

export const thymePort: Port = {
  schema: "port",
  id: "thyme",
  title: "Thyme",
  game: "Command & Conquer: Generals - Zero Hour",
  developers: ["The Assembly Armada"],
  publisher: "EA Pacific",
  originalYear: 2003,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TheAssemblyArmada/Thyme"],
  discord: "https://discord.gg/UnWK2Tw",
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Engine reimplementation for Generals and Zero Hour. The single GitHub release is a prerelease, so no stable version is recorded.",
  notesEs:
    "Reimplementación del motor de Generals y Zero Hour. La única release de GitHub es preliminar, así que no se registra versión estable.",
};
