import { useState, useEffect } from "react";

function DeleteButton({ api, resetView }) {
  const [id, setId] = useState(null);

  useEffect(() => {
    console.log(id);
    resetView(id);
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

  return <button onClick={() => setId(api)}>Delete</button>;
}

export default DeleteButton;
