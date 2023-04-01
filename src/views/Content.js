import React from "react";
import "../styles/Content.scss";
import ChamcongContent from "./ChamcongContent";
import UsersListContent from "./UsersListContent";

function Content(props) {
  const { show } = props;
  return (
    <div className="content">
      {show === "chamcong" && <ChamcongContent />}
      {show === "userlist" && <UsersListContent />}
    </div>
  );
}

export default Content;
