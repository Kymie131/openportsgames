import type { Port } from "@/lib/ports/schema";

export const Sonic06Demo: Port = {
  schema: "port",
  id: "sonic-06-demo",
  title: "Sonic 06 Demo",  game: "Sonic the Hedgehog (2006)",
  developers: ["PranchaD"],  publisher: "Sega",  originalYear: 2006,
  portType: "recompilation",  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1", date: "2026-02-26" },
  sources: ["https://github.com/PranchaD/re-Sonic06Demo"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Xbox 360"],  summary: "Sonic the Hedgehog is a 2006 platform game developed by Sonic Team and published by Sega for the Xbox 360 and PlayStation 3. It follows Sonic, Shadow and Silver as they try to stop the destruction of Soleanna and the awakening of Solaris.",  summaryEs: "Sonic the Hedgehog es un juego de plataformas de 2006 desarrollado por Sonic Team y publicado por Sega para Xbox 360 y PlayStation 3. Sigue a Sonic, Shadow y Silver en su intento de evitar la destrucción de Soleanna y el despertar de Solaris.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/PranchaD/re-Sonic06Demo/releases/download/v0.1/sonic06demo.exe",
      size: "103.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/sonic-06-demo.svg",
    alt: "Sonic 06 Demo (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Sonic 06 Demo Recompilation using RexGlue.",
  notesEs: "Recompilación de la demo de Sonic 06 con ReXGlue.",
};
