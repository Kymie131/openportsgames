import type { Port } from "@/lib/ports/schema";

export const cod4Ios: Port = {
  schema: "port",
  id: "cod4-ios",
  title: "Call of Duty 4 (iOS)",
  game: "Call of Duty 4: Modern Warfare",
  developers: ["DevZer0D4Y"],
  publisher: "Activision",
  originalYear: 2007,
  portType: "runtime-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["ios", "switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DevZer0D4Y/COD4iOS-COD4NS"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Call of Duty 4: Modern Warfare is a 2007 first-person shooter game developed by Infinity Ward and published by Activision. It is the fourth main installment in the Call of Duty series. The game breaks away from the World War II setting of previous entries and is instead set in modern times. Developed over two years, Modern Warfare was released in November 2007 for the PlayStation 3, Xbox 360, and Microsoft Windows. A Wii port, developed by Treyarch and subtitled Reflex Edition, was released in 2009.",
  summaryEs: "Call of Duty 4: Modern Warfare es un videojuego de disparos en primera persona bélica desarrollado por Infinity Ward y distribuido por Activision. Es la cuarta entrega principal de la serie Call of Duty. El juego se aleja de la ambientación de la Segunda Guerra Mundial de las entregas anteriores y se ambienta en la época actual. Desarrollado durante dos años, Modern Warfare se lanzó en noviembre de 2007 para PlayStation 3, Xbox 360 y Microsoft Windows. Una versión para Wii, desarrollada por Treyarch y subtitulada Reflex Edition, se lanzó en 2009.",
  notes:
    "Community port of Call of Duty 4: Modern Warfare for iOS, with an additional build for Nintendo Switch. It needs the original game.",
  notesEs:
    "Port comunitario de Call of Duty 4: Modern Warfare para iOS, con una build adicional para Nintendo Switch. Necesita el juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg",
    alt: "Call of Duty 4: Modern Warfare (box art)",
    credit: "Wikipedia",
  },
};
