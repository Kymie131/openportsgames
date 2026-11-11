import type { Port } from "@/lib/ports/schema";

export const Openkrush: Port = {
  schema: "port",
  id: "openkrush",
  title: "OpenKrush",  game: "Krush Kill 'n Destroy",
  developers: ["IceReaper"],  publisher: "Electronic Arts",  originalYear: 1997,
  portType: "source-port",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/IceReaper/OpenKrush"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS", "Windows"],  summary: "Krush Kill 'n Destroy (KKnD) is a 1997 real-time strategy game developed by Beam Software and published by Electronic Arts. Survivors and mutants battle for resources in a post-apocalyptic wasteland.",  summaryEs: "Krush Kill 'n Destroy (KKnD) es un juego de estrategia en tiempo real de 1997 desarrollado por Beam Software y publicado por Electronic Arts. Supervivientes y mutantes luchan por los recursos en un páramo postapocalíptico.",  downloads: [
    {
      label: "Windows x64",
      url: "https://github.com/IceReaper/OpenKrush/releases/download/playtest-20220222-3/OpenKrush-playtest-20220222-3-x64-winportable.zip",
      size: "56.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/IceReaper/OpenKrush/releases/download/playtest-20220222-3/OpenKrush-playtest-20220222-3-x86_64.AppImage",
      size: "54.0 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/IceReaper/OpenKrush/releases/download/playtest-20220222-3/OpenKrush-playtest-20220222-3-x86-winportable.zip",
      size: "53.1 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/IceReaper/OpenKrush/releases/download/playtest-20220222-3/OpenKrush-playtest-20220222-3-x64.exe",
      size: "46.9 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/IceReaper/OpenKrush/releases/download/playtest-20220222-3/OpenKrush-playtest-20220222-3-x86.exe",
      size: "44.2 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/IceReaper/OpenKrush/releases/download/playtest-20220222-3/OpenKrush-playtest-20220222-3-compat.dmg",
      size: "22.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openkrush.svg",
    alt: "OpenKrush (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "A KKnD and KKnD2 mod on OpenRA engine.",
  notesEs: "Un mod de KKnD y KKnD2 sobre el motor OpenRA.",
};
