import type { Port } from "@/lib/ports/schema";

export const sonicSecretRingsReignition: Port = {
  schema: "port",
  id: "sonic-secret-rings-reignition",
  title: "Project Reignition (Sonic and the Secret Rings)",
  game: "Sonic and the Secret Rings",
  developers: ["kumapauz"],
  publisher: "Sega",
  originalYear: 2007,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/kumapauz/project-reignition"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Wii",
  notes:
    "Project Reignition is a fan remake of Sonic and the Secret Rings (Wii) for Windows. It is a community project and does not use the original game's assets directly.",
  notesEs:
    "Project Reignition es un remake hecho por fans de Sonic and the Secret Rings (Wii) para Windows. Es un proyecto comunitario y no usa directamente los recursos del juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii/Named_Boxarts/Sonic%20and%20the%20Secret%20Rings%20(Europe)%20(En,Ja,Fr,De,Es,It).png",
    alt: "Sonic and the Secret Rings (box art)",
    credit: "Box art",
  },
};
