import { myFunctionB } from "~/folderB/b";

const myFunctionA = () => {
  console.log("nice");
  myFunctionB();
};

export { myFunctionA };
