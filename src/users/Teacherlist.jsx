import React from 'react'

function Teacherlist() {
  return (
    <div className="row ">
            <div className="col-12 grid-margin">
              <div className="card">
                {/* <div className='card-container'> */}
                <div className="card-body">
                  <h4 className="card-title"><b>Teacher Listening</b></h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>
                            {/* <div className="form-check form-check-muted m-0">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </label>
                            </div> */}
                          </th>
                          <th><b>id</b></th>
                          <th><b>Name</b></th>
                          <th><b>yourEmail</b></th>
                          <th><b>Gender</b></th>
                          <th><b>Profile<br></br>Image</b></th>
                          <th><b>Experience</b></th>
                          <th><b>stream</b></th>
                          <th><b>Fulltime& <br></br>Parttime</b></th>
                          {/* <th><b>Parttime</b></th> */}
                          <th><b>Total<br></br>Experience</b></th>
                          <th><b>Address</b></th>
                          <th><b>Upload id aproof</b></th>
                          <th><b>Status</b></th>
                          <th><b>Action</b></th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr>
                          <td>
                            <div className="form-check form-check-muted m-0">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </label>
                            </div>
                          </td>
                          <td>
                            <img
                              src="assets/images/faces/face1.jpg"
                              alt="image"
                            />
                            <span className="pl-2">Henry Klein</span>
                          </td>
                          <td> 02312 </td>
                          <td> $14,500 </td>
                          <td> Dashboard </td>
                          <td> Credit card </td>
                          <td> 04 Dec 2019 </td>
                          <td>
                            <div className="badge badge-outline-success">
                              Approved
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check form-check-muted m-0">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </label>
                            </div>
                          </td>
                          <td>
                            <img
                              src="assets/images/faces/face2.jpg"
                              alt="image"
                            />
                            <span className="pl-2">Estella Bryan</span>
                          </td>
                          <td> 02312 </td>
                          <td> $14,500 </td>
                          <td> Website </td>
                          <td> Cash on delivered </td>
                          <td> 04 Dec 2019 </td>
                          <td>
                            <div className="badge badge-outline-warning">
                              Pending
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check form-check-muted m-0">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </label>
                            </div>
                          </td>
                          <td>
                            <img
                              src="assets/images/faces/face5.jpg"
                              alt="image"
                            />
                            <span className="pl-2">Lucy Abbott</span>
                          </td>
                          <td> 02312 </td>
                          <td> $14,500 </td>
                          <td> App design </td>
                          <td> Credit card </td>
                          <td> 04 Dec 2019 </td>
                          <td>
                            <div className="badge badge-outline-danger">
                              Rejected
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check form-check-muted m-0">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </label>
                            </div>
                          </td>
                          <td>
                            <img
                              src="assets/images/faces/face3.jpg"
                              alt="image"
                            />
                            <span className="pl-2">Peter Gill</span>
                          </td>
                          <td> 02312 </td>
                          <td> $14,500 </td>
                          <td> Development </td>
                          <td> Online Payment </td>
                          <td> 04 Dec 2019 </td>
                          <td>
                            <div className="badge badge-outline-success">
                              Approved
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check form-check-muted m-0">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </label>
                            </div>
                          </td>
                          <td>
                            <img
                              src="assets/images/faces/face4.jpg"
                              alt="image"
                            />
                            <span className="pl-2">Sallie Reyes</span>
                          </td>
                          <td> 02312 </td>
                          <td> $14,500 </td>
                          <td> Website </td>
                          <td> Credit card </td>
                          <td> 04 Dec 2019 </td>
                          <td>
                            <div className="badge badge-outline-success">
                              Approved
                            </div>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="clearfix">
          <div className="hint-text">
            Showing <b>5</b> out of <b>25</b> entries
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#">Previous</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </div>
              {/* </div> */}
            </div>
          </div>
  )
}

export default Teacherlist
