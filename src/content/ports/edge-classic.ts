import type { Port } from "@/lib/ports/schema";

export const EdgeClassic: Port = {
  schema: "port",
  id: "edge-classic",
  title: "EDGE-classic",
  game: "EDGE-classic",
  developers: ["edge-classic"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/edge-classic/EDGE-classic"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  notes: "Cross-Platform OpenGL Doom Source Port with powerful modding features.",
  notesEs:
    "Port de código fuente de Doom con OpenGL y multiplataforma, con potentes funciones de modding.",
};
