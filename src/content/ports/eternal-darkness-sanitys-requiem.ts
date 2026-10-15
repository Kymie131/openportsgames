import type { Port } from "@/lib/ports/schema";

export const EternalDarknessSanitysRequiem: Port = {
  schema: "port",
  id: "eternal-darkness-sanitys-requiem",
  title: "Eternal Darkness: Sanity's Requiem",
  game: "Eternal Darkness: Sanity's Requiem",
  developers: ["psdwizzard"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/psdwizzard/Eternal-Darkness---Decompile"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8d/Eternal_Darkness_box.jpg",
    alt: "Eternal Darkness: Sanity's Requiem (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Matching decompilation of Eternal Darkness: Sanity's Requiem (GEDE01) — dtk/objdiff pipeline.",
  notesEs: "Decompilación que coincide de Eternal Darkness: Sanity's Requiem (GEDE01).",
};
