import type { Port } from "@/lib/ports/schema";

export const ja2Stracciatella: Port = {
  schema: "port",
  id: "ja2-stracciatella",
  title: "Ja2Stracciatella",
  game: "Jagged Alliance 2",
  developers: ["Ja2Stracciatella Team"],
  publisher: "TopWare",
  originalYear: 1999,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "0.22.1", date: "2025-10-05" },
  sources: ["https://github.com/ja2-stracciatella/ja2-stracciatella"],
  website: "https://ja2-stracciatella.github.io/",
  license: {
    spdx: "NOASSERTION",
    note: "SFI Source Code license agreement at the repository root",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Cross-platform desktop builds",
    "Android build",
    "Extended item and mercenary databases",
  ],
  notes:
    "Open source reimplementation of Jagged Alliance 2. The repository carries an SFI Source Code license agreement rather than a standard SPDX license.",
};
