const punycode = require("punycode/");
const punycode_core = require("punycode");

console.log(`"punycode" resolves to: ${require.resolve("punycode")}`);
console.log(`"punycode core" version: ${punycode_core.version}`);
console.log(`"punycode/" resolves to: ${require.resolve("punycode/")}`);
console.log(`"punycode npm" version: ${punycode.version}`);
