import type { Port } from "@/lib/ports/schema";

export const pilotwings64Recomp: Port = {
  schema: "port",
  id: "pilotwings-64-recomp",
  title: "Pilotwings 64 Recompiled",
  game: "Pilotwings 64",
  developers: ["Nintendo"],
  publisher: "Nintendo",
  originalYear: 1996,
  genre: "simulation",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-09-17" },
  sources: ["https://github.com/danielgomesvieira2000/pilotwings-64-recomp"],
  license: {
    spdx: "NOASSERTION",
    note: "Repository ships no license file, so reuse rights are unstated.",
  },
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Widescreen at the display aspect ratio with the HUD at the screen edges",
    "High frame rate through matrix interpolation, up to the display refresh rate",
    "Launcher with graphics, sound and control settings, remapping and mod support",
    "Keyboard and controller support",
  ],
  featuresEs: [
    "Panorámico según la relación de aspecto de la pantalla con el HUD en los bordes",
    "Framerate alto mediante interpolación de matrices, hasta el refresco de la pantalla",
    "Lanzador con ajustes de gráficos, sonido y control, reasignación y soporte de mods",
    "Soporte de teclado y mando",
  ],
  requirements: {
    minimum: "Linux builds need a Vulkan driver plus SDL2, GTK 3 and FreeType",
  },
  notes:
    "Static recompilation of Pilotwings 64 with N64Recomp; the player supplies their own legally obtained cartridge. The repository describes the port as AI-coded, hence the AI disclosure.",
  notesEs:
    "Recompilación estática de Pilotwings 64 con N64Recomp; el jugador aporta su propio cartucho obtenido legalmente. El repositorio describe el port como programado por IA, de ahí la declaración de IA.",
};
