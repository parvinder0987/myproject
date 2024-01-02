import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Changepassword() {
  const router = useNavigate("")
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const authData = sessionStorage.getItem('authData');
  const authDataObj = authData ? JSON.parse(authData) : null;
  const id = authDataObj ? authDataObj.id : null;
  const password = authDataObj ? authDataObj.password : null;

  useEffect(() => {

  }, []);
// c
  const handleSubmit = (e) => {
    e.preventDefault();
    router("/dashboard")
    if (!id || newpassword !== confirmpassword) {
      console.log('Invalid data or passwords do not match');
      return;
    }
    axios
      .post('http://localhost:5000/changepassword', {
        id: id,
        oldpassword: oldpassword,
        newpassword: newpassword,
        confirmpassword: confirmpassword,
      })
      .then((response) => {
        console.log('Password change response:', response.data);
      })
      .catch((error) => {
        console.error('Password change error:', error);
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
          <div className="card mb-0">
            <div className="card-body">
           
              <h4 className="card-title mb-1">Change password</h4>
              {/* <p className="card-text mb-2">
                Your new password must be different from previously used
                passwords
              </p> */}
              <form
                className="auth-reset-password-form mt-2"
                action="page-auth-login-v1.html"
                method="POST"
              >
                <div className="mb-1">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="reset-password-new">
                      old Password
                    </label>
                  </div>
                  <div className="input-group input-group-merge form-password-toggle">
                    <input
                      type="password"
                      className="form-control form-control-merge"
                      id="reset-password-new"
                      name="reset-password-new"
                      placeholder="············"
                      aria-describedby="reset-password-new"
                      tabIndex={1}
                      autofocus=""
                      value={oldpassword}
            onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <span className="input-group-text cursor-pointer">
                      <i data-feather="eye" />
                    </span>
                  </div>
                </div>
                <div className="mb-1">
                  <div className="d-flex justify-content-between">
                    <label
                      className="form-label"
                      htmlFor="reset-password-confirm"
                    >
                    New Password
                    </label>
                  </div>
                  <div className="input-group input-group-merge form-password-toggle">
                    <input
                      type="password"
                      className="form-control form-control-merge"
                      id="reset-password-confirm"
                      name="reset-password-confirm"
                      placeholder="············"
                      aria-describedby="reset-password-confirm"
                      tabIndex={2}
                          value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
                    />
                    <span className="input-group-text cursor-pointer">
                      <i data-feather="eye" />
                    </span>
                  </div>
                </div>
                  <div className="mb-1">
                  <div className="d-flex justify-content-between">
                    <label
                      className="form-label"
                      htmlFor="reset-password-confirm"
                    >
                    confirm Password
                    </label>
                  </div>
                  <div className="input-group input-group-merge form-password-toggle">
                    <input
                      type="password"
                      className="form-control form-control-merge"
                      id="reset-password-confirm"
                      name="reset-password-confirm"
                      placeholder="············"
                      aria-describedby="reset-password-confirm"
                      tabIndex={2}
                             value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
                    />
                    <span className="input-group-text cursor-pointer">
                      <i data-feather="eye" />
                    </span>
                  </div>
                </div>
              <button className='btn-btn-change' onClick={handleSubmit}>
          Change
        </button>
              </form>
              <p className="text-center mt-2">
                <a href="page-auth-login-v1.html">
                  {" "}
                  <i data-feather="chevron-left" /> Back to login{" "}
                </a>
              </p>
            </div>
          </div>
          {/* /Reset Password v1 */}
        </div>
      </div>
    </div>
  </div>
</div>
  );
}




export default Changepassword;
