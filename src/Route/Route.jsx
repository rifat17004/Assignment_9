import { createBrowserRouter } from "react-router";
import Home from "../Component/Home";
import About from "../Component/About";
import Event from "../Component/Event";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Component/Login";
import Register from "../Component/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/event.json"),
        Component: Home,
      },
      { path: "/about", Component: About },
      { path: "/event", Component: Event },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/login", Component: Login },
      { path: "/auth/register", Component: Register },
    ],
  },
]);
export default router;
