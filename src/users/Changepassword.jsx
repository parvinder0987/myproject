import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Changepassword() {
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const authData = sessionStorage.getItem('authData');
  const authDataObj = authData ? JSON.parse(authData) : null;
  const id = authDataObj ? authDataObj.id : null;
  const password = authDataObj ? authDataObj.password : null;

  useEffect(() => {

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || newpassword !== confirmpassword) {
      console.log('Invalid data or passwords do not match');
      return;
    }
    axios
      .post('http://localhost:5000/changepassword', {
        id: id,
        oldpassword: oldpassword,
        newpassword: newpassword,
        confirmpassword: confirmpassword,
      })
      .then((response) => {
        console.log('Password change response:', response.data);
      })
      .catch((error) => {
        console.error('Password change error:', error);
      });
  };

  return (
    <div className="card-wrapper1">
      <form>
        <div className='form-group'>
          <label htmlFor='oldpass'>Old Password:</label>
          <input
            type='password'
            className='pass-control'
            id='oldpass'
            placeholder='Enter Old Password'
            value={oldpassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='newpassword'>New Password:</label>
          <input
            type='password'
            className='pass-control'
            id='newpass'
            placeholder='Enter your new password'
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmpassword'>Confirm Password:</label>
          <input
            type='password'
            className='pass-control'
            id='confirmpass'
            placeholder='Enter your confirm password'
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className='btn-btn-change' onClick={handleSubmit}>
          Change
        </button>
      </form>
    </div>
  );
}




export default Changepassword;
