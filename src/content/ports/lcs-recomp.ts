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
  sources: [
    "https://github.com/elmasas/lcs-recomp",
    "https://github.com/jessicanataliagta/PSPRecomp",
  ],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "PlayStation Portable",
  features: [
    "Built on the PSPRecomp static recompilation framework",
    "DirectX 12 renderer on Windows, Vulkan on Linux",
    "Resolution, scaling and texture options in LCSNative.ini",
  ],
  notes:
    "PC recompilation of Liberty City Stories built on PSPRecomp, first tagged in late September 2026. Needs a decrypted EBOOT.ELF and the PSP_GAME folder from the US v1.05 release, disc ID ULUS-10041.",
};
