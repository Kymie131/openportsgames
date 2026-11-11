import type { Port } from "@/lib/ports/schema";

export const Generalsgamecode: Port = {
  schema: "port",
  id: "generalsgamecode",
  title: "GeneralsGameCode",  game: "Command & Conquer: Generals - Zero Hour",
  developers: ["TheSuperHackers"],  publisher: "Electronic Arts",  originalYear: 2003,
  portType: "source-port",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TheSuperHackers/GeneralsGameCode"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Command & Conquer: Generals - Zero Hour is a 2003 real-time strategy expansion developed by EA Pacific and published by Electronic Arts. It adds new campaigns, generals, units and superweapons to the modern-warfare formula of Generals.",  summaryEs: "Command & Conquer: Generals - Zero Hour es una expansión de estrategia en tiempo real de 2003 desarrollada por EA Pacific y publicada por Electronic Arts. Añade campañas, generales, unidades y superarmas a la fórmula de guerra moderna de Generals.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/TheSuperHackers/GeneralsGameCode/releases/download/weekly-2026-11-06/generalszh-weekly-2026-11-06.zip",
      size: "31.9 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/TheSuperHackers/GeneralsGameCode/releases/download/weekly-2026-11-06/generals-weekly-2026-11-06.zip",
      size: "30.1 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/generalsgamecode.svg",
    alt: "GeneralsGameCode (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Command and Conquer: Generals - Zero Hour.",
  notesEs: "Command and Conquer: Generals - Zero Hour.",
};
