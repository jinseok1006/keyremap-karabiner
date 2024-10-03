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
  conditions: [capsLockPressed],
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

// export const shortcutReplacementKeys: Manipulator[] = shortcutKeyMappings.map(
//   (from) => ({
//     conditions: [capsLockPressed],
//     from: { key_code: from },
//     to: [
//       {
//         key_code: from,
//         modifiers: [
//           "left_option",
//           "left_shift",
//           "left_control",
//           "left_command",
//         ],
//       },
//     ],
//     type: "basic",
//   })
// );
