import type { Port } from "@/lib/ports/schema";

export const SerioussamclassicVk: Port = {
  schema: "port",
  kind: "tool",
  id: "serioussamclassic-vk",
  title: "SeriousSamClassic-VK",
  game: "Serious Sam Classic",
  developers: ["tx00100xt"],
  publisher: "Croteam",
  originalYear: 2001,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.10.7", date: "2025-02-02" },
  sources: ["https://github.com/tx00100xt/SeriousSamClassic-VK"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "SeriousSamClassic-VK is an open-source Vulkan engine for Serious Sam Classic, the 2001 shooter developed by Croteam.",
  summaryEs: "SeriousSamClassic-VK es un motor Vulkan de código abierto para Serious Sam Classic, el shooter de 2001 desarrollado por Croteam.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/tx00100xt/SeriousSamClassic-VK/releases/download/1.10.7/SeriousSamClassicVk-1.10.7-directx9-win64-bin.7z",
      size: "6.9 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/tx00100xt/SeriousSamClassic-VK/releases/download/1.10.7/SeriousSamClassicVk-1.10.7-directx9-win32-bin.7z",
      size: "6.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/serioussamclassic-vk.svg",
    alt: "SeriousSamClassic-VK (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Open source game engine version developed by Croteam for Serious Sam Classic with Vulkan support (Windows, Linux, FreeBSD, OpenBSD, macOS, Raspberry Pi OS). Based on https://github.com/sultim-t/Serious-Engine-Vk and linux port https://github.com/icculus/Serious-Engine.",
  notesEs:
    "Versión del motor de código abierto de Croteam para Serious Sam Classic con soporte Vulkan (Windows, Linux, FreeBSD, OpenBSD, macOS y Raspberry Pi OS). Basado en Serious-Engine-Vk y en el port a Linux de icculus.",
};
