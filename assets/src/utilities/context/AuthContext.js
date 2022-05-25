import React, { useCallback } from "react";
import DATA from "../../data";
import { USER_SESSION } from "../app.constant";

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(DATA.GET(USER_SESSION)?.data ?? null);

  let signin = (credentiel, callback) => {
    const corpsUserReceive = { role: "admin", name: "Rock Kabore" };
    // la requete vers l'api
    setUser(corpsUserReceive);
    DATA.SET(USER_SESSION, corpsUserReceive);
    callback({ status: true, message: "Succes" });
  };

  let signout = () => {
    DATA.REMOVE(USER_SESSION);
    // deconnexion depuis l'api
    callback({ status: true, message: "Succes" });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
