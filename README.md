Marine Landing Notary Public website
====================================

https://mlnotary.com/

Website originally by Jin Park.

Configure
---------

Set environment variables:

- `GOOGLE_MAPS_API_KEY`
- `REBUILD_HOOK`: full URL to Netlify rebuild hook

Local dev
---------

### Dependencies

- Install [Hugo](https://gohugo.io/) version 0.120.4 (or newer 0.x is probably fine)
  and have it available somewhere on your PATH
- Have Node version 20.x available (perhaps use [nvm](https://github.com/nvm-sh/nvm)
- Install node dependencies with `npm i` or `npm ci`

### Build locally

First get the data with `npm run get-hours`.

Then for watch mode for development, `npm run dev`, or to produce a
single static build, `npm run build`.

### Update map images

Very infrequently the map images should be updated with `npm run get-maps`.
This requires a Mapbox key; see [the readme where the maps are stored](/assets/images/map).

Deploy
------

Deployed automatically via Netlify.

Netlify is configured to run `npm run get-hours` and then `npm-build`.

Automatically updating hours
----------------------------

There is a task scheduled (daily, at time of writing) to run the
function `netlify/functions/check-hours.mts`.
This function fetches hours data from the Google API and compares
against what was written to file during `npm run get-hours` at build
time.
If the data hasn't changed, nothing happens.
But if it has changed, a redeployment webhook is called (`REBULID_HOOK` env var).
