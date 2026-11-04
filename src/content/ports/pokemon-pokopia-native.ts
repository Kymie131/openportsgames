import type { Port } from "@/lib/ports/schema";

export const pokemonPokopiaNative: Port = {
  schema: "port",
  id: "pokemon-pokopia-native",
  title: "Pokémon Pokopia Native",
  game: "Pokémon Pokopia",
  developers: ["xFractals"],
  publisher: "Nintendo",
  originalYear: 2026,
  portType: "runtime-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["macos", "ios"],
  status: "beta",
  release: { version: "1.0.3", date: "2026-11-03" },
  sources: ["https://github.com/xFractals/pokopia-native"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-04",
  originalSystems: ["Nintendo Switch 2"],
  related: ["pokemon-pokopia-recomp"],
  summary:
    "Pokémon Pokopia is a 2026 social simulation game co-developed by Game Freak and Koei Tecmo's Omega Force and published by Nintendo and The Pokémon Company for the Nintendo Switch 2. A spin-off of the Pokémon series, it stars a Ditto that transforms into a human to cultivate a post-apocalyptic world and help the Pokémon it meets.",
  summaryEs:
    "Pokémon Pokopia es un videojuego de simulación social de 2026 codirigido por Game Freak y Omega Force (Koei Tecmo) y publicado por Nintendo y The Pokémon Company para Nintendo Switch 2. Es un spin-off de la serie Pokémon protagonizado por un Ditto que se transforma en humano para cultivar un mundo postapocalíptico y ayudar a los Pokémon que encuentra.",
  notes:
    "Builds a native Mac app and an iPhone app from your own dump of Pokémon Pokopia 2.0.0 (v327680) or 2.0.1 (v655360), using NxNative as the host. The game's ARM64 code runs directly on the Apple chip and its graphics are translated to Metal; this is not an emulator. The Mac build needs Apple silicon and Xcode 27, and the iPhone build needs a paid Apple Developer team for its memory entitlements. A Windows builder can also produce the IPA. The author reports playing past the first wake-up without issues; a full playthrough has not been documented. No game files are included.",
  notesEs:
    "Genera una app nativa para Mac y otra para iPhone a partir de tu propio volcado de Pokémon Pokopia 2.0.0 (v327680) o 2.0.1 (v655360), usando NxNative como host. El código ARM64 del juego se ejecuta directamente en el chip de Apple y sus gráficos se traducen a Metal; no es un emulador. La compilación para Mac requiere Apple silicon y Xcode 27, y la de iPhone necesita un equipo de pago de Apple Developer por sus permisos de memoria. Un compilador para Windows también puede generar el IPA. El autor informa de que jugó más allá del primer despertar sin problemas; no se ha documentado una partida completa. No incluye archivos del juego.",
  warning:
    "The iPhone build needs a paid Apple Developer Program team; a free Apple ID cannot grant its memory entitlements.",
  warningEs:
    "La compilación para iPhone necesita un equipo de pago de Apple Developer Program; una cuenta gratuita de Apple no concede sus permisos de memoria.",
  requirements: {
    minimum: "Apple silicon Mac (M1 or newer), Xcode 27, Python 3.12 and the .NET 10 runtime",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6a/Pok%C3%A9mon_Pokopia_box_art.png",
    alt: "Pokémon Pokopia (box art)",
    credit: "Wikipedia",
  },
};
