import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "../App.css";

import {
  Aboute,
  Contact,
  Home,
  Product,
  Product2,
  Product3,
  Product4,
  Product5,
} from "./Pages";

export function LandingPage() {
  return (
    <div className="landing-page">
      <div className="left">
        <h2>left view</h2>

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
            to="/product2"
            activeClassName="active-nav"
            className="normal-nav"
          >
            <p> product2</p>
          </NavLink>
          <NavLink
            exact
            to="/product3"
            activeClassName="active-nav"
            className="normal-nav"
          >
            <p> product3</p>
          </NavLink>
          <NavLink
            exact
            to="/product4"
            activeClassName="active-nav"
            className="normal-nav"
          >
            <p> product4</p>
          </NavLink>
          <NavLink
            exact
            to="/product5"
            activeClassName="active-nav"
            className="normal-nav"
          >
            <p> product5</p>
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
      </div>
      <div className="right">
        <h2>right view</h2>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboute" component={Aboute} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product2" component={Product2} />
          <Route exact path="/product3" component={Product3} />
          <Route exact path="/product4" component={Product4} />
          <Route exact path="/product5" component={Product5} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}
