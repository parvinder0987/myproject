import React, { useState } from 'react'



function Changepassword() {
    const [oldpassword,setOldpassword]=useState('')
    const [newpassword, setNewPassword] = useState("")
    const [confirmpassoword, setConfirmPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (newpassword !== confirmpassoword) {
            alert("Passwords do not match.");
            }
            else{
                console.log(`HandleSubmitted: ${oldpassword} ,${newpassword}`);
                    // window.location.reload();
                    //  });
                    }
                    }
  return (
    <div>
        <form>
          <div className='1form-group'>
              <label htmlFor="oldpass">Old Password:</label>
              <input type='password' className='form-control' id='oldpass' placeholder='Enter Old Password'/>
          </div>
          <div className='1form-group'>
              <label htmlFor='newpassword'>New Passowrd:</label>
              <input type='password' id='newpass' name='newpass' placeholder='Enter your new password' required/><br />
          </div>
          <div className='1form-group'>
              <label htmlFor='Confirmpassword'>Confrim Password:</label>
              <input type='password' id='confirmpass' name='confrimpass' placeholder='Enter your confirm password' required/><br />
          </div>
          <button className='btn-btn-change'>Change</button>
        </form>
    </div>
  )
}

export default Changepassword
