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
    <div className="option-card -wrapper">
   
          <form className="userview-data">
        <div className="user-data-view">
      <div className="user-section-section">
        <div className="d-flex justify-content-start">
          <img
            className="img-fluid rounded"
            src="../../../app-assets/images/avatars/7.png"
            height={104}
            width={104}
            alt="User avatar"
          />
        </div>
      </div>
      <div className="user-view">
                <div className="view-group">
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
              <div className="user-view">
                <div className="view-group">
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
              <div className="user-view">
                <div className="view-group">
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
            <div className="user-content">
              <button
                className="only-btn-prim-btn"
                tabIndex={5}
                onClick={handleUpdated}
              >
                edit
              </button>
              <button
                type="reset"
                className="only-btn-secon-btn"
              >
                Reset
              </button>
            </div>
          </form>
        
    </div>
    </div>
      
  
  );
}

export default Userview;
