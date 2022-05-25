import { lazy } from "react";

const authRoutes = [
  {
    pathName: "/login",
    component: lazy(() => import("../../views/auth/login")),
  },
  {
    pathName: "/register",
    component: lazy(() => import("../../views/auth/register")),
  },
];

export default authRoutes;
