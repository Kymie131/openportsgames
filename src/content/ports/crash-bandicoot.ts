import type { Port } from "@/lib/ports/schema";

export const crashBandicoot: Port = {
  schema: "port",
  id: "crash-bandicoot",
  title: "Crash Bandicoot Launcher",
  game: "Crash Bandicoot",
  developers: ["Naughty Dog"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1996,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "android"],
  status: "stable",
  release: { version: "1.9.4", date: "2026-09-18" },
  sources: ["https://github.com/Matteo842/CrashBandicoot-Launcher"],
  license: { spdx: "MIT" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "PlayStation",
  features: [
    "Native widescreen support with retail-parity entity culling",
    "High frame rate fixes and PC GPU workarounds",
    "Windows, Linux and Android builds from official releases",
  ],
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/749a8631-fb87-4a33-8149-ccbb104d6412",
      alt: "Crash Bandicoot running as a native recompilation with the pause overlay open",
      credit: "Crash Bandicoot Launcher",
    },
  ],
  notes:
    "Native PC port of Crash Bandicoot (PS1) produced via the RecompOne static recompilation stack, distributed as versioned releases. Requires your own PS1 disc dump. The project is not affiliated with the original developer.",
};
