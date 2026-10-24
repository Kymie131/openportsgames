import type { Port } from "@/lib/ports/schema";

export const splatoon3ds: Port = {
  schema: "port",
  id: "splatoon-3ds",
  title: "Splatoon (3DS demake)",
  game: "Splatoon",
  developers: ["CaramelKat"],
  publisher: "Nintendo",
  originalYear: 2015,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  category: "homebrew",
  platforms: ["3ds"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/CaramelKat/Splatoon-3DS"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii U"],
  related: ["splatoon"],
  summary: "Splatoon is a 2015 third-person shooter game developed and published by Nintendo for the Wii U. The game centers around player-controlled Inklings—squid-like creatures that can transform between humanoid and cephalopodic forms at will. The game centers on a variety of four-on-four online multiplayer game modes that sees Inklings use a variety of weapons that can produce and shoot ink while in their humanoid forms or tread through and hide in surfaces covered in their own ink while in their cephalopodic forms. It also includes a dedicated single-player story campaign.",
  summaryEs: "Splatoon es un videojuego de disparos en tercera persona desarrollado por Nintendo EAD y publicado para la consola Wii U. Fue lanzado a nivel mundial el 29 de mayo de 2015 y se trata de la primera entrega de la saga Splatoon.",
  cover: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Splatoon_monochrome_logo.svg/960px-Splatoon_monochrome_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    alt: "Splatoon (box art)",
    credit: "Wikipedia",
  },
  notes:
    "A homebrew demake of Splatoon (Nintendo, 2015) for Nintendo 3DS, rebuilt from scratch as a fan project. It does not use any files from the original game.",
  notesEs:
    "Un demake homebrew de Splatoon (Nintendo, 2015) para Nintendo 3DS, reconstruido desde cero como proyecto fan. No usa archivos del juego original.",
};
