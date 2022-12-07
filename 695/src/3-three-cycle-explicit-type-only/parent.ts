// parent.ts
import type { GrandChild } from "./grandchild";

export interface Parent {
  grandChildren: GrandChild[];
}
