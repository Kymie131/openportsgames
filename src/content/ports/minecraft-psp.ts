import type { Port } from "@/lib/ports/schema";

export const minecraftPsp: Port = {
  schema: "port",
  id: "minecraft-psp",
  title: "Minecraft PSP",
  game: "Minecraft",
  developers: ["Pencea-Flavius"],
  publisher: "Mojang Studios",
  originalYear: 2011,
  portType: "source-port",
  genre: "open-world",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Pencea-Flavius/Minecraft-PE-PSP"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Microsoft Windows",
  notes:
    "Homebrew port of Minecraft Pocket Edition to the PlayStation Portable, with the world and gameplay ported from the MCPE 0.6.1 sources. It runs on every PSP model, including the 32 MB PSP-1000, and needs custom firmware to install.",
  notesEs:
    "Port homebrew de Minecraft Pocket Edition para PlayStation Portable, con el mundo y la jugabilidad portados desde las fuentes de MCPE 0.6.1. Funciona en todos los modelos de PSP, incluida la PSP-1000 de 32 MB, y necesita custom firmware para instalarse.",
  cover: {
    src: "https://github.com/user-attachments/assets/c58041a0-fcc8-4499-b131-c75cea22dc7b",
    alt: "Minecraft Pocket Edition on the PSP splash",
    credit: "Minecraft PE PSP",
  },
};
