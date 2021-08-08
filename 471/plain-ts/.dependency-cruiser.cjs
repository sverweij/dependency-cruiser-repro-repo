/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    doNotFollow: {
      path: "^(.yarn|.pnp.js|node_modules)",
    },

    // tsPreCompilationDeps: true,

    // combinedDependencies: true,

    // preserveSymlinks: true,

    tsConfig: {
      fileName: "tsconfig.json",
    },
  },
};
