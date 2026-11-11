import type { Port } from "@/lib/ports/schema";

export const rageRacerPc: Port = {
  schema: "port",
  id: "rage-racer-pc",
  title: "Rage Racer PC",
  game: "Rage Racer",
  developers: ["khasinski"],
  publisher: "Namco",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.6.15-alpha", date: "2026-11-05" },
  sources: ["https://github.com/khasinski/rage-racer-pc"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Rage Racer is a 1996 racing video game developed and published by Namco for the PlayStation. It is the fifth installment in the Ridge Racer series and the third on the PlayStation following Ridge Racer Revolution (1995). It was released in Japan on December 3, 1996, with releases elsewhere following in 1997. It was the first game in the series to feature a CGI animated introduction, and introduced a new \"mascot\", Reiko Nagase.",
  summaryEs: "Rage Racer es un videojuego de carreras desarrollado y publicado por Namco para PlayStation. Es el tercer título de la serie Ridge Racer. Se lanzó en Japón el 3 de diciembre de 1996, con lanzamientos en los Estados Unidos y Europa en 1997. Fue el primer juego de la serie en presentar una introducción animada CGI e introdujo una nueva \"mascota\", Reiko Nagase.",
  notes:
    "Native recompilation of Rage Racer (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Rage Racer (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/khasinski/rage-racer-pc/releases/download/0.6.15-alpha/Rage-Racer-0.6.15-alpha-linux-x86_64.zip",
      size: "3.9 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/khasinski/rage-racer-pc/releases/download/0.6.15-alpha/Rage-Racer-0.6.15-alpha-macos-arm64.zip",
      size: "3.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/khasinski/rage-racer-pc/releases/download/0.6.15-alpha/Rage-Racer-0.6.15-alpha-windows-x86_64.zip",
      size: "2.6 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/khasinski/rage-racer-pc/releases/download/0.6.15-alpha/Rage-Racer-Editor-0.6.15-alpha-linux-amd64.deb",
      size: "95.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/khasinski/rage-racer-pc/releases/download/0.6.15-alpha/Rage-Racer-Editor-0.6.15-alpha-linux-x86_64.zip",
      size: "128.4 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/khasinski/rage-racer-pc/releases/download/0.6.15-alpha/Rage-Racer-Editor-0.6.15-alpha-macos-arm64.zip",
      size: "129.5 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rage%20Racer%20(USA).png",
    alt: "Rage Racer (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Rage%20Racer%20(USA).png",
      alt: "Rage Racer (screenshot)",
      credit: "Libretro",
    },
  ],
};
