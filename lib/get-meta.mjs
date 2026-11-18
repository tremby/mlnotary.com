import { readFileSync } from "node:fs";
import path from "node:path";

import { parse as parseYaml } from "yaml";

export function getMeta() {
  const metaPath = path.join(import.meta.dirname, "../data/meta.yaml");
  return parseYaml(readFileSync(metaPath, "utf-8"));
}
