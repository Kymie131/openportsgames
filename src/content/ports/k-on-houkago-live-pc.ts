import type { Port } from "@/lib/ports/schema";

export const kOnHoukagoLivePc: Port = {
  schema: "port",
  id: "k-on-houkago-live-pc",
  title: "K-On! Houkago Live!! (PC)",  game: "K-On! Houkago Live!!",
  developers: ["EDGX73"],  publisher: "Sega",  originalYear: 2010,
  portType: "recompilation",  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.2.0", date: "2026-10-28" },
  sources: ["https://github.com/EDGX73/KOn-Houkago-Live-Recompiled"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,  originalSystems: ["PlayStation Portable"],  summary: "K-On! Houkago Live!! is a 2010 rhythm game developed by Hijinx and published by Sega for the PlayStation Portable. Players perform songs from the K-On! anime with the light music club band.",  summaryEs: "K-On! Houkago Live!! es un juego de ritmo de 2010 desarrollado por Hijinx y publicado por Sega para PlayStation Portable. Los jugadores interpretan canciones del anime K-On! con la banda del club de música ligera.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/EDGX73/KOn-Houkago-Live-Recompiled/releases/download/v0.2.0/K-On.Houkago.Live.Recompiled-v0.2.0-windows.zip",
      size: "86.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/k-on-houkago-live.svg",
    alt: "K-On! Houkago Live!! (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "K-On! Houkago Live!! (Sega, 2010) running on Windows through static recompilation. Latest release: v0.1.0. You need your own copy of the game.",
  notesEs: "K-On! Houkago Live!! (Sega, 2010) en Windows mediante recompilación estática. Última release: v0.1.0. Necesitas tu propia copia del juego.",
};
