import type { Port } from "@/lib/ports/schema";

export const SerioussamclassicVk: Port = {
  schema: "port",
  id: "serioussamclassic-vk",
  title: "SeriousSamClassic-VK",
  game: "SeriousSamClassic-VK",
  developers: ["tx00100xt"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.10.7", date: "2025-02-02" },
  sources: ["https://github.com/tx00100xt/SeriousSamClassic-VK"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "SeriousSamClassic-VK is a action-adventure game, released in 2000.",
  summaryEs: "SeriousSamClassic-VK es un videojuego de acci�n y aventura, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "SeriousSamClassicVk-1.10.7-alpine-musl-x86-bin",
      url: "https://github.com/tx00100xt/SeriousSamClassic-VK/releases/download/1.10.7/SeriousSamClassicVk-1.10.7-alpine-musl-x86-bin.tar.xz",
      size: "9.0 MB",
    },
    {
      label: "SeriousSamClassicVk-1.10.7-alpine-musl-x86_64-bin",
      url: "https://github.com/tx00100xt/SeriousSamClassic-VK/releases/download/1.10.7/SeriousSamClassicVk-1.10.7-alpine-musl-x86_64-bin.tar.xz",
      size: "9.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/tx00100xt/SeriousSamClassic-VK/releases/download/1.10.7/SeriousSamClassicVk-1.10.7-directx9-win32-bin.7z",
      size: "6.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/tx00100xt/SeriousSamClassic-VK/releases/download/1.10.7/SeriousSamClassicVk-1.10.7-directx9-win64-bin.7z",
      size: "6.9 MB",
    },
    {
      label: "SeriousSamClassicVk-1.10.7-freebsd-amd64-bin",
      url: "https://github.com/tx00100xt/SeriousSamClassic-VK/releases/download/1.10.7/SeriousSamClassicVk-1.10.7-freebsd-amd64-bin.tar.xz",
      size: "8.7 MB",
    },
    {
      label: "SeriousSamClassicVk-1.10.7-lnx-aarch64-bin",
      url: "https://github.com/tx00100xt/SeriousSamClassic-VK/releases/download/1.10.7/SeriousSamClassicVk-1.10.7-lnx-aarch64-bin.tar.xz",
      size: "8.6 MB",
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
