import type { Port } from "@/lib/ports/schema";

export const marvelVsCapcomRecomp: Port = {
  schema: "port",
  id: "marvel-vs-capcom-recomp",
  title: "Marvel vs. Capcom Recompiled",
  game: "Marvel vs. Capcom: Clash of Super Heroes",
  developers: ["PortsDR"],
  publisher: "Capcom",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: [
    "https://github.com/TechnicallyComputers/Marvel-vs.-Capcom-Clash-of-Super-Heroes-Recomp",
  ],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Marvel vs. Capcom: Clash of Super Heroes is a 1998 crossover fighting game developed and published by Capcom for the CP System II arcade system. It is the third installment in the Marvel vs. Capcom series, which features characters from Capcom's video game franchises and characters from Marvel Comics. Unlike the series' previous entry, Marvel Super Heroes vs. Street Fighter (1997), this sequel features characters from numerous Capcom video game franchises, rather than strictly Street Fighter characters.",
  summaryEs: "Marvel vs. Capcom: Clash of Super Heroes, o simplemente conocido como \"Marvel Vs. Capcom\" o \"MVC\", es un videojuego de lucha crossovers entre las compañías Marvel Comics y Capcom lanzado a principios de 1998. Para el videojuego se rescatan muchos personajes clásicos de esta última compañía, tales como Mega Man, Strider Hiryū o Captain Commando. Es la tercera entrega de la serie Marvel vs. Capcom.",
  notes: "Indexed by PortsDR. No official repository is available, and it needs your own copy.",
  notesEs: "Indexado en PortsDR. No hay repositorio oficial disponible y necesita tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Marvel%20vs.%20Capcom%20-%20Clash%20of%20Super%20Heroes%20(Europe).png",
    alt: "Marvel vs. Capcom: Clash of Super Heroes (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Marvel%20vs.%20Capcom%20-%20Clash%20of%20Super%20Heroes%20(Europe).png",
      alt: "Marvel vs. Capcom: Clash of Super Heroes (screenshot)",
      credit: "Libretro",
    },
  ],
};
