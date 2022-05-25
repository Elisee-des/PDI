import React from "react";
import HeaderDashbord from "../../views/back-end/header";
import FooterDashboard from "./FooterDashboard";
import Navigation from "./navigation";

const Backend = ({ children }) => {
  return (
    <>
      <HeaderDashbord />
      <div className="container-fluid">
        <div className="row">
          <Navigation />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
      <FooterDashboard />
    </>
  );
};

export default Backend;
