import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shopping from "./componenets/Shopping";
import Checkout from "./componenets/Checkout";
import ErrorPage from "./ErrorPage";
import { useState, useEffect } from 'react';


const Router = () => {

  const [shoppingCart, setShoppingCart] = useState([])
  const [total, setTotal] = useState(0)

  // TODO handle duplicate object already in cart
  function addToCart(id, quantity, price, title, image){
    setTotal(total + quantity)
    setShoppingCart(shoppingCart => [...shoppingCart, {
      id: id,
      quantity: quantity,
      price: price,
      title: title,
      image: image
    }])
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App total={total}/>,
      errorElement: <ErrorPage total={total}/>,
    },
    {
      path: "/shopping",
      element: <Shopping total={total}
      onClick={addToCart}/>,
    },
    {
      path: "/checkout",
      element: <Checkout total={total}
      items={shoppingCart}
      />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
