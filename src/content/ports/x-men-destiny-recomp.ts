import type { Port } from "@/lib/ports/schema";

export const xMenDestinyRecomp: Port = {
  schema: "port",
  id: "x-men-destiny-recomp",
  title: "X-Men Destiny Recompiled",
  game: "X-Men Destiny",
  developers: ["florinp93"],
  publisher: "Activision",
  originalYear: 2011,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/florinp93/xmd-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of X-Men Destiny (Xbox 360) with the ReXGlue SDK, rendering through Direct3D 12 on Windows and Vulkan on Linux. It ships no game content and includes a launcher for graphics and controls.",
  notesEs:
    "Recompilación estática de X-Men Destiny (Xbox 360) con el SDK ReXGlue, que usa Direct3D 12 en Windows y Vulkan en Linux. No incluye contenido del juego y trae un lanzador para gráficos y controles.",
};
