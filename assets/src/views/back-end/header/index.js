import React from "react";
import logo from "../../../assets/images/logo4.jpeg";
import logo1 from "../../../assets/images/logo3.jpeg";
import Deconnexion from "../../../components/Deconnexion";

const HeaderDashbord = () => {
  return (
    <>
      <header
        className="navbar navbar-wite sticky-top bg-wite flex-md-nowrap p-0 shadow"
        style={{ marginBottom: "5px" }}
      >
        <a href="/dashbord" style={{ marginRight: "80%" }}>
          <img
            src={logo1}
            alt="login form"
            style={{
              borderRadius: "1rem 0 0 1rem",
              height: "50px",
              alignContent: "start",
            }}
          />
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Deconnexion />
      </header>
    </>
  );
};

export default HeaderDashbord;
