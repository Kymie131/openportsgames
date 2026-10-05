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
  verified: false,
  originalSystem: "Nintendo 64",
  features: ["Keyboard-only play with optional XInput or SDL gamepad support"],
  featuresEs: ["Juego solo con teclado, con soporte opcional de mando XInput o SDL"],
  requirements: {
    minimum:
      "Direct3D 12 with Shader Model 6.0 on Windows, or Vulkan 1.2 (Vulkan on other systems)",
  },
  notes: "Recompilation of Ogre Battle 64; the player supplies their own legally obtained game.",
  notesEs:
    "Recompilación de Ogre Battle 64; el jugador aporta su propio juego obtenido legalmente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Ogre%20Battle%2064%20-%20Person%20of%20Lordly%20Caliber%20(USA)%20(Rev%201).png",
    alt: "Ogre Battle 64: Person of Lordly Might (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/lfarroco/ogre-battle-64-recomp/main/docs/proofs/native-attract-loop-title-fixed.png",
      alt: "Attract loop title screen of Ogre Battle 64 Recompiled",
      credit: "lfarroco/ogre-battle-64-recomp",
    },
    {
      src: "https://raw.githubusercontent.com/lfarroco/ogre-battle-64-recomp/main/docs/proofs/native-widescreen-mission-expand.png",
      alt: "Widescreen mission view in Ogre Battle 64 Recompiled",
      credit: "lfarroco/ogre-battle-64-recomp",
    },
  ],
};
