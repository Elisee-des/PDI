import React, { Component } from "react";

class FooterDashboard extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2019{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                MaFormation
              </a>
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Version.1.0.0 <i className="mdi mdi-heart text-danger"></i>
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Tous les droits sont réservés.{" "}
              <i className="mdi mdi-heart text-danger"></i>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterDashboard;
