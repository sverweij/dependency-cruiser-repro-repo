Repro repo for dependency-cruiser issue [575](https://github.com/sverweij/dependency-cruiser/issues/575)

To reproduce

- `npm i` in the current folder.
- npm run deps:check --workspace apps/users

This borks with:

```
  ERROR: Extracting dependencies ran afoul of...

  Unexpected Error: Unusal baseDir passed to package reading function: '/Users/sander/prg/js/dependency-cruiser-repro-repo/575/apps/users'
Please file a bug: https://github.com/sverweij/dependency-cruiser/issues/new?template=bug-report.md&title=Unexpected Error: Unusal baseDir passed to package reading function: '/Users/john.doe/prg/js/dependency-cruiser-repro-repo/575/apps/users'
... in ../../node_modules/mscgenjs/dist/cjs/index.js
```

To understand

- is this a bug?
  - if it is: how to fix it in reasonable time.
  - if it is not: how can we provide more clear feedback.
