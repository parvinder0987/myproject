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
                  <h3 className="card-title text-left mb-3">Forget password</h3>
                  <form>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control p_input" />
                    </div>
                    <div className="text-center">
                      <button
                        onClick={handdleForgot}
                        to="/login"
                        className="btn btn-primary btn-block enter-btn"
                      >
                        Submit
                      </button>
                      <br></br>
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <Link to="/login" className="forgot-pass">
                        Back to login
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

export default ForgotPassword;
