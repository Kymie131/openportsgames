import type { Port } from "@/lib/ports/schema";

export const InitialDArcadeStageVer3: Port = {
  schema: "port",
  id: "initial-d-arcade-stage-ver-3",
  title: "Initial D Arcade Stage Ver.3",
  game: "Initial D Arcade Stage Ver.3",
  developers: ["distilledorion-sketch"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: [
    "https://github.com/distilledorion-sketch/Initial-D-Arcade-Stage-3-Native-SH-4-Recompilation-WIP-",
  ],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Arcade",
  notes: "Native SH-4 AOT recompilation of Initial D Arcade Stage 3 (NAOMI 2) — BIOS-free Vulkan public early demo (WIP).",
  notesEs: "Recompilación AOT nativa para SH-4 de Initial D Arcade Stage 3 (NAOMI 2): demo pública temprana en Vulkan sin BIOS (en desarrollo).",
};
