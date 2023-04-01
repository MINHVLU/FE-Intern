import React from "react";
import "../styles/UserList_Input_content.scss";
import { useState } from "react";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/database", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role }),
    });
    if (response.status === 201) {
      alert(`Thêm email: ${email} thành công`);
    } else {
      alert("Thêm thất bại");
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  //   onlcickCancle = (even) => {
  //     this.props.Handlechangeinput();
  //   };

  return (
    <>
      <div className="UserList_Input_content">
        <form>
          <div class="container">
            <h1>ADD USER</h1>
            <p>Please fill in this form to add a user.</p>

            <label for="email">
              <b>EMAIL</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label for="password">
              <b>PASSWORD</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <label for="role">
              <b>ROLE</b>
            </label>
            <select id="cars" name="uname">
              <option value={role} onChange={handleRoleChange}>
                Admin
              </option>
              <option value={role} onChange={handleRoleChange}>
                User
              </option>
            </select>

            <div class="clearfix">
              <button
                type="button"
                className="cancelbtn"
                onClick={() => this.onlcickCancle()}
              >
                Cancel
              </button>
              <button
                type="buttom"
                className="signupbtn"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreateAccount;
