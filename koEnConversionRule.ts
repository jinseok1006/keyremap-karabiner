import { frontmostAppUnlessRemote } from "./frontmostAppCondition";
import type { Manipulator, Rule } from "./types";

const koEnConversion: Manipulator = {
  type: "basic",
  from: {
    key_code: "right_option",
  },
  to: [
    {
      key_code: "f13",
    },
  ],
  conditions: [frontmostAppUnlessRemote],
};

const rule: Rule = {
  description: "ko en conversion",
  manipulators: [koEnConversion],
};

export default rule;
