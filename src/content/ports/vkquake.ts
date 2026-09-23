import type { Port } from "@/lib/ports/schema";

export const vkQuake: Port = {
  schema: "port",
  id: "vkquake",
  title: "vkQuake",
  game: "Quake",
  developers: ["id Software"],
  publisher: "GT Interactive",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.36.0", date: "2026-08-29" },
  sources: ["https://github.com/Novum/vkQuake"],
  license: {
    spdx: "GPL-2.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Vulkan port of QuakeSpasm based on id Software's GPL-2.0 Quake source release. Requires Quake gamedata (shareware episode freely available).",
  installGuide: {
    steps: [
      "Own a copy of Quake, or download the freely available shareware episode.",
      "Copy the id1 folder (id1/pak0.pak, and pak1.pak for the mission packs) from your Quake install.",
      "Place the id1 folder next to the vkQuake executable.",
      "Launch vkQuake; the Vulkan renderer runs the original datasets.",
    ],
    stepsEs: [
      "Ten una copia de Quake, o descarga el episodio shareware disponible gratuitamente.",
      "Copia la carpeta id1 (id1/pak0.pak, y pak1.pak para los packs de misiones) desde tu instalación de Quake.",
      "Coloca la carpeta id1 junto al ejecutable de vkQuake.",
      "Lanza vkQuake; el renderizador Vulkan ejecuta los datos originales.",
    ],
  },
};