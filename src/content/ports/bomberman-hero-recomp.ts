import type { Port } from "@/lib/ports/schema";

export const bombermanHeroRecomp: Port = {
  schema: "port",
  id: "bomberman-hero-recomp",
  title: "Bomberman Hero: Recompiled",
  game: "Bomberman Hero",
  developers: ["Hudson Soft"],
  publisher: "Hudson Soft",
  originalYear: 1998,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/RevoSucks/BMHeroRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Bomberman Hero rebuilt with N64: Recompiled; the player supplies their own legally obtained game. The project states that only a Windows executable is provided, while its README also describes a Linux binary and Steam Deck support, so only Windows is listed here as confirmed. No tagged release exists yet.",
  notesEs:
    "Bomberman Hero reconstruido con N64: Recompiled; el jugador aporta su propio juego obtenido legalmente. El proyecto indica que solo se ofrece un ejecutable para Windows, aunque su README también describe un binario para Linux y soporte para Steam Deck, por lo que aquí solo se lista Windows como confirmado. Aún no existe una release etiquetada.",
};
