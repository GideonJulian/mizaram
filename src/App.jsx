import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProducts from "./pages/SingleProducts";
import Admin from "./Layouts/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import AddProducts from "./pages/Admin/AddProducts";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <SingleProducts /> },
    ],
  },

  {
    path: "admin",
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add-product", element: <AddProducts /> },
      { path: "products", element: <>all products</> },
    ],
  },

  // AUTH ROUTE
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={route} />
    </CartProvider>
  );
}

export default App;
