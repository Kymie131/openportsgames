import type { Port } from "@/lib/ports/schema";

export const lcsRecomp: Port = {
  schema: "port",
  id: "lcs-recomp",
  title: "LCS Recomp",
  game: "Grand Theft Auto: Liberty City Stories",
  developers: ["Rockstar North"],
  publisher: "Rockstar Games",
  originalYear: 2005,
  portType: "recompilation",
  genre: "open-world",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.1.4", date: "2026-09-29" },
  sources: ["https://github.com/elmasas/lcs-recomp"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "PlayStation Portable",
  features: [
    "Built on the PSPRecomp static recompilation framework",
    "DirectX 12 renderer on Windows, Vulkan on Linux",
    "Resolution, scaling and texture options in LCSNative.ini",
  ],
  featuresEs: [
    "Construido sobre el marco de recompilación estática PSPRecomp",
    "Renderizador DirectX 12 en Windows, Vulkan en Linux",
    "Opciones de resolución, escalado y texturas en LCSNative.ini",
  ],
  notes:
    "PC recompilation of Liberty City Stories built on PSPRecomp, first tagged in late September 2026. Needs a decrypted EBOOT.ELF and the PSP_GAME folder from the US v1.05 release, disc ID ULUS-10041.",
  notesEs:
    "Recompilación para PC de Liberty City Stories construida sobre PSPRecomp, etiquetada por primera vez a finales de septiembre de 2026. Necesita un EBOOT.ELF descifrado y la carpeta PSP_GAME de la versión USA v1.05, con ID de disco ULUS-10041.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Boxarts/Grand%20Theft%20Auto%20-%20Liberty%20City%20Stories%20(USA)%20(En%2CFr%2CDe%2CEs%2CIt)%20(v1.05).png",
    alt: "Grand Theft Auto: Liberty City Stories (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Snaps/Grand%20Theft%20Auto%20-%20Liberty%20City%20Stories%20(USA)%20(En,Fr,De,Es,It)%20(v1.05).png",
      alt: "Grand Theft Auto: Liberty City Stories (screenshot)",
      credit: "Libretro",
    },
  ],
};
