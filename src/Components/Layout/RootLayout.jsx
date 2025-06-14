import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import "../../App.css";
import Footer from '../Footer/Footer';


function RootLayout() {
  return (
    <div>
        <Navbar/>
       
        <div className="wapper">
            <Outlet/>
        </div>
         <Footer/>
      
    </div>
  )
}

export default RootLayout