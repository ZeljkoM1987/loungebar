import React, { useState, useContext } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyless2.css";
import { NavLink } from "react-router-dom";
import { LoungeContext } from "../context/context";
import logo from "../logo.svg";

export const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { height } = useContext(LoungeContext);
  return (
    <nav
      className="NavBarItems2"
      style={{ background: height > 100 ? "whitesmoke" : "transparent" }}
    >
      <div
        className="Navbar2-logo"
        style={{ color: menuOpen || height > 100 ? "black" : "whitesmoke" }}
      >
        <img
        alt="logo"
          src={logo}
          className="logo2"
          style={{
            filter:
              menuOpen || height > 100
                ? "invert(0%) sepia(7%) saturate(4797%) hue-rotate(324deg) brightness(112%) contrast(87%)"
                : "invert(100%) sepia(1%) saturate(141%) hue-rotate(54deg) brightness(115%) contrast(87%)",
          }}
        ></img>
        {/*<i className="fa-sharp fa-solid fa-utensils logo2"></i>*/}
        <div>
          <h2>lounge caffe</h2>
          <h1>Centar</h1>
        </div>
      </div>
      <div className="menu2-icons" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i className="fa fa-times close2"></i>
        ) : (
          <i
            className="fas fa-hamburger"
            style={{ color: height > 100 ? "black" : "whitesmoke" }}
          ></i>
        )}
      </div>

      <ul className={menuOpen ? "nav2-menu active" : "nav2-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                style={{ color: height > 100 ? "black" : "whitesmoke" }}
                className={({ isActive }) =>
                  isActive ? `${item.cssname} active2` : item.cssname
                }     
                to={item.url}
                onClick={() => setMenuOpen(false)}
              >
                <i className={item.icon} aria-hidden="true"></i> {item.title}
              </NavLink>
            </li>
          );
        })}
        <a className="nav2-tel" href="tel:066954994">
          <i className="fa-solid fa-phone"></i> 066954994
        </a>
      </ul>
    </nav>
  );
};
