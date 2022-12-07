/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "warn",
      from: {},
      to: {
        circular: true,
        dependencyTypesNot: ["type-only"],
      },
    },
  ],
  options: {
    doNotFollow: {
      path: "node_modules",
    },

    includeOnly: ["^src/"],

    tsPreCompilationDeps: true,

    tsConfig: {
      fileName: "tsconfig.json",
    },

    prefix:
      "https://github.com/sverweij/dependency-cruiser-repro-repo/blob/main/695/",

    reporterOptions: {
      dot: {
        theme: {
          graph: {
            rankdir: "LR",
            ranksep: 0.9,
            nodesep: 0.5,
          },
        },
      },
    },
  },
};
// generated: dependency-cruiser@12.1.0 on 2022-12-05T20:16:10.284Z
