/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-cross-module-import",
      severity: "error",
      from: {
        path: ["^src/modules/([^/]+)/.+"],
        // except 'incoming' modules from this rule - we have a
        // separate one for that below
        pathNot: ["^src/modules/.+/incoming"],
      },
      to: {
        path: "^src/modules/",
        pathNot: ["^src/modules/$1/"],
      },
    },
    {
      name: "incoming-only-to-external-outgoing",
      severity: "info",
      from: {
        path: ["^src/modules/([^/]+)/incoming"],
      },
      to: {
        // 'incoming' folders can't depend on other modules either;
        path: ["^src/modules/"],
        // except for their own module, and 'outgoing' folders in
        // other modules.
        pathNot: ["^src/modules/$1/", "^src/modules/.+/outgoing"],
      },
    },
  ],
  options: {
    doNotFollow: {
      path: "node_modules",
    },

    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"],
    },
    reporterOptions: {
      dot: {
        collapsePattern: "node_modules/[^/]+",

        theme: {
          graph: {
            /* use splines: "ortho" for straight lines. Be aware though
              graphviz might take a long time calculating ortho(gonal)
              routings.
           */
            splines: "ortho",
          },
          modules: [
            {
              criteria: { source: "incoming" },
              attributes: { fillcolor: "#ccccff" },
            },
            {
              criteria: { source: "outgoing" },
              attributes: { fillcolor: "#ccffcc" },
            },
          ],
          dependencies: [
            {
              criteria: { valid: true },
              attributes: { color: "green" },
            },
            {
              criteria: { "rules[0].severity": "error" },
              attributes: { fontcolor: "red", color: "red" },
            },
            {
              criteria: { "rules[0].severity": "warn" },
              attributes: { fontcolor: "orange", color: "orange" },
            },
            {
              criteria: { "rules[0].severity": "info" },
              attributes: { fontcolor: "blue", color: "blue" },
            },
            {
              criteria: { resolved: "incoming" },
              attributes: { color: "#0000ff77" },
            },
            {
              criteria: { resolved: "outgoing" },
              attributes: { color: "#00770077" },
            },
          ],
        },
      },
    },
  },
};
// generated: dependency-cruiser@11.12.0 on 2022-07-23T07:14:15.658Z
