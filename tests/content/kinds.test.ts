import { describe, expect, it } from "vitest";
import { getGamePorts, getPortCount, getPorts, getToolPorts } from "@/lib/ports";
import { portKind } from "@/lib/ports/schema";

/** Entries that are system software rather than games. */
const SYSTEM_IDS = ["wii-menu", "xbox-360-kernel"];
/** Utility / non-game entries classified as tools. */
const TOOL_IDS = [
  "amethyst-android",
  "ares",
  "awesome-open-source-games",
  "hagi",
  "psy-q-decomp",
  "rerac-launcher",
  "classic-core-engines",
  "rotating-art-launcher",
  "knossosnet",
  "zalithlauncher2",
  "fold-craft-launcher",
  "mojo-launcher",
  "pojavlauncher",
  "sts2-mobile-launcher",
  "openbor-android",
  "prxshot-psp-screenshot-plugin",
  "psp-killswitch-plugin",
  "mschange-psp-plugin",
  "missyhud-psp-plugin",
  "gpsemu-psp-plugin",
  "pspsysmon-psp-plugin",
  "pspwave-xmb-wave-editor",
  "psp5-game-launcher-for-psp",
  "storestation-psp-apps-and-plugins-store",
  "ark-plugin-converter",
  "sandstone-engine-psp-game-engine",
  "pocket-game-maker-psp-engine",
  "fpkgi-package-manager",
  "vitagrafix-ps-vita-plugin",
  "vita-udcd-uvc-ps-vita-plugin",
  "psvita-storagemgr-plugin",
  "ds4vita-ps-vita-plugin",
  "rincheat-ps-vita-plugin",
  "vitabright-ps-vita-plugin",
  "gohanmem-ps-vita-cheat-plugin",
  "vita-nearest-neighbour-plugin",
  "8bitvita-ps-vita-plugin",
  "vita-recorder-ps-vita-plugin",
  "eqvita-ps-vita-audio-plugin",
  "ps4-link-controls-ps-vita-plugin",
  "gr544p-ps-vita-plugin",
  "ps-vita-usb-audio-midi-plugin",
  "controlmole-3ds-plugin",
  "miichanic-luma3ds-plugin",
  "minecraft-3ds-megapack-plugin-3ds",
  "ctrcomposer-3ds-plugin-framework",
  "luma3ds-plugin-loader-script-3ds",
  "luma3ds-plugin-loader-3ds",
  "papaya-hud-wii-u-aroma-plugin",
  "tcpgecko-aroma-wii-u-plugin",
  "justgetmiionline-wii-u-aroma-plugin",
  "riibootmii-wii-u-aroma-plugin",
  "vino-config-patcher-wii-u-aroma-plugin",
  "wiiredx-wii-u-aroma-plugin",
  "switchpresence-switch-sysmodule",
  "switchpresence-rewritten-switch-sysmodule",
  "pngshot-switch-sysmodule",
  "key2con-switch-sysmodule",
  "nx-screenuploader-switch-sysmodule",
  "tailscale-nx-switch-sysmodule",
  "sysdvr-uvc-capture-switch-sysmodule",
  "nx-gamehide-switch-sysmodule",
];
const NON_GAME_IDS = [...SYSTEM_IDS, ...TOOL_IDS].sort();

const byId = (id: string) => getPorts().find((port) => port.id === id);

describe("port kinds", () => {
  it("marks the Wii menu and the Xbox 360 kernel as system", () => {
    for (const id of SYSTEM_IDS) {
      const port = byId(id);
      expect(port, id).toBeDefined();
      expect(portKind(port!), id).toBe("system");
    }
  });

  it("marks the utilities as tool", () => {
    for (const id of TOOL_IDS) {
      const port = byId(id);
      expect(port, id).toBeDefined();
      expect(portKind(port!), id).toBe("tool");
    }
  });

  it("getToolPorts returns exactly the non-game entries", () => {
    expect(getToolPorts().map((port) => port.id).sort()).toEqual(NON_GAME_IDS);
  });

  it("defaults every other entry to game", () => {
    for (const port of getPorts()) {
      if (NON_GAME_IDS.includes(port.id)) continue;
      expect(portKind(port), port.id).toBe("game");
    }
  });

  it("counts only games in getPortCount", () => {
    expect(getPortCount()).toBe(getGamePorts().length);
    expect(getPortCount()).toBe(getPorts().length - getToolPorts().length);
  });

  it("keeps non-game entries reachable through the full catalog", () => {
    for (const port of getToolPorts()) {
      expect(getPorts().some((entry) => entry.id === port.id), port.id).toBe(true);
    }
  });
});
