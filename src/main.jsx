import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import FavoritesPage from "./components/pages/FavoritesPage";
import BrowsePage, { radioStationFetcher } from "./components/pages/BrowsePage";
import SearchPage from "./components/pages/SearchPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <FavoritesPage />,
      },
      {
        path: "browse",
        loader: radioStationFetcher,
        element: <BrowsePage />,
      },
      {
        path: "searchpage",
        element: <SearchPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
