import { createContext } from "react";

import type { CartContent } from "../interfaces/cartContent";

export const CartContext = createContext<CartContent>({
  cart: [],
  setCart: () => {}
});
