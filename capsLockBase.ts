import { Condition, Manipulator } from "./types";

export const capsLockPressed: Condition = {
  name: "caps_lock_pressed",
  value: 1,
  type: "variable_if",
};

export const capsLockState: Manipulator = {
  from: { key_code: "caps_lock", modifiers: { optional: ["any"] } },
  to: [{ set_variable: { name: "caps_lock_pressed", value: 1 } }],
  to_after_key_up: [{ set_variable: { name: "caps_lock_pressed", value: 0 } }],
  type: "basic",
};

export const arrowKeyMappings = [
  { from: "h", to: "left_arrow" },
  { from: "j", to: "down_arrow" },
  { from: "k", to: "up_arrow" },
  { from: "l", to: "right_arrow" },
];

export const capsLockArrowKeys: Manipulator[] = arrowKeyMappings.map((mapping) => ({
  conditions: [capsLockPressed],
  from: { key_code: mapping.from, modifiers: { optional: ["any"] } },
  to: [{ key_code: mapping.to }],
  type: "basic",
}));

export const capsLockShift: Manipulator = {
  conditions: [capsLockPressed],
  from: { key_code: "w", modifiers: { optional: ["any"] } },
  to: [{ key_code: "left_shift" }],
  type: "basic",
};
