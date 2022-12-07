// grand-child.ts
import type { Child } from "./child";

export interface GrandChild {
  parent: Child;
}
