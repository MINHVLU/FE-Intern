import { useState } from "react";

const CreateAccount = () => {
  const [headquarterId, setheadquarterId] = useState("");
  const [employeeId, setemployeeId] = useState("");
  const [timekeepingType, settimekeepingType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "http://192.168.1.18:8080/api/v1/timekeeping/store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ headquarterId, employeeId, timekeepingType}),
      }
    );
    const data = await response.json();
    if (data.success) {
      alert("Add Item successful!");
    } else {
      alert("Add Item failed: ");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Trụ sở chính:
        <input
          placeholder="..."
          type="text"
          value={headquarterId}
          onChange={(event) => setheadquarterId(event.target.value)}
        />
      </label>

      <label>
        ID Nhân viên:
        <input
          placeholder="..."
          type="text"
          value={employeeId}
          onChange={(event) => setemployeeId(event.target.value)}
        />
      </label>
      <label>
        Chấm công:
        <input
          placeholder="..."
          type="text"
          value={timekeepingType}
          onChange={(event) => settimekeepingType(event.target.value)}
        />
      </label>
      
      <button type="submit">Update</button>
    </form>
  );
};

export default CreateAccount;
