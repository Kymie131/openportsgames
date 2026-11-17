import type { Port } from "@/lib/ports/schema";

export const CutTheRopeCutTheRopeDx: Port = {
  schema: "port",
  id: "cut-the-rope-cut-the-rope-dx",
  title: "Cut the Rope (Cut the Rope: DX)",
  game: "Cut the Rope",
  developers: ["yell0wsuit"],
  publisher: "ZeptoLab",
  originalYear: 2010,
  portType: "decompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "2.50.1", date: "2026-10-10" },
  sources: ["https://github.com/yell0wsuit/cuttherope-dx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Other"],
  summary: "Cut the Rope is a 2010 physics puzzle game developed and published by ZeptoLab. Players cut ropes to feed candy to the creature Om Nom, collecting stars and solving increasingly complex contraptions.",
  summaryEs: "Cut the Rope es un videojuego de puzles físicos de 2010 desarrollado y publicado por ZeptoLab. El jugador corta cuerdas para dar caramelos a la criatura Om Nom, recogiendo estrellas y resolviendo artilugios cada vez más complejos.",  downloads: [
    {
      label: "Linux",
      url: "https://github.com/yell0wsuit/cuttherope-dx/releases/download/v2.50.1/CutTheRopeDX-v2.50.1-x86_64.AppImage",
      size: "360.8 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/yell0wsuit/cuttherope-dx/releases/download/v2.50.1/CutTheRopeDX-v2.50.1-macOS-arm64-ffmpeg.dmg",
      size: "311.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/yell0wsuit/cuttherope-dx/releases/download/v2.50.1/CutTheRopeDX-v2.50.1-Windows-x64.7z",
      size: "307.5 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/yell0wsuit/cuttherope-dx/releases/download/v2.50.1/CutTheRopeDX-v2.50.1-macOS-arm64-avfoundation.dmg",
      size: "297.2 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/cut-the-rope-cut-the-rope-dx.svg",
    alt: "Cut the Rope (Cut the Rope: DX) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Cut the Rope DX, a fan-made enhancement of the PC version of Cut the Rope. Now available on web!.",
  notesEs:
    "Cut the Rope DX, una mejora hecha por fans de la versión de PC de Cut the Rope. ¡Ya disponible en la web!",
};
