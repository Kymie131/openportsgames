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
  originalSystems: ["Wii"],
  summary: "Sonic and the Secret Rings is a 2007 platform game developed by Sonic Team and published by Sega for the Wii. A spin-off of the Sonic the Hedgehog series, it is the first title in the franchise for the system, and follows Sonic the Hedgehog's quest to stop an evil genie named Erazor Djinn. In addition to the basic platforming gameplay of previous Sonic titles, Secret Rings uses a system of experience points and levels, as well as special moves that are unlocked by means of progression.",
  summaryEs: "Sonic y los Anillos Secretos, en inglés Sonic and the Secret Rings, es un videojuego desarrollado por Sonic Team y publicado por Sega como parte de la serie de Sonic the Hedgehog. Fue lanzado el 20 de febrero de 2007 exclusivamente para Wii en América del Norte; el 2 de marzo en Europa; y el 15 de marzo en Japón. Fue el primer juego de Sonic para Wii. Es un videojuego de acción y plataformas tridimensional cuya trama sigue al protagonista de la serie, Sonic el erizo, en una búsqueda para detener un genio del mal llamado Erazor Djinn.",
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
