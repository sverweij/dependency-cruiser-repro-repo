/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "warn",
      from: {},
      to: {
        circular: true,
      },
    },
  ],
  options: {
    doNotFollow: {
      path: "node_modules",
    },
    reporterOptions: {
      dot: {
        theme: {
          graph: {
            splines: "ortho",
            nodesep: 1,
            ranksep: 1,
          },
        },
      },
    },
  },
};
// generated: dependency-cruiser@10.3.0 on 2021-09-23T21:54:04.931Z
