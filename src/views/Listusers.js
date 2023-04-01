import React from "react";
import "../styles/Listusers.scss";

function Listusers(props) {
  const clickInto = (num) => {
    props.HandleChangeShow(num);
  };

  return (
    <>
      <button className="nav-btn-Listusers" onClick={() => clickInto(3)}>
        USER LIST
      </button>
    </>
  );
}

export default Listusers;
