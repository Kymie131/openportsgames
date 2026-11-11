import type { Port } from "@/lib/ports/schema";

export const Dgengine: Port = {
  schema: "port",
  id: "dgengine",
  title: "DGEngine",  game: "Diablo",
  developers: ["dgcor"],  publisher: "Blizzard Entertainment",  originalYear: 1996,
  portType: "source-port",  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.2", date: "2023-12-22" },
  sources: ["https://github.com/dgcor/DGEngine"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Diablo is a 1996 action role-playing game developed by Blizzard North and published by Blizzard Entertainment. Heroes descend into the town of Tristram and its dungeons to defeat the Lord of Terror.",  summaryEs: "Diablo es un juego de rol y acción de 1996 desarrollado por Blizzard North y publicado por Blizzard Entertainment. Los héroes descienden al pueblo de Tristram y sus mazmorras para derrotar al Señor del Terror.",  downloads: [
    {
      label: "Linux x64",
      url: "https://github.com/dgcor/DGEngine/releases/download/v1.2/DGEngine-linux-ffmpeg-x86_64.AppImage.zip",
      size: "51.3 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/dgcor/DGEngine/releases/download/v1.2/DGEngine-linux-x86_64.AppImage.zip",
      size: "4.9 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/dgcor/DGEngine/releases/download/v1.2/DGEngine-windows-x64.zip",
      size: "3.7 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/dgcor/DGEngine/releases/download/v1.2/DGEngine-windows-x86.zip",
      size: "3.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/dgengine.svg",
    alt: "DGEngine (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "An implementation of the Diablo 1 game engine.",
  notesEs: "Una implementación del motor de Diablo 1.",
};
