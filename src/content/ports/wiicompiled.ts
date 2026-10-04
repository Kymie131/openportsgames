import type { Port } from "@/lib/ports/schema";

export const wiiCompiled: Port = {
  schema: "port",
  id: "wiicompiled",
  title: "WiiCompiled",
  game: "Mario Kart Wii",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2008,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.2.32", date: "2026-09-14" },
  sources: ["https://github.com/patchzyy/Wiicompiled"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-19",
  originalSystem: "Wii",
  features: [
    "Native 1080p with unlocked frame rate",
    "Online and local multiplayer",
    "Compatibility with Rain and other online mods",
    "Retro Rewind track pack support",
  ],
  featuresEs: [
    "1080p nativo con framerate desbloqueado",
    "Multijugador en línea y local",
    "Compatibilidad con Rain y otros mods en línea",
    "Soporte del paquete de pistas Retro Rewind",
  ],
  notes:
    "Native Windows port of Mario Kart Wii built by statically recompiling the PowerPC code while keeping an emulator component (Dolphin) for select functions. Uses an AI-assisted build pipeline whose source and prompts are public and reproducible. Requires a PAL disc image of Mario Kart Wii (RMCP01) and an encrypted save from the same region; the launcher needs your own legally dumped disc.",
  notesEs:
    "Port nativo para Windows de Mario Kart Wii construido recompilando estáticamente el código PowerPC y manteniendo un componente de emulador (Dolphin) para ciertas funciones. Usa una cadena de build asistida por IA cuyo código y prompts son públicos y reproducibles. Requiere una imagen de disco PAL de Mario Kart Wii (RMCP01) y una partida guardada cifrada de la misma región; el lanzador necesita tu propio disco volcado legalmente.",
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/df7a3f2e-5336-479a-b4c0-968dd578726d",
      alt: "wiicomplogofinalfinalfinalev2MADEBY_INKWRECK_plzcredit",
      credit: "patchzyy",
    },
  ],
};
