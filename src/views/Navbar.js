import React from "react";
import "../styles/Navbar.scss";
import Chamcong from "./ChamcongNavbar";
import Listusers from "./Listusers";

function Navbar(props) {
  const handleChangeShow = (numberr) => {
    props.HandleChangeShow(numberr);
  };

  return (
    <div id="navBar">
      <Chamcong HandleChangeShow={handleChangeShow} />
      <Listusers HandleChangeShow={handleChangeShow} />
    </div>
  );
}

export default Navbar;
