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

  const verifyotps = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/verifyotp", qs.stringify(obj))
      .then((response) => {
        console.log("response===========", response);
        const role = response?.data?.body?.role;
        if (role === 1) {
          router("/basicdetails");
        } else if (role === 2) {
          router("/login");
        }else{
          router("/")
        }
      })
      .catch((error) => {
        console.log("error", error);
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
                  <h3 className="card-title text-left mb-3">Verify OTP</h3>
                  <form>
                    <div className="form-group">
                      <label>Enter OTP</label>
                      <input
                        type="text"
                        className="form-control p_input"
                        value={otp}
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-primary btn-block enter-btn"
                        onClick={verifyotps}
                      >
                        verifyotp
                      </button>
                      <br></br>
                    </div>
                    <br></br>
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <Link to="/forgot" className="forgot-pass">
                        Back
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OtpVerify;
