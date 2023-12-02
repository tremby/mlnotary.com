Marine Landing Notary Public website
====================================

https://mlnotary.com/

Website originally by Jin Park.

Local dev
---------

### Dependencies

- Install [Hugo](https://gohugo.io/) version 0.120.4 (or newer 0.x is probably fine)
  and have it available somewhere on your PATH
- Have Node version 20.x available (perhaps use [nvm](https://github.com/nvm-sh/nvm)
- Install node dependencies with `npm i` or `npm ci`

### Build locally

`npm run build`

### Format code

`npm run format`,
but you probably want to pass Prettier a task
with `npm run format -- --write` or `npm run format -- --check`.

Deploy
------

Deployed automatically via Netlify.
