import type { Port } from "@/lib/ports/schema";

export const trxPort: Port = {
  schema: "port",
  id: "trx",
  title: "TRX",
  game: "Tomb Raider I-III",
  developers: ["TRX Team"],
  publisher: "Core Design",
  originalYear: 1996,
  genre: "action-adventure",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.11.1", date: "2026-09-22" },
  sources: ["https://github.com/LostArtefacts/TRX"],
  website: "https://lostartefacts.dev/",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Cross-platform desktop builds",
    "Modern renderer and audio",
    "Scripting and level editing support",
  ],
  featuresEs: [
    "Builds de escritorio multiplataforma",
    "Renderizado y audio modernos",
    "Soporte de scripting y edición de niveles",
  ],
  notes:
    "Engine reimplementation covering the classic Tomb Raider games. Original game assets are not distributed.",
  notesEs:
    "Reimplementación del motor que cubre los Tomb Raider clásicos. Los recursos del juego original no se distribuyen.",
};
