/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    doNotFollow: {
      path: "node_modules",
    },
    prefix:
      "https://github.com/sverweij/dependency-cruiser-repro-repo/tree/main/462/",

    reporterOptions: {
      dot: {
        /* Options to tweak the appearance of your graph.See
           https://github.com/sverweij/dependency-cruiser/blob/master/doc/options-reference.md#reporteroptions
           for details and some examples. If you don't specify a theme
           don't worry - dependency-cruiser will fall back to the default one.
        */
        theme: {
          graph: {
            /* use splines: "ortho" for straight lines. Be aware though
              graphviz might take a long time calculating ortho(gonal)
              routings if the graph contains a few hundred nodes.
           */
            splines: "ortho",
          },
        },
      },
      archi: {
        collapsePattern: "src/[^/]+",
        // the rest of the properties the 'archi' reporter will inherit from
        // those of the 'dot' reporter
      },
    },
  },
};
// generated: dependency-cruiser@10.0.0 on 2021-05-11T16:32:58.978Z
