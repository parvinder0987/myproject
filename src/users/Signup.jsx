import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";
import * as qs from "qs";

function Signup() {
  const router = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("9876543210");
  const [password, setPassword] = useState("*******");
  const [confirmPassword, setConfirmPassword] = useState("*******");
  const [remember, setRemember] = useState(false);
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);


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
      console.log("please  select the upper option ");
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
        sessionStorage.setItem("tokenData", JSON.stringify(response.data.token));
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
    <div className="bg-img">
      <div className="card-register-group1">
        <header>Register </header>
        <div className="options-container">
          <button onClick={() => userrole(1)} className="option">
            Teacher
          </button>
          <button onClick={() => userrole(2)} className="option">
            Student
          </button>
        </div>
        <form>
          <div className="regsiter-group">
            <label htmlFor="nameInput"><b>Name:</b></label>
            <input
              type="text"
              id="nameInput"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="regsiter-group">
            <label htmlFor="emailInput"><b>Email</b></label>
            <input
              type="email"
              id="emailInput"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="regsiter-group">
            <label htmlFor="phoneInput"><b>Phonenumber</b></label>
            <input
              type="tel"
              id="phoneInput"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="regsiter-group">
            <label htmlFor="passwordInput"><b>Password</b></label>
            <input
              type={showPassword ? "text" : "password"}
              id="passwordInput"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="regsiter-group">
            <label htmlFor="confirmPasswordInput"><b>ConfirmPassword</b></label>
            <input
              type="password"
              id="confirmPasswordInput"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => {
                const confirmPasswordInput = document.getElementById("confirmPasswordInput");
                setShowPassword(!showPassword);
                if (confirmPasswordInput.type === "password") {
                  confirmPasswordInput.type = "text";
                } else {
                  confirmPasswordInput.type = "password";
                }
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
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
    </div>
  );
}

export default Signup;
