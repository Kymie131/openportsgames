import type { Port } from "@/lib/ports/schema";

export const Serioussamalpharemake: Port = {
  schema: "port",
  id: "serioussamalpharemake",
  title: "SeriousSamAlphaRemake",
  game: "SeriousSamAlphaRemake",
  developers: ["tx00100xt"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.5.3", date: "2023-10-22" },
  sources: ["https://github.com/tx00100xt/SeriousSamAlphaRemake"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "SeriousSamAlphaRemake is a action-adventure game, released in 2000.",
  summaryEs: "SeriousSamAlphaRemake es un videojuego de acci�n y aventura, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Windows x86",
      url: "https://github.com/tx00100xt/SeriousSamAlphaRemake/releases/download/v1.5.3/SeriousSamAlphaRemake-1.5.3-lnx-glibc-2.24-i386-bin.tar.xz",
      size: "975 KB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/tx00100xt/SeriousSamAlphaRemake/releases/download/v1.5.3/SeriousSamAlphaRemake-1.5.3-lnx-glibc-2.24-amd64-bin.tar.xz",
      size: "946 KB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/tx00100xt/SeriousSamAlphaRemake/releases/download/v1.5.3/SeriousSamAlphaRemake-1.5.3-alpine-x86-bin.tar.xz",
      size: "862 KB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/tx00100xt/SeriousSamAlphaRemake/releases/download/v1.5.3/SeriousSamAlphaRemake-1.5.3-lnx-amd64-bin.tar.xz",
      size: "845 KB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/tx00100xt/SeriousSamAlphaRemake/releases/download/v1.5.3/SeriousSamAlphaRemake-1.5.3-alpne-x86_64-bin.tar.xz",
      size: "838 KB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/tx00100xt/SeriousSamAlphaRemake/releases/download/v1.5.3/SeriousSamAlphaRemake-1.5.3-bsd-amd64-bin.tar.xz",
      size: "781 KB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/serioussamalpharemake.svg",
    alt: "SeriousSamAlphaRemake (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Serious Sam Alpha Remake open source project based on https://github.com/Croteam-official/Serious-Engine and linux port https://github.com/icculus/Serious-Engine. Zdzichu official repo: https://github.com/GrlPwr-Zdzichu/SeriousSamAlphaRemake-Legacy.",
  notesEs:
    "Proyecto de código abierto Serious Sam Alpha Remake, basado en Serious Engine de Croteam y en su port a Linux de icculus. El repositorio oficial lo mantiene GrlPwr-Zdzichu con una versión legacy.",
};
