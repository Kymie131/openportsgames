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
  originalSystems: ["Windows"],
  summary: "Command and Conquer: Generals – Zero Hour is the expansion pack for the 2003 video game Command & Conquer: Generals. Zero Hour added several new abilities and units to each side, and a new mode of play called Generals' Challenge, along with a lot more changes, new features and bug/glitch fixes.",
  summaryEs: "Command & Conquer: Generals Zero Hour es un videojuego de estrategia publicado por Electronic Arts en 2003.",
  notes:
    "Engine reimplementation for Generals and Zero Hour. The single GitHub release is a prerelease, so no stable version is recorded.",
  notesEs:
    "Reimplementación del motor de Generals y Zero Hour. La única release de GitHub es preliminar, así que no se registra versión estable.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/20/Cncgzh-win-cover.jpg",
    alt: "Command & Conquer: Generals - Zero Hour (box art)",
    credit: "Wikipedia",
  },
};
