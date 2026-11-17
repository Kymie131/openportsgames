import type { Port } from "@/lib/ports/schema";

export const enchantedArmsRecomp: Port = {
  schema: "port",
  id: "enchanted-arms-recomp",
  title: "Enchanted Arms Recompiled",
  game: "Enchanted Arms",
  developers: ["IAndrewJJ"],
  publisher: "Ubisoft",
  originalYear: 2006,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/IAndrewJJ/EnchantedArmsRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-25",
  originalSystems: ["Xbox 360"],
  summary:
    "Enchanted Arms is a 2006 role-playing game developed by FromSoftware and published by Ubisoft in the West. It follows Atsuma in a world where golems are controlled by enchanted arms, with turn-based battles on a grid.",
  summaryEs:
    "Enchanted Arms es un videojuego de rol de 2006 desarrollado por FromSoftware y publicado por Ubisoft en Occidente. Sigue a Atsuma en un mundo donde los gólems se controlan con brazos encantados, con combates por turnos sobre una cuadrícula.",
  cover: {
    src: "https://openportsgames.com/covers/generated/enchanted-arms.svg",
    alt: "Enchanted Arms (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Enchanted Arms Recompiled: native recompilation of Enchanted Arms for windows. Bring your own copy of the game.",
  notesEs: "Enchanted Arms Recompiled: recompilación nativo de Enchanted Arms para windows. Aporta tu propia copia del juego.",
};
