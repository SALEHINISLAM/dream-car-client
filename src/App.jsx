import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
      <h1>Vite + React</h1>
      <Outlet/>
    </>
  )
}

export default App
