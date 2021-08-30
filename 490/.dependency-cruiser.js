/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "dont-depend-on-code",
      severity: "error",
      from: {
        path: "ahoi",
      },
      to: {
        path: "-things\\.ts$",
        preCompilationOnly: false,
      },
    },
    {
      name: "dont-depend-on-pre-com-only",
      severity: "warn",
      from: {
        path: "ahoi",
      },
      to: {
        path: "-things\\.ts$",
        preCompilationOnly: true,
      },
    },
    {
      name: "dont-depend-on-wherever",
      severity: "info",
      from: {
        path: "ahoi",
      },
      to: {
        path: "-things\\.ts$",
      },
    },
  ],
  options: {
    tsPreCompilationDeps: "specify",

    tsConfig: {
      fileName: "tsconfig.json",
    },

    reporterOptions: {
      dot: {
        collapsePattern: "node_modules/[^/]+",
        theme: {
          graph: {
            splines: "ortho",
            // rankdir: "TD",
          },
        },
      },
    },
  },
};
// generated: dependency-cruiser@10.2.0 on 2021-08-30T16:25:51.384Z
