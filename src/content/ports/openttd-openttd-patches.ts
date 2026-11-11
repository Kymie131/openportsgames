import type { Port } from "@/lib/ports/schema";

export const OpenttdOpenttdPatches: Port = {
  schema: "port",
  id: "openttd-openttd-patches",
  title: "OpenTTD (OpenTTD-patches)",
  game: "OpenTTD (OpenTTD-patches)",
  developers: ["JGRennison"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.73.5", date: "2026-11-01" },
  sources: ["https://github.com/JGRennison/OpenTTD-patches"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "OpenTTD is a business simulation game in which players try to earn money by transporting passengers, minerals and goods via road, rail, water and air. It is an open-source remake and expansion of the 1995 Chris Sawyer video game Transport Tycoon Deluxe.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/JGRennison/OpenTTD-patches/releases/download/jgrpp-0.73.5/openttd-jgrpp-0.73.5-linux--bookworm-amd64.deb",
      size: "31.0 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/JGRennison/OpenTTD-patches/releases/download/jgrpp-0.73.5/openttd-jgrpp-0.73.5-linux--jammy-amd64.deb",
      size: "31.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/JGRennison/OpenTTD-patches/releases/download/jgrpp-0.73.5/openttd-jgrpp-0.73.5-linux--noble-amd64.deb",
      size: "30.7 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/JGRennison/OpenTTD-patches/releases/download/jgrpp-0.73.5/openttd-jgrpp-0.73.5-linux-dedicated-amd64.tar.xz",
      size: "27.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/JGRennison/OpenTTD-patches/releases/download/jgrpp-0.73.5/openttd-jgrpp-0.73.5-linux-generic-amd64.tar.xz",
      size: "41.7 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/JGRennison/OpenTTD-patches/releases/download/jgrpp-0.73.5/openttd-jgrpp-0.73.5-macos-universal.dmg",
      size: "18.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openttd-openttd-patches.svg",
    alt: "OpenTTD (OpenTTD-patches) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "OpenTTD - http://www.openttd.org/ - with additional patches.",
  notesEs: "OpenTTD (openttd.org) con parches adicionales.",
};
