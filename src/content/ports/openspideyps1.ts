import type { Port } from "@/lib/ports/schema";

export const Openspideyps1: Port = {
  schema: "port",
  id: "openspideyps1",
  title: "OpenSpideyPS1",
  game: "OpenSpideyPS1",
  developers: ["GTTeancum"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/SpideyPS1recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
  notes:
    "Native recompilations of Neversoft's PlayStation Spider-Man games, built with RecompOne. Games are siloed; only the recompiler and runtime are shared.",
  notesEs:
    "Recompilaciones nativas de los juegos de Spider-Man de Neversoft para PlayStation, hechas con RecompOne.",
};
