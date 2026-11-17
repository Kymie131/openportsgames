import type { Port } from "@/lib/ports/schema";

export const kokororecomp: Port = {
  schema: "port",
  id: "kokororecomp",
  title: "KoroKoro Postnin",
  game: "KoroKoro Postnin",
  developers: ["elprogramadorloco-arch"],
  publisher: "Media Entertainment",
  originalYear: 2002,
  portType: "recompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "0.1", date: "2026-10-01" },
  sources: ["https://github.com/elprogramadorloco-arch/korokoro-recomp"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "KoroKoro Postnin is a 2002 puzzle platform game developed and published by Media Entertainment for the PlayStation. Players rotate the stage to guide Akane, a newspaper delivery girl, to every mailbox before reaching the exit.",
  summaryEs: "KoroKoro Postnin es un videojuego de puzles y plataformas de 2002 desarrollado y publicado por Media Entertainment para PlayStation. El jugador gira el escenario para guiar a Akane, una repartidora de periódicos, hasta todos los buzones antes de llegar a la salida.",  downloads: [
    {
      label: "Android",
      url: "https://github.com/elprogramadorloco-arch/korokoro-recomp/releases/download/v0.1/KoroKoroRecomp-Android-v0.1.zip",
      size: "564 KB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/korokoro-postnin.svg",
    alt: "KoroKoro Postnin (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "KoroKoro Postnin (Nintendo, 2000) for Android (static recompilation). Latest release: v0.1. Needs your own copy of the game.",
  notesEs: "KoroKoro Postnin (Nintendo, 2000) para Android (recompilación estática). Última release: v0.1. Necesita tu propia copia del juego.",
};
