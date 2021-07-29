module.exports = {
  options: {
    doNotFollow: {
      path: "node_modules",
      dependencyTypes: [
        "npm",
        "npm-dev",
        "npm-optional",
        "npm-peer",
        "npm-bundled",
        "npm-no-pkg",
      ],
    },
    tsPreCompilationDeps: false,
    tsConfig: { fileName: "./tsconfig.json" },
    reporterOptions: {
      dot: { collapsePattern: "node_modules/[^/]+" },
      archi: {
        collapsePattern:
          "^(node_modules|packages|src|lib|app|bin|test(s?)|spec(s?))/[^/]+",
      },
    },
  },
};
