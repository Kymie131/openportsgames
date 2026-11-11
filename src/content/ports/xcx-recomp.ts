import type { Port } from "@/lib/ports/schema";

export const xcxRecomp: Port = {
  "schema": "port",
  "id": "xcx-recomp",
  "title": "XCX Recomp",
  "game": "Xenoblade Chronicles X: Definitive Edition",
  "developers": [
    "jmars125"
  ],
  "publisher": "Nintendo",
  "originalYear": 2025,
  "portType": "recompilation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "0.1.16-fixes-test6",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/jmars125/xcx-recomp"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Nintendo Switch"
  ],
  "summary": "Xenoblade Chronicles X: Definitive Edition is the 2025 enhanced version of Monolith Soft's open-world RPG. Humanity rebuilds on the planet Mira after Earth's destruction.",
  "summaryEs": "Xenoblade Chronicles X: Definitive Edition es la versión mejorada de 2025 del RPG de mundo abierto de Monolith Soft. La humanidad se reconstruye en el planeta Mira tras la destrucción de la Tierra.",
  "notes": "Static recompilation of Xenoblade Chronicles X: Definitive Edition to native Windows x86-64 and Linux, with a Vulkan renderer. Game files are not included; bring your own copy. Latest release: v0.1.16-fixes-test6.",
  "notesEs": "Recompilación estática de Xenoblade Chronicles X: Definitive Edition a Windows x86-64 y Linux nativo, con renderizador Vulkan. No incluye archivos del juego; aporta tu propia copia. Última release: v0.1.16-fixes-test6.",
  "features": [
    "Native Windows and Linux builds.",
    "Vulkan renderer.",
    "Requires your own Switch game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Renderizador Vulkan.",
    "Necesita tus propios archivos de Switch."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/jmars125/xcx-recomp/releases/download/v0.1.16-fixes-test6/XCX-Setup-0.1.16-fixes-test6-windows.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/jmars125/xcx-recomp/releases/download/v0.1.16-fixes-test6/XCX-Setup-0.1.16-fixes-test6-linux.AppImage",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/xcx-recomp.jpg",
    alt: "Xenoblade Chronicles X: Definitive Edition (Nintendo Switch box art)",
    credit: "Wikipedia",
  },
};
