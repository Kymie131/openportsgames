/**
 * Emulator registry, grouped by console generation.
 *
 * This powers the /emulators section: a generation -> console -> emulator
 * drill-down. Each emulator lists its official source, the platforms it runs
 * on, an overall compatibility rating and a short note. `recommended` marks the
 * best pick per console, ordered first. Compatibility is a curated summary of
 * the project's own documentation and community reports, not a per-game
 * guarantee.
 *
 * The catalog links only to official project sources; it hosts no emulator
 * builds. Emulators, unlike native ports, do need the console BIOS/ROM to run;
 * that is the player's responsibility.
 */
import type { PlatformKey } from "@/lib/ports/schema";

export type EmulatorPlatform = PlatformKey | "ios" | "web" | "bsd" | "switch";

export type Compatibility = "excellent" | "high" | "good" | "limited";

export interface Emulator {
  id: string;
  name: string;
  openSource: boolean;
  license?: string;
  /** Official project site or repository (https). */
  source: string;
  platforms: EmulatorPlatform[];
  compatibility: Compatibility;
  /** Best pick for this console; rendered first with a badge. */
  recommended?: boolean;
  note: { en: string; es: string };
}

export interface ConsoleDef {
  slug: string;
  name: { en: string; es: string };
  manufacturer: string;
  year: number;
  /** Short mark used when no logo artwork exists. */
  abbreviation: string;
  /** Brand color used for the badge tint. */
  color: string;
  /** Logo slug under public/logos/console, when artwork exists. */
  logo?: string;
  emulators: Emulator[];
}

export interface Generation {
  id: string;
  number: number;
  name: { en: string; es: string };
  range: { en: string; es: string };
  consoles: ConsoleDef[];
}

const e = (
  id: string,
  name: string,
  source: string,
  platforms: EmulatorPlatform[],
  compatibility: Compatibility,
  note: { en: string; es: string },
  opts: { recommended?: boolean; openSource?: boolean; license?: string } = {},
): Emulator => ({
  id,
  name,
  source,
  platforms,
  compatibility,
  note,
  recommended: opts.recommended,
  openSource: opts.openSource ?? true,
  license: opts.license,
});

