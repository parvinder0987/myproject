import axios from "axios";
import React, { useEffect, useState } from "react";
import * as qs from "qs";

function Teacherview() {
  const id = sessionStorage.getItem("teacherId");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender,setGender] =useState("")
  const [dob,setDob] =useState("")
  const [education,setEducation] =useState("")

  useEffect(() => {
    const ob = {
      id: id,
    };

    axios
      .post(`http://localhost:5000/viewdata`, qs.stringify(ob))
      .then((response) => {
        setName(response.data.user.Name);
        setEmail(response.data.user.yourEmail);
        setPhoneNumber(response.data.user.phoneNumber);
        setGender(response.data.user.Gender)
        setEducation(response.data.user.education)
        setDob(response.data.user.DOB)
      })
      .catch((error) => {
        // alert(error);
        console.log("error===", error);
      });
  }, []);

  const handleUpdated = (e) => {
    e.prevent.Default();
    console.log("form:", { name, email, phoneNumber });
  };
  return (
    <div className="card">
      <form>
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
        <div className="class-group">
          <label htmlFor="phoneInput">Gender:</label>
          <input
            type="gender"
            id="genderinput"
            name="genderinput"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>

        <div className="class-group">
          <label htmlFor="phoneInput">Date of Birth:</label>
          <input
            type="dob"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="class-group">
          <label htmlFor="phoneInput">Education:</label>
          <input
            type="education"
            id="educationInput"
            name="educationNumber"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          />
        </div>
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
        <br />

        <button
          className="btn-btn-primary w-100"
          tabIndex={5}
          onClick={handleUpdated}
        >
          edit
        </button>
      </form>
    </div>
  );
}

export default Teacherview;
