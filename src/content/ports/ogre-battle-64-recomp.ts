import type { Port } from "@/lib/ports/schema";

export const ogreBattle64Recomp: Port = {
  schema: "port",
  id: "ogre-battle-64-recomp",
  title: "Ogre Battle 64 Recompiled",
  game: "Ogre Battle 64: Person of Lordly Might",
  developers: ["Quest"],
  publisher: "Enix",
  originalYear: 1999,
  genre: "strategy",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.5.1", date: "2026-09-28" },
  sources: ["https://github.com/lfarroco/ogre-battle-64-recomp"],
  license: {
    spdx: "NOASSERTION",
    note: "Repository ships no license file, so reuse rights are unstated.",
  },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Nintendo 64",
  features: ["Keyboard-only play with optional XInput or SDL gamepad support"],
  requirements: {
    minimum:
      "Direct3D 12 with Shader Model 6.0 on Windows, or Vulkan 1.2 (Vulkan on other systems)",
  },
  notes:
    "Recompilation of Ogre Battle 64; the player supplies their own legally obtained game.",
};
