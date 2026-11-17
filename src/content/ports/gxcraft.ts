import type { Port } from "@/lib/ports/schema";

export const gxcraft: Port = {
  schema: "port",
  id: "gxcraft",
  title: "GXCraft",
  game: "GXCraft",
  developers: ["BlueAmulet"],
  publisher: "BlueAmulet",
  originalYear: 2014,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  category: "homebrew",
  platforms: ["wii"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/BlueAmulet/GXCraft"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  summary: "GXCraft is a Minecraft Classic-style homebrew game for the Wii, developed by BlueAmulet, with block building and networked multiplayer.",
  summaryEs: "GXCraft es un juego casero para Wii al estilo de Minecraft Classic, desarrollado por BlueAmulet, con construcción de bloques y multijugador en red.",
  cover: {
    src: "https://openportsgames.com/covers/generated/gxcraft.svg",
    alt: "GXCraft (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "GXCraft is a Minecraft Classic-style homebrew game for the Wii, with block building and networked multiplayer. It does not need a copy of Minecraft.",
  notesEs:
    "GXCraft es un juego homebrew para Wii al estilo Minecraft Classic, con construcción de bloques y multijugador en red. No necesita una copia de Minecraft.",
};
