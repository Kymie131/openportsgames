import type { Port } from "@/lib/ports/schema";

export const pokered: Port = {
  schema: "port",
  id: "pokered",
  title: "Pokémon Red/Blue Disassembly",
  game: "Pokémon Red/Blue",
  developers: ["Game Freak"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/pret/pokered"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license in the repository",
  },
  aiDisclosure: false,
  verified: false,
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/wiki/pret/pokered/screenshots/town-map-ingame.png",
      alt: "The Town Map screen in Pokémon Red",
      credit: "pret/pokered wiki",
    },
  ],
  originalSystem: "Game Boy",
  notes:
    "Fully commented disassembly of the first generation Pokémon games that builds byte-perfect copies via rgbds. Produces the original Game Boy ROM rather than a native modern executable; the pairing projects in the pret organization power many quality-of-life remakes and hacks built from this source. The pret organization does not publish numbered releases; builds track the repository.",
  installGuide: {
    steps: [
      "Own a copy of Pokémon Red or Blue for the Game Boy.",
      "Dump the original ROM from your cartridge with a tool you are legally entitled to use.",
      "Follow the build instructions to supply the base ROM and produce the playable ROM with rgbds.",
      "Run the built ROM on your own hardware or the emulator you hold the rights for.",
    ],
    stepsEs: [
      "Ten una copia de Pokémon Red o Blue para Game Boy.",
      "Vuelca la ROM original desde tu cartucho con una herramienta que tengas permiso legal de usar.",
      "Sigue las instrucciones de compilación para aportar la ROM base y generar la ROM jugable con rgbds.",
      "Ejecuta la ROM generada en tu propio hardware o en el emulador del que tengas los derechos.",
    ],
  },
};
