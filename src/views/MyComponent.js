import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Infor from "./Infor.js";
import Content from "./Content.js";

const MyComponent = () => {
  const [show, setShow] = useState("index");

  const handleChangeShow = (nber) => {
    if (nber === 1) {
      setShow("index");
      console.log(show);
    } else if (nber === 2) {
      setShow("chamcong");
      console.log(show);
    } else if (nber === 3) {
      setShow("userlist");
      console.log(show);
    }
  };

  console.log(show);
  return (
    <>
      <Navbar HandleChangeShow={handleChangeShow} />
      <Infor />
      <Content show={show} />
    </>
  );
};

export default MyComponent;
