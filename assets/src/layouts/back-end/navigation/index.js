import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ITEMS from "./item";

function Navigation() {
  const [navLinks, setNavLinks] = useState([]);
  const userInfo = { role: "admin" };
  useEffect(() => {
    const _navLinks = ITEMS.filter((item) =>
      item.permissions.includes(userInfo.role)
    );
    setNavLinks(_navLinks);
  }, []);

  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            {navLinks?.map((navLink, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ fontSize: 20 }}
                >
                  <i
                    class={navLink?.icon}
                    aria-hidden="true"
                    style={{ color: "#d35400" }}
                  ></i>
                  <NavLink to={navLink?.link}>{navLink?.name}</NavLink>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
