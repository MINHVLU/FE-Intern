// import React, { useState, useEffect } from 'react';
// import "../us_style/UserList_Table_content.scss"

// class UserList_Table_content extends React.Component {

//     onlcickSearch = (even) => {
//         even.preventDefault()
//     }

//     onlcickAdd = (even) => {
//         this.props.Handlechangeinput()
//     }

//     render() {

//         return (
//             <>
//                 <div>

//                     <input type="search" id="gsearch" name="gsearch" />
//                     <input type="submit" id="btnsearch" onClick={() => this.onlcickSearch} />
//                 </div>

//                 <div className="UserList_Table_content">
//                     <div>
//                         <input type="button" class="button" value="ADD" onClick={() => this.onlcickAdd()} />
//                     </div>
//                     <table>
//                         <tr>
//                             <th>ID</th>
//                             <th>NAME</th>
//                             <th>EMAIL</th>
//                             <th>ADDRESS</th>
//                             <th>USER NAME</th>
//                             <th>PASSWORD</th>
//                             <th>ROLE</th>
//                             <th>Contact</th>
//                             <th>Country</th>
//                         </tr>

//                     </table>
//                 </div>

//             </>
//         )
//     }
// }
// export default UserList_Table_content;

import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "../styles/UserList_Table_content.scss";
import DeleteButton from "./DeleteAccount";

function UserList_Table_content(props) {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://192.168.1.18:8080/api/v1/timekeeping/"
      );
      const data = await response.json();
      setUsers(data);
      setUsers2(data);
    };

    fetchData();
  }, []);

  // const userListRows = users.reduce((rows, user, index) => {
  //     if (index % 1 === 0) rows.push([]);
  //     rows[rows.length - 1].push(user);
  //     return rows;
  // }, []);

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
    event.preventDefault();

    setUsers(
      users.filter((item) => item.timekeepingId !== event.timekeepingId)
    );
    setUsers2(
      users2.filter((item) => item.timekeepingId !== event.timekeepingId)
    );
  };
  // var users2=users;

  // const HandleOnChangeSearch = (event) => {
  //     if (event.target.value === "") {
  //         users2=users
  //     } else {
  //         users2=users.filter(item => item.timekeepingId === event.target.value);
  //         console.log(event.target.value);
  //         console.log(users2);
  //     }
  // }

  // const handleDelete = async (id) => {
  //     id.preventDefault();
  //     const response = await fetch(
  //         `http://192.168.1.18:8080/api/v1/timekeeping/${id}/delete`,
  //         {
  //             method: "DELETE",
  //         }
  //     );
  //     const data = await response.json();
  //     if (data.success) {
  //         alert("Delete successful!");
  //     } else {
  //         alert("Delete failed: ");
  //     }
  // };
  function reRender() {
    users.map((user, index) => (
      <>
        <tr key={index}>
          <th>{user.timekeepingId}</th>
          <th>{user.headquarterId}</th>
          <th>{user.employeeId}</th>
          <th>{user.timekeepingType}</th>
          <th>{user.timekeepingIn}</th>
          <th>{user.employeeId}</th>
          <th>{user.employeeId}</th>
          {/* <th onSubmit={handleDelete}>
                                <button onClick={(event) => setId(event.user.timekeepingId)}>xóa</button>
                            </th> */}
          <th onClick={handleSearch1}>
            <DeleteButton api={user.timekeepingId} />
          </th>
        </tr>
      </>
    ));
  }
  const onlcickSearch = (even) => {
    even.preventDefault();
    render();
  };

  const onlcickAdd = (even) => {
    props.Handlechangeinput();
  };

  const show = () => {
    console.log("hello");
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
          {/* {
                        userListRows.map((row, index) => (
                            <tr key={index}>
                                {row.map(user => (
                                    <>

                                        <th key={user.timekeepingId}>
                                            {user.timekeepingId}
                                        </th>
                                        <th key={user.timekeepingId}>
                                            {user.headquarterId}
                                        </th>
                                        <th key={user.timekeepingId}>
                                            {user.employeeId}
                                        </th>
                                        <th key={user.timekeepingId}>
                                            {user.timekeepingType}
                                        </th>
                                        <th key={user.timekeepingId}>
                                            {user.timekeepingIn}
                                        </th>
                                        <th key={user.timekeepingId}>
                                            {user.employeeId}
                                        </th>
                                        <th key={user.timekeepingId}>
                                            {user.employeeId}
                                        </th>
                                        <th key={user.timekeepingId}>
                                            sua xoa
                                        </th>
                                    </>

                                ))}
                            </tr>
                        ))
                    } */}
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
                {/* <th onSubmit={handleDelete}>
                                <button onClick={(event) => setId(event.user.timekeepingId)}>xóa</button>
                            </th> */}
                <th>
                  <DeleteButton api={user.timekeepingId} user={users} />
                </th>
              </tr>
            </>
          ))}
        </table>
      </div>
    </>
  );
}

export default UserList_Table_content;
