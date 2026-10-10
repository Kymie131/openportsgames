import type { Port } from "@/lib/ports/schema";

export const skate3Recomp: Port = {
  schema: "port",
  id: "skate-3-recomp",
  title: "Skate 3 Recompiled",
  game: "Skate 3",
  developers: ["mchughalex"],
  publisher: "Electronic Arts",
  originalYear: 2010,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mchughalex/skate3recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Skate 3 (Xbox 360) with a custom ReXGlue SDK fork. A native renderer on Direct3D 12 and Vulkan (more than double the frame rate at a fraction of the GPU cost) and builds for Windows, Linux and macOS.",
  notesEs:
    "Recompilación nativa de Skate 3 (Xbox 360) con un fork propio del SDK ReXGlue. Renderizador nativo sobre Direct3D 12 y Vulkan (más del doble de FPS con una fracción del uso de GPU) y builds para Windows, Linux y macOS.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/84/Skate-3-Boxart.jpg",
    alt: "Skate 3 (box art)",
    credit: "Wikipedia",
  },
};
