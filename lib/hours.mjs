export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
export const PLACE_ID = "ChIJsQix7el2hlQRT_e6qJ1x46I";

export async function getHours() {
  if (GOOGLE_MAPS_API_KEY == null)
    throw new Error("No GOOGLE_MAPS_API_KEY is set");

  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_MAPS_API_KEY}&placeid=${PLACE_ID}&fields=opening_hours,current_opening_hours`);

  if (!response.ok)
    throw new Error(`Google Maps API call failed: ${response.status} ${response.statusText}: ${await response.text()}`);

  const data = await response.json();

  if (data.status !== "OK")
    throw new Error(`Google Maps API call returned an error response: ${data.status}, ${data.error_message}`);

  return data.result.current_opening_hours.weekday_text.map((current, i) => {
    const out = { current };
    const usual = data.result.opening_hours.weekday_text[i];
    if (usual) out.usual = usual;
    return out;
  });
}
