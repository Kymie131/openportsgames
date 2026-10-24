import type { Port } from "@/lib/ports/schema";

export const finalFantasyIxRecomp: Port = {
  schema: "port",
  id: "final-fantasy-ix-recomp",
  title: "Final Fantasy IX Recompiled",
  game: "Final Fantasy IX",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 2000,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.1.1", date: "2026-09-30" },
  sources: ["https://github.com/alexbeavs-ps1-ports/final-fantasy-ix-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Final Fantasy IX is a 2000 role-playing video game developed and published by Square for the PlayStation video game console. It is the ninth game in the main Final Fantasy series. The plot focuses on a war between nations in a medieval fantasy world called Gaia. Players follow a thief named Zidane Tribal who kidnaps princess Garnet Til Alexandros XVII as part of a ploy by the neighboring nation of Lindblum. He joins Garnet and a growing cast of characters on a quest to take down her mother, Queen Brahne of Alexandria, who started the war, while uncovering the various reasons behind it.",
  summaryEs: "Final Fantasy IX es un videojuego de rol realizado por la empresa japonesa Squaresoft en 2000. Esta es la novena entrega del juego y el último capítulo de la saga realizado para la consola PlayStation. En esta ocasión, Squaresoft preparó un capítulo con el que pretendía volver a los orígenes de la saga, mostrándonos un mundo clásico entre lo medieval y lo fantástico.",
  notes:
    "Recompilation of Final Fantasy IX (PS1, USA SLUS-01251) with PSXRecomp and the recomp-ui launcher. It requires your own disc and a European SCPH-5502/5552 BIOS, and the wizard compiles the game locally. For now it is the 0.1.0 release candidate, with gameplay acceptance not yet closed.",
  notesEs:
    "Recompilación de Final Fantasy IX (PS1, USA SLUS-01251) con PSXRecomp y el lanzador recomp-ui. Requiere tu propio disco y una BIOS europea SCPH-5502/5552, y el asistente compila el juego localmente. Por ahora es la candidata 0.1.0, sin aceptación de gameplay cerrada.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Final%20Fantasy%20IX%20(Europe).png",
    alt: "Final Fantasy IX (box art)",
    credit: "Box art",
  },
};
