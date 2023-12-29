import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ForgotPassword() {
  const router = useNavigate();
  const handdleForgot = () => {
    router("/verifyOtp");
  };
  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <div className="mb-1">
                    <h4 className="card-title mb-1">Forget Password</h4>
                    <label htmlFor="email" className="form-label">
                      Enter your email to receive OTP
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        aria-describedby="email"
                        tabIndex={1}
                      
                      />
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handdleForgot} 
                      >
                        Send OTP
                      </button>
                      
                    </div>
                    <Link to="/login"><b>Back</b></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
