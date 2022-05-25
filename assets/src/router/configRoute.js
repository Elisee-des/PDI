import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import NotFound from "../views/not-found";
import routes from "./routes";
import Backend from "../layouts/back-end";
import Fontend from "../layouts/font-end";
import Blank from "../layouts/blank";
import { AuthContext } from "../utilities/context/AuthContext";
import useAuth from "../utilities/hook/resourceAuth";

const Layout = { Backend, Fontend, Blank };

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const HandlerLayout = ({ children, component, isProtect }) => {
  const LayoutComponent = component;
  return (
    <>
      {isProtect ? (
        <RequireAuth>
          <LayoutComponent>{children}</LayoutComponent>
        </RequireAuth>
      ) : (
        <LayoutComponent>{children}</LayoutComponent>
      )}
    </>
  );
};

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const ViewComponent = route?.component;
          const LayouteRoute = route.layout ? Layout[`${route.layout}`] : Blank;
          return (
            <Route
              key={index}
              path={`${route?.pathName}`}
              element={
                <HandlerLayout
                  component={LayouteRoute}
                  isProtect={route.layout === "Backend"}
                >
                  <ViewComponent />
                </HandlerLayout>
              }
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
