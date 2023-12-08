import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as qs from "qs";


function Login() {
  const [email, setEmail] = useState("jhgsdjf");
  const [password, setPassword] = useState("67");
  const [rememberMe, setRememberMe] = useState("")

  const obj = {
    yourEmail: email,
    password: password,
  };
  

  const loginData = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/login", qs.stringify(obj))
      .then((response) => {
        console.log("response ============================> ", response);
      })
      .catch((err) => {
        console.log("Error =======================> ", err);
      });
  };

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">Login here</h3>
                  <form>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control p_input"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control p_input"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" value={rememberMe} onChange={()=> setRememberMe(!rememberMe)} />{" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <Link to={"/forgot"} className="forgot-pass">
                        Forgot password
                      </Link>
                    </div>
                    <div className="text-center">
                      {/* <Link
                        to="/login"
                        className="btn btn-primary btn-block enter-btn"
                      >
                        Login
                      </Link> */}
                      <br></br>
                    </div>
                    <div>
                      <button className="btn btn-primary btn-block enter-btn" onClick={loginData}>login</button>
                    </div>
                    {/* <div className="d-flex">
                      <button className="btn btn-facebook col mr-2">
                        <i className="mdi mdi-facebook" /> Facebook{" "}
                      </button>
                      <button className="btn btn-google col">
                        <i className="mdi mdi-google-plus" /> Google plus{" "}
                      </button>
                    </div> */}
                    {/* <p className="sign-up text-center">
                      Already have an Account?<a href="/login"> Sign Up</a>
                    </p>
                    <p className="terms">
                      By creating an account you are accepting our
                      <a href="#"> Terms &amp; Conditions</a>
                    </p> */}
                  </form>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* row ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </div>
  );
}

export default Login;
