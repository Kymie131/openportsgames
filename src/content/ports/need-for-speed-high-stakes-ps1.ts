import type { Port } from "@/lib/ports/schema";

export const NeedForSpeedHighStakesPs1: Port = {
  schema: "port",
  id: "need-for-speed-high-stakes-ps1",
  title: "Need for Speed: High Stakes (PS1)",
  game: "Need for Speed: High Stakes (PS1)",
  developers: ["Caesar0007"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Caesar0007/NFSHS-PSX-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Need for Speed (NFS) is a racing game franchise published by Electronic Arts. Most entries in the series are generally arcade racing games centered around illegal street racing, and task players with completing races of various types while evading police pursuit. Some entries also do not follow the basic setup of most titles and are instead simulation racers, focus on legal circuit races, feature kart racing game elements, or feature illegal street racing but do not also feature police pursuits. Need for Speed is one of EA's oldest franchises not published under their EA Sports brand.",
  summaryEs: "Need for Speed (NFS) es una franquicia de videojuegos de carreras y aventuras publicada por Electronic Arts. La serie se centra, principalmente, en las carreras callejeras ilícitas y, en general, les da el papel a los jugadores de completar varios tipos de carreras, infringiendo en más de una ocasión la ley local mientras evaden persecuciones policiales. La serie lanzó su primer título, The Need for Speed en 1994. El título proviene de una famosa cita de la película de 1986 Top Gun.",
  cover: {
    src: "https://openportsgames.com/covers/generated/need-for-speed-high-stakes-ps1.svg",
    alt: "Need for Speed: High Stakes (PS1) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Byte-matching decompilation of Need for Speed High Stakes (PSX) - splat + maspsx + objdiff.",
  notesEs: "Decompilación que coincide byte a byte de Need for Speed: High Stakes (PSX).",
};
