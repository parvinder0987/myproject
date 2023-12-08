import React, { useEffect, useState } from "react";

function Userlist() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const authData = sessionStorage.getItem("authData");
    const authDataObj = JSON.parse(authData);

    const id = authDataObj.id;
    const name = authDataObj.Name;
    const email = authDataObj.yourEmail;
    const phonenumber = authDataObj.phoneNumber;

    const newuser = {
      id: id,
      Name: name,
      yourEmail: email,
      phoneNumber: phonenumber,
    };
    // setUser([newuser]);
  }, []);

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>
                  <b> User Listing</b>
                </h2>
              </div>
              <div className="col-sm-7">
                <a href="/addfrom" className="btn btn-secondary">
                  <i className="material-icons"></i> <span>Add New User</span>
                </a>
              </div>
            </div>
          </div>
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
              {user.map((userData) => (
                <tr key={userData.id}>
                  <td>{userData.id}</td>
                  <td>{userData.Name}</td>
                  <td>{userData.yourEmail}</td>
                  <td>{userData.phoneNumber}</td>
                  <td>Status value</td>{" "}
                  <td>Action value</td>{" "}
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
  );
}

export default Userlist;
