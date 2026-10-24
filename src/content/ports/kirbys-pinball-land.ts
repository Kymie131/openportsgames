import type { Port } from "@/lib/ports/schema";

export const KirbysPinballLand: Port = {
  schema: "port",
  id: "kirbys-pinball-land",
  title: "Kirby's Pinball Land",
  game: "Kirby's Pinball Land",
  developers: ["omegakatana92"],
  publisher: "Nintendo",
  originalYear: 1993,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/Kirby-Pinball-Land-Recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/ee/Kirbys-Pinball-Land-Gameboy-Boxart.png",
    alt: "Kirby's Pinball Land (cover)",
    credit: "Wikipedia",
  },
  summary: "Kirby's Pinball Land is a 1993 pinball video game developed by HAL Laboratory and published by Nintendo for the Game Boy. It was HAL Laboratory's third pinball video game after the MSX and NES title Rollerball and the Game Boy title Revenge of the 'Gator. It was also the first spin-off and second Game Boy title in the Kirby series, as well as the second pinball video game Nintendo published after the NES title Pinball. The game was rereleased on the Nintendo 3DS' Virtual Console service in July 2012.",
  summaryEs: "Kirby's Pinball Land, conocido en Japón como Kirby no Pinball , es un videojuego de la videoconsola portátil Game Boy desarrollado por HAL Laboratory. Fue el tercer juego de la serie de Kirby.",
  notes:
    "A fan-made recompilation of Kirby's Pinball Land for modern systems. Requires the user's own legally obtained ROM. No copyrighted ROM or Nintendo/HAL Laboratory assets are included. Supports fullscreen with Alt+Enter, keyboard controls, and community contributions. Switch 2 support may be considered where possible.",
  notesEs:
    "Recompilación hecha por fans de Kirby's Pinball Land para sistemas modernos. Requiere que el usuario aporte su propia ROM obtenida legalmente. No incluye ROM ni recursos con derechos de autor.",
};
