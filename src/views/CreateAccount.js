import React, { useState, useEffect } from 'react';

const CreateAccount = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const updateUser = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/PhucChiVas161/LearnReactJS/database', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    updateUser();
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form>
        <label>
          Email:
          <input type="Email" name="email" value={user.email || ''} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="password" name="password" value={user.password || ''} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateAccount;