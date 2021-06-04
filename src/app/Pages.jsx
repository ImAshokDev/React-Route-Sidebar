import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
export function Contact() {
  return <div>Contact Works!</div>;
}

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
