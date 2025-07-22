import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 🆕 useNavigate
import axios from "axios";
import fb from "../assets/image/facebook-color.svg";
import gl from "../assets/image/google.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // 🧭 Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });

      alert("✅ Login successful!");
      localStorage.setItem("token", response.data.token);

      setEmail("");
      setPassword("");
      setError("");

      // 🧭 Redirect to home page
      navigate("/");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
      console.error("Login error:", err);
    }
  };

  return (
    <div className="logcontainer">
      <form className="login-Container" onSubmit={handleLogin}>
        <h1 className="login">Login</h1>

        <input
          type="email"
          className="mail-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mail-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="email-input" id="login-button">
          Login
        </button>

        <div className="accountClass">
          <p>Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>

      <div className="social-login-button">
        <button className="social-button" id="fb">
          <img src={fb} alt="Facebook Logo" className="social-img" />
          <p>Login with Facebook</p>
        </button>
        <button className="social-button" id="gl">
          <img src={gl} alt="Google Logo" className="social-img" />
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
