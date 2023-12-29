import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {
    const router = useNavigate()
    const handleLogout = ()=>{
        sessionStorage.removeItem("authData")
        router("/login")
    }
  return (
    <div>
    <button onClick={handleLogout}>Logout</button>
  </div>
  )
}

export default Logout
