import axios from "axios";
import React, { useEffect, useState } from "react";
import * as qs from "qs";

function Userview() {
  const id = sessionStorage.getItem("userID");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const obj = {
      id: id,
    };
    axios
      .post(`http://localhost:5000/viewdata`, qs.stringify(obj))
      .then((response) => {
        setName(response.data.user.Name);
        setEmail(response.data.user.yourEmail);
        setPhoneNumber(response.data.user.phoneNumber);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleUpdated = (e) => {
    e.prevent.Default();
    console.log("form:", { name, email, phoneNumber });
  };

  return (
    <div>
      <div className="content-body">
        {/* users edit start */}
        <section className="app-user-edit">
          <div className="card card-class2">
            <div className="card-body">
              {/* <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center active"
                    id="account-tab"
                    data-bs-toggle="tab"
                    href="#account"
                    aria-controls="account"
                    role="tab"
                    aria-selected="true"
                  >
                    <i data-feather="user" />
                    <span className="d-none d-sm-block">Account</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center"
                    id="information-tab"
                    data-bs-toggle="tab"
                    href="#information"
                    aria-controls="information"
                    role="tab"
                    aria-selected="false"
                  >
                    <i data-feather="info" />
                    <span className="d-none d-sm-block">Information</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center"
                    id="social-tab"
                    data-bs-toggle="tab"
                    href="#social"
                    aria-controls="social"
                    role="tab"
                    aria-selected="false"
                  >
                    <i data-feather="share-2" />
                    <span className="d-none d-sm-block">Social</span>
                  </a>
                </li>
              </ul> */}
              <div className="tab-content">
                {/* Account Tab starts */}
                <div
                  className="tab-pane active"
                  id="account"
                  aria-labelledby="account-tab"
                  role="tabpanel"
                >
                  {/* users edit start */}
                  {/* <div className="d-flex mb-2">
                    <img
                      src="/app-assets/images/avatars/7.png"
                      alt="users avatar"
                      className="user-avatar users-avatar-shadow rounded me-2 my-25 cursor-pointer"
                      height={90}
                      width={90}
                    />
                  </div> */}
                  {/* users edit ends */}
                  {/* users edit account form start */}
                  <form className="form-validate">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="class-group">
                          <label htmlFor="nameInput">Name</label>
                          <input
                            type="text"
                            id="nameInput"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="class-group">
                          <label htmlFor="emailInput">Your Email:</label>
                          <input
                            type="email"
                            id="emailInput"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="class-group">
                          <label htmlFor="phoneInput">Phone Number:</label>
                          <input
                            type="tel"
                            id="phoneInput"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex flex-sm-row flex-column mt-2">
                      <button
                        className="btn-btn-primary w-100"
                        tabIndex={5}
                        onClick={handleUpdated}
                      >
                        edit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-secondary"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Userview;
