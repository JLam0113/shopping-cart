import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shopping from "./componenets/Shopping";
import Checkout from "./componenets/Checkout";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shopping",
      element: <Shopping />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
