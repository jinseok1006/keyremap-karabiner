import type { FrontMostApp } from "./types";

export const frontmostAppUnless: FrontMostApp = {
  bundle_identifiers: [
    "^(com\\.microsoft\\.rdc\\.macos|com\\.moonlight-stream\\.Moonlight)$",
  ],
  type: "frontmost_application_unless",
};

export const frontmostAppIf: FrontMostApp = {
  bundle_identifiers: [
    "^(com\\.microsoft\\.rdc\\.macos|com\\.moonlight-stream\\.Moonlight)$",
  ],
  type: "frontmost_application_if",
};
