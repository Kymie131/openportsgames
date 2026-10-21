import type { Port } from "@/lib/ports/schema";

export const craftusReloaded: Port = {
  schema: "port",
  id: "craftus-reloaded",
  title: "Craftus Reloaded",
  game: "Craftus Reloaded",
  developers: ["RSDuck"],
  publisher: "RSDuck",
  originalYear: 2020,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  category: "homebrew",
  platforms: ["3ds"],
  status: "beta",
  release: { version: "0.3", date: "2020-11-18" },
  sources: ["https://github.com/RSDuck/craftus_reloaded"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "Craftus Reloaded is a Minecraft-style voxel homebrew game built for the Nintendo 3DS, with block placing, crafting and a day-night cycle.",
  notesEs:
    "Craftus Reloaded es un juego homebrew de vóxeles al estilo Minecraft para Nintendo 3DS, con colocación de bloques, crafteo y ciclo de día y noche.",
};
