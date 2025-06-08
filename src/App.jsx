import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/Layout/RootLayout'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Feature from './Components/Pages/Feature'
import Contact from './Components/Pages/Contact'
import Register from './Components/Pages/Register'
import Login from './Components/Pages/Login'

function App() {
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Feature' element={<Feature/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='Login' element={<Login/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App