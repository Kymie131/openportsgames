import type { Port } from "@/lib/ports/schema";

export const pokewildsAndroid: Port = {
  schema: "port",
  id: "pokewilds-android",
  title: "PokeWilds (Android)",
  game: "PokeWilds",
  developers: ["TryTheSauceBoss"],
  publisher: "PokeWilds contributors",
  originalYear: 2022,
  portType: "runtime-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TryTheSauceBoss/Pokewilds-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Native Android port of PokeWilds, the open-source creature-collecting fan game. It is a standalone build that does not need commercial assets.",
  notesEs:
    "Port nativo para Android de PokeWilds, el fangame de captura de criaturas de código abierto. Es una build independiente que no necesita recursos comerciales.",
};
