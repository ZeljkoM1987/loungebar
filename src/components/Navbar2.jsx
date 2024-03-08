import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyless2.css";
import { NavLink } from "react-router-dom";

export const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="NavBarItems">
      <div className="Navbar-logo">
        <i className="fa-sharp fa-solid fa-utensils logo"></i>
        <div>
          <h2>lounge bar</h2>
          <h1>Centar</h1>
        </div>
      </div>
      <div className="menu-icons" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i className="fa fa-times close"></i>
        ) : (
          <i className="fas fa-hamburger"></i>
        )}
      </div>

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.cname}
                to={item.url}
                onClick={() => setMenuOpen(false)}
              >
                <i className={item.icon} aria-hidden="true"></i> {item.title}
              </NavLink>
            </li>
          );
        })}
        <a className="nav-tel" href="tel:066954994">
          <i className="fa-solid fa-phone"></i> 066954994
        </a>
      </ul>
    </nav>
  );
};
