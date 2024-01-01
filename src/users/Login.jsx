import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
// import * as qs from "qs";
import { useNavigate } from "react-router-dom";

function Login() {
  const router = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const loginData = (e) => {
    e.preventDefault();

    const obj = {
      yourEmail: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/login", obj)
      .then((response) => {
        const role = response?.data?.role;
        localStorage.setItem("userdata", JSON.stringify(response?.data));
        // sessionStorage.setItem("tokenview",JSON.stringify(response?.token))
        console.log(
          "response ============================> ",
          response.data,
          role
        );
        console.log("response ============================> ", response.data);
        if (role === 0) {
          router("/dashboard");
        } else if (role === 1) {
          router("/dummy");
        } else if (role === 2) {
          router("/dummy");
        } else {
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setErrorMessage("Invalid email or password.");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
        console.log("Error =======================> ", err);
      });
  };

  return (
    <div className="bg-img">
      <div className="card-from-group">
        <header><b>Login</b></header>
        <form >
          <div className="field">
            <label htmlFor="login-email">Email</label>
            <input
              type="text"
              id="login-email"
              name="login-email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field space">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              name="login-password"
              placeholder="············"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="pass">
            <a href="/forgot">Forgot Password?</a>
          </div>
          <div className="field">
            <input type="submit" onClick={loginData} defaultValue="LOGIN" />
          </div>
        </form>
        <div className="signup">
          Don't have an account?
          <a href="/register">Signup Now</a>
        </div>
      </div>
    </div>


  );
}

export default Login;
// in this code can u add validation in this when if a user  enter wrong password then error show 