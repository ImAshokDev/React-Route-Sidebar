import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        exact
        to="/home"
        activeClassName="active-nav"
        className="normal-nav"
      >
        <p> home</p>
      </NavLink>
      <NavLink
        exact
        to="/aboute"
        activeClassName="active-nav"
        className="normal-nav"
      >
        <p> aboute</p>
      </NavLink>
      <NavLink
        exact
        to="/product"
        activeClassName="active-nav"
        className="normal-nav"
      >
        <p> product</p>
      </NavLink>
      <NavLink
        exact
        to="/contact"
        activeClassName="active-nav"
        className="normal-nav"
      >
        <p> contact</p>
      </NavLink>
    </nav>
  );
};
