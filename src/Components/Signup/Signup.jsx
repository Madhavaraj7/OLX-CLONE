/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { user, signUp } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await signUp(userName, Email, phone, Password);

    if (res.success) {
      console.log("signup successful");
    } else {
      setLoading(false);
      console.log("something went wrong");
    }
  };

  if (user) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
          />
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <label htmlFor="phone">Phone</label>
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
          />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <button type="submit">
            Signup
            {loading && <div className="spinner"></div>}
          </button>
        </form>
        <Link to="/login">Already have an account</Link>
      </div>
    </div>
  );
}
