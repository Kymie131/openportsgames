import type { Port } from "@/lib/ports/schema";

export const Idtech4aHarmattanEdition: Port = {
  schema: "port",
  id: "idtech4a-harmattan-edition",
  title: "IdTech4A++ (Harmattan Edition)",
  game: "idTech4A++ (Harmattan Edition)",
  developers: ["glKarin"],
  publisher: "Unknown",
  originalYear: 2006,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.1.0harmattan73", date: "2026-09-30" },
  sources: ["https://github.com/glKarin/com.n0n3m4.diii4a"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "idTech4A++ (Harmattan Edition) is a shooter game, released in 2006.",
  summaryEs: "idTech4A++ (Harmattan Edition) es un videojuego de disparos, lanzado en 2006.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/glKarin/com.n0n3m4.diii4a/releases/download/v1.1.0harmattan73/idTech4A%2B%2B_1.1.0harmattan73.apk",
      size: "524.4 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/glKarin/com.n0n3m4.diii4a/releases/download/v1.1.0harmattan73/idTech4A%2B%2B_1.1.0harmattan73_arm64.apk",
      size: "327.1 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/glKarin/com.n0n3m4.diii4a/releases/download/v1.1.0harmattan73/idTech4A%2B%2B_1.1.0harmattan73_armv7.apk",
      size: "300.6 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/idtech4a-harmattan-edition.svg",
    alt: "idTech4A++ (Harmattan Edition) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "DOOM III/Quake 4/Prey(2006) GLES on Android/Windows/Linux, DOOM 3 BFG/The Dark Mod/RTCW/Quake 1 2 3/GZDOOM/ETW/RealRTCW/OpenJK/SeriousSam/Skin Deep/Quadrilateral Cowboy/Icarus Starship Command Simulator on Android.",
  notesEs:
    "DOOM III/Quake 4/Prey (2006) GLES en Android/Windows/Linux, y DOOM 3 BFG/The Dark Mod/RTCW/Quake 1 2 3/GZDoom/ETW/RealRTCW/OpenJK/Serious Sam/Skin Deep/Quadrilateral Cowboy/Icarus en Android.",
};
