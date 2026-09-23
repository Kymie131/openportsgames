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
  aiDisclosure: true,
  verified: true,
  verifiedAt: "2026-09-19",
  originalSystem: "Wii",
  features: [
    "Native 1080p with unlocked frame rate",
    "Online and local multiplayer",
    "Compatibility with Rain and other online mods",
    "Retro Rewind track pack support",
  ],
  notes:
    "Native Windows port of Mario Kart Wii built by statically recompiling the PowerPC code while keeping an emulator component (Dolphin) for select functions. Uses an AI-assisted build pipeline whose source and prompts are public and reproducible. Requires a PAL disc image of Mario Kart Wii (RMCP01) and an encrypted save from the same region; the launcher needs your own legally dumped disc.",
};
