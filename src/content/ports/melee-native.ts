import type { Port } from "@/lib/ports/schema";

export const meleeNative: Port = {
  schema: "port",
  id: "melee-native",
  title: "Melee Native",
  game: "Super Smash Bros. Melee",
  developers: ["HAL Laboratory"],
  publisher: "Nintendo",
  originalYear: 2001,
  genre: "fighting",
  openSource: true,
  portType: "decompilation",
  platforms: ["macos", "linux"],
  status: "alpha",
  release: { version: "0.1.0-linux.1", date: "2026-09-08" },
  sources: ["https://github.com/jonrosner/melee-native"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystems: ["GameCube"],
  features: ["Native Apple Silicon (macOS) build", "Native Linux x86-64 build"],
  featuresEs: ["Build nativa para Apple Silicon (macOS)", "Build nativa para Linux x86-64"],
  summary: "Super Smash Bros. Melee is a 2001 crossover fighting game developed by HAL Laboratory and published by Nintendo for the GameCube. It is the second installment in the Super Smash Bros. series. It features characters from Nintendo video game franchises such as Mario, The Legend of Zelda, Star Fox, Pokémon, and Donkey Kong among others. The stages and gameplay modes reference or take designs from these franchises as well.",
  summaryEs: "Super Smash Bros. Melee, conocido en Japón como Dairantō Smash Brothers DX , a veces abreviado como SSBM o simplemente Melee, es el segundo título de la serie de juegos de lucha y acción crossover Super Smash Bros. distribuido para la Nintendo GameCube en el 2001 en Japón y los Estados Unidos, y al año siguiente en Europa y Australia. Es el sucesor de Super Smash Bros. para Nintendo 64 de 1999, y el predecesor de Super Smash Bros. Brawl para Wii de 2008. Fue desarrollado por HAL Laboratory, y dirigido por el productor Masahiro Sakurai.",
  notes:
    "Native port of Super Smash Bros. Melee built from the doldecomp research decompilation. First tagged release covers macOS Apple Silicon and Linux x86-64; Windows and Android builds are not published. Requires game files from a legally owned US NTSC 1.02 copy of the disc. The project, following its doldecomp origins, documents AI-assisted development in CONTRIBUTING.",
  notesEs:
    "Port nativo de Super Smash Bros. Melee construido a partir de la decompilación de investigación doldecomp. La primera release etiquetada cubre macOS Apple Silicon y Linux x86-64; no se publican builds para Windows ni Android. Requiere archivos del juego de una copia del disco USA NTSC 1.02 poseída legalmente. El proyecto, siguiendo sus orígenes doldecomp, documenta el desarrollo asistido por IA en CONTRIBUTING.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/jonrosner/melee-native/main/native/platform/macos/resources/SSBM.png",
      alt: "Super Smash Bros. Melee icon used by Melee Native",
      credit: "melee-native",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Super%20Smash%20Bros.%20Melee%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Super Smash Bros. Melee (box art)",
    credit: "Box art",
  },
};
