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
  originalSystem: "Commodore 64",
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
