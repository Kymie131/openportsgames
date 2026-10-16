import type { Port } from "@/lib/ports/schema";

export const Lba2ClassicCommunity: Port = {
  schema: "port",
  id: "lba2-classic-community",
  title: "Lba2-classic-community",
  game: "lba2-classic-community",
  developers: ["LBALab"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/LBALab/lba2-classic-community"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "Community-maintained source port of the original Little Big Adventure 2 (Twinsen’s Odyssey) engine.",
  notesEs:
    "Port del código fuente del motor original de Little Big Adventure 2 (Twinsen's Odyssey) mantenido por la comunidad.",
};
