import React, { useState } from "react";
import axios from "axios";
import * as qs from "qs";
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

  // const obj = {
  //   id,
  //   Gender: gender,
  //   DOB: dob,
  //   about: about,
  //   image: image,
  // };

  const basicdata = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("id", id);
    data.append("Gender", gender);
    data.append("DOB", dob);
    data.append("about", about);
    data.append("image", image);
   
    axios.post("http://localhost:5000/updatedetails", data)
      .then((response) => {
        console.log(response, "response==========>");
        sessionStorage.setItem("autData", JSON.stringify(response.data.data));
        // sessionStorage.setItem("autData",JSON.stringify(response.data.data.Gender))
        // sessionStorage.setItem("autData",JSON.stringify(response.data.data.DOB))
        // sessionStorage.setItem("autData",JSON.stringify(response.data.data.about))
        router("/educationdetails");
      })
      .catch((error) => {
        console.log(error, "errro=======>");
      });
  };

  // const imageupload = (e) => {
  //   const image = e.target.files[0];
  //   setImage(image);
  // };

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">BasicDetails</h3>

                  <form>
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

                    <div className="form-group">
                      <label>Gender</label>
                      <select
                        className="form-control p_input"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      >
                        <option selected disabled>
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>DOB</label>
                      <input
                        type="text"
                        className="form-control p_input"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>About</label>
                      <input
                        type="text"
                        className="form-control p_input"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      />
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between"></div>
                    <div className="text-center">
                      {/* Add any text or links for the form footer */}
                      <br />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-block enter-btn"
                        onClick={basicdata}
                      >
                        Save&Next
                      </button>
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

export default Basicdetails;
