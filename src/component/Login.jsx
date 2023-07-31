import React, { useContext, useState } from "react";
import { DataContainer } from "../App";
import { NavLink } from "react-router-dom";
import "./style/Login.scss";

const Login = () => {
  const { usersData, setLoggedIn } = useContext(DataContainer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Find the user in the stored signup data based on the email
    const user = usersData.find((user) => user.email === email);

    if (!user) {
      setError("User not found. Please sign up first.");
      return;
    }

    if (user.password !== password) {
      setError("Invalid password. Please try again.");
      return;
    }

    // If email and password match, set the user as logged in
    setLoggedIn(true);
  };

  return (
    <div className="op">
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleInputChange} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className='mt-3'>Don't Have An Account Yet<span><NavLink to="/Signup">SignIn</NavLink></span> </p>
    </div>
    </div>
  );
};

export default Login;
