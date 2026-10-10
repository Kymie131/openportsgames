import type { Port } from "@/lib/ports/schema";

export const nBlood: Port = {
  schema: "port",
  id: "nblood",
  title: "NBlood",
  game: "Blood",
  developers: ["nukeykt"],
  publisher: "GT Interactive",
  originalYear: 1997,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/nukeykt/NBlood"],
  website: "https://discord.gg/nNQWEvSTvZ",
  license: {
    spdx: "NOASSERTION",
    note: "no project-wide license file; third-party components carry their own terms",
  },
  verified: false,
  originalSystem: "MS-DOS",
  features: [
    "Modern renderer with dynamic lighting",
    "Reimplementation of the Blood engine in portable C++",
  ],
  featuresEs: [
    "Renderizador moderno con iluminación dinámica",
    "Reimplementación del motor de Blood en C++ portátil",
  ],
  notes:
    "In-progress Blood engine reimplementation. Releases are tagged with revision numbers (r14388) rather than semantic versions, and no project-wide license file was found.",
  notesEs:
    "Reimplementación en curso del motor de Blood. Las releases se etiquetan con números de revisión (r14388) en lugar de versiones semánticas, y no se encontró un archivo de licencia global.",
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/f517d412-ac7f-4002-ab47-35e41bab9f26",
      alt: "screenshot",
      credit: "nukeykt",
    },
    {
      src: "https://github.com/user-attachments/assets/43ec8959-a6e6-4d8c-a4a9-3d3f9f08d65a",
      alt: "screenshot",
      credit: "nukeykt",
    },
    {
      src: "https://github.com/user-attachments/assets/e7650c88-3907-47c3-81eb-2fb012435ca2",
      alt: "screenshot",
      credit: "nukeykt",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4d/Blood_logo.jpg",
    alt: "Blood (box art)",
    credit: "Wikipedia",
  },
};
