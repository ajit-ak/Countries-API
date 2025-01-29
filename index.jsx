import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Details from "./components/Details";
import Home from "./components/Home";
import Errorpage from "./components/Errorpage";
import CountriesDetail from "./components/CountriesDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <Details />,
      },
      {
        path: "/:country",
        element: <CountriesDetail/>,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
