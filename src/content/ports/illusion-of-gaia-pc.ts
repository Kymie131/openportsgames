import type { Port } from "@/lib/ports/schema";

export const illusionOfGaiaPc: Port = {
  schema: "port",
  id: "illusion-of-gaia-pc",
  title: "Illusion of Gaia (PC)",
  game: "Illusion of Gaia",
  developers: ["mrOt4"],
  publisher: "Enix",
  originalYear: 1993,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows","linux","macos","switch","android","3ds","psvita"],
  status: "beta",
  release: { version: "1.0", date: "2026-10-16" },
  sources: ["https://github.com/mrOt4/babel-recomp"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Super Nintendo"],
  downloads: [
    {
      label: "babel-recomp-1.0-3ds",
      url: "https://github.com/mrOt4/babel-recomp/releases/download/v1.0/babel-recomp-1.0-3ds.zip",
      size: "2.4 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/mrOt4/babel-recomp/releases/download/v1.0/babel-recomp-1.0-android-arm64.apk",
      size: "7.7 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/mrOt4/babel-recomp/releases/download/v1.0/babel-recomp-1.0-linux-x86_64.zip",
      size: "4.9 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/mrOt4/babel-recomp/releases/download/v1.0/babel-recomp-1.0-macos-arm64.zip",
      size: "3.9 MB",
    },
    {
      label: "Switch",
      url: "https://github.com/mrOt4/babel-recomp/releases/download/v1.0/babel-recomp-1.0-switch.zip",
      size: "7.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/mrOt4/babel-recomp/releases/download/v1.0/babel-recomp-1.0-windows-x86_64.zip",
      size: "4.9 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1a/Iogbox.jpg",
    alt: "Illusion of Gaia (box art)",
    credit: "Wikipedia",
  },
  summary: "Illusion of Gaia, known in PAL territories as Illusion of Time, is an action role-playing video game developed by Quintet for the Super Nintendo Entertainment System. The game was released in Japan by Enix in 1993, and in North America and PAL territories by Nintendo in 1994 and 1995. Set in a fantasy reimagining of Earth, the game's plot centers on a boy named Will who is chosen to save the world from an impending disaster.",
  summaryEs: "Illusion of Time, conocido en Japón como ガイア幻想紀 y en Estados Unidos como Illusion of Gaia, es un videojuego del género ARPG lanzado en 1995 para la consola Super Nintendo. Fue desarrollado por Quintet. Enix publicó el juego en Japón, y Nintendo en Europa lo publicó en cuatro idiomas: inglés, francés, español y alemán.",
  notes: "Illusion of Gaia (Enix, 1993) running on Windows and Linux and macOS and Nintendo Switch and Android and Nintendo 3DS and PlayStation Vita through static recompilation. Latest release: v1.0. You need your own copy of the game.",
  notesEs: "Illusion of Gaia (Enix, 1993) en Windows and Linux and macOS and Nintendo Switch and Android and Nintendo 3DS and PlayStation Vita mediante recompilación estática. Última release: v1.0. Necesitas tu propia copia del juego.",
};
