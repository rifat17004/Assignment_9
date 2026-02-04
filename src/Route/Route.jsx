import { createBrowserRouter } from "react-router";
import Home from "../Component/Home";
import About from "../Component/About";
import Event from "../Component/Event";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoutes from "./PrivateRoutes";
import { Suspense } from "react";
import PageNotFound from "../Component/PageNotFound";
import EventGallery from "../Component/EventGallery";

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
      {
        path: "/event",
        loader: () => fetch("/event.json"),
        element: (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-2xl"></span>
            }
          >
            <PrivateRoutes>
              <Event />
            </PrivateRoutes>
          </Suspense>
        ),
      },
      {
        path: "/eventGallery",

        element: (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-2xl"></span>
            }
          >
            <PrivateRoutes>
              <EventGallery />
            </PrivateRoutes>
          </Suspense>
        ),
      },
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
  { path: "*", Component: PageNotFound },
]);
export default router;
