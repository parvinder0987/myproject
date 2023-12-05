import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OtpVerify() {

  const [otp,setOtp] = useState()

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
                      <input type="email" className="form-control p_input" value={otp} onChange={(e)=>{
                        setOtp(e.target.value)
                      }} />
                    </div>
                    <div className="text-center">
                      <Link                                                                                                                                                                                                                                                                             
                        to="/login"                                                     
                        className="btn btn-primary btn-block enter-btn"                 
                      >                                                                                                                                                 
                        Login                                                                                                           
                      </Link>
                      <br></br>
                    </div>
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
