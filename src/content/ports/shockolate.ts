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
  release: { version: "0.7.7", date: "2019-04-08" },
  sources: ["https://github.com/Interrupt/systemshock"],
  license: {
    spdx: "GPL-3.0",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  notes:
    "Reimplementation of the System Shock engine, tracked as an active project with regular commits. No tagged releases are published yet.",
};
