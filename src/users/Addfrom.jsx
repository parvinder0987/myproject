// import React from 'react'

// function Addfrom() {
//     return (
   
//         //                <div className='card-view-data'>
//         //                     <div className="user-avatar-section">
//         //                         <div className="d-flex justify-content-start">
//         //                             <img
//         //                                 className="img-fluid rounded"
//         //                                 src="../../../app-assets/images/avatars/7.png"
//         //                                 height={104}
//         //                                 width={104}
//         //                                 alt="User avatar"
//         //                             />
//         //                         </div>
//         //                     </div>
//         //                     <div className="tab-content">
//         //                         <div
//         //                             className="tab-pane active"
//         //                             id="account"
//         //                             aria-labelledby="account-tab"
//         //                             role="tabpanel"
//         //                         >
//         //                             <form className="form-data">
//         //                                 <div className="row">
//         //                                     <div className="user-view">
//         //                                         <div className="view-group">
//         //                                             <label htmlFor="nameInput">Name</label>
//         //                                             <input
//         //                                                 type="text"
//         //                                                 id="nameInput"
//         //                                                 name="name"
//         //                                                 value={name}
//         //                                                 onChange={(e) => setName(e.target.value)}
//         //                                                 required
//         //                                             />
//         //                                         </div>
//         //                                     </div>
//         //                                     <div className="user-view">
//         //                                         <div className="view-group">
//         //                                             <label htmlFor="emailInput">Your Email:</label>
//         //                                             <input
//         //                                                 type="email"
//         //                                                 id="emailInput"
//         //                                                 name="email"
//         //                                                 value={email}
//         //                                                 onChange={(e) => setEmail(e.target.value)}
//         //                                                 required
//         //                                             />
//         //                                         </div>
//         //                                     </div>
//         //                                     <div className="user-view">
//         //                                         <div className="view-group">
//         //                                             <label htmlFor="phoneInput">Phone Number:</label>
//         //                                             <input
//         //                                                 type="tel"
//         //                                                 id="phoneInput"
//         //                                                 name="phoneNumber"
//         //                                                 value={phoneNumber}
//         //                                                 onChange={(e) => setPhoneNumber(e.target.value)}
//         //                                                 required
//         //                                             />
//         //                                         </div>
//         //                                     </div>
//         //                                 </div>
//         //                                 <div className="app-content">
//         //                                     <button
//         //                                         className="primary-button"
//         //                                         tabIndex={5}
//         //                                         onClick={handleUpdated}
//         //                                     >
//         //                                         edit
//         //                                     </button>
//         //                                     <button
//         //                                         type="reset"
//         //                                         className="scondary-button"
//         //                                     >
//         //                                         Reset
//         //                                     </button>
//         //                                 </div>
//         //                             </form>
//         //                         </div>
//         //                     </div>
//         // </div>
//         <>
//           const changestatus = (userId, currentStatus) => {
//     const newsstatus = currentStatus === 1 ? 0 : 1;
//             axios
//             .put("/statuschange")
//       .then((response) => {
//                 console.log(response);
//         setTeacher((prevTeachers) =>
//           prevTeachers.map((t) =>
//             teacher.id === userId ? {...teacher, status: newsstatus } : teacher
//             )
//             );
//       })
//       .catch((error) => {
//                 console.error("Error toggling status", error);
//       });
//   };  
//             <button
//                 className={`btn ${userData.status === 'active' ? 'btn-success' : 'btn-secondary'}`}
//                 onClick={() => changestatus(userData.id, userData.status)}
//             >
//                 {userData.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
//             </button></>
//             in upper code is frontedn  and downcode is backend of this upper code 
//     statuschange: async (req, res) => {
//         try {
//             const { status } = req.body;
//             console.log('status =================.', status)
//             if (status === undefined) {
//                 return res.status(400).send("Invalid data");
//             }
//             let numericstatus;
//             if (status == "active") {
//                 numericstatus = '1';
//             } else if (status == "inactive") {
//                 numericstatus = '0';
//             } else {
//                 return res.status(400).send("Invalid status");
//             }

//             const userId = req.user.id;
//             const change = await User.update(
//                 { status: numericstatus },
//                 { where: { id: userId } }
//             );

//             if (!change[0]) {
//                 return res.status(404).send("User ID not found");
//             }
//             const updatedUserData = await User.findOne({ where: { id: userId } });
//             if (!updatedUserData) {
//                 return res.status(404).send("User not found after update");
//             }
//             res.status(200).send({ message: "Status updated successfully", user: updatedUserData });
//         } catch (error) {
//             console.log("Please check issue", error);
//             res.status(500).send("Internal server error");
//         }
//     }
//     in this code when i click on button then he give me isseu invalid datta  and here data wil be not show

//     can u fix this isssue and sendme code how i fix this isuue    upeer code is forntend and downcode is backend 

//     )
// }

// export default Addfrom