import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as qs from "qs";

function Signup() {
  const router = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("9876543210");
  const [password, setPassword] = useState("123456");
  const [confirmpassword, setConfrimpassword] = useState("123456");
  const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState("");

  const userrole = (selectedRole) => {
    // alert(selectedRole);
    setRole(selectedRole);
  };
  const abs = {
    Name: name,
    yourEmail: email,
    phoneNumber: phoneNumber,
    password: password,
    ConfirmPassword: confirmpassword,
    role: role,
  };

  const signupdata = (e) => {
    e.preventDefault();
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
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <div className="options-container">
                    <button onClick={() => userrole(1)} className="option">
                      Teacher
                    </button>
                    <button onClick={() => userrole(2)} className="option">
                      Student
                    </button>
                  </div>
                  <h3 className="card-title text-left mb-3">Register</h3>
                  <form>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="email"
                        className="form-control p_input"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>yourEmail</label>
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
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        className="form-control p_input"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </div>
                    {/* ... other existing form fields ... */}
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
                    <div className="form-group">
                      <label>ConfirmPassword</label>
                      <input
                        type="confrimpassword"
                        className="form-control p_input"
                        value={confirmpassword}
                        onChange={(e) => {
                          setConfrimpassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                          />
                          Remember me
                        </label>
                      </div>
                      <a href="/forgot" type="button" className="forgot-pass">
                        Forgot password
                      </a>
                    </div>
                    <div className="text-center">
                      <button
                        to="/login"
                        className="btn btn-primary btn-block enter-btn"
                        onClick={signupdata}
                      >
                        create account
                      </button>
                      <br></br>
                      <br></br>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-facebook col mr-2">
                        <i className="mdi mdi-facebook" /> Facebook{" "}
                      </button>
                      <button className="btn btn-google col">
                        <i className="mdi mdi-google-plus" /> Google plus{" "}
                      </button>
                    </div>
                    <p className="sign-up text-center">
                      Already have an Account?<a href="/login"> Sign Up</a>
                    </p>
                    <p className="terms">
                      By creating an account you are accepting our
                      <Link href="#"> Terms &amp; Conditions</Link>
                    </p>
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

export default Signup;
