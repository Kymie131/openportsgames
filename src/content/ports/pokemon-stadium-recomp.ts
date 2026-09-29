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
  originalSystem: "Nintendo 64",
  features: [
    "Up to four player controllers, assignable to individual slots",
    "4x MSAA anti-aliasing enabled by default",
    "Graphics and control settings remembered between sessions",
  ],
  notes:
    "Pokémon Stadium (US v1.0) recompiled with a fork of N64Recomp; the player supplies their own legally obtained cartridge. The project documents antivirus and Windows SmartScreen false positives on the build.",
};
