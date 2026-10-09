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
import { duckHuntNesRecomp } from "./duck-hunt-nes-recomp";
import { drMarioNesRecomp } from "./dr-mario-nes-recomp";
import { zeldaNesRecomp } from "./zelda-nes-recomp";
import { faxanaduRecomp } from "./faxanadu-recomp";
import { yoshiNesRecomp } from "./yoshi-nes-recomp";
import { yoshisCookieRecomp } from "./yoshis-cookie-recomp";
import { megaMan3NesRecomp } from "./mega-man-3-nes-recomp";
import { gumshoeNesRecomp } from "./gumshoe-nes-recomp";
import { pacManNesRecomp } from "./pac-man-nes-recomp";
import { smbVanillaPort } from "./smb-vanilla-port";
import { zeldaAlttpSnesRecomp } from "./zelda-alttp-snes-recomp";
import { superMetroidSnesRecomp } from "./super-metroid-snes-recomp";
import { sonic1GenesisRecomp } from "./sonic-1-genesis-recomp";
import { streetsOfRageRecomp } from "./streets-of-rage-recomp";
import { tsumuLightRecomp } from "./tsumu-light-recomp";
import { xenogearsRecomp } from "./xenogears-recomp";
import { ridgeRacerType4Recomp } from "./ridge-racer-type-4-recomp";
import { kingsFieldRecomp } from "./kings-field-recomp";
import { megaMan64Recomp } from "./mega-man-64-recomp";
import { rocketR } from "./rocket-r";
import { rush2Recomp } from "./rush-2-recomp";
import { chameleonTwist2Recomp } from "./chameleon-twist-2-recomp";
import { superman64Recomp } from "./superman-64-recomp";
import { wcwNwoRevengeRecomp } from "./wcw-nwo-revenge-recomp";
import { hamsterMonogatari64Recomp } from "./hamster-monogatari-64-recomp";
import { battleship } from "./battleship";
import { paperMarioPaperboat } from "./paper-mario-paperboat";
import { animalCrossingPcPort } from "./animal-crossing-pc-port";
import { metroidPrimePort } from "./metroid-prime-port";
import { haloCeUniversal } from "./halo-ce-universal";
import { lostOdysseyRecomp } from "./lost-odyssey-recomp";
import { deadRising2CaseZeroRecomp } from "./dead-rising-2-case-zero-recomp";
import { ninjaGaiden2Recomp } from "./ninja-gaiden-2-recomp";
import { perfectDarkRemasterRecomp } from "./perfect-dark-remaster-recomp";
import { sonicFreeRidersRecomp } from "./sonic-free-riders-recomp";
import { supermanReturnsRecomp } from "./superman-returns-recomp";
import { wetRecomp } from "./wet-recomp";
import { tooHumanRecomp } from "./too-human-recomp";
import { spiderManEdgeOfTimeRecomp } from "./spider-man-edge-of-time-recomp";
import { bloodbornePc } from "./bloodborne-pc";
import { ptPc } from "./pt-pc";
import { silentHillPc } from "./silent-hill-pc";
import { silentEngine } from "./silent-engine";
import { nfsMostWantedRecomp } from "./nfs-most-wanted-recomp";
import { pinyonShift } from "./pinyon-shift";
import { gears1 } from "./gears1";
import { megaManX4Recomp } from "./mega-man-x4-recomp";
import { megaManX5Recomp } from "./mega-man-x5-recomp";
import { megaManX6Recomp } from "./mega-man-x6-recomp";
import { ridgeRacerPs1Recomp } from "./ridge-racer-ps1-recomp";
import { ridgeRacerRevolutionRecomp } from "./ridge-racer-revolution-recomp";
import { verdite2 } from "./verdite2";
import { openGtps1 } from "./opengtps1";
import { crash2Recomp } from "./crash2-recomp";
import { rageRacerPc } from "./rage-racer-pc";
import { flowPs3Recomp } from "./flow-ps3-recomp";
import { tokyoJungleRecompiled } from "./tokyo-jungle-recompiled";
import { simpsonsArcadePs3 } from "./simpsons-arcade-ps3";
import { youdontknowjackRecomp } from "./youdontknowjack-recomp";
import { marioKart64Recomp } from "./mario-kart-64-recomp";
import { starFox64Recomp } from "./star-fox-64-recomp";
import { goemon64Recompiled } from "./goemon-64-recompiled";
import { dnzhRecomp } from "./dnzh-recomp";
import { reblue } from "./reblue";
import { kameoRepowered } from "./kameo-repowered";
import { tipRecomp } from "./tip-recomp";
import { reCherry } from "./re-cherry";
import { naughtyBearRestuff } from "./naughty-bear-restuff";
import { renut } from "./renut";
import { redahm } from "./redahm";
import { metroidNesRecomp } from "./metroid-nes-recomp";
import { dkc2Recomp } from "./dkc2-recomp";
import { dkc3Recomp } from "./dkc3-recomp";
import { megaManX2Recomp } from "./mega-man-x2-recomp";
import { marioKartSuperCircuitRecomp } from "./mario-kart-super-circuit-recomp";
import { apeEscapeRecomp } from "./ape-escape-recomp";
import { tombaRecomp } from "./tomba-recomp";
import { tomba2Recomp } from "./tomba2-recomp";
import { superMarioBrosNesRecomp } from "./super-mario-bros-nes-recomp";
import { linksAwakeningRecomp } from "./links-awakening-recomp";
import { oracleRecompiled } from "./oracle-recompiled";
import { windWakerRecomp } from "./wind-waker-recomp";
import { ringOut } from "./ringout";
import { drMario64RecompPlus } from "./drmario64-recomp-plus";
import { snowboardKids2Recomp } from "./snowboard-kids-2-recomp";
import { finalFantasyViiiRecomp } from "./final-fantasy-viii-recomp";
import { finalFantasyIxRecomp } from "./final-fantasy-ix-recomp";
import { fearEffectRecomp } from "./fear-effect-recomp";
import { gPoliceRecomp } from "./g-police-recomp";
import { ghostInTheShellRecomp } from "./ghost-in-the-shell-recomp";
import { theFifthElementRecomp } from "./the-fifth-element-recomp";
import { einhanderRecomp } from "./einhander";
import { tekken3Recomp } from "./tekken-3-recomp";
import { guiltyGearRecomp } from "./guilty-gear-recomp";
import { gundamBattleMasterRecomp } from "./gundam-battle-master-recomp";
import { gundamBattleMaster2Recomp } from "./gundam-battle-master-2-recomp";
import { gundamBattleAssault2Recomp } from "./gundam-battle-assault-2-recomp";
import { finalFantasyTacticsRecomp } from "./final-fantasy-tactics-recomp";
import { syphonFilter2Recompiled } from "./syphon-filter-2-recompiled";
import { pepsimanRecompiled } from "./pepsiman-recompiled";
import { apocalypseRecomp } from "./apocalypse-recomp";
import { armoredCoreRecomp } from "./armored-core-recomp";
import { armoredCoreMasterOfArenaRecomp } from "./armored-core-master-of-arena-recomp";
import { armoredCoreProjectPhantasmaRecomp } from "./armored-core-project-phantasma-recomp";
import { azureDreamsRecomp } from "./azure-dreams-recomp";
import { bloodOmenLegacyOfKainRecomp } from "./blood-omen-legacy-of-kain-recomp";
import { bloodyRoarIiRecomp } from "./bloody-roar-ii-recomp";
import { braveFencerMusashiRecomp } from "./brave-fencer-musashi-recomp";
import { bushidoBlade2Recomp } from "./bushido-blade-2-recomp";
import { colinMcraeRally20Recomp } from "./colin-mcrae-rally-2-0-recomp";
import { colonyWarsRecomp } from "./colony-wars-recomp";
import { colonyWarsRedSunRecomp } from "./colony-wars-red-sun-recomp";
import { crashBandicoot3WarpedRecomp } from "./crash-bandicoot-3-warped-recomp";
import { destructionDerby2Recomp } from "./destruction-derby-2-recomp";
import { destructionDerbyRawRecomp } from "./destruction-derby-raw-recomp";
import { diabloRecomp } from "./diablo-recomp";
import { dieHardTrilogyRecomp } from "./die-hard-trilogy-recomp";
import { digimonWorld2Recomp } from "./digimon-world-2-recomp";
import { digimonWorld2003Recomp } from "./digimon-world-2003-recomp";
import { dinoCrisisRecomp } from "./dino-crisis-recomp";
import { dragonBallZUltimateBattle22Recomp } from "./dragon-ball-z-ultimate-battle-22-recomp";
import { driverRecomp } from "./driver-recomp";
import { dukeNukemLandOfTheBabesRecomp } from "./duke-nukem-land-of-the-babes-recomp";
import { dukeNukemTimeToKillRecomp } from "./duke-nukem-time-to-kill-recomp";
import { fadeToBlackRecomp } from "./fade-to-black-recomp";
import { fearEffect2RetroHelixRecomp } from "./fear-effect-2-retro-helix-recomp";
import { fightingForceRecomp } from "./fighting-force-recomp";
import { futureCopLapdRecomp } from "./future-cop-lapd-recomp";
import { gPoliceWeaponsOfJusticeRecomp } from "./g-police-weapons-of-justice-recomp";
import { galeriansRecomp } from "./galerians-recomp";
import { inColdBloodRecomp } from "./in-cold-blood-recomp";
import { incredibleCrisisRecomp } from "./incredible-crisis-recomp";
import { jackieChanStuntmasterRecomp } from "./jackie-chan-stuntmaster-recomp";
import { jadeCocoonRecomp } from "./jade-cocoon-recomp";
import { kartiaRecomp } from "./kartia-recomp";
import { koudelkaRecomp } from "./koudelka-recomp";
import { legacyOfKainSoulReaverRecomp } from "./legacy-of-kain-soul-reaver-recomp";
import { alienResurrectionRecomp } from "./alien-resurrection-recomp";
import { aceCombat3ElectrosphereRecomp } from "./ace-combat-3-electrosphere-recomp";
import { aceCombat3ElectrosphereUsaRecomp } from "./ace-combat-3-electrosphere-usa-recomp";
import { aloneInTheDarkTheNewNightmareRecomp } from "./alone-in-the-dark-the-new-nightmare-recomp";
import { alundraRecomp } from "./alundra-recomp";
import { medievilRecomp } from "./medievil-recomp";
import { medievilIiRecomp } from "./medievil-ii-recomp";
import { megaManLegendsRecomp } from "./mega-man-legends-recomp";
import { megaManLegends2Recomp } from "./mega-man-legends-2-recomp";
import { menInBlackTheGameRecomp } from "./men-in-black-the-game-recomp";
import { metalGearSolidRecomp } from "./metal-gear-solid-recomp";
import { metalSlugXRecomp } from "./metal-slug-x-recomp";
import { monsterRancherRecomp } from "./monster-rancher-recomp";
import { monsterRancher2Recomp } from "./monster-rancher-2-recomp";
import { mortalKombat4Recomp } from "./mortal-kombat-4-recomp";
import { mortalKombatTrilogyRecomp } from "./mortal-kombat-trilogy-recomp";
import { nightmareCreaturesRecomp } from "./nightmare-creatures-recomp";
import { nightmareCreaturesIiRecomp } from "./nightmare-creatures-ii-recomp";
import { oddworldAbeSOddyseeRecomp } from "./oddworld-abe-s-oddysee-recomp";
import { parasiteEveRecomp } from "./parasite-eve-recomp";
import { quakeIiRecomp } from "./quake-ii-recomp";
import { mdkRecomp } from "./mdk-recomp";
import { proPinballTimeshockRecomp } from "./pro-pinball-timeshock-recomp";
import { residentEvil3Recomp } from "./resident-evil-3-recomp";
import { rivalSchoolsRecomp } from "./rival-schools-recomp";
import { rivalSchoolsEvolutionRecomp } from "./rival-schools-evolution-recomp";
import { rollcageStageIiRecomp } from "./rollcage-stage-ii-recomp";
import { silentBomberRecomp } from "./silent-bomber-recomp";
import { spiderManRecomp } from "./spider-man-recomp";
import { spiderMan2EnterElectroRecomp } from "./spider-man-2-enter-electro-recomp";
import { spyroTheDragonRecomp } from "./spyro-the-dragon-recomp";
import { starWarsEpisodeIThePhantomMenaceRecomp } from "./star-wars-episode-i-the-phantom-menace-recomp";
import { suikodenRecomp } from "./suikoden-recomp";
import { suikodenIiRecomp } from "./suikoden-ii-recomp";
import { syphonFilter3Recomp } from "./syphon-filter-3-recomp";
import { tailConcertoRecomp } from "./tail-concerto-recomp";
import { teamBuddiesRecomp } from "./team-buddies-recomp";
import { tenchuStealthAssassinsRecomp } from "./tenchu-stealth-assassins-recomp";
import { theLostWorldJurassicParkSpecialEditionRecomp } from "./the-lost-world-jurassic-park-special-edition-recomp";
import { misadventuresOfTronBonneRecomp } from "./misadventures-of-tron-bonne-recomp";
import { theMummyRecomp } from "./the-mummy-recomp";
import { threadsOfFateRecomp } from "./threads-of-fate-recomp";
import { tokyoHighwayBattleRecomp } from "./tokyo-highway-battle-recomp";
import { tonyHawkSProSkaterRecomp } from "./tony-hawk-s-pro-skater-recomp";
import { tonyHawkSProSkater2Recomp } from "./tony-hawk-s-pro-skater-2-recomp";
import { tonyHawkSProSkater3Recomp } from "./tony-hawk-s-pro-skater-3-recomp";
import { tonyHawkSProSkater4Recomp } from "./tony-hawk-s-pro-skater-4-recomp";
import { valkyrieProfileRecomp } from "./valkyrie-profile-recomp";
import { vampireHunterDRecomp } from "./vampire-hunter-d-recomp";
import { vibRibbonRecomp } from "./vib-ribbon-recomp";
import { vigilante8Recomp } from "./vigilante-8-recomp";
import { wildArmsRecomp } from "./wild-arms-recomp";
import { wipeoutRecomp } from "./wipeout-recomp";
import { wipeoutXlRecomp } from "./wipeout-xl-recomp";
import { xenaWarriorPrincessRecomp } from "./xena-warrior-princess-recomp";
import { devilDiceRecomp } from "./devil-dice-recomp";
import { kulaWorldRecomp } from "./kula-world-recomp";
import { fable2Recomp } from "./fable-2-recomp";
import { theDarknessRecomp } from "./the-darkness-recomp";
import { skate3Recomp } from "./skate-3-recomp";
import { skate3Mobile } from "./skate-3-mobile";
import { gtaIvLibertyRecomp } from "./gta-iv-liberty-recomp";
import { eternalSonataReprise } from "./eternal-sonata-reprise";
import { aceCombat6Recomp } from "./ace-combat-6-recomp";
import { condemned2Recomp } from "./condemned-2-recomp";
import { automobiliLamborghiniRecomp } from "./automobili-lamborghini-recomp";
import { chameleonTwistRecomp } from "./chameleon-twist-recomp";
import { fZeroXRecomp } from "./f-zero-x-recomp";
import { mischiefMakersRecomp } from "./mischief-makers-recomp";
import { vpw2Recomp } from "./vpw2-recomp";
import { vpw64Recomp } from "./vpw64-recomp";
import { wcwNwoWorldTourRecomp } from "./wcw-nwo-world-tour-recomp";
import { wwfNoMercyRecomp } from "./wwf-no-mercy-recomp";
import { wwfWrestlemania2000Recomp } from "./wwf-wrestlemania-2000-recomp";
import { aerogaugeRecomp } from "./aerogauge-recomp";
import { snowboardKidsRecompiled } from "./snowboard-kids-recompiled";
import { tetrisphereRecomp } from "./tetrisphere-recomp";
import { bodyHarvestRecomp } from "./body-harvest-recomp";
import { rayman2N64Recomp } from "./rayman-2-n64-recomp";
import { superRobotWars64Recomp } from "./super-robot-wars-64-recomp";
import { dragonBallZLegacyOfGoku2Recomp } from "./dragon-ball-z-legacy-of-goku-2-recomp";
import { dragonBallZBuusFuryRecomp } from "./dragon-ball-z-buus-fury-recomp";
import { wariowareTwistedRecomp } from "./warioware-twisted-recomp";
import { superMarioAdvance2Recomp } from "./super-mario-advance-2-recomp";
import { superMarioAdvance4Recomp } from "./super-mario-advance-4-recomp";
import { pokemonFireredRecomp } from "./pokemon-firered-recomp";
import { pokemonRubyRecomp } from "./pokemon-ruby-recomp";
import { pokemonEmeraldRecomp } from "./pokemon-emerald-recomp";
import { megaManZeroRecomp } from "./mega-man-zero-recomp";
import { castlevaniaCircleOfTheMoonRecomp } from "./castlevania-circle-of-the-moon-recomp";
import { pokemonMysteryDungeonRedRecomp } from "./pokemon-mystery-dungeon-red-recomp";
import { summonNightSwordcraft3Recomp } from "./summon-night-swordcraft-3-recomp";
import { pokemonEmeraldDualScreen } from "./pokemon-emerald-dual-screen";
import { burnout3Recomp } from "./burnout-3-recomp";
import { wrecklessRecomp } from "./wreckless-recomp";
import { doa3Recomp } from "./doa3-recomp";
import { doaxbvRe } from "./doaxbv-re";
import { xMenLegendsRecomp } from "./x-men-legends-recomp";
import { marioParty4Recomp } from "./mario-party-4-recomp";
import { medalOfHonorFrontlineRecomp } from "./medal-of-honor-frontline-recomp";
import { starFoxAdventuresRecomp } from "./star-fox-adventures-recomp";
import { superMarioSunshinePc } from "./super-mario-sunshine-pc";
import { superMarioSunshineAndroid } from "./super-mario-sunshine-android";
import { fatalFrameRecomp } from "./fatal-frame-recomp";
import { streetFighterIii3rdStrike3sx } from "./street-fighter-iii-3rd-strike-3sx";
import { godOfWarRecomp } from "./god-of-war-recomp";

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
  metroidNesRecomp,
  dkc2Recomp,
  dkc3Recomp,
  megaManX2Recomp,
  marioKartSuperCircuitRecomp,
  apeEscapeRecomp,
  tombaRecomp,
  tomba2Recomp,
  superMarioBrosNesRecomp,
  linksAwakeningRecomp,
  oracleRecompiled,
  windWakerRecomp,
  ringOut,
  drMario64RecompPlus,
  snowboardKids2Recomp,
  megaManX4Recomp,
  megaManX5Recomp,
  megaManX6Recomp,
  ridgeRacerPs1Recomp,
  ridgeRacerRevolutionRecomp,
  verdite2,
  openGtps1,
  crash2Recomp,
  rageRacerPc,
  flowPs3Recomp,
  tokyoJungleRecompiled,
  simpsonsArcadePs3,
  youdontknowjackRecomp,
  marioKart64Recomp,
  starFox64Recomp,
  goemon64Recompiled,
  dnzhRecomp,
  reblue,
  kameoRepowered,
  tipRecomp,
  reCherry,
  naughtyBearRestuff,
  renut,
  redahm,
  duckHuntNesRecomp,
  drMarioNesRecomp,
  zeldaNesRecomp,
  faxanaduRecomp,
  yoshiNesRecomp,
  yoshisCookieRecomp,
  megaMan3NesRecomp,
  gumshoeNesRecomp,
  pacManNesRecomp,
  smbVanillaPort,
  zeldaAlttpSnesRecomp,
  superMetroidSnesRecomp,
  sonic1GenesisRecomp,
  streetsOfRageRecomp,
  tsumuLightRecomp,
  xenogearsRecomp,
  ridgeRacerType4Recomp,
  kingsFieldRecomp,
  megaMan64Recomp,
  rocketR,
  rush2Recomp,
  chameleonTwist2Recomp,
  superman64Recomp,
  wcwNwoRevengeRecomp,
  hamsterMonogatari64Recomp,
  battleship,
  paperMarioPaperboat,
  animalCrossingPcPort,
  metroidPrimePort,
  haloCeUniversal,
  lostOdysseyRecomp,
  deadRising2CaseZeroRecomp,
  ninjaGaiden2Recomp,
  perfectDarkRemasterRecomp,
  sonicFreeRidersRecomp,
  supermanReturnsRecomp,
  wetRecomp,
  tooHumanRecomp,
  spiderManEdgeOfTimeRecomp,
  bloodbornePc,
  ptPc,
  silentHillPc,
  silentEngine,
  nfsMostWantedRecomp,
  finalFantasyViiiRecomp,
  finalFantasyIxRecomp,
  fearEffectRecomp,
  gPoliceRecomp,
  ghostInTheShellRecomp,
  theFifthElementRecomp,
  einhanderRecomp,
  tekken3Recomp,
  guiltyGearRecomp,
  gundamBattleMasterRecomp,
  gundamBattleMaster2Recomp,
  gundamBattleAssault2Recomp,
  finalFantasyTacticsRecomp,
  syphonFilter2Recompiled,
  pepsimanRecompiled,
  apocalypseRecomp,
  armoredCoreRecomp,
  armoredCoreMasterOfArenaRecomp,
  armoredCoreProjectPhantasmaRecomp,
  azureDreamsRecomp,
  bloodOmenLegacyOfKainRecomp,
  bloodyRoarIiRecomp,
  braveFencerMusashiRecomp,
  bushidoBlade2Recomp,
  colinMcraeRally20Recomp,
  colonyWarsRecomp,
  colonyWarsRedSunRecomp,
  crashBandicoot3WarpedRecomp,
  destructionDerby2Recomp,
  destructionDerbyRawRecomp,
  diabloRecomp,
  dieHardTrilogyRecomp,
  digimonWorld2Recomp,
  digimonWorld2003Recomp,
  dinoCrisisRecomp,
  dragonBallZUltimateBattle22Recomp,
  driverRecomp,
  dukeNukemLandOfTheBabesRecomp,
  dukeNukemTimeToKillRecomp,
  fadeToBlackRecomp,
  fearEffect2RetroHelixRecomp,
  fightingForceRecomp,
  futureCopLapdRecomp,
  gPoliceWeaponsOfJusticeRecomp,
  galeriansRecomp,
  inColdBloodRecomp,
  incredibleCrisisRecomp,
  jackieChanStuntmasterRecomp,
  jadeCocoonRecomp,
  kartiaRecomp,
  koudelkaRecomp,
  legacyOfKainSoulReaverRecomp,
  alienResurrectionRecomp,
  aceCombat3ElectrosphereRecomp,
  aceCombat3ElectrosphereUsaRecomp,
  aloneInTheDarkTheNewNightmareRecomp,
  alundraRecomp,
  medievilRecomp,
  medievilIiRecomp,
  megaManLegendsRecomp,
  megaManLegends2Recomp,
  menInBlackTheGameRecomp,
  metalGearSolidRecomp,
  metalSlugXRecomp,
  monsterRancherRecomp,
  monsterRancher2Recomp,
  mortalKombat4Recomp,
  mortalKombatTrilogyRecomp,
  nightmareCreaturesRecomp,
  nightmareCreaturesIiRecomp,
  oddworldAbeSOddyseeRecomp,
  parasiteEveRecomp,
  quakeIiRecomp,
  mdkRecomp,
  proPinballTimeshockRecomp,
  residentEvil3Recomp,
  rivalSchoolsRecomp,
  rivalSchoolsEvolutionRecomp,
  rollcageStageIiRecomp,
  silentBomberRecomp,
  spiderManRecomp,
  spiderMan2EnterElectroRecomp,
  spyroTheDragonRecomp,
  starWarsEpisodeIThePhantomMenaceRecomp,
  suikodenRecomp,
  suikodenIiRecomp,
  syphonFilter3Recomp,
  tailConcertoRecomp,
  teamBuddiesRecomp,
  tenchuStealthAssassinsRecomp,
  theLostWorldJurassicParkSpecialEditionRecomp,
  misadventuresOfTronBonneRecomp,
  theMummyRecomp,
  threadsOfFateRecomp,
  tokyoHighwayBattleRecomp,
  tonyHawkSProSkaterRecomp,
  tonyHawkSProSkater2Recomp,
  tonyHawkSProSkater3Recomp,
  tonyHawkSProSkater4Recomp,
  valkyrieProfileRecomp,
  vampireHunterDRecomp,
  vibRibbonRecomp,
  vigilante8Recomp,
  wildArmsRecomp,
  wipeoutRecomp,
  wipeoutXlRecomp,
  xenaWarriorPrincessRecomp,
  devilDiceRecomp,
  kulaWorldRecomp,
  fable2Recomp,
  theDarknessRecomp,
  skate3Recomp,
  skate3Mobile,
  gtaIvLibertyRecomp,
  eternalSonataReprise,
  aceCombat6Recomp,
  condemned2Recomp,
  automobiliLamborghiniRecomp,
  chameleonTwistRecomp,
  fZeroXRecomp,
  mischiefMakersRecomp,
  vpw2Recomp,
  vpw64Recomp,
  wcwNwoWorldTourRecomp,
  wwfNoMercyRecomp,
  wwfWrestlemania2000Recomp,
  aerogaugeRecomp,
  snowboardKidsRecompiled,
  tetrisphereRecomp,
  bodyHarvestRecomp,
  rayman2N64Recomp,
  superRobotWars64Recomp,
  dragonBallZLegacyOfGoku2Recomp,
  dragonBallZBuusFuryRecomp,
  wariowareTwistedRecomp,
  superMarioAdvance2Recomp,
  superMarioAdvance4Recomp,
  pokemonFireredRecomp,
  pokemonRubyRecomp,
  pokemonEmeraldRecomp,
  megaManZeroRecomp,
  castlevaniaCircleOfTheMoonRecomp,
  pokemonMysteryDungeonRedRecomp,
  summonNightSwordcraft3Recomp,
  pokemonEmeraldDualScreen,
  burnout3Recomp,
  wrecklessRecomp,
  doa3Recomp,
  doaxbvRe,
  xMenLegendsRecomp,
  marioParty4Recomp,
  medalOfHonorFrontlineRecomp,
  starFoxAdventuresRecomp,
  superMarioSunshinePc,
  superMarioSunshineAndroid,
  fatalFrameRecomp,
  streetFighterIii3rdStrike3sx,
  godOfWarRecomp,
];
