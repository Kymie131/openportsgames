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
  aiDisclosure: true,
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Widescreen at the display aspect ratio with the HUD at the screen edges",
    "High frame rate through matrix interpolation, up to the display refresh rate",
    "Launcher with graphics, sound and control settings, remapping and mod support",
    "Keyboard and controller support",
  ],
  requirements: {
    minimum: "Linux builds need a Vulkan driver plus SDL2, GTK 3 and FreeType",
  },
  notes:
    "Static recompilation of Pilotwings 64 with N64Recomp; the player supplies their own legally obtained cartridge. The repository describes the port as AI-coded, hence the AI disclosure.",
};
