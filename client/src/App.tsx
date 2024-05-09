import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "./components/Main/Main";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
