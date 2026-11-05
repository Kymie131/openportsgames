import type { Port } from "@/lib/ports/schema";

export const gravityRushRemasteredGrr: Port = {
  schema: "port",
  id: "gravity-rush-remastered-grr",
  title: "Gravity Rush Remastered (grr_pc)",
  game: "Gravity Rush Remastered",
  developers: ["rodrigojacarei"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2015,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "2026.10.30-1856116", date: "2026-10-30" },
  sources: ["https://github.com/rodrigojacarei/grr_pc"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-05",
  originalSystems: ["PlayStation 4"],
  related: ["gravity-rush-remastered-pc"],
  summary:
    "Gravity Rush Remastered is a 2015 action-adventure game developed by SIE Japan Studio and Bluepoint Games and published by Sony Computer Entertainment for PlayStation 4. It follows Kat, a young woman who can manipulate gravity, as she protects the floating city of Hekseville.",
  summaryEs:
    "Gravity Rush Remastered es un videojuego de acción y aventura de 2015 desarrollado por SIE Japan Studio y Bluepoint Games y publicado por Sony Computer Entertainment para PlayStation 4. Sigue a Kat, una joven capaz de manipular la gravedad, mientras protege la ciudad flotante de Hekseville.",
  notes:
    "Native PC port of Gravity Rush Remastered (PS4, CUSA01130) for Windows and Linux, with Vulkan 1.3, SDL3, unlocked framerates and resolution scaling. You must dump eboot.bin, sce_module, arc and sce_sys from your own copy; no game files are included.",
  notesEs:
    "Port nativo para PC de Gravity Rush Remastered (PS4, CUSA01130) para Windows y Linux, con Vulkan 1.3, SDL3, framerate desbloqueado y escalado de resolución. Debes extraer eboot.bin, sce_module, arc y sce_sys de tu propia copia; no incluye archivos del juego.",
  requirements: {
    minimum:
      "Windows 10/11 64-bit or Linux x86-64, a Vulkan 1.3 GPU with 4 GB VRAM and 9.5 GB free for game data",
  },
  cover: {
    src: "https://openportsgames.com/covers/generated/gravity-rush-remastered.svg",
    alt: "Gravity Rush Remastered (generated cover)",
    credit: "OpenPortsGames",
  },
};
