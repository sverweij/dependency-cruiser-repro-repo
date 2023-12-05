/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "to-libs-tsconfig-only",
      severity: "error",
      comment: "on oblige l'utilisation de `@module/` au lieu de `libs/`",
      from: {
        pathNot: "^libs/",
      },
      to: {
        path: "^libs/",
        dependencyTypesNot: ["aliased-tsconfig"],
      },
    },
    {
      name: "inter-libs-tsconfig-only",
      severity: "warn",
      from: {
        path: "(^libs/[^/]+/)", // if this matches e.g. lib/livres/src/quelquechose.ts ...
      },
      to: {
        path: "^libs/",
        pathNot: "$1", // ...then this matches lib/livres, ensuring the rule doesn't apply to lib/livres itself.
        dependencyTypesNot: ["aliased-tsconfig"],
      },
    },
  ],
  options: {
    doNotFollow: {
      path: "node_modules",
    },
    moduleSystems: ["es6", "cjs"],
    tsPreCompilationDeps: true,
    combinedDependencies: true,
    // preserveSymlinks: true,
    tsConfig: {
      fileName: "tsconfig.json",
    },
    // enhancedResolveOptions: {
    //   exportsFields: ["exports"],
    //   conditionNames: ["import", "require", "node", "default"],
    //   // extensions: [".js", ".mjs", ".cjs"],
    //   mainFields: ["main", "types", "typings"],
    // },
    cache: false,
    reporterOptions: {
      dot: {
        theme: {
          graph: {
            rankdir: "TD",
            splines: "true",
          },
          dependencies: [
            {
              criteria: { "rules[0].severity": "error" },
              attributes: { fontcolor: "red" },
            },
            {
              criteria: { "rules[0].severity": "warn" },
              attributes: { fontcolor: "orange", color: "orange" },
            },
            {
              criteria: { "rules[0].severity": "info" },
              attributes: { fontcolor: "blue" },
            },
            {
              criteria: { dependencyTypes: ["aliased-tsconfig-paths"] },
              attributes: { color: "darkblue" },
            },
            {
              criteria: { dependencyTypes: ["aliased-tsconfig-base-url"] },
              attributes: { color: "teal" },
            },
            {
              criteria: { dependencyTypes: ["aliased-workspace"] },
              attributes: { color: "purple" },
            },
            {
              criteria: { dependencyTypes: ["aliased-subpath-import"] },
              attributes: { color: "darkgreen" },
            },
            {
              criteria: {},
              attributes: { color: "#00000033" },
            },
          ],
        },
      },
    },
  },
};
