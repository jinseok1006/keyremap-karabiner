import type { Manipulator } from "./types";
import { capsLockPressed } from "./capsLockBase";
import { frontmostAppIfRemote } from "./frontmostAppCondition";

const homeEndKeyMappingsForWindows = [
  { from: "i", to: "home" },
  { from: "o", to: "end" },
];

export const HomeEndReplacementKeysWindows: Manipulator[] =
  homeEndKeyMappingsForWindows.map((mapping) => ({
    conditions: [capsLockPressed, frontmostAppIfRemote],
    from: { key_code: mapping.from, modifiers: { optional: ["any"] } },
    to: [{ key_code: mapping.to }],
    type: "basic",
  }));

export const capsLockLeftControlWindows: Manipulator = {
  conditions: [capsLockPressed, frontmostAppIfRemote],
  from: { key_code: "q", modifiers: { optional: ["any"] } },
  to: [{ key_code: "left_control" }],
  type: "basic",
};

// const shortcutKeyMappings = [
//   "2", // prev desktop
//   "3", // next desktop
//   "a", // left side window
//   "s", // right side window
//   "f", // minimize window
//   "e", // maximize window
//   "spacebar", // mission control
// ];

const switchDesktopMappings = [
  { from: "2", to: ["left_arrow", "left_control", "left_command"] },
  { from: "3", to: ["right_arrow", "left_control", "left_command"] },
];

export const switchDesktopReplacementKeysWindows: Manipulator[] =
  switchDesktopMappings.map((mapping) => ({
    conditions: [capsLockPressed, frontmostAppIfRemote],
    from: { key_code: mapping.from },
    to: [
      {
        key_code: mapping.to[0],
        modifiers: [mapping.to[1], mapping.to[2]],
      },
    ],
    type: "basic",
  }));

export const taskViewWindows: Manipulator = {
  conditions: [capsLockPressed, frontmostAppIfRemote],
  from: { key_code: "spacebar" },
  to: [{ key_code: "tab", modifier: "left_control" }],
  type: "basic",
};


export const fullscreenWindows: Manipulator = {
  conditions: [capsLockPressed, frontmostAppIfRemote],
  from: { key_code: "e" },
  to: [{ key_code: "up_arrow", modifier: "left_control" }],
  type: "basic",
};
