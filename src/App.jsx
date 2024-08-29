import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Error404 from './components/error404/Error404'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    
    <Navbar/>
    <Outlet />
    <Footer />


    </>
  )
}

export default App
