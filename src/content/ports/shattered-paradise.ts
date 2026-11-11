import type { Port } from "@/lib/ports/schema";

export const ShatteredParadise: Port = {
  schema: "port",
  id: "shattered-paradise",
  title: "Shattered Paradise",
  game: "Shattered Paradise",
  developers: ["ABrandau"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ABrandau/Shattered-Paradise-SDK"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Shattered Paradise is a dark turn-based roguelike RPG inspired by The Divine Comedy. Descend through Inferno, Purgatory and Paradise in the aftermath of a rebellion that shattered creation itself. Prepare to challenge God... and live with everything that follows.",
  summaryEs: "Shattered Paradise es un videojuego de acción y aventura publicado por TBD.",
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/ABrandau/Shattered-Paradise-SDK/releases/download/playtest-20241231/ShatteredParadise-playtest-20241231.dmg",
      size: "286.2 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/ABrandau/Shattered-Paradise-SDK/releases/download/playtest-20241231/ShatteredParadise-playtest-20241231-x64-winportable.zip",
      size: "243.7 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/ABrandau/Shattered-Paradise-SDK/releases/download/playtest-20241231/ShatteredParadise-playtest-20241231-x86-winportable.zip",
      size: "240.6 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/ABrandau/Shattered-Paradise-SDK/releases/download/playtest-20241231/ShatteredParadise-playtest-20241231-x86_64.AppImage",
      size: "239.3 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/ABrandau/Shattered-Paradise-SDK/releases/download/playtest-20241231/ShatteredParadise-playtest-20241231-x64.exe",
      size: "206.2 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/ABrandau/Shattered-Paradise-SDK/releases/download/playtest-20241231/ShatteredParadise-playtest-20241231-x86.exe",
      size: "203.6 MB",
    },
  ],
  cover: {
    src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3970040/a966d7269d9b10e078402adb777de1b74878946c/header.jpg?t=1779039032",
    alt: "Shattered Paradise (Steam header)",
    credit: "Steam",
  },
  notes: "Shattered Paradise's main repository and installation Kit.",
  notesEs: "Repositorio principal e instalador de Shattered Paradise.",
};
