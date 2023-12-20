import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import axios from "axios";
import * as qs from "qs";

function Teacherlist() {
  const [teacher, setTeacher] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const abc = {
    role: 1,
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/rolelistening", qs.stringify(abc))
      .then((response) => { 
        const teacherwithstatus = response.data.user.map((userData)=>({
          ...userData,
          status: userData.listening ? "Active" : "Inactive",
        }))
        // console.log("response", response);
        setTeacher(teacherwithstatus);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const handleDelete = (userId) => {
 alert(userId)
    const obj = {
      id: userId,
    }
    axios.delete("http://localhost:5000/delete",{ obj })
    .then((response)=>{
      console.log("data will be deleted",response.obj)
    }).catch((error)=>{
      console.log("error",error)
    })
  };
  const filteredTeacher = teacher.filter((userData) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      userData.Name.toLowerCase().includes(searchTerm) ||
      userData.id.toString().includes(searchTerm)
    );
  });

  return (
    <div className="app-content content">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <div className="auth-wrapper auth-v1 px-2">
            <div className="container-xl">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-5">
                        <h2>
                          <b>Teacher Listing</b>
                        </h2>
                      </div>
                      <div className="col-sm-7">
                        <div className="row">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                          </div>
                          <div className="col">
                            <a href="/addnewuser" className="btn btn-secondary">
                              <i className="material-icons"></i>{" "}
                              <span>Add New User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>PhoneNumber</th>
                        <th>Gender</th>
                        <th>image</th>
                        <th>education</th>
                        <th>stream</th>
                        <th>employeType</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTeacher.map((userData) => (
                        <tr key={userData?.id}>
                          <td>{userData?.id}</td>
                          <td>{userData?.Name}</td>
                          <td>{userData?.phoneNumber}</td>
                          <td>{userData?.Gender}</td>
                          {/* <td>{userData?.image}</td> */}
                          <td>
                            <img src={userData?.image} />
                          </td>
                          <td>{userData?.education}</td>
                          <td>{userData?.stream}</td>
                          <td>{userData?.employeType}</td>
                          <td>
                            <Link
                              to={`/view/${userData?.id}`}
                              className="btn btn-primary"
                            >
                              <FaEye />
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(userData?.id)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacherlist;
