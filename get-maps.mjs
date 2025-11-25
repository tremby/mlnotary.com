import { createWriteStream } from "node:fs";
import { finished } from "node:stream/promises";
import { Readable } from "node:stream";
import path from "node:path";

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const CENTER_LATITUDE = 49.2101;
const CENTER_LONGITUDE = -123.1178;
const HEIGHT = 500;

if (!MAPBOX_ACCESS_TOKEN) throw new Error("Expected MAPBOX_ACCESS_TOKEN to be set");

async function getMap(width, zoom, x2) {
  console.log(`Getting map at ${width}×${HEIGHT}${x2 ? "@2x" : ""}`);
  const url = new URL(`https://api.mapbox.com/styles/v1/tremby/clqg0fabv007s01r853dpd942/static/${CENTER_LONGITUDE},${CENTER_LATITUDE},${zoom},0/${width}x${HEIGHT}${x2 ? "@2x" : ""}`);
  url.searchParams.set("access_token", MAPBOX_ACCESS_TOKEN);
  url.searchParams.set("logo", "false");
  url.searchParams.set("fresh", "true");
  const response = await fetch(url);
  if (!response.ok)
    throw new Error("Failed to get map", { width, x2, zoom, accessTokenLength: MAPBOX_ACCESS_TOKEN.length });

  const destination = path.resolve("./assets/images/map", `map-${width}w${x2 ? "-2x" : ""}.png`);
  const fileStream = createWriteStream(destination);
  await finished(Readable.fromWeb(response.body).pipe(fileStream));
}

async function getMaps(width, zoom) {
  await Promise.all([
    getMap(width, zoom, false),
    getMap(width, zoom, true),
  ]);
}

await getMaps(360, 14);
await getMaps(390, 14);
await getMaps(480, 15);
await getMaps(768, 15);
await getMaps(1024, 16);
await getMaps(1280, 16);
