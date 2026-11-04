import type { Port } from "@/lib/ports/schema";

export const donkeyKongBananzaPc: Port = {
  schema: "port",
  id: "donkey-kong-bananza-pc",
  title: "Donkey Kong Bananza PC Recomp",
  game: "Donkey Kong Bananza",
  developers: ["Lucas-blip-png"],
  publisher: "Nintendo",
  originalYear: 2025,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/Lucas-blip-png/dkb-pc-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "Donkey Kong Bananza is a 2025 3D platformer developed by Nintendo EPD and published by Nintendo for the Nintendo Switch 2. Donkey Kong digs and punches through destructible underground layers, assisted by the child Pauline, to reach the planet's core.",
  summaryEs:
    "Donkey Kong Bananza es un juego de plataformas 3D de 2025 desarrollado por Nintendo EPD y publicado por Nintendo para Nintendo Switch 2. Donkey Kong cava y golpea a través de capas subterráneas destructibles, ayudado por la niña Pauline, para llegar al núcleo del planeta.",
  notes:
    "Static recompilation of the Nintendo Switch 2 game to native Windows x86-64 with a Vulkan renderer. The ARM64 code is translated to C and the NVN 2 graphics calls are reimplemented on PC. It boots through the title screen into the tutorial cave, where Donkey Kong can walk and punch, but it crashes after a few minutes on NVIDIA cards and many effects are missing. There is no release: an installer builds the game from your own dump. No game files are included.",
  notesEs:
    "Recompilación estática del juego de Nintendo Switch 2 a Windows x86-64 nativo con renderizador Vulkan. El código ARM64 se traduce a C y las llamadas gráficas NVN 2 se reimplementan en PC. Arranca, pasa por la pantalla de título y llega a la cueva del tutorial, donde Donkey Kong puede caminar y golpear, pero se cierra tras unos minutos en tarjetas NVIDIA y faltan muchos efectos. No hay release: un instalador compila el juego a partir de tu propio volcado. No incluye archivos del juego.",
  warning: "Early alpha: the game crashes after a few minutes and many effects are missing.",
  warningEs: "Alfa temprana: el juego se cierra tras unos minutos y faltan muchos efectos.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/01/Donkey_Kong_Bananza_updated_box_art.png",
    alt: "Donkey Kong Bananza (box art)",
    credit: "Wikipedia",
  },
};
