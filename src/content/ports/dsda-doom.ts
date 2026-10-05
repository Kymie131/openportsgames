import type { Port } from "@/lib/ports/schema";

export const dsdaDoom: Port = {
  schema: "port",
  id: "dsda-doom",
  title: "dsda-doom",
  game: "Doom",
  developers: ["kraflab"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.30.0", date: "2026-09-29" },
  sources: ["https://github.com/kraflab/dsda-doom"],
  discord: "https://discord.gg/9paQ52zQUT",
  license: {
    spdx: "NOASSERTION",
    note: "no project-wide license file; prboom2/COPYING applies to bundled sources",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Demo playback compatible with the original demo format",
    "Configurable keyboard and mouse emulation",
    "Binds every command to keys and buttons independently",
  ],
  featuresEs: [
    "Reproducción de demos compatible con el formato de demo original",
    "Emulación de teclado y ratón configurable",
    "Asigna cada comando a teclas y botones de forma independiente",
  ],
  notes:
    "Doom source port oriented around deterministic demo playback. No project-wide license file declares the terms for the full tree.",
  notesEs:
    "Port de código fuente de Doom orientado a la reproducción determinista de demos. No hay un archivo de licencia global que declare los términos de todo el árbol.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Doom.png",
    alt: "Doom (box art)",
    credit: "Box art",
  },
};
