import React, { useState } from 'react'
import axios from 'axios'

function Experience() {

    const [expereince,setExperience] = useState("")
    const [description,setDescription] = useState("")
    const [skills,setSkills] = useState("")
    const authData =sessionStorage.getItem("authData")
    const authDataObj = JSON.parse(authData)
    const id = authDataObj.id


    const experincedata = () => {
        let data = new FormData();
        data.append("id", id);
        data.append("expereince",expereince);
        data.append("description",description);
        data.append("skills",skills)
    
        axios
          .post("http://localhost:5000/education", data)
          .then((response) => {
            console.log("Data saved successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error saving data:", error);
          });
      };
  return (
    <div className="app-content content">
    <div className="content-overlay" />
    <div className="header-navbar-shadow" />
    <div className="content-wrapper">
      <div className="content-header row"></div>
      <div className="content-body">
        <h1>Experience</h1>
        <div className="auth-wrapper auth-v1 px-2">
          <div className="auth-inner py-2">
            <form>
              <div className="mb-1">
                <label htmlFor="register-education" className="form-label">
                  <b>experience select (in years)</b>
                </label>
                <select
                  className="form-select"
                  id="register-education"
                  name="register-education"
                  aria-describedby="register-education"
                  tabIndex={3}
                  value={expereince}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="" disabled>
                    Select Experience
                  </option>
                  <option value="#">0-1year</option>
                  <option value="#">1-2year</option>
                  <option value="#">2-4year</option>
                  <option value="#">4years above</option>
                </select>
              </div>

              <div className="mb-1">
                  <label htmlFor="register-description" className="form-label">
                 desciption
                  </label>
                  <div className="input-group input-group-merge form-password-toggle">
                    <textarea
                      className="form-control form-control-merge"
                      id="register-description"
                      name="register-description"
                      placeholder="Tell us about yourself..."
                      aria-describedby="register-description"
                      tabIndex={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-1">
                <label htmlFor="register-education" className="form-label">
                  <b>skills</b>
                </label>
                <div
                  className="form-select"
                  id="register-education"
                  name="register-education"
                  aria-describedby="register-education"
                  tabIndex={3}
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                >
            
                </div>
              </div>
    
              <button
                className="btn btn-primary w-100"
                tabIndex={5}
                onClick={experincedata}
              >
                Save & Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Experience
