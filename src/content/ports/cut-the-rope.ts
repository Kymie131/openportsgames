import type { Port } from "@/lib/ports/schema";

export const CutTheRope: Port = {
  schema: "port",
  id: "cut-the-rope",
  title: "Cut The Rope",
  game: "Cut The Rope",
  developers: ["Bingies24"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Bingies24/cuttherope-dx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  notes:
    "Fork of a CtRDX developer that may expand beyond 3.X.X. If you want this fork taken down for any reason, please send a message using a contact method on my website.",
  notesEs:
    "Bifurcación de un desarrollador de CtRDX que podría ir más allá de la 3.X.X. Si quieres que se retire por cualquier motivo, envía un mensaje usando un método de contacto de mi web.",
};
