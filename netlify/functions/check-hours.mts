import type { Config } from "@netlify/functions";

import hours from "../../generated/hours.json";
import { getHours } from "../../lib/hours.mjs";

if (!process.env.REBUILD_HOOK)
  throw new Error("Expected REBUILD_HOOK to be set");

export default async function checkHours() {
  const oldJson = JSON.stringify(hours);
  console.log("Hours read from file:", oldJson);

  try {
    const data = await getHours();
    const newJson = JSON.stringify(data);
    console.log("Hours taken from API:", newJson);
    if (newJson === oldJson) {
      console.log("Hours haven't changed; do nothing.");
      return;
    }
    console.log("Hours have changed; trigger redeployment.");
    try {
      const response = await fetch(process.env.REBUILD_HOOK, { method: "POST" });
      if (!response.ok) {
        console.error("Netlify hook call returned error:", response.status, response.statusText, await response.text());
        return;
      }
      console.log("Netlify responded with", await response.text());
    } catch (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error", error);
  }
};

export const config: Config = {
  schedule: "@daily",
};
