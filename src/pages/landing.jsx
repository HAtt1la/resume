import React, { useRef } from 'react';
import './landing.css'

const Landing = () => {
  const code=useRef()
  const handleClick=()=>{
    if (code.current.value==="pleaselookaround") {
      localStorage.setItem("code","true")
    }
  }
  
return (
    <div className="container landing__container">
    <h3>Hello !</h3>
    <input type="text" placeholder={"Enter Code here"} ref={code} maxLength={16}/>
    <a href='/welcome' className='btn' onClick={handleClick} >Ok</a>
  </div>
  )
}

export default Landing