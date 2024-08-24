import App from "./App";
import ShopPage from "./ShopPage";
import ErrorPage from "./ErrorPage";
import Navigation from "./Navigation";
import CartPage from "./CartPage";
import Contact from "./Contact";

const routes = [
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "shoppage/", element: <ShopPage /> },
      { path: "cartpage/", element: <CartPage />},
      { path: "contactpage/", element: <Contact />},
    ]
  },
];

export default routes;