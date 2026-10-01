import type { Port } from "@/lib/ports/schema";

export const perfectDarkPort: Port = {
  schema: "port",
  id: "perfect-dark-port",
  title: "Perfect Dark PC Port",
  game: "Perfect Dark",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/perfect-dark-pc-port/perfect_dark"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Port of the matching N64 decompilation to modern platforms",
    "Widescreen, mouselook and dual analog support",
    "Split-screen multiplayer and Transfer Pak emulation",
  ],
  notes:
    "Work in progress port of the Perfect Dark decompilation, kept separate from the upstream GitLab project. Builds come from a rolling CI tag rather than versioned releases. Needs a legally obtained N64 ROM.",
};
