import React, { useState } from "react";
import axios from "axios";
// import * as qs from "qs";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function Basicdetails() {
  const router = useNavigate();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [about, setAbout] = useState();
  const [image, setImage] = useState();
  const authData = sessionStorage.getItem("authData");
  const authDataObj = JSON.parse(authData);
  const id = authDataObj.id;
  const name = authDataObj.Name;
  const email = authDataObj.yourEmail;
  const phonenumber = authDataObj.phoneNumber;

  const formattedDob = moment(dob).format("YYYY-MM-DD");

  const basicdata = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("id", id);
    data.append("Gender", gender);
    data.append("DOB", dob);
    data.append("about", about);
    data.append("image", image);

    axios
      .post("http://localhost:5000/updatedetails", data)
      .then((response) => {
        console.log(response, "response==========>");
        sessionStorage.setItem("autData", JSON.stringify(response.data.data));
        router("/educationdetails");
      })
      .catch((error) => {
        console.log(error, "errro=======>");
      });
  };

  return (
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
       <div className="content-wrapper">
         <div className="content-header row"></div>
         <div className="content-body">
          <h1>Basic Details </h1>
          <div className="auth-wrapper auth-v1 px-2">
            <div className="auth-inner py-2">
              {/* Register v1 */}

              <form
                className="auth-register-form mt-2"
                action="index.html"
                method="POST"
              >
                <div className="form-group">
                  <label>image</label>
                  <input
                    type="file"
                    className="form-control-image"
                    id="from control file"
                    // value={image}
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                </div>
                <p>
                  Name:
                  <br /> {name}
                </p>
                <p>
                  yourEmail:
                  <br /> {email}
                </p>
                <p>
                  Phone Number: <br />
                  {phonenumber}
                </p>

            

                <div className="mb-1">
                  <label htmlFor="register-gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    id="register-gender"
                    name="register-gender"
                    aria-describedby="register-gender"
                    tabIndex={3}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-1">
                  <label htmlFor="register-dob" className="form-label">
                    DOB
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="register-dob"
                    name="register-dob"
                    tabIndex={3}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <div className="mb-1">
                  <label htmlFor="register-about" className="form-label">
                    About
                  </label>
                  <div className="input-group input-group-merge form-password-toggle">
                    <textarea
                      className="form-control form-control-merge"
                      id="register-about"
                      name="register-about"
                      placeholder="Tell us about yourself..."
                      aria-describedby="register-about"
                      tabIndex={5}
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>
                </div>
               
                <button
                  className="btn btn-primary w-100"
                  tabIndex={5}
                  onClick={basicdata}
                >
                  Save & Next
                </button>
              </form>
        
          
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Basicdetails;
