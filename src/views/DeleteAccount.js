import { useState, useEffect } from "react";

function DeleteButton({ api, resetView }) {
  const [id, setId] = useState(null);

  useEffect(() => {
    if (id !== null) {
      fetch(`https://be-intern.onrender.com/api/v1/timekeeping/${id}/delete`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.status === 200) {
            alert("thanh cong roi mng oi");
          } else {
            alert("Hong on roi Huy oi");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);
  resetView(id);

  return <button onClick={() => setId(api)}>Delete</button>;
}

export default DeleteButton;
