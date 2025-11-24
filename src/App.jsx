import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProducts from "./pages/SingleProducts";
import Admin from "./Layouts/Admin";
import Dashboard from "./pages/Admin/Dashboard";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product/:id",
        element: <SingleProducts />,
      },
    ],
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-product",
        element: "add product",
      },
      {
        path: "products",
        element: "all products",
      },
      {
        
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
