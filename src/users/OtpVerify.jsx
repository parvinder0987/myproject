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
    <div className="otp-verification-form">
    <h2>OTP Verification</h2>
    <form>
      <label htmlFor="otpInput">Enter OTP:</label>
      <input
        type="text"
        id="otpInput"
        className="otp-input"
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
    </form>
  </div>
  );
}
export default OtpVerify;
