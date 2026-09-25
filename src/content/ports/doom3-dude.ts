import type { Port } from "@/lib/ports/schema";

export const doom3Dude: Port = {
  schema: "port",
  id: "doom3-dude",
  title: "DUDE",
  game: "Doom 3",
  developers: ["id Software"],
  publisher: "Activision",
  originalYear: 2004,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.9.3", date: "2026-09-18" },
  sources: ["https://github.com/Inkub0/dude"],
  license: { spdx: "GPL-3.0-only" },
  aiDisclosure: true,
  verified: true,
  verifiedAt: "2026-09-22",
  screenshots: [
    {
      src: "https://dhewm3.org/dhewm3-1.jpg",
      alt: "DOOM 3 combat gameplay running on the dhewm3-based engine",
      credit: "dhewm3.org",
    },
  ],
  originalSystem: "Microsoft Windows",
  features: [
    "GL 3.3 and Vulkan backends with a legacy ARB path",
    "Ray-traced shadows, reflections and RTAO",
    "HDR, SSAO and FSR2 upscaling",
    "GPU tessellation and 60 FPS render interpolation",
  ],
  notes:
    "DUDE (Doom3 Unified Development Engine) updates the id Tech 4 Doom 3 engine with modern rendering, ray tracing and a Vulkan backend. The repository commits its Claude Code tooling, disclosing AI-assisted development. Requires the Doom 3 files the player owns.",
};
