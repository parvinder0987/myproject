import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../apis";
import * as qs from "qs";

function OtpVerify() {
  const router = useNavigate();
  const [otp, setOtp] = useState();
  const authData = localStorage.getItem("authData");
  const authDataObj = JSON.parse(authData);
  const id = authDataObj.id;
 

  const obj = {
    id: id,
    OTP: otp,
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    axios
      .post("/verifyotp", qs.stringify(obj))
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

  const resendOtp = () => {
    const ob = {
      id: id,
      // token:token
    };
    axios
      .post("/resendotp", qs.stringify(ob),)
      // alert(id)
      .then((response) => {
        alert("OTP has been sent to your registered email address");
        console.log("response===========", response);
      })
      .catch((error) => {
        console.log("Error======", error);
      });
  };

  return (
    <div className="card-otp-group">
    <div className="otp-succes-form">
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
          className="btn btn-btn"
          type="button"
          onClick={handleOtpVerification}
        >
          Verify
        </button>
        <br></br>
        <button className="btn btn-secondary" type="button" onClick={resendOtp}>
          Resend OTP
        </button>

        <br></br>
        <Link to="/login">back</Link>
      </form>
    </div>
    </div>
  );
}
export default OtpVerify;
