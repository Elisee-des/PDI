import { lazy } from "react";
const fontEndRoutes = [
  {
    pathName: "/",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/home")),
    permissions: ["all"],
  },
  {
    pathName: "/formations",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/formations")),
    permissions: ["all"],
  },
  {
    pathName: "/apropos",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/about")),
    permissions: ["all"],
  },
  {
    pathName: "/sponsors",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/sponsors")),
    permissions: ["all"],
  },
  {
    pathName: "/partners",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/partners")),
    permissions: ["all"],
  },
  {
    pathName: "/contact",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/contact")),
    permissions: ["all"],
  },
  {
    pathName: "/events",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/events")),
    permissions: ["all"],
  },
  {
    pathName: "/news",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/news")),
    permissions: ["all"],
  },
  {
    pathName: "/offeredFormation",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/offeredFormation")),
    permissions: ["all"],
  },
  {
    pathName: "/presse",
    layout: "Fontend",
    component: lazy(() => import("../../views/font-end/presse")),
    permissions: ["all"],
  },
];

export default fontEndRoutes;
