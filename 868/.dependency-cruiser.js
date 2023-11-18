/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    doNotFollow: {
      path: "node_modules",
    },

    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"],
      mainFields: ["main", "types", "typings"],
    },
    reporterOptions: {
      dot: {
        collapsePattern: "node_modules/(@[^/]+/[^/]+|[^/]+)",
        theme: {
          graph: {
            splines: "ortho",
          },
        },
      },
      text: {
        highlightFocused: true,
      },
    },
  },
};
// generated: dependency-cruiser@15.3.0 on 2023-11-18T10:42:58.475Z
