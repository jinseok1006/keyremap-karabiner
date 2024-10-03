import fs from "fs";
import swpCmdOpt from "./swpCmdOptRule";
import capsLockManipulators from "./capsLockRule";
import type { Modification } from "./types";

const modification: Modification = {
  title: "Jinseok's Modification",
  rules: [swpCmdOpt, capsLockManipulators],
};

const data = JSON.stringify(modification, null, 4);

fs.writeFileSync("js-modi.json", data, { encoding: "utf-8" });
