import type { Port } from "@/lib/ports/schema";

export const Navyfield2000Pc: Port = {
  schema: "port",
  id: "navyfield-2000-pc",
  title: "NavyFIELD (MissionFleet)",
  game: "NavyFIELD",
  developers: ["rbxrootx"],
  publisher: "SD EnterNET",
  originalYear: 2002,
  portType: "decompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/rbxrootx/MissionFleet"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "NavyFIELD is a 2002 massively multiplayer online naval warfare game developed and published by SD EnterNET. Set in World War II, players command warships from seven nations in large fleet battles.",
  summaryEs:
    "NavyFIELD es un videojuego de guerra naval multijugador masivo en línea de 2002 desarrollado y publicado por SD EnterNET. Ambientado en la Segunda Guerra Mundial, los jugadores comandan buques de guerra de siete naciones en grandes batallas de flota.",
  cover: {
    src: "https://openportsgames.com/covers/generated/navyfield-2000-pc.svg",
    alt: "NavyFIELD (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Decompilation of the NavyFIELD 2.062 client and server stack (MissionFleet).",
  notesEs: "Decompilación del cliente y servidor de NavyFIELD 2.062 (MissionFleet).",
};
