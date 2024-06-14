/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await logIn(email, password);
    if (res.success) {
      navigate("/");
    } else {
      setLoading(false);
      console.error("something went wrong");
    }
  };

  if (user) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            Login
            {loading && <div className="spinner"></div>}
          </button>
        </form>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
}

export default Login;
