import "../styles/UserList_Input_content.scss";
import { useState } from "react";

const CreateAccount = (props) => {
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
  const handleCancel = () => {
    props.Handlechangeinput();
  };

  return (
    <>
      <div className="UserList_Input_content">
        <form>
          <div className="container">
            <h1>ADD USER</h1>
            <p>Please fill in this form to add a user.</p>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                onChange={handleEmailChange}
                value={email}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="inputPassword5" className="form-label">
                Password
              </label>
              <input
                onChange={handlePasswordChange}
                value={password}
                type="password"
                placeholder="Please type password inside here"
                id="inputPassword5"
                className="form-control"
                aria-labelledby="passwordHelpBlock"
              />
            </div>
            <div className="mb-3">
              <label for="select-role" className="form-label">
                Role
              </label>
              <select
                className="form-select"
                value={role}
                onChange={handleRoleChange}
              >
                <option selected>Open this select ROLE</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="formFile" className="form-label">
                Upload image (optional) (Chức năng demo chưa gắn chức năng)
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>

            <div className="clearfix">
              <button
                type="button"
                className="cancelbtn"
                onClick={handleCancel}
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
