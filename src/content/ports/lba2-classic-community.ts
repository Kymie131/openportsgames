import type { Port } from "@/lib/ports/schema";

export const Lba2ClassicCommunity: Port = {
  schema: "port",
  id: "lba2-classic-community",
  title: "Lba2-classic-community",  game: "Little Big Adventure 2",
  developers: ["LBALab"],  publisher: "Electronic Arts",  originalYear: 1997,
  portType: "source-port",  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.13.2", date: "2026-10-22" },
  sources: ["https://github.com/LBALab/lba2-classic-community"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS", "Windows"],  summary: "Little Big Adventure 2 (Twinsen's Odyssey) is a 1997 action-adventure game developed by Adeline Software and published by Electronic Arts. Twinsen must stop an alien invasion of his home planet while protecting his wife Zoe and their unborn child.",  summaryEs: "Little Big Adventure 2 (Twinsen's Odyssey) es un juego de acción y aventura de 1997 desarrollado por Adeline Software y publicado por Electronic Arts. Twinsen debe detener una invasión alienígena de su planeta mientras protege a su esposa Zoe y a su futuro hijo.",  downloads: [
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
