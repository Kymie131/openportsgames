import type { Port } from "@/lib/ports/schema";

export const Serioussamalpharemake: Port = {
  schema: "port",
  id: "serioussamalpharemake",
  title: "SeriousSamAlphaRemake",  game: "Serious Sam",
  developers: ["tx00100xt"],  publisher: "Gathering of Developers",  originalYear: 2001,
  portType: "reimplementation",  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.5.3", date: "2023-10-22" },
  sources: ["https://github.com/tx00100xt/SeriousSamAlphaRemake"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Serious Sam is a 2001 first-person shooter developed by Croteam and published by Gathering of Developers. Sam \"Serious\" Stone fights hordes of Mental's monsters across ancient Egypt and other locations.",  summaryEs: "Serious Sam es un shooter en primera persona de 2001 desarrollado por Croteam y publicado por Gathering of Developers. Sam \"Serious\" Stone se enfrenta a hordas de monstruos de Mental por el antiguo Egipto y otros lugares.",  downloads: [
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
