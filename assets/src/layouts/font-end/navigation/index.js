import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ITEMS from "./item";
import TopHeader from "./TopHeader";
import images5 from "../../../assets/corporate/img/logos/logo-corp-red.png";
import logo from "../../../assets/images/logo3.jpeg";

function NavigationFront() {
  return (
    <div>
      <div class="corporate">
        <TopHeader />
        <div className="header">
          <div className="container">
            <Link className="site-logo" to={"/"}>
              <img
                src={logo}
                alt="MaFormation FrontEnd"
                style={{ borderRadius: "1rem 0 0 1rem", height: "50px" }}
              ></img>
            </Link>

            <a href="javascript:void(0);" className="mobi-toggler">
              <i className="fa fa-bars"></i>
            </a>

            <div className="header-navigation pull-right font-transform-inherit">
              <ul>
                {ITEMS?.map((navLink, index) => {
                  const lengthChildren = (navLink?.childrens ?? []).length;
                  return (
                    <li
                      key={index}
                      className={`${lengthChildren > 0 ? "dropdown" : ""}`}
                    >
                      {lengthChildren > 0 ? (
                        <>
                          <a
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            data-target="#"
                            href="/"
                          >
                            {navLink?.name}
                          </a>
                          <ul className="dropdown-menu">
                            {navLink.childrens.map((nav, index) => (
                              <li key={index} className="dropdown-submenu">
                                <NavLink to={nav.link}>{nav.name}</NavLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavLink to={navLink?.link}>{navLink?.name}</NavLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationFront;
