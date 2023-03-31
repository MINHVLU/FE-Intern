import { useState } from "react";

const ButtonCreateAccount = ({ addEmail, addPassword, addRole }) => {
  const [headquarterId, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [role, settimekeepingType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "http://192.168.1.18:8080/api/v1/employee/store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      }
    );
    const data = await response();
    if (response.status == 200) {
      alert("Add Item successful!");
    } else {
      alert("Add Item failed: ");
    }
  };

  return <button onClick={handleSubmit}>Add</button>;
};

export default ButtonCreateAccount;
