import type { Port } from "@/lib/ports/schema";

export const TailsAdventureTailsAdventureRemake: Port = {
  schema: "port",
  id: "tails-adventure-tails-adventure-remake",
  title: "Tails Adventure (Tails Adventure Remake)",  game: "Tails Adventure",
  developers: ["mechakotik"],  publisher: "Sega",  originalYear: 1995,
  portType: "reimplementation",  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3.2-1", date: "2026-04-22" },
  sources: ["https://github.com/mechakotik/tails-adventure"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Game Gear"],  summary: "Tails Adventure is a 1995 platform game developed by Aspect and published by Sega for the Game Gear. Tails explores Cocoa Island, using bombs and gadgets to stop the Battle Kukku Army.",  summaryEs: "Tails Adventure es un juego de plataformas de 1995 desarrollado por Aspect y publicado por Sega para Game Gear. Tails explora la isla Cocoa y usa bombas y artilugios para detener al Ejército Battle Kukku.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/mechakotik/tails-adventure/releases/download/v0.3.2-1/tails-adventure-v0.3.2-1-windows.zip",
      size: "6.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/mechakotik/tails-adventure/releases/download/v0.3.2-1/tails-adventure-v0.3.2-1-linux-amd64.tar.xz",
      size: "4.7 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/tails-adventure-tails-adventure-remake.svg",
    alt: "Tails Adventure (Tails Adventure Remake) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Tails Adventure remade from the ground up for PC and Android.",
  notesEs: "Tails Adventure rehacido desde cero para PC y Android.",
};
