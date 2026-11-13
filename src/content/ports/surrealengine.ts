import type { Port } from "@/lib/ports/schema";

export const Surrealengine: Port = {
  schema: "port",
  id: "surrealengine",
  title: "SurrealEngine",  game: "Unreal",
  developers: ["dpjudas"],  publisher: "Epic MegaGames",  originalYear: 1998,
  portType: "reimplementation",  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dpjudas/SurrealEngine"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Unreal is a 1998 first-person shooter developed by Epic MegaGames and published by GT Interactive. The prisoner Vortex Rikers crashes on the planet Na Pali, and the player fights the Skaarj while exploring an alien world.",  summaryEs: "Unreal es un shooter en primera persona de 1998 desarrollado por Epic MegaGames y publicado por GT Interactive. La prisión Vortex Rikers se estrella en el planeta Na Pali y el jugador lucha contra los Skaarj mientras explora un mundo alienígena.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/dpjudas/SurrealEngine/releases/download/nightly/SurrealEngine-windows-prerelease.zip",
      size: "23.0 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/dpjudas/SurrealEngine/releases/download/nightly/SurrealEngine-linux-prerelease.zip",
      size: "15.2 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/dpjudas/SurrealEngine/releases/download/nightly/SurrealEngine-macos-prerelease.zip",
      size: "9.0 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/surrealengine.svg",
    alt: "SurrealEngine (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Unreal Engine 1 Reimplementation.",
  notesEs: "Reimplementación del Unreal Engine 1.",
};
