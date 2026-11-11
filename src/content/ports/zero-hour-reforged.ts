import type { Port } from "@/lib/ports/schema";

export const ZeroHourReforged: Port = {
  schema: "port",
  id: "zero-hour-reforged",
  title: "Zero Hour Reforged",  game: "Command & Conquer: Generals - Zero Hour",
  developers: ["olcayseygan"],  publisher: "Electronic Arts",  originalYear: 2003,
  portType: "source-port",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/olcayseygan/CnCGeneralsZH-Reforged"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Command & Conquer: Generals - Zero Hour is a 2003 real-time strategy expansion developed by EA Pacific and published by Electronic Arts. It adds new campaigns, generals, units and superweapons to the modern-warfare formula of Generals.",  summaryEs: "Command & Conquer: Generals - Zero Hour es una expansión de estrategia en tiempo real de 2003 desarrollada por EA Pacific y publicada por Electronic Arts. Añade campañas, generales, unidades y superarmas a la fórmula de guerra moderna de Generals.",  cover: {
    src: "https://openportsgames.com/covers/generated/zero-hour-reforged.svg",
    alt: "Zero Hour Reforged (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Zero Hour rebuilt from EA's source: x64, Direct3D 11, VS2022/CMake, ~60 original bugs fixed, an AI that builds a base. Bring your own game.",
  notesEs:
    "Zero Hour reconstruido desde el código de EA: x64, Direct3D 11, VS2022/CMake, ~60 errores corregidos y una IA que construye base. Aporta tu propio juego.",
};
