import logo from './logo.svg';
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

// import Userlist from './users/Userlist'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/verifyOtp' element={<OtpVerify />} />
          <Route element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/userlist' element={<Userlist />} />
            <Route path='/addfrom' element={<Addfrom />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
