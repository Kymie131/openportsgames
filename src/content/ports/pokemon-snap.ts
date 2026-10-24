import type { Port } from "@/lib/ports/schema";

export const PokemonSnap: Port = {
  schema: "port",
  id: "pokemon-snap",
  title: "Pokemon Snap",
  game: "Pokemon Snap",
  developers: ["dreamsailing59-ops"],
  publisher: "Nintendo",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dreamsailing59-ops/Snapshot"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  sourceDead: true,
  originalSystems: ["Nintendo 64"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Pokemon%20Snap%20(Australia).png",
    alt: "Pokemon Snap (box art)",
    credit: "Box art",
  },
  summary: "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the first time in real-time 3D. The game was re-released for the Wii's Virtual Console in December 2007, for the Wii U's Virtual Console in 2016, and for the Nintendo Classics service in June 2022.",
  summaryEs: "Pokémon Snap es un videojuego creado por HAL Laboratory y Pax Softnica para la consola Nintendo 64, y posteriormente publicado para la Consola Virtual de la consola Wii de Nintendo en diciembre de 2007. A diferencia de otros juegos sobre Pokémon, que suelen ser sobre luchas entre Pokémon, el protagonista de éste es un fotógrafo que desde una plataforma móvil se desplaza a lo largo de todo un escenario consiguiendo fotos de todas las especies que es posible encontrar.",
  notes:
    "Static recompilation of Pokémon Snap (N64, 1999) for PC platforms (Windows, Linux, macOS). The upstream repository is no longer available.",
  notesEs: "Recompilación estática de Pokémon Snap (N64, 1999) para PC (Windows, Linux, macOS). El repositorio original ya no está disponible.",
};
