import type { Port } from "@/lib/ports/schema";

export const Playstunts: Port = {
  schema: "port",
  id: "playstunts",
  title: "PlayStunts",
  game: "PlayStunts",
  developers: ["ACatWithEbola"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ACatWithEbola/playstunts"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  notes:
    "Native browser reconstruction of Stunts / 4D Sports Driving, with tools to build from your own original game files.",
  notesEs:
    "Reconstrucción nativa para navegador de Stunts / 4D Sports Driving, con herramientas para compilar desde tus propios archivos originales.",
};
