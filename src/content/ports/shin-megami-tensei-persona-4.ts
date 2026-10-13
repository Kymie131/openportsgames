import type { Port } from "@/lib/ports/schema";

export const ShinMegamiTenseiPersona4: Port = {
  schema: "port",
  id: "shin-megami-tensei-persona-4",
  title: "Shin Megami Tensei: Persona 4",
  game: "Shin Megami Tensei: Persona 4",
  developers: ["Raikaru"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Raikaru/Persona4-Decompilation"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
