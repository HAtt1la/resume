import React from 'react'
import {Navigate, Outlet } from "react-router-dom"


const Protectedroute=() =>{
  const isCode=localStorage.getItem("code")
  return isCode? <Outlet /> : <Navigate to="/" />
}

export default Protectedroute