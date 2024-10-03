import { Condition } from "./types";

interface OneToOneMapping {
    from: string;
    to: string;
}

export function generateOneToOneManipulators(mappings: OneToOneMapping[], conditions: Condition[]) {
  return mappings.map((mapping) => ({
    conditions,
    from: { key_code: mapping.from, modifiers: { optional: ["any"] } },
    to: [{ key_code: mapping.to }],
    type: "basic",
  }));
}
