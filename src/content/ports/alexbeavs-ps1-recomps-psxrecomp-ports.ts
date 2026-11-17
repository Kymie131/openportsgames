import type { Port } from "@/lib/ports/schema";

export const AlexbeavsPs1RecompsPsxrecompPorts: Port = {
  schema: "port",
  id: "alexbeavs-ps1-recomps-psxrecomp-ports",
  title: "Alexbeav's PS1 recomps (psxrecomp-ports)",
  kind: "tool",
  game: "PlayStation",
  developers: ["alexbeavs-ps1-ports"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1994,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3.4", date: "2026-09-02" },
  sources: ["https://github.com/alexbeavs-ps1-ports/psxrecomp-ports"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary:
    "Alexbeav's PS1 Recomps is a collection of unofficial, noncommercial PlayStation recompilation build kits. Each release turns a supported PS1 game into a native Windows, Linux or macOS program using files from the player's own copy.",
  summaryEs:
    "Alexbeav's PS1 Recomps es una colección de kits de compilación no oficiales y sin ánimo de lucro para recompilar juegos de PlayStation. Cada release convierte un juego de PS1 compatible en un programa nativo para Windows, Linux o macOS usando los archivos de la copia del jugador.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/psxrecomp-ports/releases/download/v0.3.4/psxrecomp-diablo-usa-v0.3.4-owned-input-win64.zip",
      size: "16 KB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/alexbeav-s-ps1-recomps-psxrecomp-ports.svg",
    alt: "Alexbeav's PS1 recomps (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Unofficial noncommercial PlayStation recompilation releases.",
  notesEs: "Publicaciones de recompilación de PlayStation no oficiales y sin ánimo de lucro.",
};
