import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Home } from "./pages/Home";
import Header from "./components/Header";
import { Profile } from "./pages/Profile";
import "./sass/main.scss";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  );
}

export default App;
