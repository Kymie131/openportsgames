import type { Port } from "@/lib/ports/schema";

export const unicornOverlordPc: Port = {
  schema: "port",
  id: "unicorn-overlord-pc",
  title: "Unicorn Overlord (PC)",
  game: "Unicorn Overlord",
  developers: ["hachi23"],
  publisher: "Atlus",
  originalYear: 2024,
  portType: "runtime-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.4.0", date: "2026-10-31" },
  sources: ["https://github.com/hachi23/unicorn_overlord_pc"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-05",
  originalSystems: ["PlayStation 4"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a1/Unicorn_Overlord_cover.jpg",
    alt: "Unicorn Overlord (box art)",
    credit: "Wikipedia",
  },
  summary: "Unicorn Overlord is a 2024 tactical role-playing game developed by Vanillaware and published by Atlus in Japan, and Sega worldwide, for Nintendo Switch, PlayStation 4, PlayStation 5 and Xbox Series X/S. Set on the continent of Fevrith as it is consumed by war, the story follows exiled prince Alain as he gathers allies to liberate the nations of Fevrith from the Zenoiran Empire. Gameplay follows Alain and his army units fighting in large-scale battles, with field movement and battles taking place in real-time.",
  summaryEs: "Unicorn Overlord es un videojuego de rol táctico de 2024 desarrollado por Vanillaware y publicado por Atlus en Japón y Sega en el resto del mundo para Nintendo Switch, PlayStation 4, PlayStation 5 y Xbox Series X/S. Ambientada en el continente de Fevrith en un contexto bélico, la historia sigue al príncipe exiliado Alain mientras reúne aliados para recuperar su reino del Imperio Zenoiran, liderado por el General Valmore. El sistema de juego se centra en el protagonista y sus unidades del ejército luchando en batallas a gran escala, con movimientos en el campo y escaramuzas en tiempo real.",
  notes: "Unicorn Overlord (Vanillaware, 2024) running on Windows and Linux through a runtime layer. Latest release: v1.4.0. You need your own copy of the game; no game files are included.",
  notesEs: "Unicorn Overlord (Vanillaware, 2024) en Windows y Linux mediante capa de ejecución. Última release: v1.4.0. Necesitas tu propia copia del juego; no incluye archivos del juego.",
  features: [
    "Native Windows and Linux builds.",
    "Windows package and Linux AppImage.",
    "Requires your own PS4 game files.",
  ],
  featuresEs: [
    "Builds nativas para Windows y Linux.",
    "Paquete para Windows y AppImage para Linux.",
    "Necesita tus propios archivos de PS4.",
  ],
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/hachi23/unicorn_overlord_pc/releases/download/v1.4.0/Unicorn-Overlord-PC-windows.zip",
    },
    {
      label: "Linux",
      url: "https://github.com/hachi23/unicorn_overlord_pc/releases/download/v1.4.0/Unicorn-Overlord-x86_64.AppImage",
    },
  ],
};
