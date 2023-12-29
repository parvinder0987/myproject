import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import axios from "axios";
import * as qs from "qs";

function Userlist() {
  const router = useNavigate();
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const formOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const showAddTeacherModal = () => {
    formOpen();
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
              <div className="card">
                <div className="card-datatable table-responsive pt-0">
                  {/* Search and Add Button Section */}
                  <div className="col-sm-12 col-md-8 col-lg-6 ps-xl-75 ps-0">
                    <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end align-items-center flex-sm-nowrap flex-wrap me-1">
                      <div className="me-1">
                        <div id="DataTables_Table_0_filter" className="dataTables_filter">
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control"
                              placeholder="Search..."
                              style={{ maxWidth: "300px" }}
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              aria-controls="DataTables_Table_0"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="dt-buttons btn-group flex-wrap">
                        <button
                          className="btn add-new btn-primary mt-50"
                          tabIndex="0"
                          aria-controls="DataTables_Table_0"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#modals-slide-in"
                          onClick={showAddTeacherModal}
                        >
                          <span>Add New User</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Table Section */}
                  <table className="user-list-table table">
                    <thead className="table-light">
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
                          <td>
                            <button
                              className={`btn ${userData.status === 'Active' ? 'btn-success' : 'btn-secondary'}`}
                              onClick={() => changestatus(userData.id, userData.status === 'Active')}
                            >
                              {userData.status === 'Active' ? <FaToggleOn /> : <FaToggleOff />}
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => userviewData(userData?.id)}
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

                  {/* Pagination */}
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
             


            {isModalOpen && (
              <form>

                <div className="modal" style={{ display: "block" }}>
                  <div className="modal-content">
                    <div classname="model-header mb-1">
                      <h5 classname="model-title" id="exampleModelLabel">
                        New User
                      </h5>
                    </div>
                    <div classname="model-body flex-grow-1">
                      <div classname="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">
                          {" "}
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control dt-full-name"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          name="user-fullname"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                        />
                      </div>
                      <div classname="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">
                          yourEmail
                        </label>
                        <input
                          type="text"
                          className="form-control dt-full-name"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          name="user-fullname"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                        />
                      </div>
                      <div classname="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">
                          PHONENUMBER
                        </label>
                        <input
                          type="text"
                          className="form-control dt-full-name"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          name="user-fullname"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                        />
                      </div>
                      <div classname="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">
                          GENDER
                        </label>
                        <input
                          type="text"
                          className="form-control dt-full-name"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          name="user-fullname"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                        />
                      </div>
                      <div classname="mb-1">
                        <label classname="form-label" htmlfor="basic-icon-default-fullname">
                          GENDER
                        </label>
                        <img
                          src="path_to_your_image.jpg"
                          classname="img-fluid"
                          id="basic-icon-default-fullname"
                        />
                      </div>
                      <div classname="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">
                          EDUCATION
                        </label>
                        <input
                          type="text"
                          className="form-control dt-full-name"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          name="user-fullname"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                        />
                      </div>
                      <div classname="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">
                          STREAM
                        </label>
                        <input
                          type="text"
                          className="form-control dt-full-name"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          name="user-fullname"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                        />
                      </div>
                      <div classname="mb-2">
                        <label className="form-label" htmlFor="user-plan">
                          Select Plan
                        </label>
                        <select id="user-plan" className="form-select" aria-invalid="false">
                          <option value="basic">Basic</option>
                          <option value="enterprise">Enterprise</option>
                          <option value="company">Company</option>
                          <option value="team">Team</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary me-1 data-submit waves-effect waves-float waves-light"
                  >
                    Submit
                  </button>
                  <button onClick={formOpen}>Close</button>
                </div>
              </form>
            )}
       
      </div>

        
        
  );
}

export default Userlist;
