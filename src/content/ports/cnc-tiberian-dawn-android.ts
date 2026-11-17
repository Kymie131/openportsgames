import type { Port } from "@/lib/ports/schema";

export const cncTiberianDawnAndroid: Port = {
  schema: "port",
  id: "cnc-tiberian-dawn-android",
  title: "Command & Conquer: Tiberian Dawn (Android)",
  game: "Command & Conquer: Tiberian Dawn",
  developers: ["dk8827"],
  publisher: "Virgin Interactive",
  originalYear: 1995,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/dk8827/cnc-port"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-22",
  originalSystems: ["Windows"],
  summary:
    "Command & Conquer: Tiberian Dawn is a 1995 real-time strategy game developed by Westwood Studios and published by Virgin Interactive. It pits the Global Defense Initiative against the Brotherhood of Nod in a campaign fought over the alien resource Tiberium.",
  summaryEs:
    "Command & Conquer: Tiberian Dawn es un videojuego de estrategia en tiempo real de 1995 desarrollado por Westwood Studios y publicado por Virgin Interactive. Enfrenta a la Iniciativa de Defensa Global contra la Hermandad de Nod en una campaña por el recurso alienígena Tiberium.",
  cover: {
    src: "https://openportsgames.com/covers/generated/command-conquer-tiberian-dawn.svg",
    alt: "Command & Conquer: Tiberian Dawn (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Unofficial native port of Command & Conquer: Tiberian Dawn for Android, iOS and macOS. Bring your own game assets.",
  notesEs: "Port nativo no oficial de Command & Conquer: Tiberian Dawn para Android, iOS y macOS. Aporta tus propios recursos del juego.",
};
