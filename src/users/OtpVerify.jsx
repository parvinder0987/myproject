import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as qs from "qs";

function OtpVerify() {
  const router = useNavigate();
  const [otp, setOtp] = useState();
  const authData = sessionStorage.getItem("authData");
  const authDataObj = JSON.parse(authData);
  const id = authDataObj.id;

  const obj = {
    id: id,
    OTP: otp,
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/verifyotp", qs.stringify(obj))
    .then((response) => {
      const role = response?.data?.body?.role;
      console.log("response===========", response);
      if (role === 1) {
        router("/basicdetails");
      } else if (role === 2) {
        router("/login");
      } else {
        router("/");
      }
    })
      .catch((error) => {
        console.log("error", error);
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
              <h4 className="card-title mb-1">Verify Otp</h4>
              {/* <p className="card-text mb-2">
                  Make your app management easy and fun!
                </p> */}
              <form
                className="auth-register-form mt-2"
                action="index.html"
                method="POST"
              >
                <div className="mb-1">
                  <label htmlFor="otp-verify" className="form-label">
                    OTP Verification
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="otp-verify"
                      name="otp-verify"
                      placeholder="Enter OTP"
                      aria-describedby="otp-verify"
                      tabIndex={1}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleOtpVerification}
                    >
                      Verify
                    </button>
                    <br></br>
                    <Link to="/login">back</Link>
                  </div>
                </div>
              </form>
            
            


              {/* </div> */}
              {/* </div> */}
              {/* /Register v1 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OtpVerify;
