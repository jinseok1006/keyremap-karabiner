import type { FrontMostApp as FrontmostApp } from "./types";

export const frontmostAppUnlessRemote: FrontmostApp = {
  bundle_identifiers: [
    "^(com\\.microsoft\\.rdc\\.macos|com\\.moonlight-stream\\.Moonlight)$",
  ],
  type: "frontmost_application_unless",
};

export const frontmostAppIfRemote: FrontmostApp = {
  bundle_identifiers: [
    "^(com\\.microsoft\\.rdc\\.macos|com\\.moonlight-stream\\.Moonlight)$",
  ],
  type: "frontmost_application_if",
};
