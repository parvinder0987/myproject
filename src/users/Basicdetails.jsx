import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Basicdetails() {
  const router = useNavigate();
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const authData = localStorage.getItem("authData");
  const authDataObj = JSON.parse(authData);
  const id = authDataObj.id;
  const name = authDataObj.Name;
  const email = authDataObj.yourEmail;
  const phonenumber = authDataObj.phoneNumber;

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      // setFile(e.target.files[0])
    }
  };
  const basicdata = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("id", id);
    data.append("Gender", gender);
    data.append("DOB", dob);
    data.append("about", about);
   data.append("image", image);
console.log(image);
    axios
      .post("http://localhost:5000/updatedetails", data)
      .then((response) => {
        console.log(response, "response basicdetail==========>");
        router("/educationdetails");
      })
      .catch((error) => {
        console.log(error, "error=======>");
      });
  };
  return (
    <div className="card-deatils-group">
      <h1>Basic Details </h1>
      <div className="form-control-image">
          <input type="file" id="image" onChange={handleImageChange} />
          {image && (
            <img src={image} alt="Uploaded" className="preview-image" />
          )}
        </div>
      <form
        className="basic-group-from"
        action="index.html"
        method="POST"
      >
      
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

        <div className="input-deatils">
          <label className="basic-label">
            Gender
          </label>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderMale"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="genderMale">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderFemale"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="genderFemale">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderPreferNotToSay"
                value="preferNotToSay"
                checked={gender === "preferNotToSay"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="genderPreferNotToSay">
                Prefer not to say
              </label>
            </div>
          </div>
        </div>

        <div className="input-deatils">
          <label htmlFor="register-dob" className="basic-label">
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

        <div className="input-deatils">
          <label htmlFor="register-about" className="basic-label">
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
        </div><br></br>

        <button
          className="btn btn-secondary"
          tabIndex={5}
          onClick={basicdata}
        >
          Save & Next
        </button>
      </form>
      {/* <div className="signup">
                Don't have an account?
                <a href="/register">Signup Now</a>
            </div> */}
    </div>
  );
}

export default Basicdetails;
