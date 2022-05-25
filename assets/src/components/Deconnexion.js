import React from "react";
import useAuth from "../utilities/hook/resourceAuth";

const Deconnexion = () => {
  const auth = useAuth();
  const logout = () => {
    auth.signout({}, (data) => {
      navigate(from, { replace: true });
    });
  };
  return (
    <>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="/login" onClick={logout}>
            Déconnexion
          </a>
        </div>
      </div>
    </>
  );
};

export default Deconnexion;
