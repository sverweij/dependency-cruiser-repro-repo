### Usage

[`src/index.js`](src/index.js) imports both `punycode` and `punycode/`

- first run `npm install` (or `yarn` - which'll do the same thing).

- run `node .` to see the difference between importing `'punycode'` vs
  `'punycode/'`. Confusingly both the core punycode and the npm punycode
  have _exactly_ the same version number - and it might well be that they're
  bit for bit the same - the current npm package is bundled with nodejs
  as that same core module (source: [punycode.js' README](https://github.com/mathiasbynens/punycode.js#punycodejs---)):

  ```
    "punycode" resolves to: punycode
    "punycode core" version: 2.1.0
    "punycode/" resolves to: /Users/xxxx/dependency-cruiser-repro-repo/678/node_modules/punycode/punycode.js
    "punycode npm" version: 2.1.0
  ```

- run `npm test` (or `yarn test`) to see the (debug) json output of dependency-cruiser
  for both - and indeed dependency-cruiser acts as expected, given the above.

    <details>
    <summary>click here to expand the JSON output</summary>

  ````json
  {
    "modules": [
      {
        "source": "src/index.js",
        "dependencies": [
          {
            "module": "punycode",
            "moduleSystem": "cjs",
            "dynamic": false,
            "exoticallyRequired": false,
            "resolved": "punycode",
            "coreModule": true,
            "followable": false,
            "couldNotResolve": false,
            "dependencyTypes": [
              "core"
            ],
            "matchesDoNotFollow": false,
            "circular": false,
            "valid": false,
            "rules": [
              {
                "severity": "error",
                "name": "no-deprecated-core"
              }
            ]
          },
          {
            "module": "punycode/",
            "moduleSystem": "cjs",
            "dynamic": false,
            "exoticallyRequired": false,
            "resolved": "node_modules/punycode/punycode.js",
            "coreModule": false,
            "followable": false,
            "couldNotResolve": false,
            "dependencyTypes": [
              "npm"
            ],
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
        "source": "punycode",
        "followable": false,
        "coreModule": true,
        "couldNotResolve": false,
        "matchesDoNotFollow": false,
        "dependencyTypes": [
          "core"
        ],
        "dependencies": [],
        "dependents": [
          "src/index.js"
        ],
        "orphan": false,
        "valid": true
      },
      {
        "source": "node_modules/punycode/punycode.js",
        "followable": false,
        "coreModule": false,
        "couldNotResolve": false,
        "matchesDoNotFollow": true,
        "dependencyTypes": [
          "npm"
        ],
        "dependencies": [],
        "dependents": [
          "src/index.js"
        ],
        "orphan": false,
        "valid": true
      }
    ],
    "summary": {
      "violations": [
        {
          "type": "dependency",
          "from": "src/index.js",
          "to": "punycode",
          "rule": {
            "severity": "error",
            "name": "no-deprecated-core"
          }
        }
      ],
      "error": 1,
      "warn": 0,
      "info": 0,
      "ignore": 0,
      "totalCruised": 3,
      "totalDependenciesCruised": 2,
      "optionsUsed": {
        "combinedDependencies": false,
        "doNotFollow": {
          "path": "node_modules"
        },
        "exoticRequireStrings": [],
        "externalModuleResolutionStrategy": "node_modules",
        "metrics": false,
        "moduleSystems": [
          "es6",
          "cjs",
          "tsd",
          "amd"
        ],
        "outputTo": "-",
        "outputType": "json",
        "preserveSymlinks": false,
        "rulesFile": ".dependency-cruiser.js",
        "tsPreCompilationDeps": false,
        "args": "src"
      },
      "ruleSetUsed": {
        "forbidden": [
          {
            "name": "no-deprecated-core",
            "comment": "A module depends on a node core module that has been deprecated. Find an alternative - these are bound to exist - node doesn't deprecate lightly.",
            "severity": "error",
            "from": {},
            "to": {
              "dependencyTypes": [
                "core"
              ],
              "path": "^(v8/tools/codemap)$|^(v8/tools/consarray)$|^(v8/tools/csvparser)$|^(v8/tools/logreader)$|^(v8/tools/profile_view)$|^(v8/tools/profile)$|^(v8/tools/SourceMap)$|^(v8/tools/splaytree)$|^(v8/tools/tickprocessor-driver)$|^(v8/tools/tickprocessor)$|^(node-inspect/lib/_inspect)$|^(node-inspect/lib/internal/inspect_client)$|^(node-inspect/lib/internal/inspect_repl)$|^(async_hooks)$|^(punycode)$|^(domain)$|^(constants)$|^(sys)$|^(_linklist)$|^(_stream_wrap)$"
            },
            "scope": "module"
          }
        ]
      }
    }
  }```

  </details>
  ````

### Also see

- [The punycode README](https://github.com/mathiasbynens/punycode.js) - which explains why importing as `punycode/` might be a good idea.
- [dependency-cruiser issue 678](https://github.com/sverweij/dependency-cruiser/issues/678) - the issue this chunk of reproduction code is about.
