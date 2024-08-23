import App from "./App";
import ShopPage from "./ShopPage";
import ErrorPage from "./ErrorPage";
import Navigation from "./Navigation";

const routes = [
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "shoppage/", element: <ShopPage /> },
      { path: "contact",},
    ]
  },
];

export default routes;