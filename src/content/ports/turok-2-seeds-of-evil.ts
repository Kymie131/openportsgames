import type { Port } from "@/lib/ports/schema";

export const Turok2SeedsOfEvil: Port = {
  schema: "port",
  id: "turok-2-seeds-of-evil",
  title: "Turok 2: Seeds of Evil",
  game: "Turok 2: Seeds of Evil",
  developers: ["mgrz18"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mgrz18/turok2-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Turok%202%20-%20Seeds%20of%20Evil%20(Europe)%20(Demo)%20(Kiosk).png",
    alt: "Turok 2: Seeds of Evil (box art)",
    credit: "Box art",
  },
  notes:
    "Work-in-progress decompilation of Turok 2: Seeds of Evil (N64). Stepping stone toward native macOS/Android ports of the Acclaim Studios London engine.",
  notesEs:
    "Decompilación de Turok 2: Seeds of Evil (N64), en desarrollo. Paso previo a ports nativos del motor de Acclaim Studios London.",
};
