import type { Port } from "@/lib/ports/schema";

export const bomberman64Switch: Port = {
  schema: "port",
  id: "bomberman-64-switch",
  title: "Bomberman 64 (Switch)",
  game: "Bomberman 64",
  developers: ["paulodiasred"],
  publisher: "Hudson Soft",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-10-17" },
  sources: ["https://github.com/paulodiasred/BM64Switch"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  related: ["bomberman-64-recomp"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bomberman%2064%20(USA).png",
    alt: "Bomberman 64 (box art)",
    credit: "Box art",
  },
  summary: "Bomberman 64 is a video game developed and published by Hudson Soft as \"Baku Bomberman\" in Japan, and published by Nintendo as \"Bomberman 64\" in North America and Europe for the Nintendo 64. In Japan the \"Bomberman 64\" name was chosen for another game, the fourth Japanese N64 entry in the series. The 1997 game was released in Europe and North America in November and December 1997, respectively. While the game never saw a release on the Wii's Virtual Console service, it was released on the Wii U Virtual Console in both Europe and North America in March 2017 followed by Japan in June 2017.",
  summaryEs: "Bomberman 64, conocido en Japón como Baku Bomberman, es un videojuego desarrollado por Hudson Soft y publicado por Nintendo para la Nintendo 64. El juego salió en septiembre de 1997 en Japón, en noviembre del mismo año en Europa y en diciembre del mismo año en Norteamérica.",
  notes:
    "Bomberman 64 (Hudson Soft, 1997) running natively on Nintendo Switch through N64Recomp and libultraship. It requires your own ROM and ships no game assets.",
  notesEs:
    "Bomberman 64 (Hudson Soft, 1997) en Nintendo Switch de forma nativa mediante N64Recomp y libultraship. Requiere tu propia ROM y no incluye recursos del juego.",
};
