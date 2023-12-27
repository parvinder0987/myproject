// import logo from './logo.svg';
import './App.css';
import React, { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Layout from './component/Layout';
import Signup from './users/Signup';
import ForgotPassword from './users/ForgotPassword';
import OtpVerify from './users/OtpVerify';
import Login from './users/Login';
import Userlist from './users/Userlist';
import Addfrom from './users/Addfrom';
import Basicdetails from './users/Basicdetails';
import Teacherlist from './users/Teacherlist';
import Educationdetails from './users/Educationdetails';
import Experience from './users/Experience';
import Logout from './users/Logout';
import Dummy from './users/Dummy';
import Addnewuser from './users/Addnewuser';
import View from './users/Teacherview';
import Changepassword from './users/Changepassword';
import Userview from './users/Userview';
import Resetpassword from './users/Resetpassword';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/verifyOtp' element={<OtpVerify />} />
          <Route path='/basicdetails' element={<Basicdetails />} />
          <Route path='/educationdetails' element={<Educationdetails />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/addform' element={<Addfrom />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/dummy' element={<Dummy />} />
          <Route path='/resetpassword' element={<Resetpassword />} />
          <Route element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/userlist' element={<Userlist />} />
            <Route path='/teacherlist' element={<Teacherlist />} />
            <Route path='/addnewuser' element={<Addnewuser />} />
            <Route path='/changepassword' element={<Changepassword />} />
            <Route path='/userviewdata' element={<Userview />} />
            <Route path='/viewdata' element={<View />} />
            {/* <Route path='/addfrom' element={<Addfrom />}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
