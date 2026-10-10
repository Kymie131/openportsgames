import type { Port } from "@/lib/ports/schema";

export const skate3Mobile: Port = {
  schema: "port",
  id: "skate-3-mobile",
  title: "Skate 3 Mobile",
  game: "Skate 3",
  developers: ["Buku313"],
  publisher: "Electronic Arts",
  originalYear: 2010,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Buku313/Skate3-Mobile"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Android port of the Skate 3 recompilation (ARM64 with the native Vulkan renderer), aimed at phones and handhelds. A developer build, first verified on an Anbernic RG406V.",
  notesEs:
    "Port a Android de la recompilación de Skate 3 (ARM64 con el renderizador Vulkan nativo), pensado para teléfonos y consolas portátiles. Build de desarrollo, verificada por primera vez en una Anbernic RG406V.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/84/Skate-3-Boxart.jpg",
    alt: "Skate 3 (box art)",
    credit: "Wikipedia",
  },
};
