import React, { useState } from "react";
import UserListTableContent from "./UserListTableContent";
import CreateAccount from "./CreateAccount";

function UsersListContent() {
  const [list, setList] = useState(true);

  const handleInputChange = () => {
    setList(!list);
  };

  return (
    <>
      {list === true ? (
        <div className="UsersList_content">
          <UserListTableContent Handlechangeinput={handleInputChange} />
        </div>
      ) : (
        <div id="form">
          <CreateAccount Handlechangeinput={handleInputChange} />
        </div>
      )}
    </>
  );
}

export default UsersListContent;
