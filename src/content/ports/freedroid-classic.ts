import type { Port } from "@/lib/ports/schema";

export const freedroidClassic: Port = {
  schema: "port",
  id: "freedroid-classic",
  title: "Freedroid Classic",
  game: "Paradroid",
  developers: ["Hewson Consultants"],
  publisher: "Hewson Consultants",
  originalYear: 1985,
  genre: "shooter",
  openSource: true,
  portType: "reimplementation",
  platforms: ["linux"],
  status: "stable",
  release: { version: "1.9.0", date: "2026-03-22" },
  sources: ["https://github.com/ReinhardPrix/FreedroidClassic"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  noOriginalGameRequired: true,
  originalSystems: ["Commodore 64"],
  summary: "Paradroid is a Commodore 64 video game written by Andrew Braybrook and published by Hewson Consultants in 1985. It is a shoot 'em up with puzzle elements and was critically praised at release. The objective is to clear a fleet of spaceships of hostile robots by destroying them or taking over them via a minigame. It was remade as Paradroid 90 for the Commodore Amiga and Atari ST home computers and as Paradroid 2000 for the Acorn Archimedes. There exist several fan-made remakes for modern PCs.",
  summaryEs: "Paradroid es un videojuego de disparos publicado por Hewson Consultants en 1985.",
  notes:
    "Free software remake of the 1985 Commodore 64 classic Paradroid. Built from source with autotools and SDL2; Linux is the documented target platform.",
  notesEs:
    "Remake de software libre del clásico Paradroid (Commodore 64, 1985). Se compila desde el código con autotools y SDL2; Linux es la plataforma de destino documentada.",
  cover: {
    src: "https://thumbnails.libretro.com/Commodore%20-%2064/Named_Boxarts/Paradroid%20(USA%2C%20Europe).png",
    alt: "Paradroid (box art)",
    credit: "Box art",
  },
};
