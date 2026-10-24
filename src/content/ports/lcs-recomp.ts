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
  release: { version: "0.1.6", date: "2026-10-07" },
  sources: ["https://github.com/elmasas/lcs-recomp"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystems: ["PlayStation Portable"],
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
  summary: "Grand Theft Auto: Liberty City Stories is a 2005 action-adventure game developed in a collaboration between Rockstar Leeds and Rockstar North, and published by Rockstar Games. The ninth installment in the Grand Theft Auto series, it was initially released as a PlayStation Portable exclusive in October 2005. A port for the PlayStation 2 was later released in June 2006. At the time of release, the recommended retail price of the PS2 port was around half the price of the PSP version, because the PS2 version does not feature the custom soundtrack ripping capability of the PSP version.",
  summaryEs: "Grand Theft Auto: Liberty City Stories es el decimoprimer juego de la serie Grand Theft Auto, desarrollado por Rockstar North en colaboración con Rockstar Leeds y distribuido por Rockstar Games. El juego se creó principalmente para el sistema PlayStation Portable (PSP), PlayStation 2 (PS2) lanzada en 2006. Por las grandes ventas del mismo también se lanzó para dispositivos iOS, Android y Fire OS el 17 de diciembre de 2015, 11 de febrero de 2016 y 11 de marzo de 2016, respectivamente.",
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
