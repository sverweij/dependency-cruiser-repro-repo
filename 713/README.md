## reproduction example for [#713](https://github.com/sverweij/dependency-cruiser/issues/713)

install:

- clone dependency-cruiser-repro-repo
- `cd dependency-cruiser-repro-repo/713`
- `npm install`
- `npm run build`

verify it works:

- `npm run depcruise`

The offending code with the scss style lives in [src/App.svelte](src/App.svelte). As this repro code is set up with vite: `npm run dev` kicks off a dev server, so you can verify the code works as desired as well.
