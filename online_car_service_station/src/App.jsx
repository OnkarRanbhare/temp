import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Customer/Home'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Customer/Signup.jsx'
import Navbar from './Components/Navbar.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import ViewServices from './Pages/Customer/ViewServices.jsx'
import MyBookings from './Pages/Customer/MyBookings.jsx'
import ManageServices from './Pages/Admin/ManageServices.jsx'
import ManageBookings from './Pages/Admin/ManageBookings.jsx'
import SpareParts from './Pages/Admin/SpareParts.jsx'
import ManageUsers from './Pages/Admin/ManageUsers.jsx'
import Footer from './Components/Footer.jsx'
function App() {
 

  return (
    <>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/view-services' element={<ViewServices/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>

        <Route path='/manage-services' element={<ManageServices/>}/>
        <Route path='/manage-bookings' element={<ManageBookings/>}/>
        <Route path='/spare-parts' element={<SpareParts/>}/>
        <Route path='/manage-customers' element={<ManageUsers/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
