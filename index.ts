import fs from "fs";
import swpCmdOptRule from "./swpCmdOptRule";
import capsLockRule from "./capsLockRule";
import type { Modification } from "./types";

const modification: Modification = {
  title: "Jinseok's Modification",
  rules: [swpCmdOptRule, capsLockRule],
};

const data = JSON.stringify(modification, null, 4);

fs.writeFileSync("js-modi.json", data, { encoding: "utf-8" });
