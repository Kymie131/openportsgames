import type { Port } from "@/lib/ports/schema";

export const crackdownRecomp: Port = {
  schema: "port",
  id: "crackdown-recomp",
  title: "Crackdown Recompiled",
  game: "Crackdown",
  developers: ["SkiddyToast"],
  publisher: "Microsoft Game Studios",
  originalYear: 2007,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SkiddyToast/Crackdown"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "ReXGlue static recompilation of Crackdown (Xbox 360) for Windows. Needs the original game files.",
  notesEs:
    "Recompilación estática con ReXGlue de Crackdown (Xbox 360) para Windows. Necesita los archivos originales.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/35/Crackdownfinalbox.jpg",
    alt: "Crackdown (box art)",
    credit: "Wikipedia",
  },
};
