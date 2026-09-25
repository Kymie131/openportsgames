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
  release: { version: "1.1.0", date: "2026-09-04" },
  sources: ["https://github.com/JHDev2006/Super-Mario-Bros.-Remastered-Public"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: false,
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/e28afd48-44be-4b8f-8466-7475d0d3d4c8",
      alt: "Side-scrolling gameplay in a custom level of Super Mario Bros. Remastered",
      credit: "Super Mario Bros. Remastered",
    },
  ],
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Community remake of Super Mario Bros. built from scratch in Godot. The project is a fresh reimplementation rather than a build of the original game code, and it reuses audio and sprite assets from the original release. Distributed as versioned releases, the latest stable being 1.1.0. Because of those Nintendo-owned assets this entry stays unverified.",
};
