## install

```
npm install
```

This will install dependency-cruiser and typescript, but also copy the
`@types/only-types` module with only types in the copy-this-to-node-modules folder
to `node_modules` so it is assured to (1) exist (2) not to be declared in package.json.

## run

```
npm run depcruise
```

result:

```
  error no-non-package-json: src/import-a-type.mts → node_modules/@types/only-types/index.d.ts

✘ 1 dependency violations (1 errors, 0 warnings). 2 modules, 1 dependencies cruised.
```
