import { getMeta } from "./get-meta.mjs";

const hugoMeta = getMeta();

export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
export const PLACE_ID = hugoMeta.google.place_id;

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

export async function getHours() {
  if (GOOGLE_MAPS_API_KEY == null)
    throw new Error("No GOOGLE_MAPS_API_KEY is set");

  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_MAPS_API_KEY}&placeid=${PLACE_ID}&fields=opening_hours,current_opening_hours`);

  if (!response.ok)
    throw new Error(`Google Maps API call failed: ${response.status} ${response.statusText}: ${await response.text()}`);

  const data = await response.json();

  if (data.status !== "OK")
    throw new Error(`Google Maps API call returned an error response: ${data.status}, ${data.error_message}`);

  const { opening_hours, current_opening_hours } = data.result;

  const display = current_opening_hours.weekday_text.map((current, i) => {
    const out = { current };
    const usual = opening_hours.weekday_text[i];
    if (usual) out.usual = usual;
    return out;
  });

  const openingHoursSpecification = opening_hours.periods.map(period => ({
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": `https://schema.org/${days[period.open.day]}`,
    "opens": `${period.open.time.slice(0, 2)}:${period.open.time.slice(2)}`,
    ...(period.close && {
      "closes": `${period.close.time.slice(0, 2)}:${period.close.time.slice(2)}`
    })
  }));

  return { display, openingHoursSpecification };
}
