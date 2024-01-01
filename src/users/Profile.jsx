import React from 'react'

function Profile() {
  return (
      <div className="col-12">
          <div className="card profile-header mb-2">
              {/* profile cover photo */}
        
              <div className="position-relative">
                  <div className="profile-img-container d-flex align-items-center">
                      <div className="profile-img">
                          <img
                              src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                              className="rounded img-fluid"
                              alt="Card image"
                          />
                      </div>
                      <div className="profile-title ms-3">
                          <h2 className="text-white">Kitty Allanson</h2>
                          <p className="text-white">UI/UX Designer</p>
                      </div>
                  </div>
              </div>
              {/* tabs pill */}
              <div className="profile-header-nav">
                  {/* navbar */}
                  <nav className="navbar navbar-expand-md navbar-light justify-content-end justify-content-md-between w-100">
                      <button
                          className="btn btn-icon navbar-toggler waves-effect waves-float waves-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-align-justify font-medium-5"
                          >
                              <line x1={21} y1={10} x2={3} y2={10} />
                              <line x1={21} y1={6} x2={3} y2={6} />
                              <line x1={21} y1={14} x2={3} y2={14} />
                              <line x1={21} y1={18} x2={3} y2={18} />
                          </svg>
                      </button>
                      {/* collapse  */}
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <div className="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0">
                              <ul className="nav nav-pills mb-0">
                                  <li className="nav-item">
                                      <a className="nav-link fw-bold active" href="#">
                                          <span className="d-none d-md-block">Feed</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={14}
                                              height={14}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-rss d-block d-md-none"
                                          >
                                              <path d="M4 11a9 9 0 0 1 9 9" />
                                              <path d="M4 4a16 16 0 0 1 16 16" />
                                              <circle cx={5} cy={19} r={1} />
                                          </svg>
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link fw-bold" href="#">
                                          <span className="d-none d-md-block">About</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={14}
                                              height={14}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-info d-block d-md-none"
                                          >
                                              <circle cx={12} cy={12} r={10} />
                                              <line x1={12} y1={16} x2={12} y2={12} />
                                              <line x1={12} y1={8} x2="12.01" y2={8} />
                                          </svg>
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link fw-bold" href="#">
                                          <span className="d-none d-md-block">Photos</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={14}
                                              height={14}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-image d-block d-md-none"
                                          >
                                              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                                              <circle cx="8.5" cy="8.5" r="1.5" />
                                              <polyline points="21 15 16 10 5 21" />
                                          </svg>
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link fw-bold" href="#">
                                          <span className="d-none d-md-block">Friends</span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={14}
                                              height={14}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-users d-block d-md-none"
                                          >
                                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                              <circle cx={9} cy={7} r={4} />
                                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                          </svg>
                                      </a>
                                  </li>
                              </ul>
                              {/* edit button */}
                              <button className="btn btn-primary waves-effect waves-float waves-light">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={14}
                                      height={14}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-edit d-block d-md-none"
                                  >
                                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                  </svg>
                                  <span className="fw-bold d-none d-md-block">Edit</span>
                              </button>
                          </div>
                      </div>
                      {/*/ collapse  */}
                  </nav>
                  {/*/ navbar */}
              </div>
          </div>
      </div>

  )
}

export default Profile