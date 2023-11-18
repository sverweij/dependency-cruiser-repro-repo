## minimal repro repo for [#868](https://github.com/sverweij/dependency-cruiser/issues/868)

To replay `npm install` and replay the npx commands below.

The issue mentioned doesn't seem to be reproducable with the current version
of dependency-cruiser on its default settings. `yargs` seems to be resolved to where
it's supposed to.

```sh
$ npx depcruise src -T text
src/index.js → node_modules/yargs/helpers/helpers.mjs
src/index.js → node_modules/yargs/yargs.mjs
```

```sh
$ npx depcruise src -T json
```

```json
{
  "modules": [
    {
      "source": "src/index.js",
      "dependencies": [
        {
          "module": "yargs/helpers",
          "moduleSystem": "cjs",
          "dynamic": false,
          "exoticallyRequired": false,
          "resolved": "node_modules/yargs/helpers/helpers.mjs",
          "coreModule": false,
          "followable": false,
          "couldNotResolve": false,
          "dependencyTypes": ["npm"],
          "matchesDoNotFollow": true,
          "circular": false,
          "valid": true
        },
        {
          "module": "yargs/yargs",
          "moduleSystem": "cjs",
          "dynamic": false,
          "exoticallyRequired": false,
          "resolved": "node_modules/yargs/yargs.mjs",
          "coreModule": false,
          "followable": false,
          "couldNotResolve": false,
          "dependencyTypes": ["npm"],
          "matchesDoNotFollow": true,
          "circular": false,
          "valid": true
        }
      ],
      "dependents": [],
      "orphan": false,
      "valid": true
    },
    {
      "source": "node_modules/yargs/helpers/helpers.mjs",
      "followable": false,
      "coreModule": false,
      "couldNotResolve": false,
      "matchesDoNotFollow": true,
      "dependencyTypes": ["npm"],
      "dependencies": [],
      "dependents": ["src/index.js"],
      "orphan": false,
      "valid": true
    },
    {
      "source": "node_modules/yargs/yargs.mjs",
      "followable": false,
      "coreModule": false,
      "couldNotResolve": false,
      "matchesDoNotFollow": true,
      "dependencyTypes": ["npm"],
      "dependencies": [],
      "dependents": ["src/index.js"],
      "orphan": false,
      "valid": true
    }
  ],
  "summary": {
    "violations": [],
    "error": 0,
    "warn": 0,
    "info": 0,
    "ignore": 0,
    "totalCruised": 3,
    "totalDependenciesCruised": 2,
    "optionsUsed": {
      "baseDir": "/Users/sander/prg/js/dependency-cruiser-repro-repo/868",
      "combinedDependencies": false,
      "doNotFollow": {
        "path": "node_modules"
      },
      "enhancedResolveOptions": {
        "exportsFields": ["exports"],
        "conditionNames": ["import", "require", "node", "default"],
        "mainFields": ["main", "types", "typings"]
      },
      "exoticRequireStrings": [],
      "externalModuleResolutionStrategy": "node_modules",
      "metrics": false,
      "moduleSystems": ["es6", "cjs", "tsd", "amd"],
      "outputTo": "-",
      "outputType": "json",
      "preserveSymlinks": false,
      "reporterOptions": {
        "dot": {
          "collapsePattern": "node_modules/(@[^/]+/[^/]+|[^/]+)",
          "theme": {
            "graph": {
              "splines": "ortho"
            }
          }
        },
        "text": {
          "highlightFocused": true
        }
      },
      "rulesFile": ".dependency-cruiser.js",
      "tsPreCompilationDeps": false,
      "args": "src"
    },
    "ruleSetUsed": {
      "forbidden": []
    }
  }
}
```
