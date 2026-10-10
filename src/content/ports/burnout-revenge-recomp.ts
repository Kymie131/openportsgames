import type { Port } from "@/lib/ports/schema";

export const burnoutRevengeRecomp: Port = {
  schema: "port",
  id: "burnout-revenge-recomp",
  title: "Burnout Revenge Recompiled",
  game: "Burnout Revenge",
  developers: ["shipa-2"],
  publisher: "Electronic Arts",
  originalYear: 2005,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/shipa-2/Xerenge"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Burnout Revenge's (Xbox 360) PowerPC code is translated to C++ ahead of time, with no interpreter or JIT. It needs the retail European dump and a Vulkan GPU.",
  notesEs:
    "El código PowerPC de Burnout Revenge (Xbox 360) se traduce a C++ por adelantado, sin intérprete ni JIT. Necesita el volcado europeo retail y una GPU Vulkan.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cb/Revenge_boxart.jpg",
    alt: "Burnout Revenge (box art)",
    credit: "Wikipedia",
  },
};
