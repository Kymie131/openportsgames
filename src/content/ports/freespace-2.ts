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
  featuresEs: [
    "Builds de escritorio multiplataforma",
    "Renderizadores OpenGL y Vulkan modernos",
    "Scripting de misiones extensible",
  ],
  notes:
    "Open source engine for FreeSpace 2. The newest tag is a release candidate, so the last stable release is recorded. Licensing is governed by a custom Copying.md with additional terms rather than a standard OSI license.",
  notesEs:
    "Motor de código abierto para FreeSpace 2. La etiqueta más reciente es una release candidate, así que se registra la última release estable. La licencia se rige por un Copying.md propio con términos adicionales en lugar de una licencia OSI estándar.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0d/Freespace2box.jpg",
    alt: "FreeSpace 2 (box art)",
    credit: "Wikipedia",
  },
};
