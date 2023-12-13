import React, { useState } from 'react'

function Addfrom() {

  const [count,setCount] = useState(0)
  const change = ()=>{
    setCount(count+1)
  }

  return (
    <div>
     <h1>count:{count}</h1>
     <button onClick={change}>clikc me </button> 
    </div>
  )
}

export default Addfrom
