import type { Port } from "@/lib/ports/schema";
import { sm64ex } from "./sm64ex";
import { shipOfHarkinian } from "./ship-of-harkinian";
import { twoShip } from "./2ship2harkinian";
import { starRod } from "./star-rod";
import { openLara } from "./open-lara";
import { devilutionX } from "./devilutionx";
import { nxEngine } from "./nxengine-evo";
import { daggerfallUnity } from "./daggerfall-unity";
import { openmw } from "./openmw";
import { xash3d } from "./xash3d-fwgs";
import { vkQuake } from "./vkquake";
import { yamagiQuake2 } from "./yamagi-quake2";
import { gzdoom } from "./gzdoom";
import { eduke32 } from "./eduke32";
import { openXcom } from "./openxcom";
import { openTtd } from "./openttd";
import { openRct2 } from "./openrct2";
import { vcmi } from "./vcmi";
import { fh2 } from "./fh2";
import { openapoc } from "./openapoc";
import { openjazz } from "./openjazz";
import { shockolate } from "./shockolate";
import { opensage } from "./opensage";
import { openage } from "./openage";
import { d1xRebirth } from "./d1x-rebirth";
import { fallout1Ce } from "./fallout1-ce";
import { fallout2Ce } from "./fallout2-ce";
import { openJk } from "./openjk";
import { gemrb } from "./gemrb";
import { sonic12 } from "./sonic-1-2-2013";
import { sonicMania } from "./sonic-mania-decomp";
import { downpourRecomp } from "./downpour-recomp";
import { wiiCompiled } from "./wiicompiled";
import { openra } from "./openra";
import { starship } from "./starship";
import { spaghettiKart } from "./spaghettikart";
import { lighthouse } from "./lighthouse";
import { goldenEye64Recompiled } from "./goldeneye-64-recompiled";
import { dk64Recompiled } from "./dk64-recompiled";
import { waveRace64Recompiled } from "./wave-race-64-recompiled";
import { roadRash64Recompiled } from "./road-rash-64-recompiled";
import { fZeroSnesRecompiled } from "./f-zero-snes-recompiled";
import { dkcRecompiled } from "./dkc-recompiled";
import { metroidPrimeHuntersRecompiled } from "./metroid-prime-hunters-recompiled";
import { perfectDarkDabsMod } from "./perfect-dark-dabs-mod";
import { triAevum } from "./triaevum";
import { prBoomPlusRt } from "./prboom-plus-rt";
import { doom3Dude } from "./doom3-dude";
import { unleashedRecompiled } from "./unleashed-recompiled";
import { dusklight } from "./dusklight";
import { meleeNative } from "./melee-native";
import { pikmin } from "./pikmin";
import { petari } from "./petari";
import { ctrNative } from "./ctr-native";
import { pokered } from "./pokered";
import { zelda3 } from "./zelda3";
import { dkrR } from "./dkr-r";
import { symphonyRecomp } from "./symphony-recomp";
import { superMarioBrosRemastered } from "./super-mario-bros-remastered";
import { crashBandicoot } from "./crash-bandicoot";
import { minishCap } from "./minish-cap";
import { marathonRecomp } from "./marathon-recomp";
import { dhewm3 } from "./dhewm3";
import { ioquake3 } from "./ioquake3";
import { dxxRebirth } from "./dxx-rebirth";
import { julius } from "./julius";
import { corsixth } from "./corsixth";
import { raze } from "./raze";
import { arxLibertatis } from "./arx-libertatis";
import { openDune } from "./opendune";
import { banjoKazooieRecomp } from "./banjo-kazooie-recomp";
import { castlevaniaLodRecomp } from "./castlevania-lod-recomp";
import { pokemonStadiumRecomp } from "./pokemon-stadium-recomp";
import { pilotwings64Recomp } from "./pilotwings-64-recomp";
import { alephOne } from "./aleph-one";
import { freedroidClassic } from "./freedroid-classic";
import { conkerBadFurDayRecomp } from "./conker-bad-fur-day-recomp";
import { harvestMoon64Recomp } from "./harvest-moon-64-recomp";
import { pokemonSnapRecomp } from "./pokemon-snap-recomp";
import { spaceStationSiliconValleyRecomp } from "./space-station-silicon-valley-recomp";
import { superMarioWorldRecomp } from "./super-mario-world-recomp";
import { megaManXSnesRecomp } from "./mega-man-x-snes-recomp";
import { ogreBattle64Recomp } from "./ogre-battle-64-recomp";
import { quest64Recomp } from "./quest-64-recomp";
import { dinosaurPlanetRecomp } from "./dinosaur-planet-recomp";
import { bomberman64Recomp } from "./bomberman-64-recomp";
import { bombermanHeroRecomp } from "./bomberman-hero-recomp";
import { beetleAdventureRacingRecomp } from "./beetle-adventure-racing-recomp";
import { chocolateDoom } from "./chocolate-doom";
import { openGoal } from "./open-goal";
import { redriver2 } from "./redriver2";
import { wipeoutPhantomEdition } from "./wipeout-phantom-edition";
import { rsdkv3Decompilation } from "./rsdkv3-decompilation";
import { keeperFx } from "./keeperfx";
import { ecWolf } from "./ecwolf";
import { perfectDarkPort } from "./perfect-dark-port";
import { lcsRecomp } from "./lcs-recomp";
import { pspRecomp } from "./psprecomp";
import { namcoSystem22PropCycle } from "./namco-system-22-prop-cycle";
import { namcoSystem22RaveRacer } from "./namco-system-22-rave-racer";
import { namcoSystem22TokyoWars } from "./namco-system-22-tokyo-wars";
import { namcoSystem22DirtDash } from "./namco-system-22-dirt-dash";
import { reLcs } from "./re-lcs";
import { crispyDoom } from "./crispy-doom";
import { doomRetro } from "./doomretro";
import { dsdaDoom } from "./dsda-doom";
import { eternityEngine } from "./eternity-engine";
import { odamexPort } from "./odamex";
import { woofPort } from "./woof";
import { nuggetDoom } from "./nugget-doom";
import { doom64ExPlus } from "./doom64-ex-plus";
import { rbDoom3Bfg } from "./rbdoom-3-bfg";
import { ironwail } from "./ironwail";
import { darkPlaces } from "./darkplaces";
import { quakeSpasm } from "./quakespasm";
import { etLegacy } from "./etlegacy";
import { rtcWolfenstein } from "./return-to-castle-wolfenstein";
import { nBlood } from "./nblood";
import { rottexpr } from "./rottexpr";
import { openTyrian } from "./opentyrian";
import { doukutsuRs } from "./doukutsu-rs";
import { sdlPoP } from "./sdlpop";
import { theForceEngine } from "./the-force-engine";
import { exultPort } from "./exult";
import { openLoco } from "./openloco";
import { openEnroth } from "./open-enroth";
import { openGothic } from "./open-gothic";
import { openMohaa } from "./openmohaa";
import { freeSpace2 } from "./freespace-2";
import { vanillaConquer } from "./vanilla-conquer";
import { thymePort } from "./thyme";
import { settlers2 } from "./settlers-2";
import { ja2Stracciatella } from "./ja2-stracciatella";
import { islePortable } from "./isle-portable";
import { trxPort } from "./trx";
import { wipeoutRewrite } from "./wipeout-rewrite";
import { librelancer } from "./librelancer";
import { openTesaArena } from "./open-tes-arena";
import { spaceCadetPinball } from "./space-cadet-pinball";
import { wargusPort } from "./wargus";
import { openFodder } from "./openfodder";
import { reOne } from "./reone-kotor";
import { sonic3Air } from "./sonic-3-air";
import { smwRev } from "./smw-rev";
import { zelda64Recomp } from "./zelda64-recomp";
import { theSimpsonsGameRecomp } from "./the-simpsons-game-recomp";
import { openRw } from "./open-rw";
import { bt3Recomp } from "./bt3-recomp";
import { donut } from "./donut";
import { dragonBallZLegacyOfGokuRecomp } from "./dragon-ball-z-legacy-of-goku-recomp";
import { pinyonShift } from "./pinyon-shift";
import { gears1 } from "./gears1";

