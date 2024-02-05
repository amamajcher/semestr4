import './App.css';

import { ROUTER_ROUTES } from "./pages/routing";
import {
  RouterProvider,
} from "react-router-dom";
import { ThemeContextProvider } from "./context/theme-context-provider"

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={ROUTER_ROUTES} />
    </ThemeContextProvider>
  );
}

export default App;
