import React, { useState } from "react"; // React and useState hook
import { Link,Navigate, useNavigate } from "react-router-dom"; // For navigation to login page
import axios from "axios"; // 🆕 Axios for HTTP requests

// Image imports for toggling password visibility and social login buttons
import eyeOpen from "../assets/image/eye.png";
import eyeClosed from "../assets/image/view.png";
import fb from "../assets/image/facebook-color.svg";
import gl from "../assets/image/google.png";

import "./Signup.css"; // CSS file for styling

function Signup() {
  // State variables to track form inputs
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for toggling password visibility
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 🆕 Error message state
  const [error, setError] = useState("");
  const navigate=useNavigate();
  // 🆕 Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Simple validation
    if (!email || !createPassword || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (createPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // 🆕 POST request to backend
      const response = await axios.post("http://localhost:8000/api/auth/signup", {
        email,
        password: createPassword, // Send email and password
      });

      alert("✅ Signup successful!");
      console.log(response.data);

      // 🆕 Clear inputs after success
      setEmail("");
      setCreatePassword("");
      setConfirmPassword("");
      setError("");
      navigate("/login");
    } catch (err) {
      // 🆕 Show error message from backend
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Signup failed. Please try again.");
      }
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="container">
      {/* 🆕 Form submission handler attached */}
      <form className="sign-upContainer" onSubmit={handleSubmit}>
        <h1 className="Signup">Signup</h1>

        {/* Email Input */}
        <input
          type="email"
          className="email-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input with eye toggle */}
        <div className="password-container">
          <input
            type={showCreatePassword ? "text" : "password"}
            className="email-input password-input"
            placeholder="Create Password"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
          />
          <img
            src={showCreatePassword ? eyeClosed : eyeOpen}
            alt="Toggle"
            className="eye-icon"
            onClick={() => setShowCreatePassword(!showCreatePassword)}
          />
        </div>

        {/* Confirm Password Input with eye toggle */}
        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="email-input password-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <img
            src={showConfirmPassword ? eyeClosed : eyeOpen}
            alt="Toggle"
            className="eye-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>

        {/* 🆕 Error message rendering */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="SignUp-button">
          SignUp
        </button>

        {/* Navigation to login */}
        <div className="account">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>

      {/* Social Login (UI only for now) */}
      <div className="social-login">
        <button className="social-input-button" id="facebook">
          <img src={fb} alt="facebook" className="facebkimg" />
          <p>Login with Facebook</p>
        </button>
        <button className="social-input-button" id="google">
          <img src={gl} alt="google" className="facebkimg" />
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
}

export default Signup;
