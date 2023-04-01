import React from "react";
import "../styles/Chamcong.scss";

function ChamCong(props) {
  const clickinto = (nub) => {
    props.HandleChangeShow(nub);
  };

  return (
    <>
      <button className="nav-btn" onClick={() => clickinto(2)}>
        CHẤM CÔNG
      </button>
    </>
  );
}

export default ChamCong;
