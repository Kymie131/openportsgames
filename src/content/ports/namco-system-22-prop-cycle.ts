import type { Port } from "@/lib/ports/schema";

export const namcoSystem22PropCycle: Port = {
  schema: "port",
  id: "namco-system-22-prop-cycle",
  title: "Prop Cycle (Namco System 22)",
  game: "Prop Cycle",
  developers: ["Namco"],
  publisher: "Namco",
  originalYear: 1996,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.4.2", date: "2026-09-27" },
  sources: ["https://github.com/spacestate1/namco22-decompile"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "Namco System 22",
  features: [
    "Playable from the first screen to the last, with sound",
    "Windows and Linux packages on the releases page, no building needed",
    "The Namco System 22 DSP BIOS is compiled in, so no extra file is required",
  ],
  featuresEs: [
    "Jugable desde la primera pantalla hasta la última, con sonido",
    "Paquetes para Windows y Linux en la página de releases, sin necesidad de compilar",
    "El BIOS DSP de Namco System 22 va compilado dentro, así que no hace falta ningún archivo extra",
  ],
  requirements: {
    minimum: "Your own Prop Cycle ROM set from MAME 0.271 or later (propcycl.zip)",
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/spacestate1/namco22-decompile/main/docs/images/propcycle-gameplay.png",
      alt: "Prop Cycle running on PC, boat crossing the river course",
      credit: "spacestate1/namco22-decompile",
    },
  ],
  notes:
    "Decompilation of the 1996 Namco arcade boat game for PC. Ships as ready-made Windows and Linux packages; you supply the arcade ROM set, which is not included.",
  notesEs:
    "Decompilación del juego arcade de barcos de Namco de 1996 para PC. Se publica como paquetes listos para Windows y Linux; tú aportas el set de ROM arcade, que no se incluye.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2e/Prop_Cycle_arcade_game_flyer.jpg",
    alt: "Prop Cycle (box art)",
    credit: "Wikipedia",
  },
};
