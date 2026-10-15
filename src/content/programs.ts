/** Popular, mostly free and open-source desktop programs, grouped by category. */
export type ProgramCategory =
  | "image"
  | "design"
  | "office"
  | "audio"
  | "video"
  | "3d"
  | "utility"
  | "internet";

export interface Program {
  id: string;
  name: string;
  category: ProgramCategory;
  /** Official website (https). */
  url: string;
  license?: string;
  /** Commercial program it replaces, e.g. "Photoshop". */
  replaces?: string;
  platforms?: string[];
  description: { en: string; es: string };
}

export const programCategoryOrder: ProgramCategory[] = [
  "image",
  "design",
  "office",
  "audio",
  "video",
  "3d",
  "utility",
  "internet",
];

export const programCategoryLabels: Record<ProgramCategory, { en: string; es: string }> = {
  image: { en: "Image and photo", es: "Imagen y foto" },
  design: { en: "Design and vector", es: "Diseño y vectores" },
  office: { en: "Office", es: "Oficina" },
  audio: { en: "Audio", es: "Audio" },
  video: { en: "Video", es: "Vídeo" },
  "3d": { en: "3D", es: "3D" },
  utility: { en: "Utilities", es: "Utilidades" },
  internet: { en: "Browser and email", es: "Navegador y correo" },
};

const ART = "https://getartcraft.com/apps";

