import type { Port } from "@/lib/ports/schema";

export const unchartedNathanDrakeCollectionPc: Port = {
  schema: "port",
  id: "uncharted-nathan-drake-collection-pc",
  title: "Uncharted: The Nathan Drake Collection (PC)",
  game: "Uncharted: The Nathan Drake Collection",
  developers: ["Supermedo"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2015,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.3.1", date: "2026-10-15" },
  sources: ["https://github.com/Supermedo/uncharted_pc"],
  discord: "https://discord.gg/yTMG8c4Bqm",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-15",
  originalSystems: ["PlayStation 4"],
  notes:
    "Native runtime port of Uncharted: The Nathan Drake Collection (PS4) for Windows, by the author of the Bloodborne PC port. The games' own x86-64 code runs directly on the CPU and the graphics are translated to Vulkan by a renderer derived from shadPS4. One launcher runs all three remasters (Drake's Fortune, Among Thieves and Drake's Deception) with TAA, FSR/DLSS upscaling, frame generation and remappable keyboard, mouse and controller input. It ships no game files: you need your own decrypted dump of the collection.",
  notesEs:
    "Port de runtime nativo de Uncharted: The Nathan Drake Collection (PS4) para Windows, del autor del port de PC de Bloodborne. El código x86-64 del propio juego corre directo en la CPU y los gráficos se traducen a Vulkan con un renderizador derivado de shadPS4. Un lanzador ejecuta los tres remasters (Drake's Fortune, Among Thieves y Drake's Deception) con TAA, escalado FSR/DLSS, generación de fotogramas y entrada reconfigurable de teclado, ratón y mando. No incluye archivos del juego: necesitas tu propio volcado descifrado de la colección.",
  features: [
    "One launcher for Drake's Fortune, Among Thieves and Drake's Deception",
    "60 FPS as on PS4, or 120 FPS (higher rates are experimental)",
    "TAA, AMD FSR 3.1/4 or NVIDIA DLSS upscaling and frame generation",
    "Keyboard, mouse and controller together, all remappable",
  ],
  featuresEs: [
    "Un lanzador para Drake's Fortune, Among Thieves y Drake's Deception",
    "60 FPS como en PS4, o 120 FPS (tasas mayores son experimentales)",
    "TAA, escalado AMD FSR 3.1/4 o NVIDIA DLSS y generación de fotogramas",
    "Teclado, ratón y mando a la vez, todo reconfigurable",
  ],
  aiDisclosure: {
    source: "https://github.com/Supermedo/uncharted_pc/commits/main",
    quote: "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c9/Nathan_Drake_Collection_cover_art.png",
    alt: "Uncharted: The Nathan Drake Collection (box art)",
    credit: "Wikipedia",
  },
};
