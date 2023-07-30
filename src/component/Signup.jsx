import React, { useState,useContext } from 'react';
import { DataContainer } from '../App';
import "./style/Signup.scss"



const Signup = () => {
  const { setLoggedIn } = useContext(DataContainer);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignup = () => {
    const userData = { email, password };
    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    usersData.push(userData);
    setLoggedIn(true);
    localStorage.setItem('users', JSON.stringify(usersData));

    // You can add additional logic here, such as redirecting to another page after successful signup.
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button className="signup-button" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
