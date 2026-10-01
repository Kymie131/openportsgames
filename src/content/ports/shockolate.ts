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
  discord: "https://discord.gg/m45xPan",
  license: {
    spdx: "GPL-3.0",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  notes:
    "Reimplementation of the System Shock engine. The last tagged release is 0.7.7; tags from 0.8.0 onward are marked as prereleases.",
  screenshots: [
    {
      src: "https://travis-ci.org/Interrupt/systemshock.svg?branch=master",
      alt: "Build Status TravisCI",
      credit: "Interrupt",
    },
    {
      src: "https://ci.appveyor.com/api/projects/status/5fmcswq8n7ni0o9j/branch/master?svg=true",
      alt: "Build Status AppVeyor",
      credit: "Interrupt",
    },
    {
      src: "https://i.imgur.com/kbVWQj4.gif",
      alt: "work so far",
      credit: "Interrupt",
    },
  ],
};
