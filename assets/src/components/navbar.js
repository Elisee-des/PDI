import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import images5 from "../assets/corporate/img/logos/logo-corp-red.png";

const Navbar = () => {
  return (
    <>
      <body class="corporate">
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
                    <a href="page-login.html">Se connecter</a>
                  </li>
                  <li>
                    <a href="page-reg-page.html">Inscription</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <a className="site-logo" href="/">
              <img src={images5} alt="Metronic FrontEnd"></img>
            </a>

            <a href="javascript:void(0);" className="mobi-toggler">
              <i className="fa fa-bars"></i>
            </a>

            <div className="header-navigation pull-right font-transform-inherit">
              <ul>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-target="#"
                    href="/"
                  >
                    Accueil
                  </a>

                  <ul className="dropdown-menu">
                    <li className="active">
                      <a href="/apropos">A propos</a>
                    </li>
                    <li>
                      <a href="/partners">Partenaire</a>
                    </li>
                    <li>
                      <a href="/sponsors">Sponsors</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-target="#"
                    href="javascript:;"
                  >
                    News
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a href="/events">Events</a>
                    </li>
                    <li>
                      <a href="/news">News</a>
                    </li>
                    <li>
                      <a href="/presse">Presse</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-target="#"
                    href="javascript:;"
                  >
                    Offres de formations
                  </a>

                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <a href="/formations">Formations</a>
                    </li>
                    <li className="dropdown-submenu">
                      <a href="/offeredFormation">Proposer une Offre</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-target="#"
                    href="javascript:;"
                  >
                    Le Reseau
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog.html">Le Reseau</a>
                    </li>
                    <li>
                      <a href="blog-item.html">Map</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Navbar;
