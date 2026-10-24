import type { Port } from "@/lib/ports/schema";

export const bloodborneAndroid: Port = {
  schema: "port",
  id: "bloodborne-android",
  title: "Bloodborne Android",
  game: "Bloodborne",
  developers: ["ducvd89"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2015,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ducvd89/Bloodborne-Android"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 4"],
  summary: "Bloodborne is a 2015 action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4. The game follows a Hunter through the decrepit Gothic, Victorian-era inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease. Attempting to find the source of the plague, the player's character unravels the city's mysteries while fighting beasts and eldritch beings.",
  summaryEs: "Bloodborne es un videojuego de rol de acción dirigido por Hidetaka Miyazaki, desarrollado por From Software y distribuido por JapanStudio y Sony Computer Entertainment para la plataforma de PlayStation 4. El videojuego sigue las acciones del personaje del jugador, el Cazador, a través de Yharnam, una ciudad ficticia de estilo victoriano, cuyos habitantes han sido afectados con una enfermedad de transmisión sanguínea anormal.",
  notes:
    "Experimental Android port of Bloodborne (PS4, CUSA03173 v1.09) for Snapdragon devices, built on the bbport project. The runtime and renderer run natively on ARM64 while the game's original x86-64 code is translated at runtime with FEXCore. It boots, loads saves and renders properly, but is still an alpha. Requires your own decrypted copy of Bloodborne updated to v1.09.",
  notesEs:
    "Port experimental para Android de Bloodborne (PS4, CUSA03173 v1.09) para dispositivos Snapdragon, basado en el proyecto bbport. El runtime y el renderizador corren de forma nativa en ARM64, mientras el código x86-64 original del juego se traduce en tiempo real con FEXCore. Arranca, carga partidas y renderiza bien, pero sigue siendo una alfa. Requiere tu propia copia descifrada de Bloodborne actualizada a la v1.09.",
  requirements: {
    minimum:
      "Android 9 or newer with a Snapdragon 8 Gen 2 / 8 Elite class SoC, Vulkan and 4 KB memory pages.",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg",
    alt: "Bloodborne (box art)",
    credit: "Wikipedia",
  },
};