export const generations: Generation[] = [
  {
    id: "gen-1",
    number: 1,
    name: { en: "First generation", es: "Primera generación" },
    range: { en: "1972–1976", es: "1972–1976" },
    consoles: [
      {
        slug: "odyssey",
        name: { en: "Magnavox Odyssey", es: "Magnavox Odyssey" },
        manufacturer: "Magnavox",
        year: 1972,
        abbreviation: "ODY",
        color: "#6B6B6B",
        emulators: [
          e(
            "mame-odyssey",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos"],
            "limited",
            {
              en: "MAME emulates the Odyssey only partially; many discrete-logic titles are still unplayable.",
              es: "MAME emula la Odyssey solo parcialmente; muchos títulos de lógica discreta siguen sin ser jugables.",
            },
          ),
        ],
      },
    ],
  },
  {
    id: "gen-2",
    number: 2,
    name: { en: "Second generation", es: "Segunda generación" },
    range: { en: "1976–1983", es: "1976–1983" },
    consoles: [
      {
        slug: "atari-2600",
        name: { en: "Atari 2600", es: "Atari 2600" },
        manufacturer: "Atari",
        year: 1977,
        abbreviation: "2600",
        color: "#C1121F",
        emulators: [
          e(
            "stella",
            "Stella",
            "https://stella-emu.github.io/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "The reference 2600 emulator: cycle-accurate and runs essentially the whole library.",
              es: "El emulador de referencia de la 2600: preciso por ciclos y ejecuta prácticamente toda la biblioteca.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "mame-2600",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "high",
            {
              en: "Very accurate driver, but a heavier front-end than Stella.",
              es: "Driver muy preciso, pero con un front-end más pesado que Stella.",
            },
          ),
          e("javatari", "Javatari", "https://javatari.org/", ["web"], "good", {
            en: "Runs in the browser with no install; handy for a quick game.",
            es: "Funciona en el navegador sin instalar nada; práctico para una partida rápida.",
          }),
        ],
      },
      {
        slug: "channel-f",
        name: { en: "Fairchild Channel F", es: "Fairchild Channel F" },
        manufacturer: "Fairchild",
        year: 1976,
        abbreviation: "CHF",
        color: "#8A5CF6",
        emulators: [
          e(
            "mame-channelf",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "high",
            {
              en: "Plays the full Channel F catalog accurately.",
              es: "Ejecuta con precisión todo el catálogo de la Channel F.",
            },
            { recommended: true },
          ),
          e(
            "freechaf",
            "FreeChaF (RetroArch)",
            "https://github.com/libretro/FreeChaF",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "Lightweight libretro core with a clean, simple core.",
              es: "Core libretro ligero con una implementación sencilla y limpia.",
            },
          ),
        ],
      },
      {
        slug: "odyssey-2",
        name: { en: "Magnavox Odyssey²", es: "Magnavox Odyssey²" },
        manufacturer: "Magnavox / Philips",
        year: 1978,
        abbreviation: "O2",
        color: "#6B6B6B",
        emulators: [
          e(
            "o2em",
            "O2EM",
            "https://sourceforge.net/projects/o2em/",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "Long-standing emulator for the Odyssey²/Videopac line.",
              es: "Emulador veterano para la línea Odyssey²/Videopac.",
            },
            { recommended: true },
          ),
          e(
            "mame-o2",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "high",
            {
              en: "Accurate driver covering the Videopac variants too.",
              es: "Driver preciso que cubre también las variantes Videopac.",
            },
          ),
        ],
      },
      {
        slug: "intellivision",
        name: { en: "Intellivision", es: "Intellivision" },
        manufacturer: "Mattel",
        year: 1979,
        abbreviation: "INTV",
        color: "#C1121F",
        emulators: [
          e(
            "jzintv",
            "FreeIntv (jzIntv core)",
            "https://github.com/libretro/FreeIntv",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "The most accurate Intellivision emulator; supports the ECS and Synthesizer.",
              es: "El emulador de Intellivision más preciso; soporta el ECS y el sintetizador.",
            },
            { recommended: true, license: "GPL-3.0" },
          ),
          e(
            "mame-intv",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "high",
            {
              en: "Solid driver with broad hardware coverage.",
              es: "Driver sólido con amplia cobertura de hardware.",
            },
          ),
        ],
      },
      {
        slug: "colecovision",
        name: { en: "ColecoVision", es: "ColecoVision" },
        manufacturer: "Coleco",
        year: 1982,
        abbreviation: "CV",
        color: "#8A5CF6",
        emulators: [
          e(
            "coolcv",
            "CoolCV",
            "https://github.com/nanochess/coolcv",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "Simple and fast, with support for the Super Action spinner.",
              es: "Sencillo y rápido, con soporte del spinner Super Action.",
            },
            { recommended: true, license: "GPL-3.0" },
          ),
          e(
            "mame-colecovision",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "high",
            {
              en: "Accurate and broad, with ColecoVision hardware variants.",
              es: "Preciso y amplio, con variantes de hardware ColecoVision.",
            },
          ),
          e("bluemsx", "blueMSX", "https://bluemsx.msxblue.com/", ["windows"], "high", {
            en: "Strong ColecoVision support alongside MSX.",
            es: "Buen soporte de ColecoVision junto a MSX.",
          }),
        ],
      },
      {
        slug: "atari-5200",
        name: { en: "Atari 5200", es: "Atari 5200" },
        manufacturer: "Atari",
        year: 1982,
        abbreviation: "5200",
        color: "#C1121F",
        emulators: [
          e(
            "atari800",
            "Atari800",
            "https://atari800.github.io/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Covers the 5200 along with the 8-bit computer line, very accurately.",
              es: "Cubre la 5200 junto a la línea de ordenadores de 8 bits, con gran precisión.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "mame-5200",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "high",
            {
              en: "Accurate driver sharing code with the 8-bit computers.",
              es: "Driver preciso que comparte código con los ordenadores de 8 bits.",
            },
          ),
        ],
      },
      {
        slug: "vectrex",
        name: { en: "Vectrex", es: "Vectrex" },
        manufacturer: "GCE / Milton Bradley",
        year: 1982,
        abbreviation: "VEC",
        color: "#009E60",
        emulators: [
          e(
            "vecx",
            "VecX / vecxemu",
            "https://github.com/valleybell/libretro-vecx",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "Vector-accurate Vectrex emulation, also available as a libretro core.",
              es: "Emulación vectorial precisa de Vectrex, también disponible como core libretro.",
            },
            { recommended: true, license: "GPL-3.0" },
          ),
          e(
            "mame-vectrex",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "high",
            {
              en: "Accurate, with overlay support.",
              es: "Preciso, con soporte de overlays.",
            },
          ),
        ],
      },
    ],
  },
  {
    id: "gen-3",
    number: 3,
    name: { en: "Third generation", es: "Tercera generación" },
    range: { en: "1983–1990", es: "1983–1990" },
    consoles: [
      {
        slug: "nes",
        name: { en: "Nintendo Entertainment System", es: "Nintendo Entertainment System" },
        manufacturer: "Nintendo",
        year: 1983,
        abbreviation: "NES",
        color: "#E60012",
        logo: "nes",
        emulators: [
          e(
            "mesen",
            "Mesen",
            "https://www.mesen.ca/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "The accuracy benchmark: near-perfect NES/Famicom emulation with HD packs and a debugger.",
              es: "El referente de precisión: emulación casi perfecta de NES/Famicom con packs HD y depurador.",
            },
            { recommended: true, license: "GPL-3.0" },
          ),
          e(
            "nestopia",
            "Nestopia UE",
            "https://github.com/0ldsk00l/nestopia",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "Very accurate and long maintained; a safe default.",
              es: "Muy preciso y mantenido durante años; una opción segura.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "fceux",
            "FCEUX",
            "https://fceux.com/",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "Great tooling for TAS and debugging, slightly less accurate than Mesen.",
              es: "Excelente para TAS y depuración, algo menos preciso que Mesen.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "punes",
            "puNES",
            "https://github.com/punesemu/puNES",
            ["windows", "linux"],
            "high",
            {
              en: "High-accuracy emulator with low input latency.",
              es: "Emulador de alta precisión con baja latencia de entrada.",
            },
            { license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "master-system",
        name: { en: "Sega Master System", es: "Sega Master System" },
        manufacturer: "Sega",
        year: 1985,
        abbreviation: "SMS",
        color: "#0089CF",
        emulators: [
          e(
            "emulicious",
            "Emulicious",
            "https://emulicious.net/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "The most accurate SMS/Game Gear/GB emulator, with a full debugger.",
              es: "El emulador más preciso de SMS/Game Gear/GB, con depurador completo.",
            },
            { recommended: true, openSource: false },
          ),
          e(
            "blastem",
            "BlastEm",
            "https://www.retrodev.com/blastem/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Cycle-accurate and open source; excellent for Master System and Genesis.",
              es: "Preciso por ciclos y de código abierto; excelente para Master System y Genesis.",
            },
            { license: "GPL-3.0" },
          ),
          e(
            "genesis-plus-gx",
            "Genesis Plus GX",
            "https://github.com/ekeeke/Genesis-Plus-GX",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "The libretro workhorse: SMS, Genesis, Sega CD and Game Gear in one core.",
              es: "El core libretro todoterreno: SMS, Genesis, Sega CD y Game Gear en un solo core.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "kega-fusion",
            "Kega Fusion",
            "https://www.carpeludum.com/kega-fusion/",
            ["windows", "macos"],
            "high",
            {
              en: "Classic all-in-one for the Sega 8/16-bit family; now unmaintained.",
              es: "Clásico todo-en-uno para la familia Sega de 8/16 bits; ya sin mantenimiento.",
            },
            { openSource: false },
          ),
        ],
      },
      {
        slug: "atari-7800",
        name: { en: "Atari 7800", es: "Atari 7800" },
        manufacturer: "Atari",
        year: 1986,
        abbreviation: "7800",
        color: "#C1121F",
        emulators: [
          e(
            "a7800",
            "A7800",
            "https://github.com/7800-devtools/a7800",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "The dedicated 7800 emulator, based on ProSystem, with Maria-accurate video.",
              es: "El emulador dedicado de 7800, basado en ProSystem, con vídeo fiel a Maria.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "mame-7800",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "high",
            {
              en: "Accurate driver, also handles 2600 backward compatibility.",
              es: "Driver preciso, que además cubre la retrocompatibilidad con la 2600.",
            },
          ),
        ],
      },
      {
        slug: "game-boy",
        name: { en: "Game Boy", es: "Game Boy" },
        manufacturer: "Nintendo",
        year: 1989,
        abbreviation: "GB",
        color: "#8BAC0F",
        logo: "game-boy",
        emulators: [
          e(
            "sameboy",
            "SameBoy",
            "https://sameboy.github.io/",
            ["windows", "linux", "macos", "ios"],
            "excellent",
            {
              en: "The accuracy leader for Game Boy and Game Boy Color, with open hardware documentation.",
              es: "El líder en precisión para Game Boy y Game Boy Color, con documentación abierta del hardware.",
            },
            { recommended: true, license: "MIT" },
          ),
          e(
            "gambatte",
            "Gambatte",
            "https://github.com/pokemon-speedrunning/gambatte-core",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "Fast and very accurate; the libretro staple for GB/GBC.",
              es: "Rápido y muy preciso; el core libretro habitual para GB/GBC.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "bgb",
            "BGB",
            "https://bgb.bircd.org/",
            ["windows", "linux"],
            "high",
            {
              en: "Loved for its link-play and debugging features.",
              es: "Apreciado por sus funciones de juego enlazado y depuración.",
            },
            { openSource: false },
          ),
        ],
      },
    ],
  },
  {
    id: "gen-4",
    number: 4,
    name: { en: "Fourth generation", es: "Cuarta generación" },
    range: { en: "1987–1996", es: "1987–1996" },
    consoles: [
      {
        slug: "snes",
        name: { en: "Super Nintendo", es: "Super Nintendo" },
        manufacturer: "Nintendo",
        year: 1990,
        abbreviation: "SNES",
        color: "#7B5EA7",
        logo: "snes",
        emulators: [
          e(
            "bsnes",
            "bsnes / higan",
            "https://github.com/bsnes-emu/bsnes",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "The accuracy reference for the SNES; slower but faithful down to the timing.",
              es: "El referente de precisión para la SNES; más lento pero fiel hasta el timing.",
            },
            { recommended: true, license: "GPL-3.0" },
          ),
          e(
            "snes9x",
            "Snes9x",
            "https://www.snes9x.com/",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "Fast and highly compatible, the practical everyday choice.",
              es: "Rápido y muy compatible, la opción práctica del día a día.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "ares",
            "Ares",
            "https://ares-emu.net/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Multi-system emulator with SNES accuracy comparable to bsnes.",
              es: "Emulador multisistema con una precisión de SNES comparable a bsnes.",
            },
            { license: "ISC" },
          ),
          e(
            "mesen-s",
            "Mesen-S",
            "https://www.mesen.ca/",
            ["windows", "linux"],
            "excellent",
            {
              en: "Mesen's SNES core; excellent accuracy and tooling.",
              es: "El core de SNES de Mesen; excelente precisión y herramientas.",
            },
            { license: "GPL-3.0" },
          ),
        ],
      },
      {
        slug: "genesis",
        name: { en: "Sega Genesis / Mega Drive", es: "Sega Genesis / Mega Drive" },
        manufacturer: "Sega",
        year: 1988,
        abbreviation: "GEN",
        color: "#0089CF",
        emulators: [
          e(
            "blastem-genesis",
            "BlastEm",
            "https://www.retrodev.com/blastem/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Cycle-accurate Genesis emulation; the open-source accuracy pick.",
              es: "Emulación de Genesis precisa por ciclos; la opción de precisión de código abierto.",
            },
            { recommended: true, license: "GPL-3.0" },
          ),
          e(
            "genesis-plus-gx-2",
            "Genesis Plus GX",
            "https://github.com/ekeeke/Genesis-Plus-GX",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "Excellent compatibility and the whole Sega family in one core.",
              es: "Excelente compatibilidad y toda la familia Sega en un solo core.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "kega-fusion-2",
            "Kega Fusion",
            "https://www.carpeludum.com/kega-fusion/",
            ["windows", "macos"],
            "high",
            {
              en: "A classic all-in-one, still useful but unmaintained.",
              es: "Un clásico todo-en-uno, aún útil pero sin mantenimiento.",
            },
            { openSource: false },
          ),
          e(
            "ares-genesis",
            "Ares",
            "https://ares-emu.net/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Accurate multi-system core including 32X and Sega CD.",
              es: "Core multisistema preciso que incluye 32X y Sega CD.",
            },
            { license: "ISC" },
          ),
        ],
      },
      {
        slug: "pc-engine",
        name: { en: "TurboGrafx-16 / PC Engine", es: "TurboGrafx-16 / PC Engine" },
        manufacturer: "NEC / Hudson Soft",
        year: 1987,
        abbreviation: "PCE",
        color: "#E60012",
        emulators: [
          e(
            "mednafen-pce",
            "Mednafen (Beetle PCE)",
            "https://mednafen.github.io/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "The most accurate PC Engine / SuperGrafx core, including CD support.",
              es: "El core más preciso de PC Engine / SuperGrafx, con soporte de CD.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "ares-pce",
            "Ares",
            "https://ares-emu.net/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Accurate PCE core with a modern interface.",
              es: "Core PCE preciso con una interfaz moderna.",
            },
            { license: "ISC" },
          ),
        ],
      },
      {
        slug: "neo-geo",
        name: { en: "Neo Geo", es: "Neo Geo" },
        manufacturer: "SNK",
        year: 1990,
        abbreviation: "NG",
        color: "#E60012",
        emulators: [
          e(
            "mame-neogeo",
            "MAME",
            "https://www.mamedev.org/",
            ["windows", "linux", "macos", "bsd"],
            "excellent",
            {
              en: "The most accurate Neo Geo emulation; needs the right ROM set for your MAME version.",
              es: "La emulación de Neo Geo más precisa; requiere el set de ROM correcto para tu versión de MAME.",
            },
            { recommended: true },
          ),
          e(
            "finalburn-neo",
            "FinalBurn Neo",
            "https://github.com/finalburnneo/FBNeo",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "Faster and very compatible; the arcade favourite.",
              es: "Más rápido y muy compatible; el favorito del arcade.",
            },
            { license: "Custom (non-commercial)" },
          ),
        ],
      },
      {
        slug: "sega-cd",
        name: { en: "Sega CD / Mega-CD", es: "Sega CD / Mega-CD" },
        manufacturer: "Sega",
        year: 1991,
        abbreviation: "SCD",
        color: "#0089CF",
        emulators: [
          e(
            "kega-fusion-scd",
            "Kega Fusion",
            "https://www.carpeludum.com/kega-fusion/",
            ["windows", "macos"],
            "high",
            {
              en: "Long the easiest way to play Sega CD discs; no longer maintained.",
              es: "Durante años la forma más fácil de jugar discos de Sega CD; ya sin mantenimiento.",
            },
            { recommended: true, openSource: false },
          ),
          e(
            "genesis-plus-gx-scd",
            "Genesis Plus GX",
            "https://github.com/ekeeke/Genesis-Plus-GX",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "Accurate Sega CD support inside the libretro core.",
              es: "Soporte preciso de Sega CD dentro del core libretro.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "ares-scd",
            "Ares",
            "https://ares-emu.net/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Accurate Sega CD and 32X support.",
              es: "Soporte preciso de Sega CD y 32X.",
            },
            { license: "ISC" },
          ),
        ],
      },
      {
        slug: "game-gear",
        name: { en: "Game Gear", es: "Game Gear" },
        manufacturer: "Sega",
        year: 1990,
        abbreviation: "GG",
        color: "#0089CF",
        emulators: [
          e(
            "emulicious-gg",
            "Emulicious",
            "https://emulicious.net/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "The most accurate Game Gear emulator.",
              es: "El emulador de Game Gear más preciso.",
            },
            { recommended: true, openSource: false },
          ),
          e(
            "genesis-plus-gx-gg",
            "Genesis Plus GX",
            "https://github.com/ekeeke/Genesis-Plus-GX",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "Accurate Game Gear inside the Sega all-in-one core.",
              es: "Game Gear preciso dentro del core todoterreno de Sega.",
            },
            { license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "game-boy-color",
        name: { en: "Game Boy Color", es: "Game Boy Color" },
        manufacturer: "Nintendo",
        year: 1998,
        abbreviation: "GBC",
        color: "#8BAC0F",
        logo: "game-boy",
        emulators: [
          e(
            "sameboy-gbc",
            "SameBoy",
            "https://sameboy.github.io/",
            ["windows", "linux", "macos", "ios"],
            "excellent",
            {
              en: "Best-in-class Game Boy Color accuracy, including infrared.",
              es: "Precisión de Game Boy Color de primera categoría, incluido el infrarrojos.",
            },
            { recommended: true, license: "MIT" },
          ),
          e(
            "gambatte-gbc",
            "Gambatte",
            "https://github.com/pokemon-speedrunning/gambatte-core",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "Fast and accurate; a great default for GBC.",
              es: "Rápido y preciso; una gran opción por defecto para GBC.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "mesen-gbc",
            "Mesen",
            "https://www.mesen.ca/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Mesen also covers Game Boy and Game Boy Color very accurately.",
              es: "Mesen también cubre Game Boy y Game Boy Color con gran precisión.",
            },
            { license: "GPL-3.0" },
          ),
        ],
      },
    ],
  },
  {
    id: "gen-5",
    number: 5,
    name: { en: "Fifth generation", es: "Quinta generación" },
    range: { en: "1993–2001", es: "1993–2001" },
    consoles: [
      {
        slug: "playstation",
        name: { en: "PlayStation", es: "PlayStation" },
        manufacturer: "Sony",
        year: 1994,
        abbreviation: "PS1",
        color: "#003791",
        logo: "playstation",
        emulators: [
          e(
            "duckstation",
            "DuckStation",
            "https://www.duckstation.org/",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "The modern accuracy and compatibility leader for the PS1, with upscaling and PGXP.",
              es: "El líder moderno de precisión y compatibilidad para PS1, con reescalado y PGXP.",
            },
            { recommended: true, license: "GPL-3.0" },
          ),
          e(
            "beetle-psx",
            "Beetle PSX (Mednafen)",
            "https://mednafen.github.io/",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "Highly accurate software and hardware rendering; a libretro staple.",
              es: "Render por software y hardware muy preciso; un core libretro habitual.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "pcsx-redux",
            "PCSX-Redux",
            "https://pcsx-redux.consoledev.net/",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "Research-oriented emulator with strong debugging tools.",
              es: "Emulador orientado a la investigación con potentes herramientas de depuración.",
            },
            { license: "MIT" },
          ),
        ],
      },
      {
        slug: "nintendo-64",
        name: { en: "Nintendo 64", es: "Nintendo 64" },
        manufacturer: "Nintendo",
        year: 1996,
        abbreviation: "N64",
        color: "#009E60",
        logo: "n64",
        emulators: [
          e(
            "mupen64plus",
            "Mupen64Plus",
            "https://mupen64plus.org/",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "The core behind many front-ends; strong with the ParaLLEl RDP plugin.",
              es: "El core detrás de muchos front-ends; potente con el plugin ParaLLEl RDP.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "rmg",
            "Rosalie's Mupen GUI (RMG)",
            "https://github.com/Rosalie241/RMG",
            ["windows", "linux"],
            "high",
            {
              en: "Modern Mupen64Plus front-end with a clean interface.",
              es: "Front-end moderno de Mupen64Plus con una interfaz limpia.",
            },
            { license: "GPL-3.0" },
          ),
          e(
            "ares-n64",
            "Ares",
            "https://ares-emu.net/",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "Accurate N64 core with a modern interface.",
              es: "Core N64 preciso con una interfaz moderna.",
            },
            { license: "ISC" },
          ),
          e(
            "project64",
            "Project64",
            "https://www.pj64-emu.com/",
            ["windows"],
            "good",
            {
              en: "Classic Windows emulator; compatibility varies more per plugin.",
              es: "Emulador clásico de Windows; la compatibilidad varía más según el plugin.",
            },
            { license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "sega-saturn",
        name: { en: "Sega Saturn", es: "Sega Saturn" },
        manufacturer: "Sega",
        year: 1994,
        abbreviation: "SAT",
        color: "#0089CF",
        emulators: [
          e(
            "beetle-saturn",
            "Beetle Saturn (Mednafen)",
            "https://mednafen.github.io/",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "The accuracy reference for the Saturn; demanding but faithful.",
              es: "El referente de precisión para la Saturn; exigente pero fiel.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "kronos",
            "Kronos",
            "https://github.com/FCare/Kronos",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "Faster Saturn emulation with a good compatibility list.",
              es: "Emulación de Saturn más rápida y con buena lista de compatibilidad.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "yaba-sanshiro",
            "Yaba Sanshiro",
            "https://www.uoyabause.org/",
            ["windows", "linux", "macos", "android"],
            "good",
            {
              en: "Handy on Android and low-end hardware.",
              es: "Práctico en Android y hardware modesto.",
            },
            { license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "atari-jaguar",
        name: { en: "Atari Jaguar", es: "Atari Jaguar" },
        manufacturer: "Atari",
        year: 1993,
        abbreviation: "JAG",
        color: "#C1121F",
        emulators: [
          e(
            "bigpemu",
            "BigPEmu",
            "https://www.richwhitehouse.com/jaguar/",
            ["windows", "linux"],
            "excellent",
            {
              en: "By far the most compatible Jaguar emulator, including the CD add-on.",
              es: "De lejos el emulador de Jaguar más compatible, incluido el add-on de CD.",
            },
            { recommended: true, openSource: false },
          ),
          e(
            "virtual-jaguar",
            "Virtual Jaguar",
            "https://github.com/icculus/virtualjaguar",
            ["windows", "linux", "macos"],
            "good",
            {
              en: "Open source and portable, but fewer games run correctly.",
              es: "De código abierto y portátil, pero menos juegos funcionan bien.",
            },
            { license: "GPL-3.0" },
          ),
        ],
      },
      {
        slug: "3do",
        name: { en: "3DO Interactive Multiplayer", es: "3DO Interactive Multiplayer" },
        manufacturer: "The 3DO Company",
        year: 1993,
        abbreviation: "3DO",
        color: "#8A5CF6",
        emulators: [
          e(
            "opera",
            "Opera",
            "https://github.com/libretro/opera-libretro",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "The most developed 3DO core, available in RetroArch.",
              es: "El core de 3DO más desarrollado, disponible en RetroArch.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "virtual-boy",
        name: { en: "Virtual Boy", es: "Virtual Boy" },
        manufacturer: "Nintendo",
        year: 1995,
        abbreviation: "VB",
        color: "#CE181E",
        emulators: [
          e(
            "mednafen-vb",
            "Mednafen (Beetle VB)",
            "https://mednafen.github.io/",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "Accurate Virtual Boy emulation with anaglyph and 3D options.",
              es: "Emulación precisa de Virtual Boy con opciones anáglifo y 3D.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "red-viper",
            "Red Viper",
            "https://github.com/skyfloogle/red-viper",
            ["windows", "linux", "macos", "switch"],
            "high",
            {
              en: "Native Virtual Boy emulator, also for homebrew consoles.",
              es: "Emulador nativo de Virtual Boy, también para consolas con homebrew.",
            },
            { license: "MIT" },
          ),
        ],
      },
    ],
  },
  {
    id: "gen-6",
    number: 6,
    name: { en: "Sixth generation", es: "Sexta generación" },
    range: { en: "1998–2005", es: "1998–2005" },
    consoles: [
      {
        slug: "dreamcast",
        name: { en: "Dreamcast", es: "Dreamcast" },
        manufacturer: "Sega",
        year: 1998,
        abbreviation: "DC",
        color: "#0089CF",
        emulators: [
          e(
            "flycast",
            "Flycast",
            "https://github.com/flyinghead/flycast",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "The best Dreamcast and NAOMI emulator, with online play support.",
              es: "El mejor emulador de Dreamcast y NAOMI, con soporte de juego en línea.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "redream",
            "Redream",
            "https://redream.io/",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "Fast, polished and very compatible, with a free tier.",
              es: "Rápido, pulido y muy compatible, con una versión gratuita.",
            },
            { openSource: false },
          ),
        ],
      },
      {
        slug: "playstation-2",
        name: { en: "PlayStation 2", es: "PlayStation 2" },
        manufacturer: "Sony",
        year: 2000,
        abbreviation: "PS2",
        color: "#003791",
        logo: "playstation-2",
        emulators: [
          e(
            "pcsx2",
            "PCSX2",
            "https://pcsx2.net/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "The mature PS2 emulator: very high compatibility and upscaling.",
              es: "El emulador maduro de PS2: compatibilidad muy alta y reescalado.",
            },
            { recommended: true, license: "LGPL-3.0" },
          ),
          e(
            "nethersx2",
            "NetherSX2",
            "https://github.com/Trixarian/NetherSX2-patch",
            ["android"],
            "high",
            {
              en: "The maintained Android continuation of AetherSX2 for phones.",
              es: "La continuación mantenida de AetherSX2 para móviles Android.",
            },
            { license: "GPL-3.0" },
          ),
        ],
      },
      {
        slug: "gamecube",
        name: { en: "GameCube", es: "GameCube" },
        manufacturer: "Nintendo",
        year: 2001,
        abbreviation: "GCN",
        color: "#6A5ACD",
        logo: "gamecube",
        emulators: [
          e(
            "dolphin",
            "Dolphin",
            "https://dolphin-emu.org/",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "The definitive GameCube and Wii emulator; near-perfect compatibility.",
              es: "El emulador definitivo de GameCube y Wii; compatibilidad casi perfecta.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "xbox",
        name: { en: "Xbox", es: "Xbox" },
        manufacturer: "Microsoft",
        year: 2001,
        abbreviation: "XB",
        color: "#107C10",
        logo: "xbox",
        emulators: [
          e(
            "xemu",
            "xemu",
            "https://xemu.app/",
            ["windows", "linux", "macos"],
            "good",
            {
              en: "The most advanced original-Xbox emulator; compatibility is improving steadily.",
              es: "El emulador de Xbox original más avanzado; la compatibilidad mejora constantemente.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "game-boy-advance",
        name: { en: "Game Boy Advance", es: "Game Boy Advance" },
        manufacturer: "Nintendo",
        year: 2001,
        abbreviation: "GBA",
        color: "#4B3FA0",
        logo: "gba",
        emulators: [
          e(
            "mgba",
            "mGBA",
            "https://mgba.io/",
            ["windows", "linux", "macos", "android", "switch"],
            "excellent",
            {
              en: "The accuracy and feature leader for GBA, with link cable emulation.",
              es: "El líder en precisión y funciones para GBA, con emulación del cable link.",
            },
            { recommended: true, license: "MPL-2.0" },
          ),
          e(
            "nanoboyadvance",
            "NanoBoyAdvance",
            "https://github.com/nba-emu/NanoBoyAdvance",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "A newer, very accurate GBA emulator.",
              es: "Un emulador de GBA más nuevo y muy preciso.",
            },
            { license: "MIT" },
          ),
          e(
            "vba-m",
            "VisualBoyAdvance-M",
            "https://vba-m.com/",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "The long-running VBA successor; broad compatibility.",
              es: "El sucesor de VBA de toda la vida; amplia compatibilidad.",
            },
            { license: "GPL-2.0" },
          ),
        ],
      },
    ],
  },
  {
    id: "gen-7",
    number: 7,
    name: { en: "Seventh generation", es: "Séptima generación" },
    range: { en: "2004–2012", es: "2004–2012" },
    consoles: [
      {
        slug: "playstation-portable",
        name: { en: "PlayStation Portable", es: "PlayStation Portable" },
        manufacturer: "Sony",
        year: 2004,
        abbreviation: "PSP",
        color: "#003791",
        emulators: [
          e(
            "ppsspp",
            "PPSSPP",
            "https://www.ppsspp.org/",
            ["windows", "linux", "macos", "android", "ios"],
            "excellent",
            {
              en: "The gold standard for PSP emulation; runs almost everything.",
              es: "El estándar de oro de la emulación de PSP; ejecuta casi todo.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "nintendo-ds",
        name: { en: "Nintendo DS", es: "Nintendo DS" },
        manufacturer: "Nintendo",
        year: 2004,
        abbreviation: "NDS",
        color: "#9AA0A6",
        logo: "nds",
        emulators: [
          e(
            "melonds",
            "melonDS",
            "https://melonds.kuribo64.net/",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "The accuracy leader for DS, with local wireless and DSi support.",
              es: "El líder en precisión para DS, con conexión inalámbrica local y soporte DSi.",
            },
            { recommended: true, license: "GPL-3.0" },
          ),
          e(
            "desmume",
            "DeSmuME",
            "https://desmume.org/",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "A long-standing DS emulator with a huge compatibility record.",
              es: "Un emulador de DS veterano con un enorme historial de compatibilidad.",
            },
            { license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "playstation-3",
        name: { en: "PlayStation 3", es: "PlayStation 3" },
        manufacturer: "Sony",
        year: 2006,
        abbreviation: "PS3",
        color: "#003791",
        logo: "playstation-3",
        emulators: [
          e(
            "rpcs3",
            "RPCS3",
            "https://rpcs3.net/",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "The only serious PS3 emulator; a large share of the library is playable.",
              es: "El único emulador serio de PS3; una gran parte de la biblioteca es jugable.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "wii",
        name: { en: "Wii", es: "Wii" },
        manufacturer: "Nintendo",
        year: 2006,
        abbreviation: "WII",
        color: "#00A0C6",
        logo: "wii",
        emulators: [
          e(
            "dolphin-wii",
            "Dolphin",
            "https://dolphin-emu.org/",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "Excellent Wii emulation, including motion controls and Wii Shop titles.",
              es: "Excelente emulación de Wii, incluidos los controles de movimiento y títulos de Wii Shop.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "xbox-360",
        name: { en: "Xbox 360", es: "Xbox 360" },
        manufacturer: "Microsoft",
        year: 2005,
        abbreviation: "X360",
        color: "#107C10",
        logo: "xbox-360",
        emulators: [
          e(
            "xenia",
            "Xenia",
            "https://xenia.jp/",
            ["windows", "linux"],
            "high",
            {
              en: "The main Xbox 360 emulator; a growing number of games run well.",
              es: "El principal emulador de Xbox 360; un número creciente de juegos funciona bien.",
            },
            { recommended: true, license: "BSD-3-Clause" },
          ),
        ],
      },
    ],
  },
  {
    id: "gen-8",
    number: 8,
    name: { en: "Eighth generation", es: "Octava generación" },
    range: { en: "2011–2020", es: "2011–2020" },
    consoles: [
      {
        slug: "nintendo-3ds",
        name: { en: "Nintendo 3DS", es: "Nintendo 3DS" },
        manufacturer: "Nintendo",
        year: 2011,
        abbreviation: "3DS",
        color: "#CE181E",
        logo: "3ds",
        emulators: [
          e(
            "azahar",
            "Azahar",
            "https://azahar-emu.org/",
            ["windows", "linux", "macos", "android"],
            "excellent",
            {
              en: "The maintained successor to Citra; the current best 3DS emulator.",
              es: "El sucesor mantenido de Citra; el mejor emulador de 3DS actual.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "lime3ds",
            "Lime3DS",
            "https://lime3ds.github.io/",
            ["windows", "linux", "macos", "android"],
            "high",
            {
              en: "Another active Citra continuation with good compatibility.",
              es: "Otra continuación activa de Citra con buena compatibilidad.",
            },
            { license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "playstation-vita",
        name: { en: "PlayStation Vita", es: "PlayStation Vita" },
        manufacturer: "Sony",
        year: 2011,
        abbreviation: "VITA",
        color: "#003791",
        emulators: [
          e(
            "vita3k",
            "Vita3K",
            "https://vita3k.org/",
            ["windows", "linux", "macos", "android"],
            "good",
            {
              en: "The first working Vita emulator; compatibility is still growing.",
              es: "El primer emulador de Vita funcional; la compatibilidad sigue creciendo.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "wii-u",
        name: { en: "Wii U", es: "Wii U" },
        manufacturer: "Nintendo",
        year: 2012,
        abbreviation: "WIIU",
        color: "#00A0C6",
        emulators: [
          e(
            "cemu",
            "Cemu",
            "https://cemu.info/",
            ["windows", "linux", "macos"],
            "excellent",
            {
              en: "Near-perfect Wii U emulation, now open source.",
              es: "Emulación de Wii U casi perfecta, ahora de código abierto.",
            },
            { recommended: true, license: "MPL-2.0" },
          ),
        ],
      },
      {
        slug: "playstation-4",
        name: { en: "PlayStation 4", es: "PlayStation 4" },
        manufacturer: "Sony",
        year: 2013,
        abbreviation: "PS4",
        color: "#003791",
        logo: "playstation-4",
        emulators: [
          e(
            "shadps4",
            "shadPS4",
            "https://shadps4.net/",
            ["windows", "linux", "macos", "bsd"],
            "limited",
            {
              en: "Early PS4 emulator; a handful of games (e.g. Bloodborne) run, many do not.",
              es: "Emulador temprano de PS4; unos pocos juegos (p. ej. Bloodborne) funcionan, muchos no.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "nintendo-switch",
        name: { en: "Nintendo Switch", es: "Nintendo Switch" },
        manufacturer: "Nintendo",
        year: 2017,
        abbreviation: "NSW",
        color: "#E60012",
        emulators: [
          e(
            "ryujinx",
            "Ryujinx",
            "https://ryujinx.app/",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "Accurate Switch emulation; community forks keep it alive after the takedown.",
              es: "Emulación precisa de Switch; forks de la comunidad lo mantienen vivo tras su retirada.",
            },
            { recommended: true, license: "MIT" },
          ),
          e(
            "hyjinx",
            "Hyjinx",
            "https://github.com/hyjinx-emu/hyjinx",
            ["windows", "linux", "macos"],
            "high",
            {
              en: "A Ryujinx fork that keeps accuracy and performance improving after the takedown.",
              es: "Un fork de Ryujinx que sigue mejorando precisión y rendimiento tras la retirada.",
            },
            { license: "MIT" },
          ),
          e(
            "nexium",
            "NeXium",
            "https://git.mythrax-rs.org/nexium-emu/nexium",
            ["windows", "linux", "macos"],
            "good",
            {
              en: "Rust emulator with two switchable AArch64 JITs; commercial titles reach gameplay.",
              es: "Emulador en Rust con dos JIT AArch64 intercambiables; los títulos comerciales llegan al gameplay.",
            },
            { license: "GPL-3.0" },
          ),
        ],
      },
    ],
  },
  {
    id: "gen-9",
    number: 9,
    name: { en: "Ninth generation", es: "Novena generación" },
    range: { en: "2020–", es: "2020–" },
    consoles: [
      {
        slug: "playstation-5",
        name: { en: "PlayStation 5", es: "PlayStation 5" },
        manufacturer: "Sony",
        year: 2020,
        abbreviation: "PS5",
        color: "#003791",
        emulators: [
          e(
            "sharpemu",
            "SharpEmu",
            "https://sharpemu.app/",
            ["windows", "linux", "macos"],
            "limited",
            {
              en: "From-scratch C# PS5 emulator. A handful of 2D/simple titles are playable; most of the library is not yet.",
              es: "Emulador de PS5 en C# desde cero. Unos pocos títulos 2D/sencillos son jugables; la mayor parte aún no.",
            },
            { recommended: true, license: "GPL-2.0" },
          ),
          e(
            "kytyps5",
            "KytyPS5",
            "https://github.com/KytyPS5/KytyPS5",
            ["windows", "linux", "macos"],
            "limited",
            {
              en: "C++ PS5 emulator (a fork of Kyty). Boots UE4/5 and Unity titles; GTA V reaches its menus.",
              es: "Emulador de PS5 en C++ (fork de Kyty). Arranca títulos UE4/5 y Unity; GTA V llega a sus menús.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "rpcsx",
            "RPCSX",
            "https://github.com/RPCSX/rpcsx",
            ["windows", "linux"],
            "limited",
            {
              en: "PS4/PS5 research emulator derived from RPCS3; boots the PS5 system shell and safe mode.",
              es: "Emulador de investigación PS4/PS5 derivado de RPCS3; arranca el shell del sistema y el modo seguro.",
            },
            { license: "GPL-2.0" },
          ),
          e(
            "kytyplus",
            "KytyPlus",
            "https://github.com/Coder787-source/KytyPlus",
            ["windows", "linux", "macos"],
            "limited",
            {
              en: "KytyPS5 fork with extra HLE/boot work and optional LLE via firmware files.",
              es: "Fork de KytyPS5 con trabajo extra de HLE/arranque y LLE opcional mediante archivos de firmware.",
            },
            { license: "GPL-2.0" },
          ),
        ],
      },
      {
        slug: "xbox-series",
        name: { en: "Xbox Series X|S", es: "Xbox Series X|S" },
        manufacturer: "Microsoft",
        year: 2020,
        abbreviation: "XSX",
        color: "#107C10",
        emulators: [],
      },
    ],
  },
  {
    id: "gen-10",
    number: 10,
    name: { en: "Tenth generation", es: "Décima generación" },
    range: { en: "2025–", es: "2025–" },
    consoles: [
      {
        slug: "nintendo-switch-2",
        name: { en: "Nintendo Switch 2", es: "Nintendo Switch 2" },
        manufacturer: "Nintendo",
        year: 2025,
        abbreviation: "NS2",
        color: "#E60012",
        emulators: [
          e(
            "ubelisk",
            "Ubelisk",
            "https://github.com/heXIS4AXis/Ubelisk-Switch-2-Emulator",
            ["windows", "linux", "macos"],
            "limited",
            {
              en: "Early proof-of-concept Switch 2 emulator in C#; no commercial game runs yet.",
              es: "Emulador de Switch 2 en C#, prueba de concepto temprana; aún no corre ningún juego comercial.",
            },
            { recommended: true, license: "MIT" },
          ),
          e(
            "oboromi",
            "oboromi",
            "https://github.com/0xNikilite/oboromi",
            ["windows", "linux", "macos"],
            "limited",
            {
              en: "Rust Switch 2 emulator foundation; emulates the CPU and a stub GPU, no games yet.",
              es: "Base de emulador de Switch 2 en Rust; emula la CPU y una GPU stub, aún sin juegos.",
            },
            { license: "MIT" },
          ),
        ],
      },
    ],
  },
];

/** All consoles across generations, flattened. */
export const allConsoles: ConsoleDef[] = generations.flatMap((g) => g.consoles);

export function getGeneration(id: string): Generation | undefined {
  return generations.find((g) => g.id === id);
}

export function getConsole(slug: string): ConsoleDef | undefined {
  return allConsoles.find((c) => c.slug === slug);
}

export function countEmulators(): number {
  return allConsoles.reduce((sum, c) => sum + c.emulators.length, 0);
}
