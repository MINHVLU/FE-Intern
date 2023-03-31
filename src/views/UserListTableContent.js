import React, { useState, useEffect } from "react";
import "../styles/UserList_Table_content.scss";
import DeleteButton from "./DeleteAccount";

function UserListInputContent(props) {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        " https://be-intern.onrender.com/api/v1/timekeeping/"
      );
      const data = await response.json();
      setUsers(data);
      setUsers2(data);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      setUsers(users2);
    } else {
      const results = users2.filter((item) =>
        item.timekeepingId.includes(inputValue)
      );
      setUsers(results);
    }
  };

  const handleSearch1 = (event) => {
    setUsers(users.filter((item) => item.timekeepingId !== event));
    setUsers2(users2.filter((item) => item.timekeepingId !== event));
  };

  const onlcickAdd = () => {
    //có tham số even
    props.Handlechangeinput();
  };

  return (
    <>
      <div>
        <input
          type="search"
          id="gsearch"
          name="gsearch"
          onChange={handleSearch}
        />
      </div>

      <div className="UserList_Table_content">
        <div>
          <input
            type="button"
            class="button"
            value="ADD"
            onClick={onlcickAdd}
          />
        </div>
        <table>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>CONTACT</th>
            <th>POSITION</th>
            <th>LOCATION</th>
            <th></th>
          </tr>

          {users.map((user, index) => (
            <>
              <tr key={index}>
                <th>{user.timekeepingId}</th>
                <th>{user.headquarterId}</th>
                <th>{user.employeeId}</th>
                <th>{user.timekeepingType}</th>
                <th>{user.timekeepingIn}</th>
                <th>{user.employeeId}</th>
                <th>{user.employeeId}</th>
                <th>
                  <DeleteButton
                    api={user.timekeepingId}
                    resetView={handleSearch1}
                  />
                </th>
              </tr>
            </>
          ))}
        </table>
      </div>
    </>
  );
}

export default UserListInputContent;
