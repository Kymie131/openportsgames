import type { Port } from "@/lib/ports/schema";

export const superMarioBrosRemastered: Port = {
  schema: "port",
  id: "super-mario-bros-remastered",
  title: "Super Mario Bros. Remastered",
  game: "Super Mario Bros.",
  developers: ["Nintendo R&D4"],
  publisher: "Nintendo",
  originalYear: 1985,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/JHDev2006/Super-Mario-Bros.-Remastered-Public"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Community remake of Super Mario Bros. built from scratch in Godot. The project is a fresh reimplementation rather than a build of the original game code, and it reuses audio and sprite assets from the original release. Because of those Nintendo-owned assets and its unversioned distribution this entry stays unverified.",
};