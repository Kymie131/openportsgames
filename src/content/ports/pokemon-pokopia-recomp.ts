import type { Port } from "@/lib/ports/schema";

export const pokemonPokopiaRecomp: Port = {
  schema: "port",
  id: "pokemon-pokopia-recomp",
  title: "Pokémon Pokopia Recomp",
  game: "Pokémon Pokopia",
  developers: ["drakolordx7"],
  publisher: "Nintendo",
  originalYear: 2026,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1.1", date: "2026-11-02" },
  sources: ["https://github.com/drakolordx7/pokopia-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-04",
  originalSystems: ["Nintendo Switch 2"],
  related: ["pokemon-pokopia-native"],
  summary:
    "Pokémon Pokopia is a 2026 social simulation game co-developed by Game Freak and Koei Tecmo's Omega Force and published by Nintendo and The Pokémon Company for the Nintendo Switch 2. A spin-off of the Pokémon series, it stars a Ditto that transforms into a human to cultivate a post-apocalyptic world and help the Pokémon it meets.",
  summaryEs:
    "Pokémon Pokopia es un videojuego de simulación social de 2026 codirigido por Game Freak y Omega Force (Koei Tecmo) y publicado por Nintendo y The Pokémon Company para Nintendo Switch 2. Es un spin-off de la serie Pokémon protagonizado por un Ditto que se transforma en humano para cultivar un mundo postapocalíptico y ayudar a los Pokémon que encuentra.",
  notes:
    "Static recompilation of the Switch 2 version for Windows, built on the developer's nxrecomp toolchain. The launcher compiles your own extracted copy of Pokémon Pokopia 2.0.1a on your PC (about 7 minutes) and then builds a shader cache (one to two hours). Requires Windows 10/11 64-bit, a Vulkan 1.3 GPU and 16 GB of RAM. F1 opens the in-game settings and the middle mouse button toggles Joy-Con 2 mouse mode. No game files are included.",
  notesEs:
    "Recompilación estática de la versión de Switch 2 para Windows, construida con la cadena de herramientas nxrecomp del desarrollador. El lanzador compila tu propia copia extraída de Pokémon Pokopia 2.0.1a en tu PC (unos 7 minutos) y después genera una caché de shaders (de una a dos horas). Requiere Windows 10/11 de 64 bits, una GPU con Vulkan 1.3 y 16 GB de RAM. F1 abre los ajustes del juego y el botón central del ratón alterna el modo ratón de los Joy-Con 2. No incluye archivos del juego.",
  requirements: {
    minimum: "Windows 10/11 64-bit, a Vulkan 1.3 GPU and 16 GB of RAM",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6a/Pok%C3%A9mon_Pokopia_box_art.png",
    alt: "Pokémon Pokopia (box art)",
    credit: "Wikipedia",
  },
};
