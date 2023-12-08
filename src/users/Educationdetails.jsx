import axios from 'axios'
import React, { useState } from 'react'


function Educationdetails() {

    const [education, setEducation]= useState()
    const [stream , setStream] = useState()
    const [partime,setPartime] = useState()
    const [fuulltime,setFulltime] = useState()
    const [document, setDocument] = useState()




    const educateddata = (e)=>{
      axios.put("/")
    }
  return (
    <div>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Education Details</h3>
                  <p>please upload your certificate, degree of your education </p>
                <form>
                  <div className="form-group">
                
                    {/* <input
                      type="text"
                      className="form-control p_input"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    /> */}
                    <select
                      className="form-control p_input"
                      value={education}
                      onChange={(e) => {
                        setEducation(e.target.value);
                      }}
                    >
                      <option selected disabled>
                        Select Education
                      </option>
                      <option value="#">+2</option>
                      <option value="#">Bachelor</option>
                    </select>
                  </div>
                  <select 
                  className='form-control p_input' value={stream} onChange={(e)=>{
                    setStream(e.target.value)
                  }}
                  >
                    <option selected disabled>
                      Select stream
                    </option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="BCOM">BCom</option>
                    <option value="BSC">BSC</option>
                    <option value="BA">BA</option>
                  </select>

                  <input type='checkbox'  id="parttime" value={partime} >
                    <label for="checkbox" >Parttime</label>
                  </input>
                  
                  <div className="form-group d-flex align-items-center justify-content-between">
                    {/* Add any additional form elements or controls here */}
                  </div>
                  <div className="text-center">
                    {/* Add any text or links for the form footer */}
                    <br />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block enter-btn"
                      onClick={educateddata}
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
  )
}

export default Educationdetails
