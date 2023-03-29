import { useState } from "react";

function DeleteForm() {
  const [id, setId] = useState("");

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://192.168.1.18:8080/api/v1/timekeeping/${id}/delete`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data.success) {
        alert("Delete successful!");
      } else {
        alert("Delete failed: ");
      }
  };

  return (
    <form onSubmit={handleDelete}>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button type="submit">Delete</button>
    </form>
  );
}

Phúc

export default DeleteForm;
