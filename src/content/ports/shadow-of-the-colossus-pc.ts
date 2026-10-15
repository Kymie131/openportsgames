import type { Port } from "@/lib/ports/schema";

export const shadowOfTheColossusPc: Port = {
  schema: "port",
  id: "shadow-of-the-colossus-pc",
  title: "Shadow of the Colossus (PC)",
  game: "Shadow of the Colossus",
  developers: ["AjncSystem"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2018,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/AjncSystem/ShadowOfTheColossus-PC"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 4",
  notes:
    "Unofficial native Windows port of the Shadow of the Colossus remake (PS4, CUSA08809). It runs the game's original x86-64 code through a small runtime derived from bbport and a Vulkan renderer based on shadPS4, so it is not a conventional emulator. Requires your own decrypted copy of the game.",
  notesEs:
    "Port nativo no oficial para Windows del remake de Shadow of the Colossus (PS4, CUSA08809). Ejecuta el código x86-64 original del juego con un runtime pequeño derivado de bbport y un renderizador Vulkan basado en shadPS4, por lo que no es un emulador convencional. Requiere tu propia copia descifrada del juego.",
  requirements: {
    minimum: "Windows 10/11 with a Vulkan-capable GPU, plus your own decrypted CUSA08809 copy.",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/ShadowOfTheColossus2018.jpg",
    alt: "Shadow of the Colossus (box art)",
    credit: "Wikipedia",
  },
};
