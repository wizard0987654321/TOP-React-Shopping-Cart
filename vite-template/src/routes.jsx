import App from "./App";
import ShopPage from "./ShopPage";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shoppage/",
    element: <ShopPage />,
  },
];

export default routes;