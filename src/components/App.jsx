import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    username: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <br></br>
      <form>
        <input
          onChange={handleChange}
          name="username"
          value={contact.username}
          placeholder="Username"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
