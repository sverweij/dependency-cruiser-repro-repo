const path = require("node:path");

const TEMPLATE = `
<html>
<head>
  <style> body { margin: 0; } </style>
  <script type="text/javascript" src="https://unpkg.com/three"></script>
  <script type="text/javascript" src="https://unpkg.com/three-spritetext"></script>
  <script type="text/javascript" src="https://unpkg.com/3d-force-graph"></script>
</head>

<body>
  <div id="3d-graph"></div>

  <script>
    const gData = {
      nodes: @@NODES@@,
      links: @@LINKS@@
    };

    const elem = document.getElementById('3d-graph')
    const Graph = ForceGraph3D()
      (elem)
        .graphData(gData)
        .nodeAutoColorBy('group')
        .nodeLabel(node => node.dirname + '</br>' + node.displayname)
        .onNodeHover(node => elem.style.cursor = node ? 'pointer' : null)
        /* nice idea, but the 3D graph tends to look cluttered. Also GPU/ CPU 
           intensive when run on a serious code base (e.g. react that has 
            ~4500 nodes and ~10000 links 
        */
        // .nodeThreeObject(node => { 
        //   const sprite = new SpriteText(node.displayname);
        //   sprite.material.depthWrite = true; // make sprite background transparent
        //   sprite.color = node.color;
        //   sprite.textHeight = 8;
        //   return sprite;
        // })
        .linkOpacity(0.2)
        .linkWidth(2)
        .linkDirectionalArrowLength(4)
        // .linkDirectionalParticles(7) // cool but a bit GPU intensive
        .linkLabel(link => link.displayname)
        .onLinkHover(link => elem.style.cursor = link ? 'pointer' : null)
  </script>
</body>
</html>`;

function deriveGroup(pFileName) {
  let lReturnValue = "unknown";
  const lMatch = path.dirname(pFileName).match(/^([^/]+)\/([^/]+\/[^/]+)/);
  if (lMatch) {
    lReturnValue = lMatch[2];
  }
  return lReturnValue;
}

/**
 *
 * @param {import('dependency-cruiser').ICruiseResult} pCruiseResult
 */
function render3DThing(pCruiseResult) {
  const lNodes = pCruiseResult.modules.map((pModule) => {
    return {
      id: pModule.source,
      displayname: path.basename(pModule.source),
      dirname: path.dirname(pModule.source),
      group: deriveGroup(pModule.source),
    };
  });
  const lLinks = pCruiseResult.modules.reduce(
    (pAll, pCurrentModule) =>
      pAll.concat(
        pCurrentModule.dependencies.map((pDependency) => ({
          source: pCurrentModule.source,
          target: pDependency.resolved,
          displayname: `${pCurrentModule.source} -><br/>${pDependency.resolved}`,
        }))
      ),
    []
  );

  return TEMPLATE.replace(/@@NODES@@/g, JSON.stringify(lNodes)).replace(
    /@@LINKS@@/g,
    JSON.stringify(lLinks)
  );
}

/**
 * Sample plugin: 3d representation
 *
 * @param {import('dependency-cruiser').ICruiseResult} pCruiseResult -
 *      the output of a dependency-cruise adhering to dependency-cruiser's
 *      cruise result schema
 * @return {import('dependency-cruiser').IReporterOutput} -
 *      output: a string
 *      exitCode: 0
 */
module.exports = (pCruiseResult) => ({
  output: render3DThing(pCruiseResult),
  exitCode: 0,
});
