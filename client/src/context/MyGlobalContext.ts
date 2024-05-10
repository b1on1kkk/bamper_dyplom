import { createContext } from "react";

import type { GlobalContent } from "../interfaces/globalContent";

export const MyGlobalContext = createContext<GlobalContent>({
  numberOfElements: 0,
  currentPage: 1,
  setCurrentPage: () => {}
});
