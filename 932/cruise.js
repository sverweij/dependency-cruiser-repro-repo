import { cruise} from 'dependency-cruiser';
import extractDepcruiseOptions from "dependency-cruiser/config-utl/extract-depcruise-options";
import extractTSConfig from "dependency-cruiser/config-utl/extract-ts-config";

/** @type {ICruiseOptions} */
const depcruiseOptions = await extractDepcruiseOptions('./.dependency-cruiser.js');
const tsConfig = extractTSConfig("./tsconfig.json");

const cruiseResult = await cruise(
    // files/ folders to cruise
    ['src/'], 

    // cruise options
    depcruiseOptions, 

    // resolve options
    // we strive to have everything in memory (except for the files be cruised).
    // however it's  not possible pass a (parsed) tsconfig to tsconfig-paths;
    // it needs the file name again. We could've solved  this behind the API,
    // but ended up doing that in the CLI, so here it needs to be passed twice
    { tsConfig: "./tsconfig.json" },
    
    // transpiler options
    // passing the parsed tsConfig in transpiler options is still recommended, 
    // though as it will influence how typescript interprets/ transpiles your
    // code.
    { tsConfig }
);

console.dir(cruiseResult.output.summary, { depth: null});