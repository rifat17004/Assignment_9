import { createBrowserRouter } from "react-router";
import Home from "../Component/Home";
import About from "../Component/About";
import Event from "../Component/Event";
import HomeLayout from "../Layout/HomeLayout";

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
]);
export default router;
