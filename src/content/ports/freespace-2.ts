import type { Port } from "@/lib/ports/schema";

export const freeSpace2: Port = {
  schema: "port",
  id: "freespace-2",
  title: "FreeSpace 2",
  game: "FreeSpace 2",
  developers: ["SCP Team"],
  publisher: "Interplay",
  originalYear: 1999,
  genre: "simulation",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "26.0.1", date: "2026-09-15" },
  sources: ["https://github.com/scp-fs2open/fs2open.github.com"],
  website: "https://www.hard-light.net/",
  license: {
    spdx: "NOASSERTION",
    note: "custom terms in Copying.md plus additional restrictions",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Microsoft Windows",
  features: [
    "Cross-platform desktop builds",
    "Modern OpenGL and Vulkan renderers",
    "Extensible mission scripting",
  ],
  notes:
    "Open source engine for FreeSpace 2. The newest tag is a release candidate, so the last stable release is recorded. Licensing is governed by a custom Copying.md with additional terms rather than a standard OSI license.",
};
