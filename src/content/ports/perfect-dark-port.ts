import type { Port } from "@/lib/ports/schema";

export const perfectDarkPort: Port = {
  schema: "port",
  id: "perfect-dark-port",
  title: "Perfect Dark PC Port",
  game: "Perfect Dark",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/perfect-dark-pc-port/perfect_dark"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Port of the matching N64 decompilation to modern platforms",
    "Widescreen, mouselook and dual analog support",
    "Split-screen multiplayer and Transfer Pak emulation",
  ],
  featuresEs: [
    "Port de la decompilación correspondiente de N64 a plataformas modernas",
    "Panorámico, mouselook y doble analógico",
    "Multijugador en pantalla dividida y emulación del Transfer Pak",
  ],
  notes:
    "Work in progress port of the Perfect Dark decompilation, kept separate from the upstream GitLab project. Builds come from a rolling CI tag rather than versioned releases. Needs a legally obtained N64 ROM.",
  notesEs:
    "Port en desarrollo de la decompilación de Perfect Dark, mantenido aparte del proyecto original en GitLab. Las builds vienen de una etiqueta CI continua en lugar de releases versionadas. Necesita una ROM de N64 obtenida legalmente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Perfect%20Dark%20(USA).png",
    alt: "Perfect Dark (box art)",
    credit: "Box art",
  },
};
