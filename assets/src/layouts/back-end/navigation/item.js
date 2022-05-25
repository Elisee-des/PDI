import { ROLES } from "../../../utilities/app.constant";

const ITEMS = [
  {
    link: "/dashbord",
    name: "Tableau de bord",
    icon: "fa fa-clipboard",
    permissions: [ROLES.admin, ROLES.client],
  },
  {
    link: "/creer_utilisateurs",
    name: "Utilisateur",
    icon: "fa fa-users",
    permissions: [ROLES.admin],
  },
  {
    link: "/creer_formations",
    name: "Formation",
    icon: "fa fa-list-ul",
    permissions: [ROLES.admin],
  },
];
export default ITEMS;
