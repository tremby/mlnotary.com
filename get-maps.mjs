import { createWriteStream } from "node:fs";
import { finished } from "node:stream/promises";
import { Readable } from "node:stream";
import path from "node:path";

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const CENTER_LATITUDE = 49.2108;
const CENTER_LONGITUDE = -123.1092;
const HEIGHT = 500;

if (!MAPBOX_ACCESS_TOKEN) throw new Error("Expected MAPBOX_ACCESS_TOKEN to be set");

const TILE_WIDTH = 512;
const SIDE_TILES = 3;

async function getMap(width, zoom, x2, offset = 0, name = null, attribution = true) {
  const longitudeOffset = offset * 360 / (512 * 2 ** zoom);
  const longitude = CENTER_LONGITUDE + longitudeOffset;

  console.log(`Getting map ${name ?? "center"}: ${width}×${HEIGHT}${x2 ? "@2x" : ""}`);

  const url = new URL(`https://api.mapbox.com/styles/v1/tremby/clqg0fabv007s01r853dpd942/static/${longitude},${CENTER_LATITUDE},${zoom},0/${width}x${HEIGHT}${x2 ? "@2x" : ""}`);

  url.searchParams.set("access_token", MAPBOX_ACCESS_TOKEN);
  url.searchParams.set("logo", "false");
  url.searchParams.set("fresh", "true");
  url.searchParams.set("attribution", "false");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to get map ${name ?? "center"}: ${response.status} ${await response.text()}`);
  }

  const suffix = name ? `-ext-${name}` : "";
  const destination = path.resolve("./assets/images/map", `map-${name ? 1280 : width}w${suffix}${x2 ? "-2x" : ""}.png`);

  const fileStream = createWriteStream(destination);
  await finished(Readable.fromWeb(response.body).pipe(fileStream));
}

async function getMaps(width, zoom) {
  const requests = [
    getMap(width, zoom, false),
    getMap(width, zoom, true),
  ];

  if (width >= 1280) {
    for (let i = 1; i <= SIDE_TILES; i++) {
      const offset = 640 + (i - 1) * TILE_WIDTH + TILE_WIDTH / 2;
      for (const [side, direction] of [["left", -1], ["right", 1]]) {
        requests.push(
          getMap(TILE_WIDTH, zoom, false, direction * offset, `${side === "left" ? "l" : "r"}-${i}`, false),
          getMap(TILE_WIDTH, zoom, true, direction * offset, `${side === "left" ? "l" : "r"}-${i}`, false)
        );
      }
    }
  }

  await Promise.all(requests);
}

await getMaps(360, 13);
await getMaps(390, 13);
await getMaps(480, 14);
await getMaps(768, 14);
await getMaps(1024, 15);
await getMaps(1280, 15);
