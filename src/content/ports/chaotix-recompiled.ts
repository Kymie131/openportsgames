import type { Port } from "@/lib/ports/schema";

export const chaotixRecompiled: Port = {
  schema: "port",
  id: "chaotix-recompiled",
  title: "Knuckles' Chaotix (Chaotix Recompiled)",
  game: "Knuckles' Chaotix",
  developers: ["YuutaTsubasa"],
  publisher: "Sega",
  originalYear: 1995,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/YuutaTsubasa/ChaotixRecompiled"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Sega 32X"],
  summary: "Knuckles' Chaotix is a 1995 platform game developed and published by Sega for the 32X. A spin-off of the Sonic the Hedgehog series, it features Knuckles the Echidna and four other characters known as the Chaotix, who must prevent Doctor Robotnik and Metal Sonic from obtaining six magic rings and conquering a mysterious island. The gameplay is similar to previous Sonic games: players complete levels while collecting rings and defeating enemies.",
  summaryEs: "Knuckles' Chaotix es un videojuego de plataformas de 1995, desarrollado y publicado por Sega para la consola 32X. Como derivado de la serie Sonic the Hedgehog, el título presenta a Knuckles the Echidna y a otros cuatro personajes conocidos como los «Chaotix», quienes deben impedir que el Doctor Robotnik y Metal Sonic obtengan seis anillos mágicos y conquisten una misteriosa isla. La jugabilidad es similar a la de entregas anteriores de Sonic: los jugadores completan niveles mientras recolectan anillos y derrotan enemigos.",
  notes:
    "Static recompilation of Knuckles' Chaotix (Sega 32X) to native C++, with true widescreen. It builds for Windows, Linux, macOS and Android and requires your own ROM.",
  notesEs:
    "Recompilación estática de Knuckles' Chaotix (Sega 32X) a C++ nativo, con widescreen real. Compila para Windows, Linux, macOS y Android y requiere tu propia ROM.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%2032X/Named_Boxarts/Knuckles'%20Chaotix%20(Europe).png",
    alt: "Knuckles' Chaotix (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sega%20-%2032X/Named_Snaps/Knuckles'%20Chaotix%20(Europe).png",
      alt: "Knuckles' Chaotix (screenshot)",
      credit: "Libretro",
    },
  ],
};
