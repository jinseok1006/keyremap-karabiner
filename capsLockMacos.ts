import type { Manipulator } from "./types";
import { capsLockPressed } from "./capsLockBase";
import { frontmostAppUnless } from "./appCondition";

const homeEndKeyMappings = [
  { from: "i", to: ["left_arrow", "left_command"] },
  { from: "o", to: ["right_arrow", "left_command"] },
];

export const HomeEndReplacementKeys: Manipulator[] = homeEndKeyMappings.map(
  (mapping) => ({
    conditions: [capsLockPressed, frontmostAppUnless],
    from: { key_code: mapping.from, modifiers: { optional: ["any"] } },
    to: [
      {
        key_code: mapping.to[0],
        modifiers: mapping.to[1],
      },
    ],
    type: "basic",
  })
);

export const capsLockLeftOpt: Manipulator = {
  conditions: [capsLockPressed],
  from: { key_code: "q", modifiers: { optional: ["any"] } },
  to: [{ key_code: "left_option" }],
  type: "basic",
};

const shortcutKeyMappings = [
  "2", // prev desktop
  "3", // next desktop
  "a", // left side window
  "s", // right side window
  "f", // minimize window
  "e", // maximize window
  "spacebar", // mission control
];

export const shortcutReplacementKeys: Manipulator[] = shortcutKeyMappings.map(
  (from) => ({
    conditions: [capsLockPressed],
    from: { key_code: from },
    to: [
      {
        key_code: from,
        modifiers: [
          "left_option",
          "left_shift",
          "left_control",
          "left_command",
        ],
      },
    ],
    type: "basic",
  })
);
