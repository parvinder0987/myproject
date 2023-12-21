import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as qs from "qs";

function Signup() {
  const router = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("9876543210");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");
  const [remember, setRemember] = useState(false);
  const [role, setRole] = useState("");

  const userrole = (selectedRole) => {
    setRole(selectedRole);
  };

  const abs = {
    Name: name,
    yourEmail: email,
    phoneNumber: phoneNumber,
    password: password,
    ConfirmPassword: confirmPassword,
    role: role,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      console.log("Role is required");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Confirm password does not match");
      return;
    }

    axios
      .post("http://localhost:5000/signup", qs.stringify(abs))
      .then((response) => {
        console.log("response..", response);
        sessionStorage.setItem("authData", JSON.stringify(response.data.data));
        router("/verifyOtp");
      })
      .catch((error) => {
        let message = "";
        if (error?.response?.data?.message)
          message = error?.response?.data?.message;
        console.log("error", message);
      });
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <div className="options-container">
        <button onClick={() => userrole(1)} className="option">
          Teacher
        </button>
        <button onClick={() => userrole(2)} className="option">
          Student
        </button>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            id="nameInput"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailInput">Your Email:</label>
          <input
            type="email"
            id="emailInput"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneInput">Phone Number:</label>
          <input
            type="tel"
            id="phoneInput"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput">Password:</label>
          <input
            type="password"
            id="passwordInput"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="input-group-text cursor-pointer"
            onClick={() => {
              const passwordInput = document.getElementById("passwordInput");
              if (passwordInput.type === "password") {
                passwordInput.type = "text";
              } else {
                passwordInput.type = "password";
              }
            }}
          >
            <i data-feather="eye" />
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPasswordInput">Confirm Password:</label>
          <input
            type="password"
            id="confirmPasswordInput"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="input-group-text cursor-pointer"
            onClick={() => {
              const confirmPasswordInput = document.getElementById("confirmPasswordInput");
              if (confirmPasswordInput.type === "password") {
                confirmPasswordInput.type = "text";
              } else {
                confirmPasswordInput.type = "password";
              }
            }}
          >
            <i data-feather="eye" />
          </span>
        </div>
        <div className="remember-checkbox">
          <input
            type="checkbox"
            id="rememberCheckbox"
            name="remember"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <label For="rememberCheckbox">Remember me</label>
        </div>
  
        <br />
        <button
          className="btn btn-primary w-100"
          tabIndex={5}
          onClick={handleSubmit}
        >
          Sign up
        </button>
        <p style={{ marginTop: "10px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>

        {/* Facebook and Instagram links */}
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
