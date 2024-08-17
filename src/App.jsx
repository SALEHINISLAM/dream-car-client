import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import FooterCar from './Components/FooterCar'

function App() {


  return (
    <>
      <div className="bg-gray-800">
      <Navbar/>
      <Outlet/>
      <FooterCar/>
      </div>
    </>
  )
}

export default App
