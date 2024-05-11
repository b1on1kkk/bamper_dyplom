import type { Parts } from "./sparePartsType";

export interface CartContent {
  cart: Array<Parts>;
  setCart: (c: Array<Parts>) => void;
}
