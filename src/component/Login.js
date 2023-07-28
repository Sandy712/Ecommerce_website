import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { username, password });
      const { user, error } = response.data;

      console.log("logged in User",user);

      if (error) {
        setError(error);
      } else {
        // Successfully logged in, handle the user object as needed
        console.log("Logged in as:", user);
        navigate("/shop");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container className="my-3 py-3">
      <h1 className="text-center">Login</h1>
      <hr />
      <Row className="my-4 h-100">
        <Col md={4} lg={4} sm={8} xs={12} className="mx-auto">
          <form >
            <div className="my-3">
              <label htmlFor="floatingInput">Email address</label>
              <input
                // type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label htmlFor="floatingPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                className="my-2 mx-auto btn btn-dark"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
