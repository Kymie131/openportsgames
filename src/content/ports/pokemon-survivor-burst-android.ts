import type { Port } from "@/lib/ports/schema";

export const pokemonSurvivorBurstAndroid: Port = {
  schema: "port",
  id: "pokemon-survivor-burst-android",
  title: "Pokémon Survivor Burst",
  game: "Pokémon Survivor Burst",
  developers: ["TryTheSauceBoss"],
  publisher: "TryTheSauceBoss",
  originalYear: 2024,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "9.0", date: "2026-10-12" },
  sources: ["https://github.com/TryTheSauceBoss/pokemon-survivorburst-android"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Other"],
  summary: "Pokémon Survivor Burst (Android) is a 2024 homebrew role-playing game for the Other, developed by TryTheSauceBoss.",
  summaryEs: "Pokémon Survivor Burst (Android) es un juego de rol homebrew de 2024 para Other, desarrollado por TryTheSauceBoss.",  downloads: [
    {
      label: "Android",
      url: "https://github.com/TryTheSauceBoss/Pokemon-Survivorburst-Android/releases/download/v9.0/Pokemon.Survivor.Burst.-.v9.0.-.Right.Stick.Shoot.apk",
      size: "597.9 MB",
    },
    {
      label: "Android",
      url: "https://github.com/TryTheSauceBoss/Pokemon-Survivorburst-Android/releases/download/v9.0/Pokemon.Survivor.Burst.-.v9.0.-.RT.Shoot.apk",
      size: "597.9 MB",
    },
    {
      label: "Android",
      url: "https://github.com/TryTheSauceBoss/Pokemon-Survivorburst-Android/releases/download/v9.0/Pokemon.Survivor.Burst.-.v9.0.apk",
      size: "597.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/pokemon-survivor-burst.svg",
    alt: "Pokémon Survivor Burst (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Pokemon Survivor Burst (TryTheSauceBoss, 2024) for Android (source port). Latest release: v9.0. Needs your own copy of the game.",
  notesEs: "Pokemon Survivor Burst (TryTheSauceBoss, 2024) para Android (port de código). Última release: v9.0. Necesita tu propia copia del juego.",
};
