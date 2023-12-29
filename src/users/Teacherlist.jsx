import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import axios from "axios";
import * as qs from "qs";

function Teacherlist() {
  const router = useNavigate();
  const [teacher, setTeacher] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const abc = {
      role: 1,
    };

    axios
      .post("http://localhost:5000/rolelistening", qs.stringify(abc))
      .then((response) => {
        const teacherwithstatus = response.data.user.map((userData) => ({
          ...userData,
          status: userData.listening,
        }));
        setTeacher(teacherwithstatus);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleDelete = (userId) => {
    alert(userId);
    axios
      .delete("http://localhost:5000/delete", { data: { id: userId } })
      .then((response) => {
        console.log("data will be deleted:", response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const viewData = (id) => {
    sessionStorage.setItem("teacherId", id);
    router("/viewdata");
  };

  const changestatus = (userId, currentStatus) => {
    axios
      .put("http://localhost:5000/statuschange")
      .then((response) => {
        console.log(response);
        setTeacher((prevTeachers) =>
          prevTeachers.map((t) =>
            t.id === userId ? { ...t, status: !currentStatus ? "Active" : "Inactive" } : t
          )
        );
      })
      .catch((error) => {
        console.error("Error toggling status", error);
      });
  };
  const formOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const showAddTeacherModal = () => {
    formOpen();
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
      <div className="content-wrapper container-xxl p-0">
        <div className="content-body">
          <section className="app-user-list">
            <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <input
                      type="text"
                      className="form-control"
                      style={{ maxWidth: '300px' }}
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={showAddTeacherModal}>
                      Add Teacher
                    </button>
                  </div>
              
              </div>
                <div className="card-datatable table-responsive pt-0">
                  <table className="user-list-table table">
                    <thead className="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>PhoneNumber</th>
                        <th>Gender</th>
                        <th>Image</th>
                        <th>Education</th>
                        <th>Stream</th>
                        <th>Employee Type</th>
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
                          <td>
                            <img src={userData?.image} style={{ width: '50px', height: '50px' }} />
                          </td>
                          <td>{userData?.education}</td>
                          <td>{userData?.stream}</td>
                          <td>{userData?.employeType}</td>
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
                              onClick={() => viewData(userData?.id)}
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
</section>
          </div>
        </div>
      </div>

  );
}

export default Teacherlist;