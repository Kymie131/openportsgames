import type { Port } from "@/lib/ports/schema";

export const RyzomCore: Port = {
  schema: "port",
  id: "ryzom-core",
  title: "Ryzom Core",
  game: "Ryzom Core",
  developers: ["ryzom"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ryzom/ryzomcore"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Ryzom, also known as The Saga of Ryzom, is a free and open source massively multiplayer online role-playing game (MMORPG) for Microsoft Windows, OS X, and Linux. It was developed by Nevrax, released in 2004, and became free software in 2010. It takes place in a science fantasy world called Atys.",
  summaryEs: "Ryzom, también conocido como The Saga of Ryzom, es un juego de rol en línea multijugador masivo (MMORPG) gratuito y de código abierto desarrollado por Nevrax para Microsoft Windows, OS X y Linux.",
  cover: {
    src: "https://openportsgames.com/covers/generated/ryzom-core.svg",
    alt: "Ryzom Core (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Ryzom Core is the open-source MMORPG framework built on the NeL engine, maintained by the Ryzom Core community. The commercial Ryzom game is developed by Ryzom Forge on a downstream fork at gitlab.com/ryzom.",
  notesEs:
    "Ryzom Core es el framework MMORPG de código abierto construido sobre el motor NeL, mantenido por la comunidad de Ryzom Core. El juego comercial Ryzom lo desarrolla Ryzom Forge en una bifurcación propia en gitlab.com/ryzom.",
};
