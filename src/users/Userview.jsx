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
        <br />

        <button
          className="btn-btn-primary w-100"
          tabIndex={5}
          onClick={handleUpdated}
        >
          edit
        </button>
        {/* <p style={{ marginTop: "10px" }}>
        Already have an account? <a href="/login">Login</a>
      </p> */}
      </form>
    </div>
  );
}

export default Userview;
