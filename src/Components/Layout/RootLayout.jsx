import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import "../../App.css";


function RootLayout() {
  return (
    <div>
        <Navbar/>
        <div className="wapper">
            <Outlet/>
        </div>
      
    </div>
  )
}

export default RootLayout