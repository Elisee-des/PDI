import React from "react";

function TopHeader() {
  return (
    <div className="pre-header">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 additional-shop-info">
            <ul className="list-unstyled list-inline">
              <li>
                <i className="fa fa-phone"></i>
                <span>+226 5555 5555</span>
              </li>
              <li>
                <i className="fa fa-envelope-o"></i>
                <span>info@maformation.com</span>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-6 additional-nav">
            <ul className="list-unstyled list-inline pull-right">
              <li>
                <a href="/login">Se connecter</a>
              </li>
              <li>
                <a href="/register">Inscription</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
