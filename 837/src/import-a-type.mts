import type { OnlyAType } from "only-types";

export function doSomethingUseful(pThing: OnlyAType) {
  return pThing.foo.repeat(pThing.bar);
}
