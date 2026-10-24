import type { Port } from "@/lib/ports/schema";

export const starRod: Port = {
  schema: "port",
  id: "star-rod",
  title: "Star Rod",
  game: "Paper Mario",
  developers: ["Intelligent Systems"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.10.2", date: "2025-07-21" },
  sources: ["https://github.com/z64a/star-rod"],
  discord: "https://discord.gg/star",
  license: {
    spdx: "MIT",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  summary: "Paper Mario is a 2000 role-playing video game developed by Intelligent Systems and published by Nintendo for the Nintendo 64 home video game console. Paper Mario is the first game in the Paper Mario series. First released in Japan in 2000 and then internationally in 2001, Paper Mario was later re-released for Nintendo's Wii Virtual Console in July 2007, the Wii U Virtual Console in April 2015, and the Nintendo Classics service on December 10, 2021.",
  summaryEs: "Paper Mario es un videojuego de rol desarrollado por Intelligent Systems y publicado por Nintendo para la videoconsola doméstica Nintendo 64. Es el primer videojuego de la serie del mismo nombre. Lanzado por primera vez en Japón en el año 2000 y luego a nivel internacional en 2001, ha sido relanzado más tarde para la Consola Virtual de Wii en julio de 2007, la de Wii U en abril de 2015 y en Nintendo Switch Online + Expansion Pack el 10 de diciembre de 2021.",
  notes:
    "Native port and modding toolkit for Paper Mario from the decompilation project. Requires the original Paper Mario N64 ROM (legally obtained).",
  notesEs:
    "Port nativo y kit de modding para Paper Mario a partir del proyecto de decompilación. Requiere la ROM original de Paper Mario para N64 (obtenida legalmente).",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Paper%20Mario%20(USA).png",
    alt: "Paper Mario (cover)",
    credit: "Box art",
  },
  originalSystems: ["Nintendo 64"],
};
