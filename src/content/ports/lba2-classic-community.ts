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
  release: { version: "0.13.2", date: "2026-10-22" },
  sources: ["https://github.com/LBALab/lba2-classic-community"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "lba2-classic-community is a action-adventure game, released in 2000.",
  summaryEs: "lba2-classic-community es un videojuego de acci�n y aventura, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Linux x64",
      url: "https://github.com/LBALab/lba2-classic-community/releases/download/v0.13.2/lba2cc-0.13.2-anylinux-x86_64.AppImage",
      size: "18.4 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/LBALab/lba2-classic-community/releases/download/v0.13.2/lba2cc-0.13.2-anylinux-aarch64.AppImage",
      size: "17.5 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/LBALab/lba2-classic-community/releases/download/v0.13.2/lba2cc-0.13.2-linux-x86_64.tar.gz",
      size: "2.4 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/LBALab/lba2-classic-community/releases/download/v0.13.2/lba2cc-0.13.2-linux-aarch64.tar.gz",
      size: "2.2 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/lba2-classic-community.svg",
    alt: "lba2-classic-community (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Community-maintained source port of the original Little Big Adventure 2 (Twinsen’s Odyssey) engine.",
  notesEs:
    "Port del código fuente del motor original de Little Big Adventure 2 (Twinsen's Odyssey) mantenido por la comunidad.",
};
