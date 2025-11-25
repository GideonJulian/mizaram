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

  // 🔒 ALL ADMIN ROUTES ARE NOW PROTECTED
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
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
