import type { Port } from "@/lib/ports/schema";

export const broforceAndroid: Port = {
  schema: "port",
  id: "broforce-android",
  title: "Broforce (Android)",
  game: "Broforce",
  developers: ["BelmanteGu"],
  publisher: "Free Lives",
  originalYear: 2015,
  portType: "runtime-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/BelmanteGu/BroforceAndroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Broforce is a 2015 side-scrolling run and gun game developed by Free Lives and published by Devolver Digital. The game has the player as one of several \"bros\", based on popular culture action movie icons, rescuing other \"bros\" through highly destructible environments.",
  summaryEs: "Broforce es un videojuego de desplazamiento lateral de plataformas Run and Gun desarrollado por Free Lives y publicado por Devolver Digital. Su desarrollo empezó en abril de 2012 como una entrada en una Game Jam y continuó gracias al apoyo popular como un juego en Early Access. El juego se lanzó el 15 de octubre de 2015 para Microsoft Windows y OS Xseguido de un port para Linux dos días más tarde. Una versión de PlayStation 4 fue lanzada el 1 de marzo de 2016 y un port para Nintendo Switch fue lanzado el 6 de septiembre de 2018.",
  notes:
    "Unofficial Android port of Broforce designed for gamepads. It ships no game files and needs your own Steam copy.",
  notesEs:
    "Port no oficial para Android de Broforce pensado para mandos. No incluye archivos del juego y necesita tu propia copia de Steam.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9c/Broforce.png",
    alt: "Broforce (box art)",
    credit: "Wikipedia",
  },
};
