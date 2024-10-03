import {
  capsLockState,
  capsLockArrowKeys,
  capsLockShift,
} from "./capsLockBase";
import {
  HomeEndReplacementKeysWindows,
  capsLockLeftControlWindows,
  fullscreenWindows,
  switchDesktopReplacementKeysWindows,
  taskViewWindows,
} from "./capsLockWindows";
import {
  HomeEndReplacementKeys,
  capsLockLeftOpt,
  shortcutReplacementKeys,
} from "./capsLockMacos";
import { Rule } from "./types";

const rule: Rule = {
  description: "convert capslock to hyper key with windows remote",
  manipulators: [
    capsLockState,
    ...capsLockArrowKeys,
    capsLockShift,
    ...HomeEndReplacementKeys,
    capsLockLeftOpt,
    ...HomeEndReplacementKeysWindows,
    capsLockLeftControlWindows,
    ...shortcutReplacementKeys,
    ...switchDesktopReplacementKeysWindows,
    taskViewWindows,
    fullscreenWindows
  ],
};

export default rule;
