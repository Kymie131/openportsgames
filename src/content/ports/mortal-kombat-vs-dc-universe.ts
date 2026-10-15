import type { Port } from "@/lib/ports/schema";

export const MortalKombatVsDcUniverse: Port = {
  schema: "port",
  id: "mortal-kombat-vs-dc-universe",
  title: "Mortal Kombat vs. DC Universe",
  game: "Mortal Kombat vs. DC Universe",
  developers: ["KawaiiBunga"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/KawaiiBunga/MKVDCU-Recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6b/Mortal_Kombat_vs._DC_Universe_Coverart.png",
    alt: "Mortal Kombat vs. DC Universe (box art)",
    credit: "Wikipedia",
  },
  notes: "An unofficial port of Mortal Kombat vs. DC Universe to PC (More platforms coming).",
  notesEs:
    "Un port no oficial de Mortal Kombat vs. DC Universe a PC (más plataformas próximamente).",
};
