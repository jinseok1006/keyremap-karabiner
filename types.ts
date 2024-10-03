export interface Rule {
  description: string;
  manipulators: Manipulator[];
}

export interface Manipulator {
  type: "basic";
  from: Record<string, any>;
  to: Record<string, any>[];
  to_after_key_up?: Record<string, any>[];
  conditions?: Condition[];
}

export interface Modification {
  title: string;
  rules: Rule[];
}

export interface VariableIf {
  name: string;
  value: 0 | 1;
  type: "variable_if";
}

export interface FrontMostApp {
  bundle_identifiers: string[];
  type: "frontmost_application_unless" | "frontmost_application_if";
}

export type Condition = VariableIf | FrontMostApp;
