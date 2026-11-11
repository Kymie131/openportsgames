import type { Port } from "@/lib/ports/schema";

export const Simutrans: Port = {
  schema: "port",
  id: "simutrans",
  title: "Simutrans",
  game: "simutrans",
  developers: ["simutrans"],
  publisher: "Unknown",
  originalYear: 2016,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/simutrans/simutrans"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "makeobj-arm-nightly",
      url: "https://github.com/simutrans/simutrans/releases/download/Nightly/makeobj-arm-nightly.zip",
      size: "95 KB",
    },
    {
      label: "Windows",
      url: "https://github.com/simutrans/simutrans/releases/download/Nightly/makeobj-win-nightly.zip",
      size: "377 KB",
    },
    {
      label: "Linux",
      url: "https://github.com/simutrans/simutrans/releases/download/Nightly/makeobj_linux-x64-nightly.zip",
      size: "129 KB",
    },
    {
      label: "Android APK",
      url: "https://github.com/simutrans/simutrans/releases/download/Nightly/simuandroid-nightly.apk",
      size: "77.7 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/simutrans/simutrans/releases/download/Nightly/simulinux-x64-nightly.zip",
      size: "17.9 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/simutrans/simutrans/releases/download/Nightly/simumac-arm-nightly.zip",
      size: "7.7 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Simutrans-full.svg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "simutrans (cover)",
    credit: "Wikipedia",
  },
  summary: "Simutrans is a freeware and open-source transportation simulator. Your goal is to establish a successful transport company. Transport passengers, mail and goods by rail, road, ship, and even air. Interconnect districts, cities, public buildings, industries and tourist attractions.",
  summaryEs: "simutrans es un videojuego de acción y aventura publicado por The Simutrans Team en 2016.",
  notes: "Source port of simutrans (Other).",
  notesEs: "Port del código fuente de simutrans (Other).",
};
