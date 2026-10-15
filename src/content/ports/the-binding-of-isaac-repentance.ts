import type { Port } from "@/lib/ports/schema";

export const TheBindingOfIsaacRepentance: Port = {
  schema: "port",
  id: "the-binding-of-isaac-repentance",
  title: "The Binding of Isaac: Repentance",
  game: "The Binding of Isaac: Repentance",
  developers: ["0xl0cal"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/0xl0cal/repentogxm"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  notes:
    "PS Vita port of The Binding of Isaac: Repentance by static recompilation of the PC executable to ARM.",
  notesEs:
    "Port a PS Vita de The Binding of Isaac: Repentance mediante recompilación estática del ejecutable de PC a ARM.",
};
