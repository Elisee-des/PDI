import { lazy } from "react";
import { ROLES } from "../../utilities/app.constant";

const backEndRoutes = [
  {
    pathName: "/dashbord",
    layout: "Backend",
    component: lazy(() => import("../../views/back-end/dashbord")),
    permissions: [ROLES.admin, ROLES.client],
  },
  {
    pathName: "/creer_utilisateurs",
    layout: "Backend",
    component: lazy(() => import("../../views/back-end/utilisateurs")),
    permissions: [ROLES.admin, ROLES.client],
  },
  {
    pathName: "/creer_formations",
    layout: "Backend",
    component: lazy(() => import("../../views/back-end/formations")),
    permissions: [ROLES.admin, ROLES.client],
  },
];

export default backEndRoutes;
