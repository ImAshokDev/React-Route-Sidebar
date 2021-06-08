import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";

import "../App.css";

export function Home() {
  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => {
        console.log("res....", res.url);
      })
      .catch((err) => {
        console.log("err......", err);
      });
  }, []);
  return <div>Home Works!</div>;
}

export function Aboute() {
  return <div>About Works!</div>;
}
export function Product() {
  return <div>Product Works!</div>;
}
export function Product2() {
  return <div>Product2 Works!</div>;
}
export function Product3() {
  return <div>Product3 Works!</div>;
}
export function Product4() {
  return <div>Product4 Works!</div>;
}
export function Product5() {
  return <div>Product5 Works!</div>;
}

// ==========================  CONTACT  ===================

export function Contact() {
  return (
    <div>
      <div>
        <nav className="navbar2">
          <NavLink
            exact
            to="/contact1"
            activeClassName="active-nav2"
            className="normal-nav2"
          >
            <p>Contact 1</p>
          </NavLink>
          <NavLink
            exact
            to="/contact2"
            activeClassName="active-nav2"
            className="normal-nav2"
          >
            <p>Contact 2</p>
          </NavLink>
        </nav>
      </div>
      <div>
        <Switch>
          <Route exact path="/contact1" component={Contact1} />
          <Route exact path="/contact2" component={Contact2} />
        </Switch>
      </div>
    </div>
  );
}

export function Contact1() {
  return (
    <div>
      <div>Contact Works! 1</div>
      <button>
        <Link to="/add1">
          <p>add contact 1</p>
        </Link>
      </button>
    </div>
  );
}
export function Contact2() {
  return (
    <div>
      <div>Contact Works! 2</div>
      <button>
        <Link to="/add2">
          <p>add contact 2</p>
        </Link>
      </button>
    </div>
  );
}

export function Add1() {
  return (
    <div>
      <div>Add Contact Works! 1</div>
      <button>
        <Link to="/contact1">
          <p>Back contact 1</p>
        </Link>
      </button>
    </div>
  );
}
export function Add2() {
  return (
    <div>
      <div>Add Contact Works! 2</div>
      <button>
        <Link to="/contact2">
          <p>Back contact 2</p>
        </Link>
      </button>
    </div>
  );
}
// ==========================  CONTACT END ===================

export function SideItem1() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => {
        console.log("res....", res.url);
        setData(res);
      })
      .catch((err) => {
        console.log("err......", err);
      });
  }, []);
  return (
    <div>
      <h1>SideItem1!</h1>
      {data && <h2>data: {data.url}</h2>}
    </div>
  );
}
export function SideItem2() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => {
        console.log("res....", res.url);
        setData(res);
      })
      .catch((err) => {
        console.log("err......", err);
      });
  }, []);
  return (
    <div>
      <h1>
        <Link to="/subsideitem5">SideItem</Link>
        2!
      </h1>
      {data && <h2>data: {data.url}</h2>}
    </div>
  );
}

export function SideItem3() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log("res....", res.data);
        setData(res);
      })
      .catch((err) => {
        console.log("err......", err);
      });
  }, []);
  return (
    <div>
      <h1>
        <Link to="/subsideitem">SideItem</Link>
        3!
      </h1>
      {data && <h2>data: {data.url}</h2>}
    </div>
  );
}

export function SubSideItem() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log("res....", res.data);
        setData(res);
      })
      .catch((err) => {
        console.log("err......", err);
      });
  }, []);
  return (
    <div>
      <h1>Sub SideItem1 !</h1>
      {data && <h2>data: {data.url}</h2>}
    </div>
  );
}

export function SubSideItem5() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log("res....", res.data);
        setData(res);
      })
      .catch((err) => {
        console.log("err......", err);
      });
  }, []);
  return (
    <div>
      <h1>Sub SideItem 2 !</h1>
      {data && <h2>data: {data.url}</h2>}
    </div>
  );
}
