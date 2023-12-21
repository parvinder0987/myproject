import axios from "axios";
import React, { useState } from "react";

function EducationDetails() {
  const [education, setEducation] = useState("");
  const [stream, setStream] = useState("");
  const [document, setDocument] = useState("");
  const [employmentType, setEmploymentType] = useState("full-time");
  const authData = sessionStorage.getItem("authData");
  const authDataObj = JSON.parse(authData);
  const id = authDataObj.id;

  const handlechange = (type) => {
    setEmploymentType(type);
  };

  const saveData = () => {
    let data = new FormData();
    data.append("id", id);
    data.append("education", education);
    data.append("stream", stream);
    data.append("document", document);
    data.append("employmentType", employmentType);

    axios
      .post("http://localhost:5000/education", data)
      .then((response) => {
        console.log("Data saved successfully:", response.data);
        sessionStorage.setItem("authData", JSON.stringify(response.data.data));
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div className="app-content content">
      <div className="content-overlay" />
      {/* <div className="header-navbar-shadow" /> */}
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <h1>Education details</h1>
          <div className="auth-wrapper auth-v1 px-2">
            <div className="auth-inner py-2">
              <form>
                <div className="mb-1">
                  <label htmlFor="register-education" className="form-label">
                    <b>Education</b>
                  </label>
                  <select
                    className="form-select"
                    id="register-education"
                    name="register-education"
                    aria-describedby="register-education"
                    tabIndex={3}
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Education
                    </option>
                    <option value="bachelors">Bachelors</option>
                    <option value="masters">Masters</option>
                  </select>
                </div>

                <div className="mb-1">
                  <label htmlFor="register-stream" className="form-label">
                    <b>Stream</b>
                  </label>
                  <select
                    className="form-select"
                    id="register-stream"
                    name="register-stream"
                    aria-describedby="register-stream"
                    tabIndex={3}
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Stream
                    </option>
                    <option value="engineering">Engineering</option>
                    <option value="science">Science</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="document">Document</label>
                  <input
                    type="file"
                    className="form-control-image"
                    id="document"
                    onChange={(e) => {
                      setDocument(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="full-time" className="form-label">
                    <b>Employment Type</b>
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="full-time"
                      name="employment-type"
                      value="full-time"
                      checked={employmentType === "full-time"}
                      onChange={() => handlechange("full-time")}
                    />
                    <label className="form-check-label" htmlFor="full-time">
                      Full-time
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="part-time"
                      name="employment-type"
                      value="part-time"
                      checked={employmentType === "part-time"}
                      onChange={() => handlechange("part-time")}
                    />
                    <label className="form-check-label" htmlFor="part-time">
                      Part-time
                    </label>
                  </div>
                </div>

                <button
                  className="btn btn-primary w-100"
                  tabIndex={5}
                  onClick={saveData}
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

export default EducationDetails;
