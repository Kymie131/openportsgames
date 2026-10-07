import type { Port } from "@/lib/ports/schema";

export const bloodbornePc: Port = {
  schema: "port",
  id: "bloodborne-pc",
  title: "bbport",
  game: "Bloodborne",
  developers: ["deadinside28"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2015,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.3", date: "2026-10-06" },
  sources: ["https://github.com/deadinside28/bloodborne_pc"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-07",
  originalSystem: "PlayStation 4",
  notes:
    "Native runtime port of Bloodborne (PS4, CUSA03173 v1.09). The game's own x86-64 code runs directly on the CPU with no emulation, a small runtime written for this one title replaces the PS4 system libraries, and the graphics are translated to Vulkan by a renderer derived from shadPS4 (the project is not affiliated with the shadPS4 team). It is neither a decompilation nor a general emulator, and it ships no game files: you must supply your own decrypted dump. The Linux build is the reference; community Windows ports exist. It is still in development and not verified from start to finish.",
  notesEs:
    "Port de runtime nativo de Bloodborne (PS4, CUSA03173 v1.09). El código x86-64 del propio juego corre directo en la CPU sin emulación, un runtime pequeño escrito para este único título reemplaza las librerías del sistema de PS4 y los gráficos se traducen a Vulkan con un renderizador derivado de shadPS4 (el proyecto no está afiliado al equipo de shadPS4). No es una decompilación ni un emulador general, y no incluye archivos del juego: debes aportar tu propio volcado descifrado. La build de Linux es la de referencia; existen ports comunitarios para Windows. Sigue en desarrollo y sin verificar de principio a fin.",
};
