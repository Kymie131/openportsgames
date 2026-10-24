import type { Port } from "@/lib/ports/schema";

export const pokemonStadiumRecomp: Port = {
  schema: "port",
  id: "pokemon-stadium-recomp",
  title: "Pokémon Stadium Recompiled",
  game: "Pokémon Stadium",
  developers: ["Game Freak"],
  publisher: "Nintendo",
  originalYear: 1999,
  genre: "strategy",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.4.7-beta", date: "2026-08-15" },
  sources: ["https://github.com/mstan/PokemonStadiumRecomp"],
  discord: "https://discord.gg/Ad9BwSzctP",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  features: [
    "Up to four player controllers, assignable to individual slots",
    "4x MSAA anti-aliasing enabled by default",
    "Graphics and control settings remembered between sessions",
  ],
  featuresEs: [
    "Hasta cuatro mandos de jugador, asignables a ranuras individuales",
    "Antialiasing 4x MSAA activado por defecto",
    "Ajustes de gráficos y control recordados entre sesiones",
  ],
  summary: "Pokémon Stadium is a 1999 strategy video game developed and published by Nintendo for the Nintendo 64. The gameplay revolves around a 3D turn-based battling system using the 151 Pokémon from the Game Boy games Pokémon Red, Blue, and Yellow, with several in-game challenges for players to overcome. The game includes four \"Cups\", each of which is a series of three-on-three Pokémon battles against an ordered lineup of opponents. The \"Gym Leader Castle\" mode involves battles against several boss opponents who appeared in the Game Boy games.",
  summaryEs: "Pokémon Stadium, conocido en Japón como Pokémon Stadium 2 , es un videojuego de Pokémon lanzado en abril de 2000 para Nintendo 64 en el que se pueden librar combates Pokémon en 3D, transferidos o no desde los juegos Pokémon Rojo y Azul y Pokémon Amarillo, con multitud de modos de juego. Existen dos versiones sin licencia del juego, como un juego raramente pobre para la Sega Mega Drive con muy pocos Pokémon para jugar que comparte música del juego Pocket Monsters 2, también para la Mega Drive.",
  notes:
    "Static recompilation of Pokémon Stadium (N64, USA v1.0) with N64Recomp. It implements the Transfer Pak and GB Tower, and adds its own launcher (SS Anne) to set up carts and controllers. The project went unmaintained in August 2026; the latest release stays available. The upstream repository is archived (read-only).",
  notesEs:
    "Recompilación estática de Pokémon Stadium (N64, USA v1.0) con N64Recomp. Implementa el Transfer Pak y el GB Tower, y añade un lanzador propio (SS Anne) para configurar cartuchos y mandos. El proyecto quedó sin mantenimiento en agosto de 2026; la última release sigue disponible. El repositorio original está archivado (solo lectura).",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/mstan/PokemonStadiumRecomp/main/docs/launcher.png",
      alt: "Launcher of Pokemon Stadium Recompiled",
      credit: "mstan/PokemonStadiumRecomp",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Pokemon%20Stadium%20(Europe)%20(Rev%201).png",
    alt: "Pokémon Stadium (box art)",
    credit: "Box art",
  },
};
