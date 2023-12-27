import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import axios from "axios";
import * as qs from "qs";

function Userlist() {
  const router = useNavigate();
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  // const tokenData = sessionStorage.getItem("tokenData")
  // const tokenobject = JSON.parse(tokenData)
  // const token = tokenobject.id

  const abc = {
    role: 2,
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/rolelistening", qs.stringify(abc))
      .then((response) => {
        console.log(response,"response==============")
        const usersWithStatus = response.data.user.map((userData) => ({
          ...userData,
          status: userData.listening
        }));
        setUser(usersWithStatus);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleDelete = (userId) => {
    alert(userId);
    const data = {
      id: userId,
    };

    axios
      .delete("http://localhost:5000/delete", { data })
      .then((response) => {
        console.log("User deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const userviewData = (id) => {
    sessionStorage.setItem("userID",id);
    router("/userviewdata");
  };

  const changestatus = (userId, currentStatus) => {
    axios
      .put("http://localhost:5000/statuschange")
      .then((response) => {
        console.log(response)
        setUser((prevTeachers) =>
          prevTeachers.map((t) =>
            t.id === userId ? { ...t, status: !currentStatus ? "Active" : "Inactive" } : t
          )
        );
      })
      .catch((error) => {
        console.error("Error  status", error);
      });
  };
  
  const filteruser = user.filter((userData) => {
    const searchTerm = search.toLowerCase();
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
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-5">
                    `  <h2>
                        <b>User Listing</b>
                      </h2>`
                    </div>
                    <div className="col-sm-7">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                    <div className="col">
                          <Link to="/addnewuser" className="btn btn-secondary">
                            
                            <span>Add New User</span>
                          </Link>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>PhoneNumber</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteruser.map((userData) => (
                          <tr key={userData?.id}>
                            <td>{userData?.id}</td>
                            <td>{userData?.Name}</td>
                            <td>{userData?.yourEmail}</td>
                            <td>{userData?.phoneNumber}</td>
                            <td>  <button
                                className={`btn ${userData.status === 'Active' ? 'btn-success' : 'btn-secondary'}`}
                                onClick={() => changestatus(userData.id, userData.status === 'Active')}
                              >
                                {userData.status === 'Active' ? <FaToggleOn /> : <FaToggleOff />}
                              </button></td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  userviewData(userData?.id);
                                }}
                              >
                                <FaEye />
                              </button>
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
    </div>
  );
}

export default Userlist;
