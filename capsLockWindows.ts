import type { Manipulator } from "./types";
import { capsLockPressed } from "./capsLockBase";
import { frontmostAppIf } from "./appCondition";

const homeEndKeyMappingsForWindows = [
  { from: "i", to: "home" },
  { from: "o", to: "end" },
];

export const HomeEndReplacementKeysWindows: Manipulator[] =
  homeEndKeyMappingsForWindows.map((mapping) => ({
    conditions: [capsLockPressed, frontmostAppIf],
    from: { key_code: mapping.from, modifiers: { optional: ["any"] } },
    to: [{ key_code: mapping.to }],
    type: "basic",
  }));

export const capsLockLeftControlWindows: Manipulator = {
  conditions: [capsLockPressed, frontmostAppIf],
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
  { from: "3", to: ["right_arrow", "left_contorl", "left_command"] },
];

export const switchDesktopReplacementKeysWindows: Manipulator[] =
  switchDesktopMappings.map((mapping) => ({
    conditions: [capsLockPressed, frontmostAppIf],
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
  conditions: [capsLockPressed, frontmostAppIf],
  from: { key_code: "spacebar" },
  to: [{ key_code: "tap", modifier: "left_control" }],
  type: "basic",
};

