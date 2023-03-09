import { cruise } from "dependency-cruiser";

console.log(
  cruise(["src/"], {
    doNotFollow: "node_modules/",
    outputType: "text",
  }).output
);
