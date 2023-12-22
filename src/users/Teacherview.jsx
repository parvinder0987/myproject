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
  const [skills,setSkills] = useState('')

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
        setSkills(response.data.user.skills)
      })
      .catch((error) => {
        // alert(error);
        console.log("error===", error);
      });
  }, []);

  const handleUpdated = (e) => {
    e.prevent.Default();
    console.log("form:", { name, email, phoneNumber,education });
  };
  return (
    <div>
      <div className="content-body">
        {/* users edit start */}
        <section className="app-user-edit">
          <div className="card">
            <div className="card-body">
              <div className="tab-content">
                {/* Account Tab starts */}
                <div
                  className="tab-pane active"
                  id="account"
                  aria-labelledby="account-tab"
                  role="tabpanel"
                >
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
                      <div className="col-md-4">
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
                      </div>
                      <div className="col-md-4">
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
                      </div>
                      <div className="col-md-4">
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
                      </div>
                      <div className="col-md-4">
                      <div className="class-group">
                        <label htmlFor="phoneInput">skills:</label>
                        <input
                          type="tel"
                          id="phoneInput"
                          name="phoneNumber"
                          value={skills}
                          onChange={(e) => setSkills(e.target.value)}
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
                      <div className="col-md-4">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="status">
                            Status
                          </label>
                          <select className="form-select" id="status">
                            <option>Active</option>
                            <option>Blocked</option>
                            <option>Deactivated</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="role">
                            Role
                          </label>
                          <select className="form-select" id="role">
                            <option>Admin</option>
                            <option>User</option>
                            <option>Staff</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="company">
                            Company
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="WinDon Technologies Pvt Ltd"
                            placeholder="Company name"
                            id="company"
                          />
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

export default Teacherview;
