import type { Port } from "@/lib/ports/schema";

export const shockolate: Port = {
  schema: "port",
  id: "shockolate",
  title: "Shockolate",
  game: "System Shock",
  developers: ["LookingGlass Technologies"],
  publisher: "Origin Systems",
  originalYear: 1994,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Interrupt/systemshock"],
  license: {
    spdx: "GPL-3.0",
  },
  verified: false,
  notes:
    "Reimplementation of the System Shock engine, tracked as an active project with regular commits. No tagged releases are published yet.",
};