export const programs: Program[] = [
  // Image
  {
    id: "gimp",
    name: "GIMP",
    category: "image",
    url: "https://www.gimp.org/",
    license: "GPL-3.0",
    replaces: "Photoshop",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "The classic free image editor: layers, masks, filters, PSD import and scripting.",
      es: "El editor de imágenes libre de siempre: capas, máscaras, filtros, importación de PSD y scripting.",
    },
  },
  {
    id: "krita",
    name: "Krita",
    category: "image",
    url: "https://krita.org/",
    license: "GPL-3.0",
    replaces: "Photoshop (painting)",
    platforms: ["Windows", "macOS", "Linux", "Android"],
    description: {
      en: "Digital painting and illustration, with a strong brush engine and animation tools.",
      es: "Pintura e ilustración digitales, con un gran motor de pinceles y herramientas de animación.",
    },
  },
  {
    id: "photopea",
    name: "Photopea",
    category: "image",
    url: "https://www.photopea.com/",
    replaces: "Photoshop (in the browser)",
    platforms: ["Web"],
    description: {
      en: "Photoshop-style editor that runs in the browser and opens PSD, XD, Sketch and Figma files.",
      es: "Editor tipo Photoshop que corre en el navegador y abre archivos PSD, XD, Sketch y Figma.",
    },
  },
  {
    id: "photocraft",
    name: "PhotoCraft (ArtCraft)",
    category: "image",
    url: `${ART}/photocraft`,
    license: "MIT / Apache-2.0",
    replaces: "Photoshop",
    platforms: ["Windows", "macOS", "Linux", "Web"],
    description: {
      en: "Open-source, clean-room Photoshop rebuild in Rust, built with AI; early alpha, with a WebAssembly build.",
      es: "Reconstrucción libre y clean-room de Photoshop en Rust, hecha con IA; alfa temprana, con build en WebAssembly.",
    },
  },
  {
    id: "darktable",
    name: "darktable",
    category: "image",
    url: "https://www.darktable.org/",
    license: "GPL-3.0",
    replaces: "Lightroom",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Non-destructive RAW photography workflow and catalog, an alternative to Lightroom.",
      es: "Flujo de trabajo y catálogo fotográfico RAW no destructivo, alternativa a Lightroom.",
    },
  },
  {
    id: "rawtherapee",
    name: "RawTherapee",
    category: "image",
    url: "https://rawtherapee.com/",
    license: "GPL-3.0",
    replaces: "Lightroom",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "RAW photo processing with fine colour control and batch editing.",
      es: "Procesado de fotos RAW con control fino de color y edición por lotes.",
    },
  },

  // Design and vector
  {
    id: "inkscape",
    name: "Inkscape",
    category: "design",
    url: "https://inkscape.org/",
    license: "GPL-3.0",
    replaces: "Illustrator",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Vector editor with full SVG support, the standard free alternative to Illustrator.",
      es: "Editor vectorial con soporte SVG completo, la alternativa libre estándar a Illustrator.",
    },
  },
  {
    id: "vectorcraft",
    name: "VectorCraft (ArtCraft)",
    category: "design",
    url: `${ART}/vectorcraft`,
    license: "MIT / Apache-2.0",
    replaces: "Illustrator",
    platforms: ["Windows", "macOS", "Linux", "Web"],
    description: {
      en: "Open-source Illustrator rebuild in Rust with exact booleans; WebAssembly build available.",
      es: "Reconstrucción libre de Illustrator en Rust con booleanas exactas; con build en WebAssembly.",
    },
  },
  {
    id: "scribus",
    name: "Scribus",
    category: "design",
    url: "https://www.scribus.net/",
    license: "GPL-2.0",
    replaces: "InDesign",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Desktop publishing for posters, brochures and PDFs, an alternative to InDesign.",
      es: "Autoedición para carteles, folletos y PDFs, alternativa a InDesign.",
    },
  },
  {
    id: "designcraft",
    name: "DesignCraft (ArtCraft)",
    category: "design",
    url: `${ART}/designcraft`,
    license: "MIT / Apache-2.0",
    replaces: "InDesign",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Open-source page and layout design editor in Rust.",
      es: "Editor libre de diseño de página y maquetación en Rust.",
    },
  },
  {
    id: "penpot",
    name: "Penpot",
    category: "design",
    url: "https://penpot.app/",
    license: "MPL-2.0",
    replaces: "Figma / XD",
    platforms: ["Web"],
    description: {
      en: "Open-source design and prototyping tool that runs in the browser.",
      es: "Herramienta libre de diseño y prototipado que corre en el navegador.",
    },
  },

  // Office
  {
    id: "libreoffice",
    name: "LibreOffice",
    category: "office",
    url: "https://www.libreoffice.org/",
    license: "MPL-2.0",
    replaces: "Microsoft Office",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Full office suite (Writer, Calc, Impress, Draw, Base, Math) that opens Office files.",
      es: "Suite ofimática completa (Writer, Calc, Impress, Draw, Base, Math) que abre archivos de Office.",
    },
  },
  {
    id: "wordcraft",
    name: "WordCraft (ArtCraft)",
    category: "office",
    url: `${ART}/wordcraft`,
    license: "MIT / Apache-2.0",
    replaces: "Microsoft Word",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Open-source, clean-room Word reimplementation in Rust.",
      es: "Reimplementación libre y clean-room de Word en Rust.",
    },
  },
  {
    id: "gridcraft",
    name: "GridCraft (ArtCraft)",
    category: "office",
    url: `${ART}/gridcraft`,
    license: "MIT / Apache-2.0",
    replaces: "Microsoft Excel",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Open-source, clean-room spreadsheet in the style of Excel.",
      es: "Hoja de cálculo libre y clean-room al estilo de Excel.",
    },
  },
  {
    id: "deckcraft",
    name: "DeckCraft (ArtCraft)",
    category: "office",
    url: `${ART}/deckcraft`,
    license: "MIT / Apache-2.0",
    replaces: "Microsoft PowerPoint",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Open-source presentation app with smooth slide transitions and a presenter view.",
      es: "App libre de presentaciones con transiciones suaves y vista de presentador.",
    },
  },
  {
    id: "pdfcraft",
    name: "PdfCraft (ArtCraft)",
    category: "office",
    url: `${ART}/pdfcraft`,
    license: "MIT / Apache-2.0",
    replaces: "Acrobat Pro",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Open-source PDF reader and editor written from scratch in Rust.",
      es: "Lector y editor de PDF libre escrito desde cero en Rust.",
    },
  },

  // Audio
  {
    id: "audacity",
    name: "Audacity",
    category: "audio",
    url: "https://www.audacityteam.org/",
    license: "GPL-2.0",
    replaces: "Audition",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Multi-track audio recorder and editor, an alternative to Audition.",
      es: "Grabador y editor de audio multipista, alternativa a Audition.",
    },
  },
  {
    id: "musescore",
    name: "MuseScore",
    category: "audio",
    url: "https://musescore.org/",
    license: "GPL-3.0",
    replaces: "Sibelius / Finale",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Write, play and print sheet music.",
      es: "Escribe, reproduce e imprime partituras.",
    },
  },

  // Video
  {
    id: "obs",
    name: "OBS Studio",
    category: "video",
    url: "https://obsproject.com/",
    license: "GPL-2.0",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Recording and live streaming, the standard open-source broadcasting tool.",
      es: "Grabación y streaming en directo, la herramienta libre estándar para emitir.",
    },
  },
  {
    id: "kdenlive",
    name: "Kdenlive",
    category: "video",
    url: "https://kdenlive.org/",
    license: "GPL-3.0",
    replaces: "Premiere",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Non-linear video editor, an alternative to Premiere.",
      es: "Editor de vídeo no lineal, alternativa a Premiere.",
    },
  },
  {
    id: "shotcut",
    name: "Shotcut",
    category: "video",
    url: "https://www.shotcut.org/",
    license: "GPL-3.0",
    replaces: "Premiere",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Simple, cross-platform non-linear video editor.",
      es: "Editor de vídeo no lineal sencillo y multiplataforma.",
    },
  },
  {
    id: "filmcraft",
    name: "FilmCraft (ArtCraft)",
    category: "video",
    url: `${ART}/filmcraft`,
    license: "MIT / Apache-2.0",
    replaces: "Premiere",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Open-source Premiere rebuild in Rust, with a WebAssembly build.",
      es: "Reconstrucción libre de Premiere en Rust, con build en WebAssembly.",
    },
  },
  {
    id: "effectcraft",
    name: "EffectCraft (ArtCraft)",
    category: "video",
    url: `${ART}/effectcraft`,
    license: "MIT / Apache-2.0",
    replaces: "After Effects",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Open-source motion graphics and visual effects editor in Rust.",
      es: "Editor libre de motion graphics y efectos visuales en Rust.",
    },
  },
  {
    id: "handbrake",
    name: "HandBrake",
    category: "video",
    url: "https://handbrake.fr/",
    license: "GPL-2.0",
    replaces: "Media Encoder",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Convert and compress video between formats.",
      es: "Convierte y comprime vídeo entre formatos.",
    },
  },

  // 3D
  {
    id: "blender",
    name: "Blender",
    category: "3d",
    url: "https://www.blender.org/",
    license: "GPL-3.0",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Modeling, animation, rendering, VFX and video editing in one open-source suite.",
      es: "Modelado, animación, render, VFX y edición de vídeo en una sola suite libre.",
    },
  },

  // Utilities
  {
    id: "vlc",
    name: "VLC media player",
    category: "utility",
    url: "https://www.videolan.org/vlc/",
    license: "GPL-2.0",
    platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
    description: {
      en: "Plays almost any video or audio format without extra codecs.",
      es: "Reproduce casi cualquier formato de vídeo o audio sin códecs extra.",
    },
  },
  {
    id: "sevenzip",
    name: "7-Zip",
    category: "utility",
    url: "https://www.7-zip.org/",
    license: "LGPL-2.1",
    replaces: "WinZip / WinRAR",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "File archiver with high compression and support for many formats.",
      es: "Compresor de archivos con alta compresión y soporte de muchos formatos.",
    },
  },
  {
    id: "notepadpp",
    name: "Notepad++",
    category: "utility",
    url: "https://notepad-plus-plus.org/",
    license: "GPL-3.0",
    platforms: ["Windows"],
    description: {
      en: "Fast text and source code editor.",
      es: "Editor de texto y código fuente rápido.",
    },
  },
  {
    id: "qbittorrent",
    name: "qBittorrent",
    category: "utility",
    url: "https://www.qbittorrent.org/",
    license: "GPL-2.0",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "BitTorrent client with no ads.",
      es: "Cliente BitTorrent sin publicidad.",
    },
  },
  {
    id: "rufus",
    name: "Rufus",
    category: "utility",
    url: "https://rufus.ie/",
    license: "GPL-3.0",
    platforms: ["Windows"],
    description: {
      en: "Create bootable USB drives from ISO images.",
      es: "Crea memorias USB de arranque a partir de imágenes ISO.",
    },
  },

  // Browser and email
  {
    id: "firefox",
    name: "Mozilla Firefox",
    category: "internet",
    url: "https://www.mozilla.org/firefox/",
    license: "MPL-2.0",
    platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
    description: {
      en: "Independent, open-source web browser.",
      es: "Navegador web libre e independiente.",
    },
  },
  {
    id: "thunderbird",
    name: "Mozilla Thunderbird",
    category: "internet",
    url: "https://www.thunderbird.net/",
    license: "MPL-2.0",
    replaces: "Outlook",
    platforms: ["Windows", "macOS", "Linux"],
    description: {
      en: "Email, calendar and contacts client.",
      es: "Cliente de correo, calendario y contactos.",
    },
  },
];
