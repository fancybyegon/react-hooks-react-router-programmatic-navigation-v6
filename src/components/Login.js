// Login.js
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  // Access the login function passed as context
  const login = useOutletContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Create a function that calls the login function when the form is submitted
  function handleLogin(e) {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={handleLogin}>
      <label for="username">Username</label>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <label for="password">Password</label>
      <div>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />      
      </div>
      <button type="submit">Login</button>
  </form>
  );
};

export default Login;