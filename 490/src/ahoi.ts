import { ILaLaLaType } from "./type-things";
import ewok from "./code-things";
import unused from "./included-but-unused-things";
import x from "./doesnot-end-in-things-so-ignored-in-rules";

export default function ahoi(pGnork: ILaLaLaType) {
  if (ewok(pGnork.id)) {
    return `ahoi ${pGnork.yaryar}`;
  }
  return `misa e ${pGnork.yaryar}`;
}
