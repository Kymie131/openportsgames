import type { Port } from "@/lib/ports/schema";

export const Freedoom: Port = {
  schema: "port",
  id: "freedoom",
  title: "Freedoom",  game: "Freedoom",
  developers: ["freedoom"],  publisher: "Freedoom project",  originalYear: 2003,
  portType: "source-port",  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.13.0", date: "2024-01-29" },
  sources: ["https://github.com/freedoom/freedoom"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Freedoom is a free, open-source game based on the Doom engine, first released in 2003. It provides free sprite, texture and level replacements so source ports can run without the original Doom data.",  summaryEs: "Freedoom es un juego libre y de código abierto basado en el motor de Doom, publicado por primera vez en 2003. Ofrece sprites, texturas y niveles libres para que los source ports funcionen sin los datos originales de Doom.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/freedoom/freedoom/releases/download/v0.13.0/freedoom-0.13.0.zip",
      size: "23.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/freedoom/freedoom/releases/download/v0.13.0/freedm-0.13.0.zip",
      size: "10.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/freedoom.svg",
    alt: "Freedoom (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Freedoom is an entirely free software game based on the Doom engine.",
  notesEs: "Freedoom es un juego totalmente libre basado en el motor de Doom.",
};
