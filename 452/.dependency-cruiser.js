/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-ui-assets-in-view-models (via)",
      severity: "ignore",
      from: {
        path: ["ViewModel\\.ts$"],
      },
      to: {
        path: ["(\\.s?css)", "(\\.tsx)"],
        pathNot: ["ViewModel\\.ts$"],
        reachable: true,
      },
    },
    {
      name: "no-ui-assets-in-view-models (direct)",
      severity: "error",
      from: {
        path: ["ViewModel\\.ts$"],
      },
      to: {
        path: ["(\\.s?css)", "(\\.tsx)"],
        pathNot: ["ViewModel\\.ts$"],
      },
    },
  ],
  options: {
    parser: "swc",

    /* conditions specifying which files not to follow further when encountered:
       - path: a regular expression to match
       - dependencyTypes: see https://github.com/sverweij/dependency-cruiser/blob/master/doc/rules-reference.md#dependencytypes
       for a complete list
    */
    doNotFollow: {
      path: "node_modules",
    },

    reporterOptions: {
      dot: {
        /* pattern of modules that can be consolidated in the detailed
           graphical dependency graph. The default pattern in this configuration
           collapses everything in node_modules to one folder deep so you see
           the external modules, but not the innards your app depends upon.
         */
        collapsePattern: "node_modules/[^/]+",

        /* Options to tweak the appearance of your graph.See
           https://github.com/sverweij/dependency-cruiser/blob/master/doc/options-reference.md#reporteroptions
           for details and some examples. If you don't specify a theme
           don't worry - dependency-cruiser will fall back to the default one.
        */
        theme: {
          graph: {
            /* use splines: "ortho" for straight lines. Be aware though
              graphviz might take a long time calculating ortho(gonal)
              routings.
           */
            splines: "ortho",
            rankdir: "TD",
          },
          //   modules: [
          //     {
          //       criteria: { source: "^src/model" },
          //       attributes: { fillcolor: "#ccccff" }
          //     },
          //     {
          //       criteria: { source: "^src/view" },
          //       attributes: { fillcolor: "#ccffcc" }
          //     }
          //   ],
          //   dependencies: [
          //     {
          //       criteria: { "rules[0].severity": "error" },
          //       attributes: { fontcolor: "red", color: "red" }
          //     },
          //     {
          //       criteria: { "rules[0].severity": "warn" },
          //       attributes: { fontcolor: "orange", color: "orange" }
          //     },
          //     {
          //       criteria: { "rules[0].severity": "info" },
          //       attributes: { fontcolor: "blue", color: "blue" }
          //     },
          //     {
          //       criteria: { resolved: "^src/model" },
          //       attributes: { color: "#0000ff77" }
          //     },
          //     {
          //       criteria: { resolved: "^src/view" },
          //       attributes: { color: "#00770077" }
          //     }
          //   ]
        },
      },
      archi: {
        /* pattern of modules that can be consolidated in the high level
          graphical dependency graph. If you use the high level graphical
          dependency graph reporter (`archi`) you probably want to tweak
          this collapsePattern to your situation.
        */
        collapsePattern:
          "^(node_modules|packages|src|lib|app|bin|test(s?)|spec(s?))/[^/]+",

        /* Options to tweak the appearance of your graph.See
           https://github.com/sverweij/dependency-cruiser/blob/master/doc/options-reference.md#reporteroptions
           for details and some examples. If you don't specify a theme
           for 'archi' dependency-cruiser will use the one specified in the
           dot section (see above), if any, and otherwise use the default one.
         */
        // theme: {
        // },
      },
    },
  },
};
// generated: dependency-cruiser@9.25.0 on 2021-04-10T14:52:45.848Z
