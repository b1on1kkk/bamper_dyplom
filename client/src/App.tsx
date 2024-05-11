import router from "./router/router";
import { RouterProvider } from "react-router-dom";

import useLocalStorage from "./hooks/useLocalStorage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NextUIProvider } from "@nextui-org/react";

import { CartContext } from "./context/CartContext";

import type { Parts } from "./interfaces/sparePartsType";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  const { storedValues: cart, setValue: setCart } = useLocalStorage<
    Array<Parts>
  >("cart", []);

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={{ cart, setCart }}>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </CartContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
