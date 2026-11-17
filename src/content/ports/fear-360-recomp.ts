import type { Port } from "@/lib/ports/schema";

export const fear360Recomp: Port = {
  schema: "port",
  id: "fear-360-recomp",
  title: "F.E.A.R. (Xbox 360)",
  game: "F.E.A.R.",
  developers: ["Juansolo457"],
  publisher: "Vivendi Universal Games",
  originalYear: 2006,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1.0", date: "2026-10-24" },
  sources: ["https://github.com/Juansolo457/fear360-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-24",
  originalSystems: ["Xbox 360"],
  summary:
    "F.E.A.R. is a 2006 first-person shooter developed by Monolith Productions and published by Vivendi Universal Games. It follows a supernatural special-forces operative hunting a psychic threat while confronting the girl Alma.",
  summaryEs:
    "F.E.A.R. es un shooter en primera persona de 2006 desarrollado por Monolith Productions y publicado por Vivendi Universal Games. Sigue a un operativo de fuerzas especiales con poderes paranormales que persigue una amenaza psíquica mientras se enfrenta a la niña Alma.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/Juansolo457/fear360-recomp/releases/download/v1.7.0/FEAR360-Recompiled-1.7.0-Windows.zip",
      size: "24.2 MB",
    },
  ],
  cover: {
    src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21090/header.jpg?t=1773443317",
    alt: "F.E.A.R. (Steam header)",
    credit: "Steam",
  },
  notes: "Native PC recompilation of F.E.A.R. (Xbox 360) with 4K, high frame rates and controller support. No game data included.",
  notesEs: "Recompilación nativa para PC de F.E.A.R. (Xbox 360) con 4K, altas tasas de frames y mando. No incluye datos del juego.",
};
