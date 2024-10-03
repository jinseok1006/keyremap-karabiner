import { frontmostAppUnless } from "./appCondition";
import type { Manipulator, Rule } from "./types";

const leftCmd2LeftAlt: Manipulator = {
  type: "basic",
  from: {
    key_code: "left_command",
  },
  to: [
    {
      repeat: true,
      key_code: "left_option",
    },
  ],
  conditions: [frontmostAppUnless],
};

const leftAlt2LeftCmd: Manipulator = {
  type: "basic",
  from: {
    key_code: "left_option",
  },
  to: [
    {
      repeat: true,
      key_code: "left_command",
    },
  ],
  conditions: [frontmostAppUnless],
};



const rule: Rule = {
  description: "Swap Left Cmd and Left Alt keys",
  manipulators: [leftAlt2LeftCmd, leftCmd2LeftAlt],
};

export default rule;
