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
  featuresEs: [
    "Paquetes listos para ejecutar Marathon, Marathon 2 y Marathon Infinity",
    "Builds de macOS, Windows y Flatpak de Linux publicadas juntas",
  ],
  notes:
    "Open source continuation of Bungie's Marathon 2 engine, played with the original game data. Upstream tags releases by date instead of semantic versioning, so the version mirrors the 20250829 build.",
  notesEs:
    "Continuación de código abierto del motor de Marathon 2 de Bungie, jugable con los datos del juego original. El proyecto etiqueta sus versiones por fecha en lugar de versionado semántico, así que la versión refleja la build 20250829.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b4/Ambox_important.svg",
    alt: "Marathon 2 (box art)",
    credit: "Wikipedia",
  },
};
