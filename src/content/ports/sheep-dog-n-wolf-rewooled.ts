import type { Port } from "@/lib/ports/schema";

export const SheepDogNWolfRewooled: Port = {
  schema: "port",
  id: "sheep-dog-n-wolf-rewooled",
  title: "Sheep, Dog 'n' Wolf: Rewooled",
  game: "Sheep, Dog 'n' Wolf",
  developers: ["SDW-Community"],
  publisher: "Infogrames",
  originalYear: 2001,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.1.3", date: "2026-10-19" },
  sources: ["https://github.com/SDW-Community/Sheep-Dog-n-Wolf-Rewooled"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Sheep, Dog 'n' Wolf is a 2001 stealth platform game developed by Infogrames Lyon House and published by Infogrames for the PlayStation.",
  summaryEs: "Sheep, Dog 'n' Wolf es un juego de plataformas y sigilo de 2001 desarrollado por Infogrames Lyon House y publicado por Infogrames para PlayStation.",  downloads: [
    {
      label: "Linux",
      url: "https://github.com/SDW-Community/Sheep-Dog-n-Wolf-Rewooled/releases/download/v1.1.3/Rewooled-Linux-x86_64-1.1.3.zip",
      size: "4.4 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/SDW-Community/Sheep-Dog-n-Wolf-Rewooled/releases/download/v1.1.3/Rewooled-macOS-arm64-1.1.3.zip",
      size: "4.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/SDW-Community/Sheep-Dog-n-Wolf-Rewooled/releases/download/v1.1.3/Rewooled-Windows-x64-1.1.3.zip",
      size: "3.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/sheep-dog-n-wolf-rewooled.svg",
    alt: "Sheep Dog n Wolf: Rewooled (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Decompilation of Sheep Dog n Wolf: Rewooled (Other).",
  notesEs: "Decompilación de Sheep Dog n Wolf: Rewooled (Other).",
};
