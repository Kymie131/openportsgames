import type { Port } from "@/lib/ports/schema";

export const openMohaa: Port = {
  schema: "port",
  id: "openmohaa",
  title: "OpenMoHAA",
  game: "Medal of Honor: Allied Assault",
  developers: ["OpenMoHAA Team"],
  publisher: "Electronic Arts",
  originalYear: 2002,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.82.1", date: "2025-08-05" },
  sources: ["https://github.com/openmoh/openmohaa"],
  discord: "https://discord.gg/NYtH58R",
  website: "https://docs.openmohaa.org/",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Microsoft Windows",
  features: ["Reimplementation of the id Tech 3 era engine", "Cross-platform desktop builds"],
  featuresEs: [
    "Reimplementación del motor de la era id Tech 3",
    "Builds de escritorio multiplataforma",
  ],
  notes: "Open source continuation of the Medal of Honor: Allied Assault codebase.",
  notesEs: "Continuación de código abierto del código de Medal of Honor: Allied Assault.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/openmoh/openmohaa/main/docs/assets/images/v0.60.0-x86_64/training_1.png",
      alt: "Training level in OpenMoHAA",
      credit: "OpenMoHAA",
    },
    {
      src: "https://raw.githubusercontent.com/openmoh/openmohaa/main/docs/assets/images/v0.60.0-x86_64/flughafen_1.png",
      alt: "Airfield level in OpenMoHAA",
      credit: "OpenMoHAA",
    },
    {
      src: "https://raw.githubusercontent.com/openmoh/openmohaa/main/docs/assets/images/v0.60.0-x86_64/mohdm1_1.png",
      alt: "Multiplayer map in OpenMoHAA",
      credit: "OpenMoHAA",
    },
    {
      src: "https://raw.githubusercontent.com/openmoh/openmohaa/main/docs/assets/images/v0.60.0-x86_64/mohdm2_1.png",
      alt: "Another multiplayer map in OpenMoHAA",
      credit: "OpenMoHAA",
    },
  ],
};
