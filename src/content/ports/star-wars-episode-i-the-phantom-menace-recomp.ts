import type { Port } from "@/lib/ports/schema";

export const starWarsEpisodeIThePhantomMenaceRecomp: Port = {
  schema: "port",
  id: "star-wars-episode-i-the-phantom-menace-recomp",
  title: "Star Wars Episode I: The Phantom Menace Recompiled",
  game: "Star Wars Episode I: The Phantom Menace",
  developers: ["alexbeavs"],
  publisher: "LucasArts",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/star-wars-episode-i-the-phantom-menace-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Star Wars: Episode I – The Phantom Menace is a 1999 American epic space opera film written and directed by George Lucas in his first directorial effort since the original Star Wars, released in 1977. Produced by Lucasfilm Ltd. and distributed by 20th Century Fox, it is the fourth film in the Star Wars film series, the first film of the prequel trilogy and the first chronological chapter of the \"Skywalker Saga.\" The film stars Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd, Ahmed Best, Ian McDiarmid, Anthony Daniels, Kenny Baker, Pernilla August, and Frank Oz.",
  summaryEs: "Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia de medios de épica espacial compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas inicialmente por 20th Century Fox y posteriormente por The Walt Disney Company a partir de 2012.",
  notes:
    "Recompilation of Star Wars Episode I: The Phantom Menace (PS1, Europe SLES-02034) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Star Wars Episode I: The Phantom Menace (PS1, Europe SLES-02034) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Star%20Wars%20-%20Episode%20I%20-%20The%20Phantom%20Menace%20(Europe).png",
    alt: "Star Wars Episode I: The Phantom Menace (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Star%20Wars%20-%20Episode%20I%20-%20The%20Phantom%20Menace%20(Europe).png",
      alt: "Star Wars Episode I: The Phantom Menace (screenshot)",
      credit: "Libretro",
    },
  ],
};
