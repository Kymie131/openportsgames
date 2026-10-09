import type { Port } from "@/lib/ports/schema";

export const minecraftX360Ios: Port = {
  schema: "port",
  id: "minecraft-x360-ios",
  title: "Minecraft: Xbox 360 Edition (iOS)",
  game: "Minecraft: Xbox 360 Edition",
  developers: ["DevZer0D4Y"],
  publisher: "Microsoft Studios",
  originalYear: 2012,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["ios"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DevZer0D4Y/MCX360-EDITION"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation project for Minecraft: Xbox 360 Edition that targets iOS. It is indexed by recomp.fyi and requires your own copy of the game.",
  notesEs:
    "Proyecto de recompilación de Minecraft: Xbox 360 Edition orientado a iOS. Está indexado en recomp.fyi y requiere tu propia copia del juego.",
};
