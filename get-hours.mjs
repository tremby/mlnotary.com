import { mkdir, writeFile } from "node:fs/promises";
import { getHours } from "./lib/hours.mjs";

const data = await getHours();

await mkdir("./generated", { recursive: true });
await writeFile("./generated/hours.json", JSON.stringify(data));
