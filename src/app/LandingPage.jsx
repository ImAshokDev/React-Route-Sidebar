import React from "react";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";

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
  SideItem1,
  SideItem2,
  SideItem3,
  SubSideItem,
  SubSideItem5,
  Add1,
  Add2,
} from "./Pages";

export function LandingPage() {
  const { pathname } = useLocation();
  console.log("CURRENT PATH ", pathname);
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
            to="/contact1"
            isActive={() =>
              ["/contact1", "/contact2", "/add1", "/add2"].includes(pathname)
            }
            activeClassName="active-nav"
            className="normal-nav"
          >
            <p> contact</p>
          </NavLink>
          <NavLink
            exact
            to="/sideitem1"
            activeClassName="active-nav"
            className="normal-nav"
          >
            <p> side item1</p>
          </NavLink>
          <NavLink
            exact
            to="/sideitem2"
            isActive={() => ["/sideitem2", "/subsideite5"].includes(pathname)}
            activeClassName="active-nav"
            className="normal-nav"
          >
            <p> side item2</p>
          </NavLink>
          <NavLink
            exact
            to="/sideitem3"
            isActive={() => ["/sideitem3", "/subsideitem"].includes(pathname)}
            activeClassName="active-nav"
            className="normal-nav"
          >
            <p> side item3</p>
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

          <Route exact path="/sideitem1" component={SideItem1} />
          <Route exact path="/sideitem2" component={SideItem2} />
          <Route exact path="/subsideitem5" component={SubSideItem5} />
          <Route exact path="/sideitem3" component={SideItem3} />
          <Route exact path="/subsideitem" component={SubSideItem} />

          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/contact1" component={Contact} />
          <Route exact path="/contact2" component={Contact} />
          <Route exact path="/add1" component={Add1} />
          <Route exact path="/add2" component={Add2} />
        </Switch>
      </div>
    </div>
  );
}

// const SubSideBar = () => {
//   return (
//     <Switch>
//       <Route exact path="/sideitem3" component={SideItem3} />
//       <Route exact path="/subsideitem" component={SubSideItem} />
//     </Switch>
//   );
// };
