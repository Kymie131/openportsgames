import type { Port } from "@/lib/ports/schema";

export const shadowOfTheColossusPc: Port = {
  schema: "port",
  id: "shadow-of-the-colossus-pc",
  title: "Shadow of the Colossus (PC)",
  game: "Shadow of the Colossus",
  developers: ["AjncSystem"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2005,
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
  originalSystems: ["PlayStation 4"],
  summary: "Shadow of the Colossus is a 2005 action-adventure game developed and published by Sony Computer Entertainment for the PlayStation 2. It takes place in a fantasy setting and follows Wander, a young man who enters an isolated and abandoned region of the realm seeking the power to revive a girl named Mono. The player assumes the role of Wander as he embarks on a mission that might entail Mono's resurrection: to locate and destroy the colossi, sixteen massive beings spread across the forbidden land, which the protagonist traverses by horseback and on foot.",
  summaryEs: "Shadow of the Colossus es un videojuego de acción-aventura desarrollado y publicado por Sony Computer Entertainment (SCEI) para PlayStation 2. El juego fue publicado en Norteamérica y Japón en octubre de 2005, y posteriormente en Europa en febrero de 2006. Fue creado por el Estudio Internacional de Producción 1 de SCEI, el mismo grupo de desarrollo responsable del éxito de culto Ico.",
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
