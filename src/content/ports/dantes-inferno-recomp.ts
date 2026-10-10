import type { Port } from "@/lib/ports/schema";

export const dantesInfernoRecomp: Port = {
  schema: "port",
  id: "dantes-inferno-recomp",
  title: "Dante's Inferno Recompiled",
  game: "Dante's Inferno",
  developers: ["florinp93"],
  publisher: "Electronic Arts",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/florinp93/hells-gate-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native Dante's Inferno (Xbox 360) port built with ReXGlue. Renders through D3D12 and Vulkan, no emulation.",
  notesEs:
    "Port nativo de Dante's Inferno (Xbox 360) con ReXGlue. Renderiza con D3D12 y Vulkan, sin emulación.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c6/Dante%27s_Inferno.jpg",
    alt: "Dante's Inferno (box art)",
    credit: "Wikipedia",
  },
};
