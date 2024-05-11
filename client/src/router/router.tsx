import { createBrowserRouter } from "react-router-dom";

import { Main } from "../components/Main/Main";
import { Cart } from "../components/Cart/Cart";
import { MainPage } from "../components/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

export default router;
