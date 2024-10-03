import { frontmostAppUnlessRemote } from "./frontmostAppCondition";
import type { Manipulator, Rule } from "./types";

const leftCmd2LeftOpt: Manipulator = {
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
  conditions: [frontmostAppUnlessRemote],
};

const leftOpt2LeftCmd: Manipulator = {
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
  conditions: [frontmostAppUnlessRemote],
};



const rule: Rule = {
  description: "Swap Left Cmd and Left Alt keys",
  manipulators: [leftOpt2LeftCmd, leftCmd2LeftOpt],
};

export default rule;