export const portCases: Port[] = [
  sm64ex,
  shipOfHarkinian,
  twoShip,
  starRod,
  openLara,
  devilutionX,
  nxEngine,
  daggerfallUnity,
  openmw,
  xash3d,
  vkQuake,
  yamagiQuake2,
  gzdoom,
  eduke32,
  openXcom,
  openTtd,
  openRct2,
  fallout1Ce,
  fallout2Ce,
  openJk,
  gemrb,
  sonic12,
  sonicMania,
  downpourRecomp,
  wiiCompiled,
  openra,
  starship,
  spaghettiKart,
  lighthouse,
  goldenEye64Recompiled,
  dk64Recompiled,
  waveRace64Recompiled,
  roadRash64Recompiled,
  fZeroSnesRecompiled,
  dkcRecompiled,
  metroidPrimeHuntersRecompiled,
  perfectDarkDabsMod,
  triAevum,
  prBoomPlusRt,
  doom3Dude,
  unleashedRecompiled,
  dusklight,
  meleeNative,
  pikmin,
  petari,
  ctrNative,
  pokered,
  zelda3,
  dkrR,
  symphonyRecomp,
  superMarioBrosRemastered,
  crashBandicoot,
  minishCap,
  marathonRecomp,
  dhewm3,
  ioquake3,
  dxxRebirth,
  julius,
  corsixth,
  raze,
  arxLibertatis,
  openDune,
  banjoKazooieRecomp,
  castlevaniaLodRecomp,
  pokemonStadiumRecomp,
  pilotwings64Recomp,
  alephOne,
  freedroidClassic,
  conkerBadFurDayRecomp,
  harvestMoon64Recomp,
  pokemonSnapRecomp,
  spaceStationSiliconValleyRecomp,
  superMarioWorldRecomp,
  megaManXSnesRecomp,
  ogreBattle64Recomp,
  quest64Recomp,
  dinosaurPlanetRecomp,
  bomberman64Recomp,
  bombermanHeroRecomp,
  beetleAdventureRacingRecomp,
  chocolateDoom,
  vcmi,
  fh2,
  openapoc,
  openjazz,
  shockolate,
  opensage,
  openage,
  d1xRebirth,
  openGoal,
  redriver2,
  wipeoutPhantomEdition,
  rsdkv3Decompilation,
  keeperFx,
  ecWolf,
  perfectDarkPort,
  lcsRecomp,
  pspRecomp,
  namcoSystem22PropCycle,
  namcoSystem22RaveRacer,
  namcoSystem22TokyoWars,
  namcoSystem22DirtDash,
  crispyDoom,
  doomRetro,
  dsdaDoom,
  eternityEngine,
  odamexPort,
  woofPort,
  nuggetDoom,
  doom64ExPlus,
  rbDoom3Bfg,
  ironwail,
  darkPlaces,
  quakeSpasm,
  etLegacy,
  rtcWolfenstein,
  nBlood,
  rottexpr,
  openTyrian,
  doukutsuRs,
  sdlPoP,
  theForceEngine,
  exultPort,
  openLoco,
  openEnroth,
  openGothic,
  openMohaa,
  freeSpace2,
  vanillaConquer,
  thymePort,
  settlers2,
  ja2Stracciatella,
  islePortable,
  trxPort,
  wipeoutRewrite,
  librelancer,
  openTesaArena,
  spaceCadetPinball,
  wargusPort,
  openFodder,
  reOne,
  sonic3Air,
  smwRev,
  bt3Recomp,
  donut,
  dragonBallZLegacyOfGokuRecomp,
  reLcs,
  zelda64Recomp,
  theSimpsonsGameRecomp,
  openRw,
  pinyonShift,
  gears1,
];
