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
  const [confirmpassword, setConfrimpassword] = useState("123456");
  // const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState("");

  const userrole = (selectedRole) => {
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
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <div className="auth-wrapper auth-v1 px-2">
            <div className="auth-inner py-2">
              {/* Register v1 */}
              <div className="card mb-0">
                <div className="card-body">
                  <a href="#" className="brand-logo">
                    <svg
                      viewBox="0 0 139 95"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      height={28}
                    >
                      <defs>
                        <linearGradient
                          id="linearGradient-1"
                          x1="100%"
                          y1="10.5120544%"
                          x2="50%"
                          y2="89.4879456%"
                        >
                          <stop stopColor="#000000" offset="0%" />
                          <stop stopColor="#FFFFFF" offset="100%" />
                        </linearGradient>
                        <linearGradient
                          id="linearGradient-2"
                          x1="64.0437835%"
                          y1="46.3276743%"
                          x2="37.373316%"
                          y2="100%"
                        >
                          <stop
                            stopColor="#EEEEEE"
                            stopOpacity={0}
                            offset="0%"
                          />
                          <stop stopColor="#FFFFFF" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Artboard"
                          transform="translate(-400.000000, -178.000000)"
                        >
                          <g
                            id="Group"
                            transform="translate(400.000000, 178.000000)"
                          >
                            <path
                              className="text-primary"
                              id="Path"
                              d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                              style={{ fill: "currentColor" }}
                            />
                            <path
                              id="Path1"
                              d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                              fill="url(#linearGradient-1)"
                              opacity="0.2"
                            />
                            <polygon
                              id="Path-2"
                              fill="#000000"
                              opacity="0.049999997"
                              points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                            />
                            <polygon
                              id="Path-21"
                              fill="#000000"
                              opacity="0.099999994"
                              points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                            />
                            <polygon
                              id="Path-3"
                              fill="url(#linearGradient-2)"
                              opacity="0.099999994"
                              points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h2 className="brand-text text-primary ms-1">Vuexy</h2>
                  </a>
                  <div className="options-container">
                    <button onClick={() => userrole(1)} className="option">
                      Teacher
                    </button>
                    <button onClick={() => userrole(2)} className="option">
                      Student
                    </button>
                  </div>
                  <h4 className="card-title mb-1">Adventure starts here 🚀</h4>
                  <p className="card-text mb-2">
                    Make your app management easy and fun!
                  </p>
                  <form
                    className="auth-register-form mt-2"
                    action="index.html"
                    method="POST"
                  >
                    <div className="mb-1">
                      <label htmlFor="register-username" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="register-username"
                        name="register-username"
                        placeholder="johndoe"
                        aria-describedby="register-username"
                        tabIndex={1}
                        autofocus=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="register-email" className="form-label">
                        yourEmail
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="register-email"
                        name="register-email"
                        placeholder="john@example.com"
                        aria-describedby="register-email"
                        tabIndex={2}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-1">
                      <label htmlFor="register-phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="register-phone"
                        name="register-phone"
                        placeholder="Your phone number"
                        aria-describedby="register-phone"
                        tabIndex={3}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="mb-1">
                      <label htmlFor="register-password" className="form-label">
                        Password
                      </label>
                      <div className="input-group input-group-merge form-password-toggle">
                        <input
                          type="password"
                          className="form-control form-control-merge"
                          id="register-password"
                          name="register-password"
                          placeholder="············"
                          aria-describedby="register-password"
                          tabIndex={3}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="input-group-text cursor-pointer">
                          <i data-feather="eye" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-1">
                      <label htmlFor="confirm-password" className="form-label">
                        Confirm Password
                      </label>
                      <div className="input-group input-group-merge form-password-toggle">
                        <input
                          type="password"
                          className="form-control form-control-merge"
                          id="confirm-password"
                          name="confirm-password"
                          placeholder="············"
                          aria-describedby="confirm-password"
                          tabIndex={5}
                          value={confirmpassword}
                          onChange={(e) => setConfrimpassword(e.target.value)}
                        />
                        <span className="input-group-text cursor-pointer">
                          <i data-feather="eye" />
                        </span>
                      </div>
                    </div>
                    <div className="mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="register-privacy-policy"
                          tabIndex={4}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="register-privacy-policy"
                        >
                          I agree to <a href="#">privacy policy &amp; terms</a>
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary w-100"
                      tabIndex={5}
                      onClick={signupdata}
                    >
                      Sign up
                    </button>
                  </form>
                  <p className="text-center mt-2">
                    <span>Already have an account?</span>
                    <a href="page-auth-login-v1.html">
                      <span>Sign in instead</span>
                    </a>
                  </p>
                  <div className="divider my-2">
                    <div className="divider-text">or</div>
                  </div>
                  <div className="auth-footer-btn d-flex justify-content-center">
                    <a href="#" className="btn btn-facebook">
                      <i data-feather="facebook" />
                    </a>
                    <a href="#" className="btn btn-twitter white">
                      <i data-feather="twitter" />
                    </a>
                    <a href="#" className="btn btn-google">
                      <i data-feather="mail" />
                    </a>
                    <a href="#" className="btn btn-github">
                      <i data-feather="github" />
                    </a>
                  </div>
                </div>
              </div>
              {/* /Register v1 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
